import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireRole } from '@/lib/require-role';
import {
    checkRateLimit,
    getClientIp,
    sanitizeInput,
    sanitizeObject,
    verifyRequestOrigin,
    applySecurityHeaders,
} from '@/lib/security';

// Default initial seed data if DB table is empty
const INITIAL_SEED_TOURS = [
    {
        title: "Royal Kingdoms & Ancient Heritage",
        slug: "royal-kingdoms-ancient-heritage",
        category: "cultural",
        duration: "7 Days / 6 Nights",
        daysCount: 7,
        nightsCount: 6,
        price: 790,
        discountPrice: 720,
        rating: 4.95,
        reviewsCount: 184,
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
        overview: "Immerse yourself in Sri Lanka's rich history, UNESCO World Heritage sites, majestic ancient fortresses, and sacred Buddhist temples on this 7-day cultural expedition.",
        destinations: JSON.stringify(["Sigiriya", "Kandy", "Dambulla", "Polonnaruwa"]),
        highlights: JSON.stringify([
            "Sigiriya Rock Fortress Entry & Guided Hike",
            "Temple of the Sacred Tooth Relic Ceremony",
            "Traditional Kandyan Cultural Dance Show",
            "Spices & Royal Botanical Garden Walk"
        ]),
        itinerary: JSON.stringify([
            { day: 1, title: "Arrival in Colombo & Transfer to Sigiriya", description: "Meet & greet at BIA airport. Scenic drive to the cultural triangle, check into your boutique hotel.", location: "Sigiriya" },
            { day: 2, title: "Sigiriya Lion Rock & Village Safari", description: "Climb the 5th-century Sigiriya Fortress at sunrise. Experience traditional village life and bullock cart rides.", location: "Sigiriya" },
            { day: 3, title: "Polonnaruwa Ancient City & Minneriya Elephant Gathering", description: "Explore ruins of the 11th-century royal capital by bicycle, followed by an afternoon jeep safari.", location: "Polonnaruwa" },
            { day: 4, title: "Dambulla Cave Temple & Drive to Kandy", description: "Marvel at 150+ golden Buddha statues inside ancient caves. Visit spice gardens en route to Kandy.", location: "Kandy" },
            { day: 5, title: "Sacred Tooth Temple & Royal Botanical Gardens", description: "Attend morning puja at the Temple of the Tooth. Stroll through Peradeniya Royal Botanical Gardens.", location: "Kandy" },
            { day: 6, title: "Kandy Cultural Show & Crafts Village", description: "Discover traditional woodcarving, silk weaving, and evening fire-walking performance.", location: "Kandy" },
            { day: 7, title: "Return to Airport / Coastal Drop-off", description: "Leisurely breakfast, souvenirs shopping in Colombo, and private transfer to airport for departure.", location: "Colombo" }
        ]),
        included: JSON.stringify([
            "Private luxury air-conditioned vehicle with dedicated chauffeur-guide",
            "All accommodation with daily breakfast & dinner",
            "All entrance tickets to UNESCO monuments & parks",
            "Bottled drinking water throughout the journey",
            "All driver charges, highway tolls, and fuel"
        ]),
        excluded: JSON.stringify([
            "International flight tickets & Sri Lanka Tourist Visa",
            "Personal expenses, laundry, tipping",
            "Lunch and optional activity upgrades"
        ]),
        featuredTag: "Most Popular",
        featured: true,
        published: true,
        maxGroupSize: 12,
        difficulty: "Easy",
        startLocation: "Colombo (BIA)",
        endLocation: "Colombo / Negombo"
    },
    {
        title: "Wild Ceylon Safari & National Parks",
        slug: "wild-ceylon-safari-national-parks",
        category: "safari",
        duration: "6 Days / 5 Nights",
        daysCount: 6,
        nightsCount: 5,
        price: 850,
        discountPrice: 799,
        rating: 4.92,
        reviewsCount: 142,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
        overview: "Discover Sri Lanka's incredible biodiversity — from leopards in Yala to wild elephant herds in Udawalawe and blue whale cruises in Mirissa.",
        destinations: JSON.stringify(["Yala", "Udawalawe", "Wilpattu", "Mirissa"]),
        highlights: JSON.stringify([
            "Exclusive Leopard Tracking in Yala National Park",
            "Whale & Dolphin Watching Boat Expedition",
            "Luxury Jungle Glamping Experience",
            "Udawalawe Elephant Transit Home Visit"
        ]),
        itinerary: JSON.stringify([
            { day: 1, title: "Arrival & Scenic Transfer to Wilpattu", description: "Welcome at airport, private transfer to Wilpattu border lodge.", location: "Wilpattu" },
            { day: 2, title: "Wilpattu Morning Jeep Safari & Bird Sanctuary", description: "Deep jungle game drive seeking sloth bears and leopards.", location: "Wilpattu" },
            { day: 3, title: "Udawalawe Elephant Refuge", description: "Witness milk feeding time at the Elephant Transit Home and evening park safari.", location: "Udawalawe" },
            { day: 4, title: "Yala National Park Block 1 Game Drive", description: "Full-day safari searching for the world's highest density leopard habitat.", location: "Yala" },
            { day: 5, title: "Mirissa Blue Whale Cruise & Sunset Sail", description: "Early morning oceanic ocean sail for blue whales followed by beach relaxation.", location: "Mirissa" },
            { day: 6, title: "Galle Fort Coastal Drive & Departure", description: "Walk the historic Dutch Ramparts before airport transfer.", location: "Galle / Airport" }
        ]),
        included: JSON.stringify([
            "4x4 Private Customized Safari Jeeps with experienced trackers",
            "All national park permits, entry fees & boat charter",
            "Luxury safari camp & boutique hotel stays",
            "Full board meals (Breakfast, Lunch, Dinner)"
        ]),
        excluded: JSON.stringify([
            "Travel insurance & international flights",
            "Personal alcoholic beverages"
        ]),
        featuredTag: "Best Seller",
        featured: true,
        published: true,
        maxGroupSize: 8,
        difficulty: "Moderate",
        startLocation: "Colombo (BIA)",
        endLocation: "Mirissa / Colombo"
    },
    {
        title: "Southern Coastal & Sun-Kissed Beach Escape",
        slug: "southern-coastal-beach-escape",
        category: "beach",
        duration: "8 Days / 7 Nights",
        daysCount: 8,
        nightsCount: 7,
        price: 920,
        discountPrice: null,
        rating: 4.98,
        reviewsCount: 210,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        overview: "Soak in tropical sunshine, pristine turquoise waters, luxury beach resorts, coastal catamarans, and colonial charm along Sri Lanka's southern shore.",
        destinations: JSON.stringify(["Galle Fort", "Mirissa", "Bentota", "Tangalle"]),
        highlights: JSON.stringify([
            "UNESCO Galle Dutch Fort Historical Walking Tour",
            "Sunset Catamaran Sail & Stand-Up Paddleboarding",
            "Sea Turtle Conservation Hatchery Visit",
            "Boutique Beachfront Villa Stays"
        ]),
        itinerary: JSON.stringify([
            { day: 1, title: "Arrival & Coastal Highway Drive to Bentota", description: "Arrive in paradise and check into your beachfront resort.", location: "Bentota" },
            { day: 2, title: "Madu River Mangrove Boat Safari & Watersports", description: "Explore mangrove islands, cinnamon processing, and jet-skiing.", location: "Bentota" },
            { day: 3, title: "Drive to Galle & Historic Fort Walking Tour", description: "Walk ancient cobblestone streets, artisan shops, and sunset ramparts.", location: "Galle" },
            { day: 4, title: "Tangalle Hidden Bays & Turtle Watching", description: "Relax at pristine quiet beaches and night turtle nesting walk.", location: "Tangalle" },
            { day: 5, title: "Mirissa Coconut Tree Hill & Beach Sunset", description: "Iconic Instagram spots, beach clubs, and fresh seafood dinner.", location: "Mirissa" },
            { day: 6, title: "Surfing Lesson & Lagoon Kayaking", description: "Beginner-friendly surf instruction at Weligama Bay.", location: "Weligama" },
            { day: 7, title: "Catamaran Cruise & Coral Reef Snorkeling", description: "Sail private waters, swim with sea turtles, and seafood BBQ on board.", location: "Mirissa" },
            { day: 8, title: "Farewell Sri Lanka & Transfer to BIA", description: "Check out and private luxury transfer to airport.", location: "Colombo" }
        ]),
        included: JSON.stringify([
            "Luxury 5-Star Beach Resort Accommodations",
            "Private vehicle transfer throughout tour",
            "Catamaran cruise tickets & equipment rentals",
            "Daily buffet breakfast & romantic dinners"
        ]),
        excluded: JSON.stringify([
            "Visa fees & international flights",
            "Extra spa services"
        ]),
        featuredTag: "Top Rated",
        featured: true,
        published: true,
        maxGroupSize: 10,
        difficulty: "Easy",
        startLocation: "Colombo (BIA)",
        endLocation: "Colombo (BIA)"
    },
    {
        title: "Highland Tea Trails & Scenic Blue Train",
        slug: "highland-tea-trails-scenic-train",
        category: "hillcountry",
        duration: "5 Days / 4 Nights",
        daysCount: 5,
        nightsCount: 4,
        price: 680,
        discountPrice: 620,
        rating: 4.90,
        reviewsCount: 116,
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
        overview: "Journey through emerald mountain peaks, cascading waterfalls, colonial tea plantations, and ride the world's most famous blue train.",
        destinations: JSON.stringify(["Nuwara Eliya", "Ella", "Nine Arch Bridge", "Horton Plains"]),
        highlights: JSON.stringify([
            "World-Famous Kandy to Ella Observation Train Ride",
            "Private Ceylon Tea Factory Masterclass & Tasting",
            "Sunrise at Nine Arch Bridge & Little Adam's Peak Trek",
            "Horton Plains & World's End Cliff Viewpoint"
        ]),
        itinerary: JSON.stringify([
            { day: 1, title: "Arrival & Transfer to Little England (Nuwara Eliya)", description: "Ascend past waterfalls into misty tea country.", location: "Nuwara Eliya" },
            { day: 2, title: "Pedro Tea Estate Tour & Gregory Lake Park", description: "Learn tea plucking secrets and enjoy high tea at Grand Hotel.", location: "Nuwara Eliya" },
            { day: 3, title: "Scenic Blue Train to Ella & Nine Arch Bridge", description: "Iconic 3-hour train journey through cloud forests and mountain viaducts.", location: "Ella" },
            { day: 4, title: "Horton Plains World's End Trek & Ravana Falls", description: "Sunrise trek to 4,000ft precipice cliff and waterfall photography.", location: "Ella" },
            { day: 5, title: "Ella Gap Panorama & Return Transfer", description: "Leisurely brunch overlooking Ella Gap and return drive.", location: "Colombo" }
        ]),
        included: JSON.stringify([
            "Reserved First Class Observation Car Train Tickets",
            "Colonial bungalow stay with breakfast & dinner",
            "Professional hiking guide for World's End trek"
        ]),
        excluded: JSON.stringify([
            "Personal souvenirs & alcohol"
        ]),
        featuredTag: "Scenic Highlight",
        featured: false,
        published: true,
        maxGroupSize: 15,
        difficulty: "Moderate",
        startLocation: "Colombo / Kandy",
        endLocation: "Colombo (BIA)"
    },
    {
        title: "Ultimate Ceylon Grand Luxury Expedition",
        slug: "ultimate-ceylon-grand-luxury-expedition",
        category: "luxury",
        duration: "10 Days / 9 Nights",
        daysCount: 10,
        nightsCount: 9,
        price: 1850,
        discountPrice: null,
        rating: 5.0,
        reviewsCount: 95,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
        overview: "The pinnacle of Sri Lankan luxury. Private helicopter transfers, Relais & Châteaux boutique estates, private naturalist guides, and VIP airport fast-tracking.",
        destinations: JSON.stringify(["Sigiriya", "Kandy", "Tea Trails", "Yala", "Galle"]),
        highlights: JSON.stringify([
            "Helicopter Flight Sightseeing & Island Transfers",
            "Relais & Châteaux 5-Star Boutique Hotels",
            "VIP Airport Fast-Track Immigration Service",
            "Private Dining with Master Chefs & Wine Pairings"
        ]),
        itinerary: JSON.stringify([
            { day: 1, title: "VIP Airport Fast-Track & Helicopter to Cultural Triangle", description: "Private lounge reception and helicopter flight to luxury lodge.", location: "Sigiriya" },
            { day: 2, title: "Private Sunrise Sigiriya Climb & Champagne Breakfast", description: "Exclusive early access before public crowds.", location: "Sigiriya" },
            { day: 3, title: "Helicopter Transfer to Ceylon Tea Trails Bungalow", description: "Stay at restored 1920s planter bungalows surrounded by tea fields.", location: "Tea Trails" },
            { day: 4, title: "Private Butler High Tea & Waterfall Helicopter Tour", description: "Experience timeless colonial luxury.", location: "Tea Trails" },
            { day: 5, title: "Transfer to Wild Coast Tented Lodge (Yala)", description: "Luxury cocoon tents overlooking the Indian Ocean.", location: "Yala" },
            { day: 6, title: "Private Wildlife Specialist Safari", description: "Bespoke game drive tailored to wildlife photography.", location: "Yala" },
            { day: 7, title: "Transfer to Amangalla Heritage Hotel (Galle)", description: "Check into 17th-century colonial sanctuary inside Galle Fort.", location: "Galle" },
            { day: 8, title: "Private Yacht Sunset Sail & Chef's Table", description: "Chartered yacht sail with champagne and fresh catch.", location: "Galle" },
            { day: 9, title: "Private Spa Sanctuary Treatment & Fort Exploration", description: "Full-day rejuvenation and private shopping guide.", location: "Galle" },
            { day: 10, title: "Helicopter to Airport & VIP Departure Lounge", description: "Seamless departure experience with executive lounge access.", location: "Colombo" }
        ]),
        included: JSON.stringify([
            "Private Helicopter flights & Luxury SUV transfers",
            "5-Star Relais & Châteaux / Aman Accommodations",
            "All gourmet meals, fine wines, and butler service",
            "All private guided excursions & entry fees"
        ]),
        excluded: JSON.stringify([
            "International flights"
        ]),
        featuredTag: "Signature Luxury",
        featured: true,
        published: true,
        maxGroupSize: 6,
        difficulty: "Easy",
        startLocation: "Colombo (BIA)",
        endLocation: "Colombo (BIA)"
    }
];

/**
 * Helper to auto-seed tours if DB table is currently empty
 */
async function autoSeedIfEmpty() {
    // Disabled to allow permanent deletion of dummy tours
    return;
}

/**
 * GET /api/tours
 * Public endpoint with Rate Limiting & Input Sanitization
 */
export async function GET(request: NextRequest) {
    const response = new NextResponse();
    applySecurityHeaders(response);

    try {
        // Rate limiting check: max 60 requests per minute per IP
        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'get_tours', 60, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: `Too many requests. Please retry in ${rateCheck.resetInSec}s.` },
                { status: 429 }
            );
        }

        // Auto seed database if empty (Disabled so deleted tours remain permanently removed)
        // await autoSeedIfEmpty();

        const { searchParams } = new URL(request.url);
        const category = sanitizeInput(searchParams.get('category') || '');
        const theme = sanitizeInput(searchParams.get('theme') || '');
        const destination = sanitizeInput(searchParams.get('destination') || '');
        const search = sanitizeInput(searchParams.get('search') || '');
        const minPrice = parseFloat(searchParams.get('minPrice') || '0');
        const maxPrice = parseFloat(searchParams.get('maxPrice') || '999999');
        const popularOnly = searchParams.get('popular') === 'true';
        const includeAllStatus = searchParams.get('includeAllStatus') === 'true';
        const sort = sanitizeInput(searchParams.get('sort') || 'recommended');

        const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
        const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
        const skip = (page - 1) * limit;

        // Build Prisma Filter
        const where: any = {};

        if (!includeAllStatus) {
            where.published = true;
        }

        if (category && category !== 'all') {
            where.category = { equals: category.toLowerCase(), mode: 'insensitive' };
        }

        if (theme && theme !== 'all') {
            where.theme = { contains: theme, mode: 'insensitive' };
        }

        if (destination && destination !== 'all') {
            where.destinations = { contains: destination, mode: 'insensitive' };
        }

        if (popularOnly) {
            where.popular = true;
        }

        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { overview: { contains: search, mode: 'insensitive' } },
                { destinations: { contains: search, mode: 'insensitive' } },
                { highlights: { contains: search, mode: 'insensitive' } },
                { category: { contains: search, mode: 'insensitive' } },
            ];
        }

        if (minPrice > 0 || maxPrice < 999999) {
            where.price = {
                gte: isNaN(minPrice) ? 0 : minPrice,
                lte: isNaN(maxPrice) ? 999999 : maxPrice,
            };
        }

        // Determine sorting
        let orderBy: any = { createdAt: 'desc' };
        if (sort === 'price_asc') orderBy = { price: 'asc' };
        if (sort === 'price_desc') orderBy = { price: 'desc' };
        if (sort === 'rating') orderBy = { rating: 'desc' };

        let tours: any[] = [];
        let total = 0;

        try {
            [tours, total] = await Promise.all([
                prisma.tourPackage.findMany({
                    where,
                    orderBy,
                    skip,
                    take: limit,
                    include: {
                        destination: {
                            select: { id: true, name: true, slug: true, image: true }
                        }
                    } as any
                }),
                prisma.tourPackage.count({ where }),
            ]);
        } catch (dbErr) {
            console.warn("Retrying GET tours query without relations/extended filters:", dbErr);
            delete where.theme;
            delete where.popular;
            [tours, total] = await Promise.all([
                prisma.tourPackage.findMany({
                    where,
                    orderBy,
                    skip,
                    take: limit,
                }),
                prisma.tourPackage.count({ where }),
            ]);
        }

        // Parse JSON strings back to arrays for client consumption
        const formattedTours = tours.map((tour) => ({
            ...tour,
            destinations: parseJsonArray(tour.destinations),
            highlights: parseJsonArray(tour.highlights),
            itinerary: parseJsonArray(tour.itinerary),
            included: parseJsonArray(tour.included),
            excluded: parseJsonArray(tour.excluded),
            faqs: parseJsonArray((tour as any).faqs || '[]'),
            gallery: parseJsonArray(tour.gallery || '[]'),
            vehicleOptions: parseJsonArray((tour as any).vehicleOptions || '[]'),
            includedActivities: parseJsonArray((tour as any).includedActivities || '[]'),
            excludedActivities: parseJsonArray((tour as any).excludedActivities || '[]'),
        }));

        return NextResponse.json({
            success: true,
            data: formattedTours,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error: any) {
        console.error('Error fetching tours:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to retrieve tour packages.' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/tours
 * High-Security Admin Endpoint to create tour packages
 */
export async function POST(request: NextRequest) {
    try {
        // CSRF / Origin validation
        if (!verifyRequestOrigin(request)) {
            return NextResponse.json(
                { success: false, message: 'Forbidden: Origin validation failed.' },
                { status: 403 }
            );
        }

        // Strict Admin Role Check
        const user = requireRole(request, 'ADMIN');
        if (!user) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized access.' },
                { status: 401 }
            );
        }

        // Rate limiting check for Admin writes
        const clientIp = getClientIp(request);
        const rateCheck = checkRateLimit(clientIp, 'create_tour', 15, 60 * 1000);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, message: 'Rate limit exceeded for creation requests.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const sanitizedBody = sanitizeObject(body);

        const {
            title,
            slug,
            category,
            theme,
            duration,
            daysCount,
            nightsCount,
            price,
            discountPrice,
            currency,
            image,
            gallery,
            videoUrl,
            googleMapLocation,
            ogImage,
            shortDescription,
            overview,
            destinations,
            highlights,
            itinerary,
            included,
            excluded,
            faqs,
            bestTime,
            popular,
            published,
            startLocation,
            endLocation,
            travelDistance,
            estimatedTravelTime,
            routeText,
            vehicleOptions,
            includedActivities,
            excludedActivities,
            whatToBring,
            importantInfo,
            safetyInfo,
            accessibility,
            canonicalUrl,
            destinationId,
            seoTitle,
            seoDescription,
        } = sanitizedBody;

        if (!title || !category || !price || !image || !overview) {
            return NextResponse.json(
                { success: false, message: 'Missing required tour fields (title, category, price, image, overview).' },
                { status: 400 }
            );
        }

        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice) || numericPrice <= 0) {
            return NextResponse.json(
                { success: false, message: 'Price must be a positive number.' },
                { status: 400 }
            );
        }

        // Generate clean URL slug
        const tourSlug = (slug || title)
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');

        // Check slug uniqueness
        const existing = await prisma.tourPackage.findUnique({ where: { slug: tourSlug } });
        if (existing) {
            return NextResponse.json(
                { success: false, message: 'A tour with this title or slug already exists.' },
                { status: 400 }
            );
        }

        const tourData: any = {
            title,
            slug: tourSlug,
            category: category.toLowerCase(),
            theme: theme || null,
            duration: duration || `${daysCount || 1} Days`,
            daysCount: parseInt(daysCount || '1', 10),
            nightsCount: parseInt(nightsCount || '0', 10),
            price: numericPrice,
            discountPrice: discountPrice ? parseFloat(discountPrice) : null,
            currency: currency || 'USD',
            image,
            gallery: typeof gallery === 'string' ? gallery : JSON.stringify(gallery || []),
            videoUrl: videoUrl || null,
            googleMapLocation: googleMapLocation || null,
            ogImage: ogImage || null,
            shortDescription: shortDescription || null,
            overview,
            destinations: typeof destinations === 'string' ? destinations : JSON.stringify(destinations || []),
            highlights: typeof highlights === 'string' ? highlights : JSON.stringify(highlights || []),
            itinerary: typeof itinerary === 'string' ? itinerary : JSON.stringify(itinerary || []),
            included: typeof included === 'string' ? included : JSON.stringify(included || []),
            excluded: typeof excluded === 'string' ? excluded : JSON.stringify(excluded || []),
            faqs: typeof faqs === 'string' ? faqs : JSON.stringify(faqs || []),
            vehicleOptions: typeof vehicleOptions === 'string' ? vehicleOptions : JSON.stringify(vehicleOptions || []),
            includedActivities: typeof includedActivities === 'string' ? includedActivities : JSON.stringify(includedActivities || []),
            excludedActivities: typeof excludedActivities === 'string' ? excludedActivities : JSON.stringify(excludedActivities || []),
            bestTime: bestTime || null,
            popular: Boolean(popular),
            published: published !== false,
            startLocation: startLocation || 'Colombo',
            endLocation: endLocation || 'Colombo',
            travelDistance: travelDistance || null,
            estimatedTravelTime: estimatedTravelTime || null,
            routeText: routeText || null,
            whatToBring: whatToBring || null,
            importantInfo: importantInfo || null,
            safetyInfo: safetyInfo || null,
            accessibility: accessibility || null,
            canonicalUrl: canonicalUrl || null,
            destinationId: (destinationId && typeof destinationId === 'string' && destinationId.trim() !== '') ? destinationId.trim() : null,
            seoTitle: seoTitle || title,
            seoDescription: seoDescription || overview.slice(0, 150),
        };

        let newTour;
        try {
            newTour = await prisma.tourPackage.create({
                data: tourData,
            });
        } catch (createErr: any) {
            if (createErr.message && createErr.message.includes('Unknown argument')) {
                console.warn('Retrying creation without optional fields:', createErr.message);
                delete tourData.travelStyle;
                delete tourData.theme;
                delete tourData.popular;
                delete tourData.bestTime;
                delete tourData.destinationId;
                delete tourData.faqs;
                newTour = await prisma.tourPackage.create({
                    data: tourData,
                });
            } else {
                throw createErr;
            }
        }

        return NextResponse.json(
            { success: true, message: 'Tour package created successfully.', data: newTour },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error creating tour:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to create tour package.' },
            { status: 500 }
        );
    }
}

function parseJsonArray(input: string): any[] {
    try {
        if (!input) return [];
        const parsed = JSON.parse(input);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}
