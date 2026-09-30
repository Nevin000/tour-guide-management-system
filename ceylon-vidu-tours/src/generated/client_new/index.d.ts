
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>
/**
 * Model AdminOtp
 * 
 */
export type AdminOtp = $Result.DefaultSelection<Prisma.$AdminOtpPayload>
/**
 * Model GalleryItem
 * 
 */
export type GalleryItem = $Result.DefaultSelection<Prisma.$GalleryItemPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model DestinationImage
 * 
 */
export type DestinationImage = $Result.DefaultSelection<Prisma.$DestinationImagePayload>
/**
 * Model DestinationHighlight
 * 
 */
export type DestinationHighlight = $Result.DefaultSelection<Prisma.$DestinationHighlightPayload>
/**
 * Model PlaceMentioned
 * 
 */
export type PlaceMentioned = $Result.DefaultSelection<Prisma.$PlaceMentionedPayload>
/**
 * Model BlogCategory
 * 
 */
export type BlogCategory = $Result.DefaultSelection<Prisma.$BlogCategoryPayload>
/**
 * Model BlogTag
 * 
 */
export type BlogTag = $Result.DefaultSelection<Prisma.$BlogTagPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model BlogPostTag
 * 
 */
export type BlogPostTag = $Result.DefaultSelection<Prisma.$BlogPostTagPayload>
/**
 * Model TourPackage
 * 
 */
export type TourPackage = $Result.DefaultSelection<Prisma.$TourPackagePayload>
/**
 * Model TourInquiry
 * 
 */
export type TourInquiry = $Result.DefaultSelection<Prisma.$TourInquiryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const BlogStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type BlogStatus = (typeof BlogStatus)[keyof typeof BlogStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type BlogStatus = $Enums.BlogStatus

export const BlogStatus: typeof $Enums.BlogStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminOtp`: Exposes CRUD operations for the **AdminOtp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminOtps
    * const adminOtps = await prisma.adminOtp.findMany()
    * ```
    */
  get adminOtp(): Prisma.AdminOtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryItem`: Exposes CRUD operations for the **GalleryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryItems
    * const galleryItems = await prisma.galleryItem.findMany()
    * ```
    */
  get galleryItem(): Prisma.GalleryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinationImage`: Exposes CRUD operations for the **DestinationImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DestinationImages
    * const destinationImages = await prisma.destinationImage.findMany()
    * ```
    */
  get destinationImage(): Prisma.DestinationImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinationHighlight`: Exposes CRUD operations for the **DestinationHighlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DestinationHighlights
    * const destinationHighlights = await prisma.destinationHighlight.findMany()
    * ```
    */
  get destinationHighlight(): Prisma.DestinationHighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.placeMentioned`: Exposes CRUD operations for the **PlaceMentioned** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaceMentioneds
    * const placeMentioneds = await prisma.placeMentioned.findMany()
    * ```
    */
  get placeMentioned(): Prisma.PlaceMentionedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogCategory`: Exposes CRUD operations for the **BlogCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogCategories
    * const blogCategories = await prisma.blogCategory.findMany()
    * ```
    */
  get blogCategory(): Prisma.BlogCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogTag`: Exposes CRUD operations for the **BlogTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogTags
    * const blogTags = await prisma.blogTag.findMany()
    * ```
    */
  get blogTag(): Prisma.BlogTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPostTag`: Exposes CRUD operations for the **BlogPostTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostTags
    * const blogPostTags = await prisma.blogPostTag.findMany()
    * ```
    */
  get blogPostTag(): Prisma.BlogPostTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourPackage`: Exposes CRUD operations for the **TourPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourPackages
    * const tourPackages = await prisma.tourPackage.findMany()
    * ```
    */
  get tourPackage(): Prisma.TourPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourInquiry`: Exposes CRUD operations for the **TourInquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourInquiries
    * const tourInquiries = await prisma.tourInquiry.findMany()
    * ```
    */
  get tourInquiry(): Prisma.TourInquiryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshToken: 'RefreshToken',
    ContactMessage: 'ContactMessage',
    AdminOtp: 'AdminOtp',
    GalleryItem: 'GalleryItem',
    Destination: 'Destination',
    DestinationImage: 'DestinationImage',
    DestinationHighlight: 'DestinationHighlight',
    PlaceMentioned: 'PlaceMentioned',
    BlogCategory: 'BlogCategory',
    BlogTag: 'BlogTag',
    BlogPost: 'BlogPost',
    BlogPostTag: 'BlogPostTag',
    TourPackage: 'TourPackage',
    TourInquiry: 'TourInquiry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "contactMessage" | "adminOtp" | "galleryItem" | "destination" | "destinationImage" | "destinationHighlight" | "placeMentioned" | "blogCategory" | "blogTag" | "blogPost" | "blogPostTag" | "tourPackage" | "tourInquiry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
          }
        }
      }
      AdminOtp: {
        payload: Prisma.$AdminOtpPayload<ExtArgs>
        fields: Prisma.AdminOtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminOtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminOtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>
          }
          findFirst: {
            args: Prisma.AdminOtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminOtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>
          }
          findMany: {
            args: Prisma.AdminOtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>[]
          }
          create: {
            args: Prisma.AdminOtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>
          }
          createMany: {
            args: Prisma.AdminOtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminOtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>[]
          }
          delete: {
            args: Prisma.AdminOtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>
          }
          update: {
            args: Prisma.AdminOtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>
          }
          deleteMany: {
            args: Prisma.AdminOtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminOtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminOtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>[]
          }
          upsert: {
            args: Prisma.AdminOtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminOtpPayload>
          }
          aggregate: {
            args: Prisma.AdminOtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminOtp>
          }
          groupBy: {
            args: Prisma.AdminOtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminOtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminOtpCountArgs<ExtArgs>
            result: $Utils.Optional<AdminOtpCountAggregateOutputType> | number
          }
        }
      }
      GalleryItem: {
        payload: Prisma.$GalleryItemPayload<ExtArgs>
        fields: Prisma.GalleryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findFirst: {
            args: Prisma.GalleryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findMany: {
            args: Prisma.GalleryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          create: {
            args: Prisma.GalleryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          createMany: {
            args: Prisma.GalleryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          delete: {
            args: Prisma.GalleryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          update: {
            args: Prisma.GalleryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          deleteMany: {
            args: Prisma.GalleryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          upsert: {
            args: Prisma.GalleryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          aggregate: {
            args: Prisma.GalleryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryItem>
          }
          groupBy: {
            args: Prisma.GalleryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      DestinationImage: {
        payload: Prisma.$DestinationImagePayload<ExtArgs>
        fields: Prisma.DestinationImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>
          }
          findFirst: {
            args: Prisma.DestinationImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>
          }
          findMany: {
            args: Prisma.DestinationImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>[]
          }
          create: {
            args: Prisma.DestinationImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>
          }
          createMany: {
            args: Prisma.DestinationImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>[]
          }
          delete: {
            args: Prisma.DestinationImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>
          }
          update: {
            args: Prisma.DestinationImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>
          }
          deleteMany: {
            args: Prisma.DestinationImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>[]
          }
          upsert: {
            args: Prisma.DestinationImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationImagePayload>
          }
          aggregate: {
            args: Prisma.DestinationImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinationImage>
          }
          groupBy: {
            args: Prisma.DestinationImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationImageCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationImageCountAggregateOutputType> | number
          }
        }
      }
      DestinationHighlight: {
        payload: Prisma.$DestinationHighlightPayload<ExtArgs>
        fields: Prisma.DestinationHighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationHighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationHighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>
          }
          findFirst: {
            args: Prisma.DestinationHighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationHighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>
          }
          findMany: {
            args: Prisma.DestinationHighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>[]
          }
          create: {
            args: Prisma.DestinationHighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>
          }
          createMany: {
            args: Prisma.DestinationHighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationHighlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>[]
          }
          delete: {
            args: Prisma.DestinationHighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>
          }
          update: {
            args: Prisma.DestinationHighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>
          }
          deleteMany: {
            args: Prisma.DestinationHighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationHighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationHighlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>[]
          }
          upsert: {
            args: Prisma.DestinationHighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationHighlightPayload>
          }
          aggregate: {
            args: Prisma.DestinationHighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinationHighlight>
          }
          groupBy: {
            args: Prisma.DestinationHighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationHighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationHighlightCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationHighlightCountAggregateOutputType> | number
          }
        }
      }
      PlaceMentioned: {
        payload: Prisma.$PlaceMentionedPayload<ExtArgs>
        fields: Prisma.PlaceMentionedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceMentionedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceMentionedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>
          }
          findFirst: {
            args: Prisma.PlaceMentionedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceMentionedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>
          }
          findMany: {
            args: Prisma.PlaceMentionedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>[]
          }
          create: {
            args: Prisma.PlaceMentionedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>
          }
          createMany: {
            args: Prisma.PlaceMentionedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaceMentionedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>[]
          }
          delete: {
            args: Prisma.PlaceMentionedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>
          }
          update: {
            args: Prisma.PlaceMentionedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>
          }
          deleteMany: {
            args: Prisma.PlaceMentionedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceMentionedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaceMentionedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>[]
          }
          upsert: {
            args: Prisma.PlaceMentionedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaceMentionedPayload>
          }
          aggregate: {
            args: Prisma.PlaceMentionedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaceMentioned>
          }
          groupBy: {
            args: Prisma.PlaceMentionedGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceMentionedGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceMentionedCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceMentionedCountAggregateOutputType> | number
          }
        }
      }
      BlogCategory: {
        payload: Prisma.$BlogCategoryPayload<ExtArgs>
        fields: Prisma.BlogCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlogCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findMany: {
            args: Prisma.BlogCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          create: {
            args: Prisma.BlogCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          createMany: {
            args: Prisma.BlogCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          delete: {
            args: Prisma.BlogCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          update: {
            args: Prisma.BlogCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlogCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          upsert: {
            args: Prisma.BlogCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlogCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogCategory>
          }
          groupBy: {
            args: Prisma.BlogCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryCountAggregateOutputType> | number
          }
        }
      }
      BlogTag: {
        payload: Prisma.$BlogTagPayload<ExtArgs>
        fields: Prisma.BlogTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>
          }
          findFirst: {
            args: Prisma.BlogTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>
          }
          findMany: {
            args: Prisma.BlogTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>[]
          }
          create: {
            args: Prisma.BlogTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>
          }
          createMany: {
            args: Prisma.BlogTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>[]
          }
          delete: {
            args: Prisma.BlogTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>
          }
          update: {
            args: Prisma.BlogTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>
          }
          deleteMany: {
            args: Prisma.BlogTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>[]
          }
          upsert: {
            args: Prisma.BlogTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogTagPayload>
          }
          aggregate: {
            args: Prisma.BlogTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogTag>
          }
          groupBy: {
            args: Prisma.BlogTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogTagCountArgs<ExtArgs>
            result: $Utils.Optional<BlogTagCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      BlogPostTag: {
        payload: Prisma.$BlogPostTagPayload<ExtArgs>
        fields: Prisma.BlogPostTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          findFirst: {
            args: Prisma.BlogPostTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          findMany: {
            args: Prisma.BlogPostTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>[]
          }
          create: {
            args: Prisma.BlogPostTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          createMany: {
            args: Prisma.BlogPostTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>[]
          }
          delete: {
            args: Prisma.BlogPostTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          update: {
            args: Prisma.BlogPostTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          aggregate: {
            args: Prisma.BlogPostTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPostTag>
          }
          groupBy: {
            args: Prisma.BlogPostTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostTagCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostTagCountAggregateOutputType> | number
          }
        }
      }
      TourPackage: {
        payload: Prisma.$TourPackagePayload<ExtArgs>
        fields: Prisma.TourPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          findFirst: {
            args: Prisma.TourPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          findMany: {
            args: Prisma.TourPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>[]
          }
          create: {
            args: Prisma.TourPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          createMany: {
            args: Prisma.TourPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>[]
          }
          delete: {
            args: Prisma.TourPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          update: {
            args: Prisma.TourPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          deleteMany: {
            args: Prisma.TourPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>[]
          }
          upsert: {
            args: Prisma.TourPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          aggregate: {
            args: Prisma.TourPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourPackage>
          }
          groupBy: {
            args: Prisma.TourPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourPackageCountArgs<ExtArgs>
            result: $Utils.Optional<TourPackageCountAggregateOutputType> | number
          }
        }
      }
      TourInquiry: {
        payload: Prisma.$TourInquiryPayload<ExtArgs>
        fields: Prisma.TourInquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourInquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourInquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>
          }
          findFirst: {
            args: Prisma.TourInquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourInquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>
          }
          findMany: {
            args: Prisma.TourInquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>[]
          }
          create: {
            args: Prisma.TourInquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>
          }
          createMany: {
            args: Prisma.TourInquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourInquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>[]
          }
          delete: {
            args: Prisma.TourInquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>
          }
          update: {
            args: Prisma.TourInquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>
          }
          deleteMany: {
            args: Prisma.TourInquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourInquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourInquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>[]
          }
          upsert: {
            args: Prisma.TourInquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourInquiryPayload>
          }
          aggregate: {
            args: Prisma.TourInquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourInquiry>
          }
          groupBy: {
            args: Prisma.TourInquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourInquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourInquiryCountArgs<ExtArgs>
            result: $Utils.Optional<TourInquiryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    contactMessage?: ContactMessageOmit
    adminOtp?: AdminOtpOmit
    galleryItem?: GalleryItemOmit
    destination?: DestinationOmit
    destinationImage?: DestinationImageOmit
    destinationHighlight?: DestinationHighlightOmit
    placeMentioned?: PlaceMentionedOmit
    blogCategory?: BlogCategoryOmit
    blogTag?: BlogTagOmit
    blogPost?: BlogPostOmit
    blogPostTag?: BlogPostTagOmit
    tourPackage?: TourPackageOmit
    tourInquiry?: TourInquiryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    images: number
    highlights: number
    blogPosts: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | DestinationCountOutputTypeCountImagesArgs
    highlights?: boolean | DestinationCountOutputTypeCountHighlightsArgs
    blogPosts?: boolean | DestinationCountOutputTypeCountBlogPostsArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationImageWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationHighlightWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountBlogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }


  /**
   * Count Type BlogCategoryCountOutputType
   */

  export type BlogCategoryCountOutputType = {
    posts: number
  }

  export type BlogCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | BlogCategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategoryCountOutputType
     */
    select?: BlogCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }


  /**
   * Count Type BlogTagCountOutputType
   */

  export type BlogTagCountOutputType = {
    posts: number
  }

  export type BlogTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | BlogTagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * BlogTagCountOutputType without action
   */
  export type BlogTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTagCountOutputType
     */
    select?: BlogTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogTagCountOutputType without action
   */
  export type BlogTagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTagWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    tags: number
    placesMentioned: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | BlogPostCountOutputTypeCountTagsArgs
    placesMentioned?: boolean | BlogPostCountOutputTypeCountPlacesMentionedArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTagWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountPlacesMentionedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceMentionedWhereInput
  }


  /**
   * Count Type TourPackageCountOutputType
   */

  export type TourPackageCountOutputType = {
    inquiries: number
  }

  export type TourPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiries?: boolean | TourPackageCountOutputTypeCountInquiriesArgs
  }

  // Custom InputTypes
  /**
   * TourPackageCountOutputType without action
   */
  export type TourPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackageCountOutputType
     */
    select?: TourPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourPackageCountOutputType without action
   */
  export type TourPackageCountOutputTypeCountInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourInquiryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    gender: $Enums.Gender | null
    email: string | null
    phone: string | null
    password: string | null
    country: string | null
    stateProvince: string | null
    profileImage: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    emailVerifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    gender: $Enums.Gender | null
    email: string | null
    phone: string | null
    password: string | null
    country: string | null
    stateProvince: string | null
    profileImage: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    emailVerifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    gender: number
    email: number
    phone: number
    password: number
    country: number
    stateProvince: number
    profileImage: number
    role: number
    status: number
    emailVerifiedAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    email?: true
    phone?: true
    password?: true
    country?: true
    stateProvince?: true
    profileImage?: true
    role?: true
    status?: true
    emailVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    email?: true
    phone?: true
    password?: true
    country?: true
    stateProvince?: true
    profileImage?: true
    role?: true
    status?: true
    emailVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    email?: true
    phone?: true
    password?: true
    country?: true
    stateProvince?: true
    profileImage?: true
    role?: true
    status?: true
    emailVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    gender: $Enums.Gender | null
    email: string
    phone: string
    password: string
    country: string
    stateProvince: string
    profileImage: string | null
    role: $Enums.Role
    status: $Enums.UserStatus
    emailVerifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    country?: boolean
    stateProvince?: boolean
    profileImage?: boolean
    role?: boolean
    status?: boolean
    emailVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    country?: boolean
    stateProvince?: boolean
    profileImage?: boolean
    role?: boolean
    status?: boolean
    emailVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    country?: boolean
    stateProvince?: boolean
    profileImage?: boolean
    role?: boolean
    status?: boolean
    emailVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    country?: boolean
    stateProvince?: boolean
    profileImage?: boolean
    role?: boolean
    status?: boolean
    emailVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "gender" | "email" | "phone" | "password" | "country" | "stateProvince" | "profileImage" | "role" | "status" | "emailVerifiedAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      gender: $Enums.Gender | null
      email: string
      phone: string
      password: string
      country: string
      stateProvince: string
      profileImage: string | null
      role: $Enums.Role
      status: $Enums.UserStatus
      emailVerifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly stateProvince: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly emailVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ContactMessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    subject: number
    message: number
    createdAt: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type ContactMessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    subject: string
    message: string
    createdAt: Date
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "subject" | "message" | "createdAt", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      subject: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", 'String'>
    readonly name: FieldRef<"ContactMessage", 'String'>
    readonly email: FieldRef<"ContactMessage", 'String'>
    readonly phone: FieldRef<"ContactMessage", 'String'>
    readonly subject: FieldRef<"ContactMessage", 'String'>
    readonly message: FieldRef<"ContactMessage", 'String'>
    readonly createdAt: FieldRef<"ContactMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
  }


  /**
   * Model AdminOtp
   */

  export type AggregateAdminOtp = {
    _count: AdminOtpCountAggregateOutputType | null
    _min: AdminOtpMinAggregateOutputType | null
    _max: AdminOtpMaxAggregateOutputType | null
  }

  export type AdminOtpMinAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type AdminOtpMaxAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type AdminOtpCountAggregateOutputType = {
    id: number
    email: number
    code: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type AdminOtpMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
  }

  export type AdminOtpMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
  }

  export type AdminOtpCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type AdminOtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminOtp to aggregate.
     */
    where?: AdminOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminOtps to fetch.
     */
    orderBy?: AdminOtpOrderByWithRelationInput | AdminOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminOtps
    **/
    _count?: true | AdminOtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminOtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminOtpMaxAggregateInputType
  }

  export type GetAdminOtpAggregateType<T extends AdminOtpAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminOtp[P]>
      : GetScalarType<T[P], AggregateAdminOtp[P]>
  }




  export type AdminOtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminOtpWhereInput
    orderBy?: AdminOtpOrderByWithAggregationInput | AdminOtpOrderByWithAggregationInput[]
    by: AdminOtpScalarFieldEnum[] | AdminOtpScalarFieldEnum
    having?: AdminOtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminOtpCountAggregateInputType | true
    _min?: AdminOtpMinAggregateInputType
    _max?: AdminOtpMaxAggregateInputType
  }

  export type AdminOtpGroupByOutputType = {
    id: string
    email: string
    code: string
    expiresAt: Date
    createdAt: Date
    _count: AdminOtpCountAggregateOutputType | null
    _min: AdminOtpMinAggregateOutputType | null
    _max: AdminOtpMaxAggregateOutputType | null
  }

  type GetAdminOtpGroupByPayload<T extends AdminOtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminOtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminOtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminOtpGroupByOutputType[P]>
            : GetScalarType<T[P], AdminOtpGroupByOutputType[P]>
        }
      >
    >


  export type AdminOtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminOtp"]>

  export type AdminOtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminOtp"]>

  export type AdminOtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminOtp"]>

  export type AdminOtpSelectScalar = {
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type AdminOtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "code" | "expiresAt" | "createdAt", ExtArgs["result"]["adminOtp"]>

  export type $AdminOtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminOtp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      code: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["adminOtp"]>
    composites: {}
  }

  type AdminOtpGetPayload<S extends boolean | null | undefined | AdminOtpDefaultArgs> = $Result.GetResult<Prisma.$AdminOtpPayload, S>

  type AdminOtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminOtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminOtpCountAggregateInputType | true
    }

  export interface AdminOtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminOtp'], meta: { name: 'AdminOtp' } }
    /**
     * Find zero or one AdminOtp that matches the filter.
     * @param {AdminOtpFindUniqueArgs} args - Arguments to find a AdminOtp
     * @example
     * // Get one AdminOtp
     * const adminOtp = await prisma.adminOtp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminOtpFindUniqueArgs>(args: SelectSubset<T, AdminOtpFindUniqueArgs<ExtArgs>>): Prisma__AdminOtpClient<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminOtp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminOtpFindUniqueOrThrowArgs} args - Arguments to find a AdminOtp
     * @example
     * // Get one AdminOtp
     * const adminOtp = await prisma.adminOtp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminOtpFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminOtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminOtpClient<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminOtp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminOtpFindFirstArgs} args - Arguments to find a AdminOtp
     * @example
     * // Get one AdminOtp
     * const adminOtp = await prisma.adminOtp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminOtpFindFirstArgs>(args?: SelectSubset<T, AdminOtpFindFirstArgs<ExtArgs>>): Prisma__AdminOtpClient<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminOtp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminOtpFindFirstOrThrowArgs} args - Arguments to find a AdminOtp
     * @example
     * // Get one AdminOtp
     * const adminOtp = await prisma.adminOtp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminOtpFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminOtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminOtpClient<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminOtps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminOtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminOtps
     * const adminOtps = await prisma.adminOtp.findMany()
     * 
     * // Get first 10 AdminOtps
     * const adminOtps = await prisma.adminOtp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminOtpWithIdOnly = await prisma.adminOtp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminOtpFindManyArgs>(args?: SelectSubset<T, AdminOtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminOtp.
     * @param {AdminOtpCreateArgs} args - Arguments to create a AdminOtp.
     * @example
     * // Create one AdminOtp
     * const AdminOtp = await prisma.adminOtp.create({
     *   data: {
     *     // ... data to create a AdminOtp
     *   }
     * })
     * 
     */
    create<T extends AdminOtpCreateArgs>(args: SelectSubset<T, AdminOtpCreateArgs<ExtArgs>>): Prisma__AdminOtpClient<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminOtps.
     * @param {AdminOtpCreateManyArgs} args - Arguments to create many AdminOtps.
     * @example
     * // Create many AdminOtps
     * const adminOtp = await prisma.adminOtp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminOtpCreateManyArgs>(args?: SelectSubset<T, AdminOtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminOtps and returns the data saved in the database.
     * @param {AdminOtpCreateManyAndReturnArgs} args - Arguments to create many AdminOtps.
     * @example
     * // Create many AdminOtps
     * const adminOtp = await prisma.adminOtp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminOtps and only return the `id`
     * const adminOtpWithIdOnly = await prisma.adminOtp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminOtpCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminOtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminOtp.
     * @param {AdminOtpDeleteArgs} args - Arguments to delete one AdminOtp.
     * @example
     * // Delete one AdminOtp
     * const AdminOtp = await prisma.adminOtp.delete({
     *   where: {
     *     // ... filter to delete one AdminOtp
     *   }
     * })
     * 
     */
    delete<T extends AdminOtpDeleteArgs>(args: SelectSubset<T, AdminOtpDeleteArgs<ExtArgs>>): Prisma__AdminOtpClient<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminOtp.
     * @param {AdminOtpUpdateArgs} args - Arguments to update one AdminOtp.
     * @example
     * // Update one AdminOtp
     * const adminOtp = await prisma.adminOtp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminOtpUpdateArgs>(args: SelectSubset<T, AdminOtpUpdateArgs<ExtArgs>>): Prisma__AdminOtpClient<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminOtps.
     * @param {AdminOtpDeleteManyArgs} args - Arguments to filter AdminOtps to delete.
     * @example
     * // Delete a few AdminOtps
     * const { count } = await prisma.adminOtp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminOtpDeleteManyArgs>(args?: SelectSubset<T, AdminOtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminOtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminOtps
     * const adminOtp = await prisma.adminOtp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminOtpUpdateManyArgs>(args: SelectSubset<T, AdminOtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminOtps and returns the data updated in the database.
     * @param {AdminOtpUpdateManyAndReturnArgs} args - Arguments to update many AdminOtps.
     * @example
     * // Update many AdminOtps
     * const adminOtp = await prisma.adminOtp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminOtps and only return the `id`
     * const adminOtpWithIdOnly = await prisma.adminOtp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminOtpUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminOtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminOtp.
     * @param {AdminOtpUpsertArgs} args - Arguments to update or create a AdminOtp.
     * @example
     * // Update or create a AdminOtp
     * const adminOtp = await prisma.adminOtp.upsert({
     *   create: {
     *     // ... data to create a AdminOtp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminOtp we want to update
     *   }
     * })
     */
    upsert<T extends AdminOtpUpsertArgs>(args: SelectSubset<T, AdminOtpUpsertArgs<ExtArgs>>): Prisma__AdminOtpClient<$Result.GetResult<Prisma.$AdminOtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminOtpCountArgs} args - Arguments to filter AdminOtps to count.
     * @example
     * // Count the number of AdminOtps
     * const count = await prisma.adminOtp.count({
     *   where: {
     *     // ... the filter for the AdminOtps we want to count
     *   }
     * })
    **/
    count<T extends AdminOtpCountArgs>(
      args?: Subset<T, AdminOtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminOtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminOtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminOtpAggregateArgs>(args: Subset<T, AdminOtpAggregateArgs>): Prisma.PrismaPromise<GetAdminOtpAggregateType<T>>

    /**
     * Group by AdminOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminOtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminOtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminOtpGroupByArgs['orderBy'] }
        : { orderBy?: AdminOtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminOtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminOtp model
   */
  readonly fields: AdminOtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminOtp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminOtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminOtp model
   */
  interface AdminOtpFieldRefs {
    readonly id: FieldRef<"AdminOtp", 'String'>
    readonly email: FieldRef<"AdminOtp", 'String'>
    readonly code: FieldRef<"AdminOtp", 'String'>
    readonly expiresAt: FieldRef<"AdminOtp", 'DateTime'>
    readonly createdAt: FieldRef<"AdminOtp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminOtp findUnique
   */
  export type AdminOtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * Filter, which AdminOtp to fetch.
     */
    where: AdminOtpWhereUniqueInput
  }

  /**
   * AdminOtp findUniqueOrThrow
   */
  export type AdminOtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * Filter, which AdminOtp to fetch.
     */
    where: AdminOtpWhereUniqueInput
  }

  /**
   * AdminOtp findFirst
   */
  export type AdminOtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * Filter, which AdminOtp to fetch.
     */
    where?: AdminOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminOtps to fetch.
     */
    orderBy?: AdminOtpOrderByWithRelationInput | AdminOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminOtps.
     */
    cursor?: AdminOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminOtps.
     */
    distinct?: AdminOtpScalarFieldEnum | AdminOtpScalarFieldEnum[]
  }

  /**
   * AdminOtp findFirstOrThrow
   */
  export type AdminOtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * Filter, which AdminOtp to fetch.
     */
    where?: AdminOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminOtps to fetch.
     */
    orderBy?: AdminOtpOrderByWithRelationInput | AdminOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminOtps.
     */
    cursor?: AdminOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminOtps.
     */
    distinct?: AdminOtpScalarFieldEnum | AdminOtpScalarFieldEnum[]
  }

  /**
   * AdminOtp findMany
   */
  export type AdminOtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * Filter, which AdminOtps to fetch.
     */
    where?: AdminOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminOtps to fetch.
     */
    orderBy?: AdminOtpOrderByWithRelationInput | AdminOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminOtps.
     */
    cursor?: AdminOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminOtps.
     */
    skip?: number
    distinct?: AdminOtpScalarFieldEnum | AdminOtpScalarFieldEnum[]
  }

  /**
   * AdminOtp create
   */
  export type AdminOtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminOtp.
     */
    data: XOR<AdminOtpCreateInput, AdminOtpUncheckedCreateInput>
  }

  /**
   * AdminOtp createMany
   */
  export type AdminOtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminOtps.
     */
    data: AdminOtpCreateManyInput | AdminOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminOtp createManyAndReturn
   */
  export type AdminOtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * The data used to create many AdminOtps.
     */
    data: AdminOtpCreateManyInput | AdminOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminOtp update
   */
  export type AdminOtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminOtp.
     */
    data: XOR<AdminOtpUpdateInput, AdminOtpUncheckedUpdateInput>
    /**
     * Choose, which AdminOtp to update.
     */
    where: AdminOtpWhereUniqueInput
  }

  /**
   * AdminOtp updateMany
   */
  export type AdminOtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminOtps.
     */
    data: XOR<AdminOtpUpdateManyMutationInput, AdminOtpUncheckedUpdateManyInput>
    /**
     * Filter which AdminOtps to update
     */
    where?: AdminOtpWhereInput
    /**
     * Limit how many AdminOtps to update.
     */
    limit?: number
  }

  /**
   * AdminOtp updateManyAndReturn
   */
  export type AdminOtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * The data used to update AdminOtps.
     */
    data: XOR<AdminOtpUpdateManyMutationInput, AdminOtpUncheckedUpdateManyInput>
    /**
     * Filter which AdminOtps to update
     */
    where?: AdminOtpWhereInput
    /**
     * Limit how many AdminOtps to update.
     */
    limit?: number
  }

  /**
   * AdminOtp upsert
   */
  export type AdminOtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminOtp to update in case it exists.
     */
    where: AdminOtpWhereUniqueInput
    /**
     * In case the AdminOtp found by the `where` argument doesn't exist, create a new AdminOtp with this data.
     */
    create: XOR<AdminOtpCreateInput, AdminOtpUncheckedCreateInput>
    /**
     * In case the AdminOtp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminOtpUpdateInput, AdminOtpUncheckedUpdateInput>
  }

  /**
   * AdminOtp delete
   */
  export type AdminOtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
    /**
     * Filter which AdminOtp to delete.
     */
    where: AdminOtpWhereUniqueInput
  }

  /**
   * AdminOtp deleteMany
   */
  export type AdminOtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminOtps to delete
     */
    where?: AdminOtpWhereInput
    /**
     * Limit how many AdminOtps to delete.
     */
    limit?: number
  }

  /**
   * AdminOtp without action
   */
  export type AdminOtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminOtp
     */
    select?: AdminOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminOtp
     */
    omit?: AdminOtpOmit<ExtArgs> | null
  }


  /**
   * Model GalleryItem
   */

  export type AggregateGalleryItem = {
    _count: GalleryItemCountAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  export type GalleryItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    category: string | null
    altText: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    category: string | null
    altText: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryItemCountAggregateOutputType = {
    id: number
    title: number
    url: number
    category: number
    altText: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryItemMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    altText?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryItemMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    altText?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryItemCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    altText?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItem to aggregate.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryItems
    **/
    _count?: true | GalleryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GetGalleryItemAggregateType<T extends GalleryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryItem[P]>
      : GetScalarType<T[P], AggregateGalleryItem[P]>
  }




  export type GalleryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryItemWhereInput
    orderBy?: GalleryItemOrderByWithAggregationInput | GalleryItemOrderByWithAggregationInput[]
    by: GalleryItemScalarFieldEnum[] | GalleryItemScalarFieldEnum
    having?: GalleryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryItemCountAggregateInputType | true
    _min?: GalleryItemMinAggregateInputType
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GalleryItemGroupByOutputType = {
    id: string
    title: string
    url: string
    category: string
    altText: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: GalleryItemCountAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  type GetGalleryItemGroupByPayload<T extends GalleryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
        }
      >
    >


  export type GalleryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    altText?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    altText?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    altText?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    altText?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "category" | "altText" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["galleryItem"]>

  export type $GalleryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      category: string
      altText: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galleryItem"]>
    composites: {}
  }

  type GalleryItemGetPayload<S extends boolean | null | undefined | GalleryItemDefaultArgs> = $Result.GetResult<Prisma.$GalleryItemPayload, S>

  type GalleryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryItemCountAggregateInputType | true
    }

  export interface GalleryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryItem'], meta: { name: 'GalleryItem' } }
    /**
     * Find zero or one GalleryItem that matches the filter.
     * @param {GalleryItemFindUniqueArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryItemFindUniqueArgs>(args: SelectSubset<T, GalleryItemFindUniqueArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryItemFindUniqueOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryItemFindFirstArgs>(args?: SelectSubset<T, GalleryItemFindFirstArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany()
     * 
     * // Get first 10 GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryItemFindManyArgs>(args?: SelectSubset<T, GalleryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryItem.
     * @param {GalleryItemCreateArgs} args - Arguments to create a GalleryItem.
     * @example
     * // Create one GalleryItem
     * const GalleryItem = await prisma.galleryItem.create({
     *   data: {
     *     // ... data to create a GalleryItem
     *   }
     * })
     * 
     */
    create<T extends GalleryItemCreateArgs>(args: SelectSubset<T, GalleryItemCreateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryItems.
     * @param {GalleryItemCreateManyArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryItemCreateManyArgs>(args?: SelectSubset<T, GalleryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryItems and returns the data saved in the database.
     * @param {GalleryItemCreateManyAndReturnArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryItem.
     * @param {GalleryItemDeleteArgs} args - Arguments to delete one GalleryItem.
     * @example
     * // Delete one GalleryItem
     * const GalleryItem = await prisma.galleryItem.delete({
     *   where: {
     *     // ... filter to delete one GalleryItem
     *   }
     * })
     * 
     */
    delete<T extends GalleryItemDeleteArgs>(args: SelectSubset<T, GalleryItemDeleteArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryItem.
     * @param {GalleryItemUpdateArgs} args - Arguments to update one GalleryItem.
     * @example
     * // Update one GalleryItem
     * const galleryItem = await prisma.galleryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryItemUpdateArgs>(args: SelectSubset<T, GalleryItemUpdateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryItems.
     * @param {GalleryItemDeleteManyArgs} args - Arguments to filter GalleryItems to delete.
     * @example
     * // Delete a few GalleryItems
     * const { count } = await prisma.galleryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryItemDeleteManyArgs>(args?: SelectSubset<T, GalleryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryItemUpdateManyArgs>(args: SelectSubset<T, GalleryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems and returns the data updated in the database.
     * @param {GalleryItemUpdateManyAndReturnArgs} args - Arguments to update many GalleryItems.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryItem.
     * @param {GalleryItemUpsertArgs} args - Arguments to update or create a GalleryItem.
     * @example
     * // Update or create a GalleryItem
     * const galleryItem = await prisma.galleryItem.upsert({
     *   create: {
     *     // ... data to create a GalleryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryItem we want to update
     *   }
     * })
     */
    upsert<T extends GalleryItemUpsertArgs>(args: SelectSubset<T, GalleryItemUpsertArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemCountArgs} args - Arguments to filter GalleryItems to count.
     * @example
     * // Count the number of GalleryItems
     * const count = await prisma.galleryItem.count({
     *   where: {
     *     // ... the filter for the GalleryItems we want to count
     *   }
     * })
    **/
    count<T extends GalleryItemCountArgs>(
      args?: Subset<T, GalleryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryItemAggregateArgs>(args: Subset<T, GalleryItemAggregateArgs>): Prisma.PrismaPromise<GetGalleryItemAggregateType<T>>

    /**
     * Group by GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryItemGroupByArgs['orderBy'] }
        : { orderBy?: GalleryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryItem model
   */
  readonly fields: GalleryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryItem model
   */
  interface GalleryItemFieldRefs {
    readonly id: FieldRef<"GalleryItem", 'String'>
    readonly title: FieldRef<"GalleryItem", 'String'>
    readonly url: FieldRef<"GalleryItem", 'String'>
    readonly category: FieldRef<"GalleryItem", 'String'>
    readonly altText: FieldRef<"GalleryItem", 'String'>
    readonly description: FieldRef<"GalleryItem", 'String'>
    readonly createdAt: FieldRef<"GalleryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryItem findUnique
   */
  export type GalleryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findUniqueOrThrow
   */
  export type GalleryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findFirst
   */
  export type GalleryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findFirstOrThrow
   */
  export type GalleryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findMany
   */
  export type GalleryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItems to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem create
   */
  export type GalleryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryItem.
     */
    data: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
  }

  /**
   * GalleryItem createMany
   */
  export type GalleryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryItem createManyAndReturn
   */
  export type GalleryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryItem update
   */
  export type GalleryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryItem.
     */
    data: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
    /**
     * Choose, which GalleryItem to update.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem updateMany
   */
  export type GalleryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem updateManyAndReturn
   */
  export type GalleryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem upsert
   */
  export type GalleryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryItem to update in case it exists.
     */
    where: GalleryItemWhereUniqueInput
    /**
     * In case the GalleryItem found by the `where` argument doesn't exist, create a new GalleryItem with this data.
     */
    create: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
    /**
     * In case the GalleryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
  }

  /**
   * GalleryItem delete
   */
  export type GalleryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter which GalleryItem to delete.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem deleteMany
   */
  export type GalleryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItems to delete
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to delete.
     */
    limit?: number
  }

  /**
   * GalleryItem without action
   */
  export type GalleryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DestinationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DestinationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    shortDescription: string | null
    description: string | null
    image: string | null
    ogImage: string | null
    location: string | null
    district: string | null
    province: string | null
    category: string | null
    bestTime: string | null
    duration: string | null
    budget: string | null
    latitude: number | null
    longitude: number | null
    weatherAvg: string | null
    weatherRain: string | null
    howToGetThere: string | null
    seoTitle: string | null
    seoDescription: string | null
    featured: boolean | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    shortDescription: string | null
    description: string | null
    image: string | null
    ogImage: string | null
    location: string | null
    district: string | null
    province: string | null
    category: string | null
    bestTime: string | null
    duration: string | null
    budget: string | null
    latitude: number | null
    longitude: number | null
    weatherAvg: string | null
    weatherRain: string | null
    howToGetThere: string | null
    seoTitle: string | null
    seoDescription: string | null
    featured: boolean | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    shortDescription: number
    description: number
    image: number
    ogImage: number
    location: number
    district: number
    province: number
    category: number
    bestTime: number
    duration: number
    budget: number
    latitude: number
    longitude: number
    weatherAvg: number
    weatherRain: number
    howToGetThere: number
    seoTitle: number
    seoDescription: number
    featured: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DestinationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DestinationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortDescription?: true
    description?: true
    image?: true
    ogImage?: true
    location?: true
    district?: true
    province?: true
    category?: true
    bestTime?: true
    duration?: true
    budget?: true
    latitude?: true
    longitude?: true
    weatherAvg?: true
    weatherRain?: true
    howToGetThere?: true
    seoTitle?: true
    seoDescription?: true
    featured?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortDescription?: true
    description?: true
    image?: true
    ogImage?: true
    location?: true
    district?: true
    province?: true
    category?: true
    bestTime?: true
    duration?: true
    budget?: true
    latitude?: true
    longitude?: true
    weatherAvg?: true
    weatherRain?: true
    howToGetThere?: true
    seoTitle?: true
    seoDescription?: true
    featured?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortDescription?: true
    description?: true
    image?: true
    ogImage?: true
    location?: true
    district?: true
    province?: true
    category?: true
    bestTime?: true
    duration?: true
    budget?: true
    latitude?: true
    longitude?: true
    weatherAvg?: true
    weatherRain?: true
    howToGetThere?: true
    seoTitle?: true
    seoDescription?: true
    featured?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _avg?: DestinationAvgAggregateInputType
    _sum?: DestinationSumAggregateInputType
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: string
    name: string
    slug: string
    shortDescription: string | null
    description: string
    image: string
    ogImage: string | null
    location: string | null
    district: string | null
    province: string | null
    category: string | null
    bestTime: string | null
    duration: string | null
    budget: string | null
    latitude: number | null
    longitude: number | null
    weatherAvg: string | null
    weatherRain: string | null
    howToGetThere: string | null
    seoTitle: string | null
    seoDescription: string | null
    featured: boolean
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    image?: boolean
    ogImage?: boolean
    location?: boolean
    district?: boolean
    province?: boolean
    category?: boolean
    bestTime?: boolean
    duration?: boolean
    budget?: boolean
    latitude?: boolean
    longitude?: boolean
    weatherAvg?: boolean
    weatherRain?: boolean
    howToGetThere?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    featured?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Destination$imagesArgs<ExtArgs>
    highlights?: boolean | Destination$highlightsArgs<ExtArgs>
    blogPosts?: boolean | Destination$blogPostsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    image?: boolean
    ogImage?: boolean
    location?: boolean
    district?: boolean
    province?: boolean
    category?: boolean
    bestTime?: boolean
    duration?: boolean
    budget?: boolean
    latitude?: boolean
    longitude?: boolean
    weatherAvg?: boolean
    weatherRain?: boolean
    howToGetThere?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    featured?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    image?: boolean
    ogImage?: boolean
    location?: boolean
    district?: boolean
    province?: boolean
    category?: boolean
    bestTime?: boolean
    duration?: boolean
    budget?: boolean
    latitude?: boolean
    longitude?: boolean
    weatherAvg?: boolean
    weatherRain?: boolean
    howToGetThere?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    featured?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    image?: boolean
    ogImage?: boolean
    location?: boolean
    district?: boolean
    province?: boolean
    category?: boolean
    bestTime?: boolean
    duration?: boolean
    budget?: boolean
    latitude?: boolean
    longitude?: boolean
    weatherAvg?: boolean
    weatherRain?: boolean
    howToGetThere?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    featured?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "shortDescription" | "description" | "image" | "ogImage" | "location" | "district" | "province" | "category" | "bestTime" | "duration" | "budget" | "latitude" | "longitude" | "weatherAvg" | "weatherRain" | "howToGetThere" | "seoTitle" | "seoDescription" | "featured" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Destination$imagesArgs<ExtArgs>
    highlights?: boolean | Destination$highlightsArgs<ExtArgs>
    blogPosts?: boolean | Destination$blogPostsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      images: Prisma.$DestinationImagePayload<ExtArgs>[]
      highlights: Prisma.$DestinationHighlightPayload<ExtArgs>[]
      blogPosts: Prisma.$BlogPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      shortDescription: string | null
      description: string
      image: string
      ogImage: string | null
      location: string | null
      district: string | null
      province: string | null
      category: string | null
      bestTime: string | null
      duration: string | null
      budget: string | null
      latitude: number | null
      longitude: number | null
      weatherAvg: string | null
      weatherRain: string | null
      howToGetThere: string | null
      seoTitle: string | null
      seoDescription: string | null
      featured: boolean
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Destination$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Destination$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highlights<T extends Destination$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPosts<T extends Destination$blogPostsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$blogPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'String'>
    readonly name: FieldRef<"Destination", 'String'>
    readonly slug: FieldRef<"Destination", 'String'>
    readonly shortDescription: FieldRef<"Destination", 'String'>
    readonly description: FieldRef<"Destination", 'String'>
    readonly image: FieldRef<"Destination", 'String'>
    readonly ogImage: FieldRef<"Destination", 'String'>
    readonly location: FieldRef<"Destination", 'String'>
    readonly district: FieldRef<"Destination", 'String'>
    readonly province: FieldRef<"Destination", 'String'>
    readonly category: FieldRef<"Destination", 'String'>
    readonly bestTime: FieldRef<"Destination", 'String'>
    readonly duration: FieldRef<"Destination", 'String'>
    readonly budget: FieldRef<"Destination", 'String'>
    readonly latitude: FieldRef<"Destination", 'Float'>
    readonly longitude: FieldRef<"Destination", 'Float'>
    readonly weatherAvg: FieldRef<"Destination", 'String'>
    readonly weatherRain: FieldRef<"Destination", 'String'>
    readonly howToGetThere: FieldRef<"Destination", 'String'>
    readonly seoTitle: FieldRef<"Destination", 'String'>
    readonly seoDescription: FieldRef<"Destination", 'String'>
    readonly featured: FieldRef<"Destination", 'Boolean'>
    readonly published: FieldRef<"Destination", 'Boolean'>
    readonly createdAt: FieldRef<"Destination", 'DateTime'>
    readonly updatedAt: FieldRef<"Destination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination updateManyAndReturn
   */
  export type DestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.images
   */
  export type Destination$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    where?: DestinationImageWhereInput
    orderBy?: DestinationImageOrderByWithRelationInput | DestinationImageOrderByWithRelationInput[]
    cursor?: DestinationImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationImageScalarFieldEnum | DestinationImageScalarFieldEnum[]
  }

  /**
   * Destination.highlights
   */
  export type Destination$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    where?: DestinationHighlightWhereInput
    orderBy?: DestinationHighlightOrderByWithRelationInput | DestinationHighlightOrderByWithRelationInput[]
    cursor?: DestinationHighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationHighlightScalarFieldEnum | DestinationHighlightScalarFieldEnum[]
  }

  /**
   * Destination.blogPosts
   */
  export type Destination$blogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model DestinationImage
   */

  export type AggregateDestinationImage = {
    _count: DestinationImageCountAggregateOutputType | null
    _min: DestinationImageMinAggregateOutputType | null
    _max: DestinationImageMaxAggregateOutputType | null
  }

  export type DestinationImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    destinationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    destinationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationImageCountAggregateOutputType = {
    id: number
    url: number
    destinationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationImageMinAggregateInputType = {
    id?: true
    url?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationImageMaxAggregateInputType = {
    id?: true
    url?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationImageCountAggregateInputType = {
    id?: true
    url?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationImage to aggregate.
     */
    where?: DestinationImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationImages to fetch.
     */
    orderBy?: DestinationImageOrderByWithRelationInput | DestinationImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DestinationImages
    **/
    _count?: true | DestinationImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationImageMaxAggregateInputType
  }

  export type GetDestinationImageAggregateType<T extends DestinationImageAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinationImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinationImage[P]>
      : GetScalarType<T[P], AggregateDestinationImage[P]>
  }




  export type DestinationImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationImageWhereInput
    orderBy?: DestinationImageOrderByWithAggregationInput | DestinationImageOrderByWithAggregationInput[]
    by: DestinationImageScalarFieldEnum[] | DestinationImageScalarFieldEnum
    having?: DestinationImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationImageCountAggregateInputType | true
    _min?: DestinationImageMinAggregateInputType
    _max?: DestinationImageMaxAggregateInputType
  }

  export type DestinationImageGroupByOutputType = {
    id: string
    url: string
    destinationId: string
    createdAt: Date
    updatedAt: Date
    _count: DestinationImageCountAggregateOutputType | null
    _min: DestinationImageMinAggregateOutputType | null
    _max: DestinationImageMaxAggregateOutputType | null
  }

  type GetDestinationImageGroupByPayload<T extends DestinationImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationImageGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationImageGroupByOutputType[P]>
        }
      >
    >


  export type DestinationImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationImage"]>

  export type DestinationImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationImage"]>

  export type DestinationImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationImage"]>

  export type DestinationImageSelectScalar = {
    id?: boolean
    url?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "destinationId" | "createdAt" | "updatedAt", ExtArgs["result"]["destinationImage"]>
  export type DestinationImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DestinationImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DestinationImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $DestinationImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DestinationImage"
    objects: {
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      destinationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destinationImage"]>
    composites: {}
  }

  type DestinationImageGetPayload<S extends boolean | null | undefined | DestinationImageDefaultArgs> = $Result.GetResult<Prisma.$DestinationImagePayload, S>

  type DestinationImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationImageCountAggregateInputType | true
    }

  export interface DestinationImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DestinationImage'], meta: { name: 'DestinationImage' } }
    /**
     * Find zero or one DestinationImage that matches the filter.
     * @param {DestinationImageFindUniqueArgs} args - Arguments to find a DestinationImage
     * @example
     * // Get one DestinationImage
     * const destinationImage = await prisma.destinationImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationImageFindUniqueArgs>(args: SelectSubset<T, DestinationImageFindUniqueArgs<ExtArgs>>): Prisma__DestinationImageClient<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DestinationImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationImageFindUniqueOrThrowArgs} args - Arguments to find a DestinationImage
     * @example
     * // Get one DestinationImage
     * const destinationImage = await prisma.destinationImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationImageFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationImageClient<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageFindFirstArgs} args - Arguments to find a DestinationImage
     * @example
     * // Get one DestinationImage
     * const destinationImage = await prisma.destinationImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationImageFindFirstArgs>(args?: SelectSubset<T, DestinationImageFindFirstArgs<ExtArgs>>): Prisma__DestinationImageClient<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageFindFirstOrThrowArgs} args - Arguments to find a DestinationImage
     * @example
     * // Get one DestinationImage
     * const destinationImage = await prisma.destinationImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationImageFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationImageClient<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DestinationImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinationImages
     * const destinationImages = await prisma.destinationImage.findMany()
     * 
     * // Get first 10 DestinationImages
     * const destinationImages = await prisma.destinationImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationImageWithIdOnly = await prisma.destinationImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationImageFindManyArgs>(args?: SelectSubset<T, DestinationImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DestinationImage.
     * @param {DestinationImageCreateArgs} args - Arguments to create a DestinationImage.
     * @example
     * // Create one DestinationImage
     * const DestinationImage = await prisma.destinationImage.create({
     *   data: {
     *     // ... data to create a DestinationImage
     *   }
     * })
     * 
     */
    create<T extends DestinationImageCreateArgs>(args: SelectSubset<T, DestinationImageCreateArgs<ExtArgs>>): Prisma__DestinationImageClient<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DestinationImages.
     * @param {DestinationImageCreateManyArgs} args - Arguments to create many DestinationImages.
     * @example
     * // Create many DestinationImages
     * const destinationImage = await prisma.destinationImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationImageCreateManyArgs>(args?: SelectSubset<T, DestinationImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DestinationImages and returns the data saved in the database.
     * @param {DestinationImageCreateManyAndReturnArgs} args - Arguments to create many DestinationImages.
     * @example
     * // Create many DestinationImages
     * const destinationImage = await prisma.destinationImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DestinationImages and only return the `id`
     * const destinationImageWithIdOnly = await prisma.destinationImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationImageCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DestinationImage.
     * @param {DestinationImageDeleteArgs} args - Arguments to delete one DestinationImage.
     * @example
     * // Delete one DestinationImage
     * const DestinationImage = await prisma.destinationImage.delete({
     *   where: {
     *     // ... filter to delete one DestinationImage
     *   }
     * })
     * 
     */
    delete<T extends DestinationImageDeleteArgs>(args: SelectSubset<T, DestinationImageDeleteArgs<ExtArgs>>): Prisma__DestinationImageClient<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DestinationImage.
     * @param {DestinationImageUpdateArgs} args - Arguments to update one DestinationImage.
     * @example
     * // Update one DestinationImage
     * const destinationImage = await prisma.destinationImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationImageUpdateArgs>(args: SelectSubset<T, DestinationImageUpdateArgs<ExtArgs>>): Prisma__DestinationImageClient<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DestinationImages.
     * @param {DestinationImageDeleteManyArgs} args - Arguments to filter DestinationImages to delete.
     * @example
     * // Delete a few DestinationImages
     * const { count } = await prisma.destinationImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationImageDeleteManyArgs>(args?: SelectSubset<T, DestinationImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinationImages
     * const destinationImage = await prisma.destinationImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationImageUpdateManyArgs>(args: SelectSubset<T, DestinationImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationImages and returns the data updated in the database.
     * @param {DestinationImageUpdateManyAndReturnArgs} args - Arguments to update many DestinationImages.
     * @example
     * // Update many DestinationImages
     * const destinationImage = await prisma.destinationImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DestinationImages and only return the `id`
     * const destinationImageWithIdOnly = await prisma.destinationImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationImageUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DestinationImage.
     * @param {DestinationImageUpsertArgs} args - Arguments to update or create a DestinationImage.
     * @example
     * // Update or create a DestinationImage
     * const destinationImage = await prisma.destinationImage.upsert({
     *   create: {
     *     // ... data to create a DestinationImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinationImage we want to update
     *   }
     * })
     */
    upsert<T extends DestinationImageUpsertArgs>(args: SelectSubset<T, DestinationImageUpsertArgs<ExtArgs>>): Prisma__DestinationImageClient<$Result.GetResult<Prisma.$DestinationImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DestinationImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageCountArgs} args - Arguments to filter DestinationImages to count.
     * @example
     * // Count the number of DestinationImages
     * const count = await prisma.destinationImage.count({
     *   where: {
     *     // ... the filter for the DestinationImages we want to count
     *   }
     * })
    **/
    count<T extends DestinationImageCountArgs>(
      args?: Subset<T, DestinationImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DestinationImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationImageAggregateArgs>(args: Subset<T, DestinationImageAggregateArgs>): Prisma.PrismaPromise<GetDestinationImageAggregateType<T>>

    /**
     * Group by DestinationImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationImageGroupByArgs['orderBy'] }
        : { orderBy?: DestinationImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DestinationImage model
   */
  readonly fields: DestinationImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DestinationImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DestinationImage model
   */
  interface DestinationImageFieldRefs {
    readonly id: FieldRef<"DestinationImage", 'String'>
    readonly url: FieldRef<"DestinationImage", 'String'>
    readonly destinationId: FieldRef<"DestinationImage", 'String'>
    readonly createdAt: FieldRef<"DestinationImage", 'DateTime'>
    readonly updatedAt: FieldRef<"DestinationImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DestinationImage findUnique
   */
  export type DestinationImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImage to fetch.
     */
    where: DestinationImageWhereUniqueInput
  }

  /**
   * DestinationImage findUniqueOrThrow
   */
  export type DestinationImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImage to fetch.
     */
    where: DestinationImageWhereUniqueInput
  }

  /**
   * DestinationImage findFirst
   */
  export type DestinationImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImage to fetch.
     */
    where?: DestinationImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationImages to fetch.
     */
    orderBy?: DestinationImageOrderByWithRelationInput | DestinationImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationImages.
     */
    cursor?: DestinationImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationImages.
     */
    distinct?: DestinationImageScalarFieldEnum | DestinationImageScalarFieldEnum[]
  }

  /**
   * DestinationImage findFirstOrThrow
   */
  export type DestinationImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImage to fetch.
     */
    where?: DestinationImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationImages to fetch.
     */
    orderBy?: DestinationImageOrderByWithRelationInput | DestinationImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationImages.
     */
    cursor?: DestinationImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationImages.
     */
    distinct?: DestinationImageScalarFieldEnum | DestinationImageScalarFieldEnum[]
  }

  /**
   * DestinationImage findMany
   */
  export type DestinationImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter, which DestinationImages to fetch.
     */
    where?: DestinationImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationImages to fetch.
     */
    orderBy?: DestinationImageOrderByWithRelationInput | DestinationImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DestinationImages.
     */
    cursor?: DestinationImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationImages.
     */
    skip?: number
    distinct?: DestinationImageScalarFieldEnum | DestinationImageScalarFieldEnum[]
  }

  /**
   * DestinationImage create
   */
  export type DestinationImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * The data needed to create a DestinationImage.
     */
    data: XOR<DestinationImageCreateInput, DestinationImageUncheckedCreateInput>
  }

  /**
   * DestinationImage createMany
   */
  export type DestinationImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DestinationImages.
     */
    data: DestinationImageCreateManyInput | DestinationImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DestinationImage createManyAndReturn
   */
  export type DestinationImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * The data used to create many DestinationImages.
     */
    data: DestinationImageCreateManyInput | DestinationImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationImage update
   */
  export type DestinationImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * The data needed to update a DestinationImage.
     */
    data: XOR<DestinationImageUpdateInput, DestinationImageUncheckedUpdateInput>
    /**
     * Choose, which DestinationImage to update.
     */
    where: DestinationImageWhereUniqueInput
  }

  /**
   * DestinationImage updateMany
   */
  export type DestinationImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DestinationImages.
     */
    data: XOR<DestinationImageUpdateManyMutationInput, DestinationImageUncheckedUpdateManyInput>
    /**
     * Filter which DestinationImages to update
     */
    where?: DestinationImageWhereInput
    /**
     * Limit how many DestinationImages to update.
     */
    limit?: number
  }

  /**
   * DestinationImage updateManyAndReturn
   */
  export type DestinationImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * The data used to update DestinationImages.
     */
    data: XOR<DestinationImageUpdateManyMutationInput, DestinationImageUncheckedUpdateManyInput>
    /**
     * Filter which DestinationImages to update
     */
    where?: DestinationImageWhereInput
    /**
     * Limit how many DestinationImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationImage upsert
   */
  export type DestinationImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * The filter to search for the DestinationImage to update in case it exists.
     */
    where: DestinationImageWhereUniqueInput
    /**
     * In case the DestinationImage found by the `where` argument doesn't exist, create a new DestinationImage with this data.
     */
    create: XOR<DestinationImageCreateInput, DestinationImageUncheckedCreateInput>
    /**
     * In case the DestinationImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationImageUpdateInput, DestinationImageUncheckedUpdateInput>
  }

  /**
   * DestinationImage delete
   */
  export type DestinationImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
    /**
     * Filter which DestinationImage to delete.
     */
    where: DestinationImageWhereUniqueInput
  }

  /**
   * DestinationImage deleteMany
   */
  export type DestinationImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationImages to delete
     */
    where?: DestinationImageWhereInput
    /**
     * Limit how many DestinationImages to delete.
     */
    limit?: number
  }

  /**
   * DestinationImage without action
   */
  export type DestinationImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationImage
     */
    select?: DestinationImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationImage
     */
    omit?: DestinationImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationImageInclude<ExtArgs> | null
  }


  /**
   * Model DestinationHighlight
   */

  export type AggregateDestinationHighlight = {
    _count: DestinationHighlightCountAggregateOutputType | null
    _min: DestinationHighlightMinAggregateOutputType | null
    _max: DestinationHighlightMaxAggregateOutputType | null
  }

  export type DestinationHighlightMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    destinationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationHighlightMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    destinationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationHighlightCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    destinationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationHighlightMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationHighlightMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationHighlightCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    destinationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationHighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationHighlight to aggregate.
     */
    where?: DestinationHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationHighlights to fetch.
     */
    orderBy?: DestinationHighlightOrderByWithRelationInput | DestinationHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DestinationHighlights
    **/
    _count?: true | DestinationHighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationHighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationHighlightMaxAggregateInputType
  }

  export type GetDestinationHighlightAggregateType<T extends DestinationHighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinationHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinationHighlight[P]>
      : GetScalarType<T[P], AggregateDestinationHighlight[P]>
  }




  export type DestinationHighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationHighlightWhereInput
    orderBy?: DestinationHighlightOrderByWithAggregationInput | DestinationHighlightOrderByWithAggregationInput[]
    by: DestinationHighlightScalarFieldEnum[] | DestinationHighlightScalarFieldEnum
    having?: DestinationHighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationHighlightCountAggregateInputType | true
    _min?: DestinationHighlightMinAggregateInputType
    _max?: DestinationHighlightMaxAggregateInputType
  }

  export type DestinationHighlightGroupByOutputType = {
    id: string
    title: string
    description: string
    image: string
    destinationId: string
    createdAt: Date
    updatedAt: Date
    _count: DestinationHighlightCountAggregateOutputType | null
    _min: DestinationHighlightMinAggregateOutputType | null
    _max: DestinationHighlightMaxAggregateOutputType | null
  }

  type GetDestinationHighlightGroupByPayload<T extends DestinationHighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationHighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationHighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationHighlightGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationHighlightGroupByOutputType[P]>
        }
      >
    >


  export type DestinationHighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationHighlight"]>

  export type DestinationHighlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationHighlight"]>

  export type DestinationHighlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationHighlight"]>

  export type DestinationHighlightSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    destinationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationHighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "destinationId" | "createdAt" | "updatedAt", ExtArgs["result"]["destinationHighlight"]>
  export type DestinationHighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DestinationHighlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DestinationHighlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $DestinationHighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DestinationHighlight"
    objects: {
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      image: string
      destinationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destinationHighlight"]>
    composites: {}
  }

  type DestinationHighlightGetPayload<S extends boolean | null | undefined | DestinationHighlightDefaultArgs> = $Result.GetResult<Prisma.$DestinationHighlightPayload, S>

  type DestinationHighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationHighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationHighlightCountAggregateInputType | true
    }

  export interface DestinationHighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DestinationHighlight'], meta: { name: 'DestinationHighlight' } }
    /**
     * Find zero or one DestinationHighlight that matches the filter.
     * @param {DestinationHighlightFindUniqueArgs} args - Arguments to find a DestinationHighlight
     * @example
     * // Get one DestinationHighlight
     * const destinationHighlight = await prisma.destinationHighlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationHighlightFindUniqueArgs>(args: SelectSubset<T, DestinationHighlightFindUniqueArgs<ExtArgs>>): Prisma__DestinationHighlightClient<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DestinationHighlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationHighlightFindUniqueOrThrowArgs} args - Arguments to find a DestinationHighlight
     * @example
     * // Get one DestinationHighlight
     * const destinationHighlight = await prisma.destinationHighlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationHighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationHighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationHighlightClient<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationHighlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationHighlightFindFirstArgs} args - Arguments to find a DestinationHighlight
     * @example
     * // Get one DestinationHighlight
     * const destinationHighlight = await prisma.destinationHighlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationHighlightFindFirstArgs>(args?: SelectSubset<T, DestinationHighlightFindFirstArgs<ExtArgs>>): Prisma__DestinationHighlightClient<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationHighlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationHighlightFindFirstOrThrowArgs} args - Arguments to find a DestinationHighlight
     * @example
     * // Get one DestinationHighlight
     * const destinationHighlight = await prisma.destinationHighlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationHighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationHighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationHighlightClient<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DestinationHighlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationHighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinationHighlights
     * const destinationHighlights = await prisma.destinationHighlight.findMany()
     * 
     * // Get first 10 DestinationHighlights
     * const destinationHighlights = await prisma.destinationHighlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationHighlightWithIdOnly = await prisma.destinationHighlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationHighlightFindManyArgs>(args?: SelectSubset<T, DestinationHighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DestinationHighlight.
     * @param {DestinationHighlightCreateArgs} args - Arguments to create a DestinationHighlight.
     * @example
     * // Create one DestinationHighlight
     * const DestinationHighlight = await prisma.destinationHighlight.create({
     *   data: {
     *     // ... data to create a DestinationHighlight
     *   }
     * })
     * 
     */
    create<T extends DestinationHighlightCreateArgs>(args: SelectSubset<T, DestinationHighlightCreateArgs<ExtArgs>>): Prisma__DestinationHighlightClient<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DestinationHighlights.
     * @param {DestinationHighlightCreateManyArgs} args - Arguments to create many DestinationHighlights.
     * @example
     * // Create many DestinationHighlights
     * const destinationHighlight = await prisma.destinationHighlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationHighlightCreateManyArgs>(args?: SelectSubset<T, DestinationHighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DestinationHighlights and returns the data saved in the database.
     * @param {DestinationHighlightCreateManyAndReturnArgs} args - Arguments to create many DestinationHighlights.
     * @example
     * // Create many DestinationHighlights
     * const destinationHighlight = await prisma.destinationHighlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DestinationHighlights and only return the `id`
     * const destinationHighlightWithIdOnly = await prisma.destinationHighlight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationHighlightCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationHighlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DestinationHighlight.
     * @param {DestinationHighlightDeleteArgs} args - Arguments to delete one DestinationHighlight.
     * @example
     * // Delete one DestinationHighlight
     * const DestinationHighlight = await prisma.destinationHighlight.delete({
     *   where: {
     *     // ... filter to delete one DestinationHighlight
     *   }
     * })
     * 
     */
    delete<T extends DestinationHighlightDeleteArgs>(args: SelectSubset<T, DestinationHighlightDeleteArgs<ExtArgs>>): Prisma__DestinationHighlightClient<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DestinationHighlight.
     * @param {DestinationHighlightUpdateArgs} args - Arguments to update one DestinationHighlight.
     * @example
     * // Update one DestinationHighlight
     * const destinationHighlight = await prisma.destinationHighlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationHighlightUpdateArgs>(args: SelectSubset<T, DestinationHighlightUpdateArgs<ExtArgs>>): Prisma__DestinationHighlightClient<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DestinationHighlights.
     * @param {DestinationHighlightDeleteManyArgs} args - Arguments to filter DestinationHighlights to delete.
     * @example
     * // Delete a few DestinationHighlights
     * const { count } = await prisma.destinationHighlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationHighlightDeleteManyArgs>(args?: SelectSubset<T, DestinationHighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationHighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationHighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinationHighlights
     * const destinationHighlight = await prisma.destinationHighlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationHighlightUpdateManyArgs>(args: SelectSubset<T, DestinationHighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationHighlights and returns the data updated in the database.
     * @param {DestinationHighlightUpdateManyAndReturnArgs} args - Arguments to update many DestinationHighlights.
     * @example
     * // Update many DestinationHighlights
     * const destinationHighlight = await prisma.destinationHighlight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DestinationHighlights and only return the `id`
     * const destinationHighlightWithIdOnly = await prisma.destinationHighlight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationHighlightUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationHighlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DestinationHighlight.
     * @param {DestinationHighlightUpsertArgs} args - Arguments to update or create a DestinationHighlight.
     * @example
     * // Update or create a DestinationHighlight
     * const destinationHighlight = await prisma.destinationHighlight.upsert({
     *   create: {
     *     // ... data to create a DestinationHighlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinationHighlight we want to update
     *   }
     * })
     */
    upsert<T extends DestinationHighlightUpsertArgs>(args: SelectSubset<T, DestinationHighlightUpsertArgs<ExtArgs>>): Prisma__DestinationHighlightClient<$Result.GetResult<Prisma.$DestinationHighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DestinationHighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationHighlightCountArgs} args - Arguments to filter DestinationHighlights to count.
     * @example
     * // Count the number of DestinationHighlights
     * const count = await prisma.destinationHighlight.count({
     *   where: {
     *     // ... the filter for the DestinationHighlights we want to count
     *   }
     * })
    **/
    count<T extends DestinationHighlightCountArgs>(
      args?: Subset<T, DestinationHighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationHighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DestinationHighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationHighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationHighlightAggregateArgs>(args: Subset<T, DestinationHighlightAggregateArgs>): Prisma.PrismaPromise<GetDestinationHighlightAggregateType<T>>

    /**
     * Group by DestinationHighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationHighlightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationHighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationHighlightGroupByArgs['orderBy'] }
        : { orderBy?: DestinationHighlightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationHighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DestinationHighlight model
   */
  readonly fields: DestinationHighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DestinationHighlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationHighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DestinationHighlight model
   */
  interface DestinationHighlightFieldRefs {
    readonly id: FieldRef<"DestinationHighlight", 'String'>
    readonly title: FieldRef<"DestinationHighlight", 'String'>
    readonly description: FieldRef<"DestinationHighlight", 'String'>
    readonly image: FieldRef<"DestinationHighlight", 'String'>
    readonly destinationId: FieldRef<"DestinationHighlight", 'String'>
    readonly createdAt: FieldRef<"DestinationHighlight", 'DateTime'>
    readonly updatedAt: FieldRef<"DestinationHighlight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DestinationHighlight findUnique
   */
  export type DestinationHighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * Filter, which DestinationHighlight to fetch.
     */
    where: DestinationHighlightWhereUniqueInput
  }

  /**
   * DestinationHighlight findUniqueOrThrow
   */
  export type DestinationHighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * Filter, which DestinationHighlight to fetch.
     */
    where: DestinationHighlightWhereUniqueInput
  }

  /**
   * DestinationHighlight findFirst
   */
  export type DestinationHighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * Filter, which DestinationHighlight to fetch.
     */
    where?: DestinationHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationHighlights to fetch.
     */
    orderBy?: DestinationHighlightOrderByWithRelationInput | DestinationHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationHighlights.
     */
    cursor?: DestinationHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationHighlights.
     */
    distinct?: DestinationHighlightScalarFieldEnum | DestinationHighlightScalarFieldEnum[]
  }

  /**
   * DestinationHighlight findFirstOrThrow
   */
  export type DestinationHighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * Filter, which DestinationHighlight to fetch.
     */
    where?: DestinationHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationHighlights to fetch.
     */
    orderBy?: DestinationHighlightOrderByWithRelationInput | DestinationHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationHighlights.
     */
    cursor?: DestinationHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationHighlights.
     */
    distinct?: DestinationHighlightScalarFieldEnum | DestinationHighlightScalarFieldEnum[]
  }

  /**
   * DestinationHighlight findMany
   */
  export type DestinationHighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * Filter, which DestinationHighlights to fetch.
     */
    where?: DestinationHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationHighlights to fetch.
     */
    orderBy?: DestinationHighlightOrderByWithRelationInput | DestinationHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DestinationHighlights.
     */
    cursor?: DestinationHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationHighlights.
     */
    skip?: number
    distinct?: DestinationHighlightScalarFieldEnum | DestinationHighlightScalarFieldEnum[]
  }

  /**
   * DestinationHighlight create
   */
  export type DestinationHighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a DestinationHighlight.
     */
    data: XOR<DestinationHighlightCreateInput, DestinationHighlightUncheckedCreateInput>
  }

  /**
   * DestinationHighlight createMany
   */
  export type DestinationHighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DestinationHighlights.
     */
    data: DestinationHighlightCreateManyInput | DestinationHighlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DestinationHighlight createManyAndReturn
   */
  export type DestinationHighlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * The data used to create many DestinationHighlights.
     */
    data: DestinationHighlightCreateManyInput | DestinationHighlightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationHighlight update
   */
  export type DestinationHighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a DestinationHighlight.
     */
    data: XOR<DestinationHighlightUpdateInput, DestinationHighlightUncheckedUpdateInput>
    /**
     * Choose, which DestinationHighlight to update.
     */
    where: DestinationHighlightWhereUniqueInput
  }

  /**
   * DestinationHighlight updateMany
   */
  export type DestinationHighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DestinationHighlights.
     */
    data: XOR<DestinationHighlightUpdateManyMutationInput, DestinationHighlightUncheckedUpdateManyInput>
    /**
     * Filter which DestinationHighlights to update
     */
    where?: DestinationHighlightWhereInput
    /**
     * Limit how many DestinationHighlights to update.
     */
    limit?: number
  }

  /**
   * DestinationHighlight updateManyAndReturn
   */
  export type DestinationHighlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * The data used to update DestinationHighlights.
     */
    data: XOR<DestinationHighlightUpdateManyMutationInput, DestinationHighlightUncheckedUpdateManyInput>
    /**
     * Filter which DestinationHighlights to update
     */
    where?: DestinationHighlightWhereInput
    /**
     * Limit how many DestinationHighlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationHighlight upsert
   */
  export type DestinationHighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the DestinationHighlight to update in case it exists.
     */
    where: DestinationHighlightWhereUniqueInput
    /**
     * In case the DestinationHighlight found by the `where` argument doesn't exist, create a new DestinationHighlight with this data.
     */
    create: XOR<DestinationHighlightCreateInput, DestinationHighlightUncheckedCreateInput>
    /**
     * In case the DestinationHighlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationHighlightUpdateInput, DestinationHighlightUncheckedUpdateInput>
  }

  /**
   * DestinationHighlight delete
   */
  export type DestinationHighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
    /**
     * Filter which DestinationHighlight to delete.
     */
    where: DestinationHighlightWhereUniqueInput
  }

  /**
   * DestinationHighlight deleteMany
   */
  export type DestinationHighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationHighlights to delete
     */
    where?: DestinationHighlightWhereInput
    /**
     * Limit how many DestinationHighlights to delete.
     */
    limit?: number
  }

  /**
   * DestinationHighlight without action
   */
  export type DestinationHighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationHighlight
     */
    select?: DestinationHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationHighlight
     */
    omit?: DestinationHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationHighlightInclude<ExtArgs> | null
  }


  /**
   * Model PlaceMentioned
   */

  export type AggregatePlaceMentioned = {
    _count: PlaceMentionedCountAggregateOutputType | null
    _avg: PlaceMentionedAvgAggregateOutputType | null
    _sum: PlaceMentionedSumAggregateOutputType | null
    _min: PlaceMentionedMinAggregateOutputType | null
    _max: PlaceMentionedMaxAggregateOutputType | null
  }

  export type PlaceMentionedAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PlaceMentionedSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PlaceMentionedMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    latitude: number | null
    longitude: number | null
    postId: string | null
  }

  export type PlaceMentionedMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    latitude: number | null
    longitude: number | null
    postId: string | null
  }

  export type PlaceMentionedCountAggregateOutputType = {
    id: number
    name: number
    url: number
    latitude: number
    longitude: number
    postId: number
    _all: number
  }


  export type PlaceMentionedAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PlaceMentionedSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PlaceMentionedMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    latitude?: true
    longitude?: true
    postId?: true
  }

  export type PlaceMentionedMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    latitude?: true
    longitude?: true
    postId?: true
  }

  export type PlaceMentionedCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    latitude?: true
    longitude?: true
    postId?: true
    _all?: true
  }

  export type PlaceMentionedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaceMentioned to aggregate.
     */
    where?: PlaceMentionedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceMentioneds to fetch.
     */
    orderBy?: PlaceMentionedOrderByWithRelationInput | PlaceMentionedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceMentionedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceMentioneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceMentioneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaceMentioneds
    **/
    _count?: true | PlaceMentionedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaceMentionedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaceMentionedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMentionedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMentionedMaxAggregateInputType
  }

  export type GetPlaceMentionedAggregateType<T extends PlaceMentionedAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaceMentioned]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaceMentioned[P]>
      : GetScalarType<T[P], AggregatePlaceMentioned[P]>
  }




  export type PlaceMentionedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceMentionedWhereInput
    orderBy?: PlaceMentionedOrderByWithAggregationInput | PlaceMentionedOrderByWithAggregationInput[]
    by: PlaceMentionedScalarFieldEnum[] | PlaceMentionedScalarFieldEnum
    having?: PlaceMentionedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceMentionedCountAggregateInputType | true
    _avg?: PlaceMentionedAvgAggregateInputType
    _sum?: PlaceMentionedSumAggregateInputType
    _min?: PlaceMentionedMinAggregateInputType
    _max?: PlaceMentionedMaxAggregateInputType
  }

  export type PlaceMentionedGroupByOutputType = {
    id: string
    name: string
    url: string | null
    latitude: number | null
    longitude: number | null
    postId: string
    _count: PlaceMentionedCountAggregateOutputType | null
    _avg: PlaceMentionedAvgAggregateOutputType | null
    _sum: PlaceMentionedSumAggregateOutputType | null
    _min: PlaceMentionedMinAggregateOutputType | null
    _max: PlaceMentionedMaxAggregateOutputType | null
  }

  type GetPlaceMentionedGroupByPayload<T extends PlaceMentionedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceMentionedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceMentionedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceMentionedGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceMentionedGroupByOutputType[P]>
        }
      >
    >


  export type PlaceMentionedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    latitude?: boolean
    longitude?: boolean
    postId?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placeMentioned"]>

  export type PlaceMentionedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    latitude?: boolean
    longitude?: boolean
    postId?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placeMentioned"]>

  export type PlaceMentionedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    latitude?: boolean
    longitude?: boolean
    postId?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["placeMentioned"]>

  export type PlaceMentionedSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    latitude?: boolean
    longitude?: boolean
    postId?: boolean
  }

  export type PlaceMentionedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "latitude" | "longitude" | "postId", ExtArgs["result"]["placeMentioned"]>
  export type PlaceMentionedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type PlaceMentionedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }
  export type PlaceMentionedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
  }

  export type $PlaceMentionedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaceMentioned"
    objects: {
      post: Prisma.$BlogPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string | null
      latitude: number | null
      longitude: number | null
      postId: string
    }, ExtArgs["result"]["placeMentioned"]>
    composites: {}
  }

  type PlaceMentionedGetPayload<S extends boolean | null | undefined | PlaceMentionedDefaultArgs> = $Result.GetResult<Prisma.$PlaceMentionedPayload, S>

  type PlaceMentionedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaceMentionedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaceMentionedCountAggregateInputType | true
    }

  export interface PlaceMentionedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaceMentioned'], meta: { name: 'PlaceMentioned' } }
    /**
     * Find zero or one PlaceMentioned that matches the filter.
     * @param {PlaceMentionedFindUniqueArgs} args - Arguments to find a PlaceMentioned
     * @example
     * // Get one PlaceMentioned
     * const placeMentioned = await prisma.placeMentioned.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceMentionedFindUniqueArgs>(args: SelectSubset<T, PlaceMentionedFindUniqueArgs<ExtArgs>>): Prisma__PlaceMentionedClient<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaceMentioned that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaceMentionedFindUniqueOrThrowArgs} args - Arguments to find a PlaceMentioned
     * @example
     * // Get one PlaceMentioned
     * const placeMentioned = await prisma.placeMentioned.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceMentionedFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceMentionedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceMentionedClient<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaceMentioned that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceMentionedFindFirstArgs} args - Arguments to find a PlaceMentioned
     * @example
     * // Get one PlaceMentioned
     * const placeMentioned = await prisma.placeMentioned.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceMentionedFindFirstArgs>(args?: SelectSubset<T, PlaceMentionedFindFirstArgs<ExtArgs>>): Prisma__PlaceMentionedClient<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaceMentioned that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceMentionedFindFirstOrThrowArgs} args - Arguments to find a PlaceMentioned
     * @example
     * // Get one PlaceMentioned
     * const placeMentioned = await prisma.placeMentioned.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceMentionedFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceMentionedFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceMentionedClient<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaceMentioneds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceMentionedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaceMentioneds
     * const placeMentioneds = await prisma.placeMentioned.findMany()
     * 
     * // Get first 10 PlaceMentioneds
     * const placeMentioneds = await prisma.placeMentioned.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeMentionedWithIdOnly = await prisma.placeMentioned.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceMentionedFindManyArgs>(args?: SelectSubset<T, PlaceMentionedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaceMentioned.
     * @param {PlaceMentionedCreateArgs} args - Arguments to create a PlaceMentioned.
     * @example
     * // Create one PlaceMentioned
     * const PlaceMentioned = await prisma.placeMentioned.create({
     *   data: {
     *     // ... data to create a PlaceMentioned
     *   }
     * })
     * 
     */
    create<T extends PlaceMentionedCreateArgs>(args: SelectSubset<T, PlaceMentionedCreateArgs<ExtArgs>>): Prisma__PlaceMentionedClient<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaceMentioneds.
     * @param {PlaceMentionedCreateManyArgs} args - Arguments to create many PlaceMentioneds.
     * @example
     * // Create many PlaceMentioneds
     * const placeMentioned = await prisma.placeMentioned.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceMentionedCreateManyArgs>(args?: SelectSubset<T, PlaceMentionedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaceMentioneds and returns the data saved in the database.
     * @param {PlaceMentionedCreateManyAndReturnArgs} args - Arguments to create many PlaceMentioneds.
     * @example
     * // Create many PlaceMentioneds
     * const placeMentioned = await prisma.placeMentioned.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaceMentioneds and only return the `id`
     * const placeMentionedWithIdOnly = await prisma.placeMentioned.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaceMentionedCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaceMentionedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaceMentioned.
     * @param {PlaceMentionedDeleteArgs} args - Arguments to delete one PlaceMentioned.
     * @example
     * // Delete one PlaceMentioned
     * const PlaceMentioned = await prisma.placeMentioned.delete({
     *   where: {
     *     // ... filter to delete one PlaceMentioned
     *   }
     * })
     * 
     */
    delete<T extends PlaceMentionedDeleteArgs>(args: SelectSubset<T, PlaceMentionedDeleteArgs<ExtArgs>>): Prisma__PlaceMentionedClient<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaceMentioned.
     * @param {PlaceMentionedUpdateArgs} args - Arguments to update one PlaceMentioned.
     * @example
     * // Update one PlaceMentioned
     * const placeMentioned = await prisma.placeMentioned.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceMentionedUpdateArgs>(args: SelectSubset<T, PlaceMentionedUpdateArgs<ExtArgs>>): Prisma__PlaceMentionedClient<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaceMentioneds.
     * @param {PlaceMentionedDeleteManyArgs} args - Arguments to filter PlaceMentioneds to delete.
     * @example
     * // Delete a few PlaceMentioneds
     * const { count } = await prisma.placeMentioned.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceMentionedDeleteManyArgs>(args?: SelectSubset<T, PlaceMentionedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaceMentioneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceMentionedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaceMentioneds
     * const placeMentioned = await prisma.placeMentioned.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceMentionedUpdateManyArgs>(args: SelectSubset<T, PlaceMentionedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaceMentioneds and returns the data updated in the database.
     * @param {PlaceMentionedUpdateManyAndReturnArgs} args - Arguments to update many PlaceMentioneds.
     * @example
     * // Update many PlaceMentioneds
     * const placeMentioned = await prisma.placeMentioned.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaceMentioneds and only return the `id`
     * const placeMentionedWithIdOnly = await prisma.placeMentioned.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaceMentionedUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaceMentionedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaceMentioned.
     * @param {PlaceMentionedUpsertArgs} args - Arguments to update or create a PlaceMentioned.
     * @example
     * // Update or create a PlaceMentioned
     * const placeMentioned = await prisma.placeMentioned.upsert({
     *   create: {
     *     // ... data to create a PlaceMentioned
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaceMentioned we want to update
     *   }
     * })
     */
    upsert<T extends PlaceMentionedUpsertArgs>(args: SelectSubset<T, PlaceMentionedUpsertArgs<ExtArgs>>): Prisma__PlaceMentionedClient<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaceMentioneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceMentionedCountArgs} args - Arguments to filter PlaceMentioneds to count.
     * @example
     * // Count the number of PlaceMentioneds
     * const count = await prisma.placeMentioned.count({
     *   where: {
     *     // ... the filter for the PlaceMentioneds we want to count
     *   }
     * })
    **/
    count<T extends PlaceMentionedCountArgs>(
      args?: Subset<T, PlaceMentionedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceMentionedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaceMentioned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceMentionedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaceMentionedAggregateArgs>(args: Subset<T, PlaceMentionedAggregateArgs>): Prisma.PrismaPromise<GetPlaceMentionedAggregateType<T>>

    /**
     * Group by PlaceMentioned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceMentionedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaceMentionedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceMentionedGroupByArgs['orderBy'] }
        : { orderBy?: PlaceMentionedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaceMentionedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceMentionedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaceMentioned model
   */
  readonly fields: PlaceMentionedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaceMentioned.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceMentionedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaceMentioned model
   */
  interface PlaceMentionedFieldRefs {
    readonly id: FieldRef<"PlaceMentioned", 'String'>
    readonly name: FieldRef<"PlaceMentioned", 'String'>
    readonly url: FieldRef<"PlaceMentioned", 'String'>
    readonly latitude: FieldRef<"PlaceMentioned", 'Float'>
    readonly longitude: FieldRef<"PlaceMentioned", 'Float'>
    readonly postId: FieldRef<"PlaceMentioned", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlaceMentioned findUnique
   */
  export type PlaceMentionedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * Filter, which PlaceMentioned to fetch.
     */
    where: PlaceMentionedWhereUniqueInput
  }

  /**
   * PlaceMentioned findUniqueOrThrow
   */
  export type PlaceMentionedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * Filter, which PlaceMentioned to fetch.
     */
    where: PlaceMentionedWhereUniqueInput
  }

  /**
   * PlaceMentioned findFirst
   */
  export type PlaceMentionedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * Filter, which PlaceMentioned to fetch.
     */
    where?: PlaceMentionedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceMentioneds to fetch.
     */
    orderBy?: PlaceMentionedOrderByWithRelationInput | PlaceMentionedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaceMentioneds.
     */
    cursor?: PlaceMentionedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceMentioneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceMentioneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaceMentioneds.
     */
    distinct?: PlaceMentionedScalarFieldEnum | PlaceMentionedScalarFieldEnum[]
  }

  /**
   * PlaceMentioned findFirstOrThrow
   */
  export type PlaceMentionedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * Filter, which PlaceMentioned to fetch.
     */
    where?: PlaceMentionedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceMentioneds to fetch.
     */
    orderBy?: PlaceMentionedOrderByWithRelationInput | PlaceMentionedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaceMentioneds.
     */
    cursor?: PlaceMentionedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceMentioneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceMentioneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaceMentioneds.
     */
    distinct?: PlaceMentionedScalarFieldEnum | PlaceMentionedScalarFieldEnum[]
  }

  /**
   * PlaceMentioned findMany
   */
  export type PlaceMentionedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * Filter, which PlaceMentioneds to fetch.
     */
    where?: PlaceMentionedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaceMentioneds to fetch.
     */
    orderBy?: PlaceMentionedOrderByWithRelationInput | PlaceMentionedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaceMentioneds.
     */
    cursor?: PlaceMentionedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaceMentioneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaceMentioneds.
     */
    skip?: number
    distinct?: PlaceMentionedScalarFieldEnum | PlaceMentionedScalarFieldEnum[]
  }

  /**
   * PlaceMentioned create
   */
  export type PlaceMentionedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaceMentioned.
     */
    data: XOR<PlaceMentionedCreateInput, PlaceMentionedUncheckedCreateInput>
  }

  /**
   * PlaceMentioned createMany
   */
  export type PlaceMentionedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaceMentioneds.
     */
    data: PlaceMentionedCreateManyInput | PlaceMentionedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaceMentioned createManyAndReturn
   */
  export type PlaceMentionedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * The data used to create many PlaceMentioneds.
     */
    data: PlaceMentionedCreateManyInput | PlaceMentionedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaceMentioned update
   */
  export type PlaceMentionedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaceMentioned.
     */
    data: XOR<PlaceMentionedUpdateInput, PlaceMentionedUncheckedUpdateInput>
    /**
     * Choose, which PlaceMentioned to update.
     */
    where: PlaceMentionedWhereUniqueInput
  }

  /**
   * PlaceMentioned updateMany
   */
  export type PlaceMentionedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaceMentioneds.
     */
    data: XOR<PlaceMentionedUpdateManyMutationInput, PlaceMentionedUncheckedUpdateManyInput>
    /**
     * Filter which PlaceMentioneds to update
     */
    where?: PlaceMentionedWhereInput
    /**
     * Limit how many PlaceMentioneds to update.
     */
    limit?: number
  }

  /**
   * PlaceMentioned updateManyAndReturn
   */
  export type PlaceMentionedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * The data used to update PlaceMentioneds.
     */
    data: XOR<PlaceMentionedUpdateManyMutationInput, PlaceMentionedUncheckedUpdateManyInput>
    /**
     * Filter which PlaceMentioneds to update
     */
    where?: PlaceMentionedWhereInput
    /**
     * Limit how many PlaceMentioneds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaceMentioned upsert
   */
  export type PlaceMentionedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaceMentioned to update in case it exists.
     */
    where: PlaceMentionedWhereUniqueInput
    /**
     * In case the PlaceMentioned found by the `where` argument doesn't exist, create a new PlaceMentioned with this data.
     */
    create: XOR<PlaceMentionedCreateInput, PlaceMentionedUncheckedCreateInput>
    /**
     * In case the PlaceMentioned was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceMentionedUpdateInput, PlaceMentionedUncheckedUpdateInput>
  }

  /**
   * PlaceMentioned delete
   */
  export type PlaceMentionedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    /**
     * Filter which PlaceMentioned to delete.
     */
    where: PlaceMentionedWhereUniqueInput
  }

  /**
   * PlaceMentioned deleteMany
   */
  export type PlaceMentionedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaceMentioneds to delete
     */
    where?: PlaceMentionedWhereInput
    /**
     * Limit how many PlaceMentioneds to delete.
     */
    limit?: number
  }

  /**
   * PlaceMentioned without action
   */
  export type PlaceMentionedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
  }


  /**
   * Model BlogCategory
   */

  export type AggregateBlogCategory = {
    _count: BlogCategoryCountAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  export type BlogCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
  }

  export type BlogCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
  }

  export type BlogCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    _all: number
  }


  export type BlogCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
  }

  export type BlogCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
  }

  export type BlogCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    _all?: true
  }

  export type BlogCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategory to aggregate.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogCategories
    **/
    _count?: true | BlogCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type GetBlogCategoryAggregateType<T extends BlogCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogCategory[P]>
      : GetScalarType<T[P], AggregateBlogCategory[P]>
  }




  export type BlogCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithAggregationInput | BlogCategoryOrderByWithAggregationInput[]
    by: BlogCategoryScalarFieldEnum[] | BlogCategoryScalarFieldEnum
    having?: BlogCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCategoryCountAggregateInputType | true
    _min?: BlogCategoryMinAggregateInputType
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type BlogCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    _count: BlogCategoryCountAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  type GetBlogCategoryGroupByPayload<T extends BlogCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlogCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    posts?: boolean | BlogCategory$postsArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
  }

  export type BlogCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description", ExtArgs["result"]["blogCategory"]>
  export type BlogCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | BlogCategory$postsArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogCategory"
    objects: {
      posts: Prisma.$BlogPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
    }, ExtArgs["result"]["blogCategory"]>
    composites: {}
  }

  type BlogCategoryGetPayload<S extends boolean | null | undefined | BlogCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlogCategoryPayload, S>

  type BlogCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCategoryCountAggregateInputType | true
    }

  export interface BlogCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogCategory'], meta: { name: 'BlogCategory' } }
    /**
     * Find zero or one BlogCategory that matches the filter.
     * @param {BlogCategoryFindUniqueArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCategoryFindUniqueArgs>(args: SelectSubset<T, BlogCategoryFindUniqueArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCategoryFindFirstArgs>(args?: SelectSubset<T, BlogCategoryFindFirstArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany()
     * 
     * // Get first 10 BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogCategoryFindManyArgs>(args?: SelectSubset<T, BlogCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogCategory.
     * @param {BlogCategoryCreateArgs} args - Arguments to create a BlogCategory.
     * @example
     * // Create one BlogCategory
     * const BlogCategory = await prisma.blogCategory.create({
     *   data: {
     *     // ... data to create a BlogCategory
     *   }
     * })
     * 
     */
    create<T extends BlogCategoryCreateArgs>(args: SelectSubset<T, BlogCategoryCreateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogCategories.
     * @param {BlogCategoryCreateManyArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCategoryCreateManyArgs>(args?: SelectSubset<T, BlogCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogCategories and returns the data saved in the database.
     * @param {BlogCategoryCreateManyAndReturnArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogCategories and only return the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogCategory.
     * @param {BlogCategoryDeleteArgs} args - Arguments to delete one BlogCategory.
     * @example
     * // Delete one BlogCategory
     * const BlogCategory = await prisma.blogCategory.delete({
     *   where: {
     *     // ... filter to delete one BlogCategory
     *   }
     * })
     * 
     */
    delete<T extends BlogCategoryDeleteArgs>(args: SelectSubset<T, BlogCategoryDeleteArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogCategory.
     * @param {BlogCategoryUpdateArgs} args - Arguments to update one BlogCategory.
     * @example
     * // Update one BlogCategory
     * const blogCategory = await prisma.blogCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCategoryUpdateArgs>(args: SelectSubset<T, BlogCategoryUpdateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogCategories.
     * @param {BlogCategoryDeleteManyArgs} args - Arguments to filter BlogCategories to delete.
     * @example
     * // Delete a few BlogCategories
     * const { count } = await prisma.blogCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCategoryDeleteManyArgs>(args?: SelectSubset<T, BlogCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCategoryUpdateManyArgs>(args: SelectSubset<T, BlogCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories and returns the data updated in the database.
     * @param {BlogCategoryUpdateManyAndReturnArgs} args - Arguments to update many BlogCategories.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogCategories and only return the `id`
     * const blogCategoryWithIdOnly = await prisma.blogCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogCategory.
     * @param {BlogCategoryUpsertArgs} args - Arguments to update or create a BlogCategory.
     * @example
     * // Update or create a BlogCategory
     * const blogCategory = await prisma.blogCategory.upsert({
     *   create: {
     *     // ... data to create a BlogCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogCategory we want to update
     *   }
     * })
     */
    upsert<T extends BlogCategoryUpsertArgs>(args: SelectSubset<T, BlogCategoryUpsertArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryCountArgs} args - Arguments to filter BlogCategories to count.
     * @example
     * // Count the number of BlogCategories
     * const count = await prisma.blogCategory.count({
     *   where: {
     *     // ... the filter for the BlogCategories we want to count
     *   }
     * })
    **/
    count<T extends BlogCategoryCountArgs>(
      args?: Subset<T, BlogCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogCategoryAggregateArgs>(args: Subset<T, BlogCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlogCategoryAggregateType<T>>

    /**
     * Group by BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlogCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogCategory model
   */
  readonly fields: BlogCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends BlogCategory$postsArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogCategory model
   */
  interface BlogCategoryFieldRefs {
    readonly id: FieldRef<"BlogCategory", 'String'>
    readonly name: FieldRef<"BlogCategory", 'String'>
    readonly slug: FieldRef<"BlogCategory", 'String'>
    readonly description: FieldRef<"BlogCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogCategory findUnique
   */
  export type BlogCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findUniqueOrThrow
   */
  export type BlogCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findFirst
   */
  export type BlogCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findFirstOrThrow
   */
  export type BlogCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findMany
   */
  export type BlogCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategories to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory create
   */
  export type BlogCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogCategory.
     */
    data: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
  }

  /**
   * BlogCategory createMany
   */
  export type BlogCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogCategory createManyAndReturn
   */
  export type BlogCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogCategory update
   */
  export type BlogCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogCategory.
     */
    data: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlogCategory to update.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory updateMany
   */
  export type BlogCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
  }

  /**
   * BlogCategory updateManyAndReturn
   */
  export type BlogCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
  }

  /**
   * BlogCategory upsert
   */
  export type BlogCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogCategory to update in case it exists.
     */
    where: BlogCategoryWhereUniqueInput
    /**
     * In case the BlogCategory found by the `where` argument doesn't exist, create a new BlogCategory with this data.
     */
    create: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
    /**
     * In case the BlogCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
  }

  /**
   * BlogCategory delete
   */
  export type BlogCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter which BlogCategory to delete.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory deleteMany
   */
  export type BlogCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategories to delete
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to delete.
     */
    limit?: number
  }

  /**
   * BlogCategory.posts
   */
  export type BlogCategory$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogCategory without action
   */
  export type BlogCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
  }


  /**
   * Model BlogTag
   */

  export type AggregateBlogTag = {
    _count: BlogTagCountAggregateOutputType | null
    _min: BlogTagMinAggregateOutputType | null
    _max: BlogTagMaxAggregateOutputType | null
  }

  export type BlogTagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type BlogTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type BlogTagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type BlogTagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type BlogTagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type BlogTagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type BlogTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogTag to aggregate.
     */
    where?: BlogTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogTags to fetch.
     */
    orderBy?: BlogTagOrderByWithRelationInput | BlogTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogTags
    **/
    _count?: true | BlogTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogTagMaxAggregateInputType
  }

  export type GetBlogTagAggregateType<T extends BlogTagAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogTag[P]>
      : GetScalarType<T[P], AggregateBlogTag[P]>
  }




  export type BlogTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogTagWhereInput
    orderBy?: BlogTagOrderByWithAggregationInput | BlogTagOrderByWithAggregationInput[]
    by: BlogTagScalarFieldEnum[] | BlogTagScalarFieldEnum
    having?: BlogTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogTagCountAggregateInputType | true
    _min?: BlogTagMinAggregateInputType
    _max?: BlogTagMaxAggregateInputType
  }

  export type BlogTagGroupByOutputType = {
    id: string
    name: string
    slug: string
    _count: BlogTagCountAggregateOutputType | null
    _min: BlogTagMinAggregateOutputType | null
    _max: BlogTagMaxAggregateOutputType | null
  }

  type GetBlogTagGroupByPayload<T extends BlogTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogTagGroupByOutputType[P]>
            : GetScalarType<T[P], BlogTagGroupByOutputType[P]>
        }
      >
    >


  export type BlogTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    posts?: boolean | BlogTag$postsArgs<ExtArgs>
    _count?: boolean | BlogTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogTag"]>

  export type BlogTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["blogTag"]>

  export type BlogTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["blogTag"]>

  export type BlogTagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type BlogTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["blogTag"]>
  export type BlogTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | BlogTag$postsArgs<ExtArgs>
    _count?: boolean | BlogTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogTag"
    objects: {
      posts: Prisma.$BlogPostTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
    }, ExtArgs["result"]["blogTag"]>
    composites: {}
  }

  type BlogTagGetPayload<S extends boolean | null | undefined | BlogTagDefaultArgs> = $Result.GetResult<Prisma.$BlogTagPayload, S>

  type BlogTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogTagCountAggregateInputType | true
    }

  export interface BlogTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogTag'], meta: { name: 'BlogTag' } }
    /**
     * Find zero or one BlogTag that matches the filter.
     * @param {BlogTagFindUniqueArgs} args - Arguments to find a BlogTag
     * @example
     * // Get one BlogTag
     * const blogTag = await prisma.blogTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogTagFindUniqueArgs>(args: SelectSubset<T, BlogTagFindUniqueArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogTagFindUniqueOrThrowArgs} args - Arguments to find a BlogTag
     * @example
     * // Get one BlogTag
     * const blogTag = await prisma.blogTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogTagFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogTagFindFirstArgs} args - Arguments to find a BlogTag
     * @example
     * // Get one BlogTag
     * const blogTag = await prisma.blogTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogTagFindFirstArgs>(args?: SelectSubset<T, BlogTagFindFirstArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogTagFindFirstOrThrowArgs} args - Arguments to find a BlogTag
     * @example
     * // Get one BlogTag
     * const blogTag = await prisma.blogTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogTagFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogTags
     * const blogTags = await prisma.blogTag.findMany()
     * 
     * // Get first 10 BlogTags
     * const blogTags = await prisma.blogTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogTagWithIdOnly = await prisma.blogTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogTagFindManyArgs>(args?: SelectSubset<T, BlogTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogTag.
     * @param {BlogTagCreateArgs} args - Arguments to create a BlogTag.
     * @example
     * // Create one BlogTag
     * const BlogTag = await prisma.blogTag.create({
     *   data: {
     *     // ... data to create a BlogTag
     *   }
     * })
     * 
     */
    create<T extends BlogTagCreateArgs>(args: SelectSubset<T, BlogTagCreateArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogTags.
     * @param {BlogTagCreateManyArgs} args - Arguments to create many BlogTags.
     * @example
     * // Create many BlogTags
     * const blogTag = await prisma.blogTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogTagCreateManyArgs>(args?: SelectSubset<T, BlogTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogTags and returns the data saved in the database.
     * @param {BlogTagCreateManyAndReturnArgs} args - Arguments to create many BlogTags.
     * @example
     * // Create many BlogTags
     * const blogTag = await prisma.blogTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogTags and only return the `id`
     * const blogTagWithIdOnly = await prisma.blogTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogTagCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogTag.
     * @param {BlogTagDeleteArgs} args - Arguments to delete one BlogTag.
     * @example
     * // Delete one BlogTag
     * const BlogTag = await prisma.blogTag.delete({
     *   where: {
     *     // ... filter to delete one BlogTag
     *   }
     * })
     * 
     */
    delete<T extends BlogTagDeleteArgs>(args: SelectSubset<T, BlogTagDeleteArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogTag.
     * @param {BlogTagUpdateArgs} args - Arguments to update one BlogTag.
     * @example
     * // Update one BlogTag
     * const blogTag = await prisma.blogTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogTagUpdateArgs>(args: SelectSubset<T, BlogTagUpdateArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogTags.
     * @param {BlogTagDeleteManyArgs} args - Arguments to filter BlogTags to delete.
     * @example
     * // Delete a few BlogTags
     * const { count } = await prisma.blogTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogTagDeleteManyArgs>(args?: SelectSubset<T, BlogTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogTags
     * const blogTag = await prisma.blogTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogTagUpdateManyArgs>(args: SelectSubset<T, BlogTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogTags and returns the data updated in the database.
     * @param {BlogTagUpdateManyAndReturnArgs} args - Arguments to update many BlogTags.
     * @example
     * // Update many BlogTags
     * const blogTag = await prisma.blogTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogTags and only return the `id`
     * const blogTagWithIdOnly = await prisma.blogTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogTagUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogTag.
     * @param {BlogTagUpsertArgs} args - Arguments to update or create a BlogTag.
     * @example
     * // Update or create a BlogTag
     * const blogTag = await prisma.blogTag.upsert({
     *   create: {
     *     // ... data to create a BlogTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogTag we want to update
     *   }
     * })
     */
    upsert<T extends BlogTagUpsertArgs>(args: SelectSubset<T, BlogTagUpsertArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogTagCountArgs} args - Arguments to filter BlogTags to count.
     * @example
     * // Count the number of BlogTags
     * const count = await prisma.blogTag.count({
     *   where: {
     *     // ... the filter for the BlogTags we want to count
     *   }
     * })
    **/
    count<T extends BlogTagCountArgs>(
      args?: Subset<T, BlogTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogTagAggregateArgs>(args: Subset<T, BlogTagAggregateArgs>): Prisma.PrismaPromise<GetBlogTagAggregateType<T>>

    /**
     * Group by BlogTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogTagGroupByArgs['orderBy'] }
        : { orderBy?: BlogTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogTag model
   */
  readonly fields: BlogTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends BlogTag$postsArgs<ExtArgs> = {}>(args?: Subset<T, BlogTag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogTag model
   */
  interface BlogTagFieldRefs {
    readonly id: FieldRef<"BlogTag", 'String'>
    readonly name: FieldRef<"BlogTag", 'String'>
    readonly slug: FieldRef<"BlogTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogTag findUnique
   */
  export type BlogTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogTag to fetch.
     */
    where: BlogTagWhereUniqueInput
  }

  /**
   * BlogTag findUniqueOrThrow
   */
  export type BlogTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogTag to fetch.
     */
    where: BlogTagWhereUniqueInput
  }

  /**
   * BlogTag findFirst
   */
  export type BlogTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogTag to fetch.
     */
    where?: BlogTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogTags to fetch.
     */
    orderBy?: BlogTagOrderByWithRelationInput | BlogTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogTags.
     */
    cursor?: BlogTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogTags.
     */
    distinct?: BlogTagScalarFieldEnum | BlogTagScalarFieldEnum[]
  }

  /**
   * BlogTag findFirstOrThrow
   */
  export type BlogTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogTag to fetch.
     */
    where?: BlogTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogTags to fetch.
     */
    orderBy?: BlogTagOrderByWithRelationInput | BlogTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogTags.
     */
    cursor?: BlogTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogTags.
     */
    distinct?: BlogTagScalarFieldEnum | BlogTagScalarFieldEnum[]
  }

  /**
   * BlogTag findMany
   */
  export type BlogTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogTags to fetch.
     */
    where?: BlogTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogTags to fetch.
     */
    orderBy?: BlogTagOrderByWithRelationInput | BlogTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogTags.
     */
    cursor?: BlogTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogTags.
     */
    skip?: number
    distinct?: BlogTagScalarFieldEnum | BlogTagScalarFieldEnum[]
  }

  /**
   * BlogTag create
   */
  export type BlogTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogTag.
     */
    data: XOR<BlogTagCreateInput, BlogTagUncheckedCreateInput>
  }

  /**
   * BlogTag createMany
   */
  export type BlogTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogTags.
     */
    data: BlogTagCreateManyInput | BlogTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogTag createManyAndReturn
   */
  export type BlogTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * The data used to create many BlogTags.
     */
    data: BlogTagCreateManyInput | BlogTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogTag update
   */
  export type BlogTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogTag.
     */
    data: XOR<BlogTagUpdateInput, BlogTagUncheckedUpdateInput>
    /**
     * Choose, which BlogTag to update.
     */
    where: BlogTagWhereUniqueInput
  }

  /**
   * BlogTag updateMany
   */
  export type BlogTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogTags.
     */
    data: XOR<BlogTagUpdateManyMutationInput, BlogTagUncheckedUpdateManyInput>
    /**
     * Filter which BlogTags to update
     */
    where?: BlogTagWhereInput
    /**
     * Limit how many BlogTags to update.
     */
    limit?: number
  }

  /**
   * BlogTag updateManyAndReturn
   */
  export type BlogTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * The data used to update BlogTags.
     */
    data: XOR<BlogTagUpdateManyMutationInput, BlogTagUncheckedUpdateManyInput>
    /**
     * Filter which BlogTags to update
     */
    where?: BlogTagWhereInput
    /**
     * Limit how many BlogTags to update.
     */
    limit?: number
  }

  /**
   * BlogTag upsert
   */
  export type BlogTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogTag to update in case it exists.
     */
    where: BlogTagWhereUniqueInput
    /**
     * In case the BlogTag found by the `where` argument doesn't exist, create a new BlogTag with this data.
     */
    create: XOR<BlogTagCreateInput, BlogTagUncheckedCreateInput>
    /**
     * In case the BlogTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogTagUpdateInput, BlogTagUncheckedUpdateInput>
  }

  /**
   * BlogTag delete
   */
  export type BlogTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
    /**
     * Filter which BlogTag to delete.
     */
    where: BlogTagWhereUniqueInput
  }

  /**
   * BlogTag deleteMany
   */
  export type BlogTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogTags to delete
     */
    where?: BlogTagWhereInput
    /**
     * Limit how many BlogTags to delete.
     */
    limit?: number
  }

  /**
   * BlogTag.posts
   */
  export type BlogTag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    where?: BlogPostTagWhereInput
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    cursor?: BlogPostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogTag without action
   */
  export type BlogTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogTag
     */
    select?: BlogTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogTag
     */
    omit?: BlogTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogTagInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    views: number | null
  }

  export type BlogPostSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    views: number | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    ogImage: string | null
    categoryId: string | null
    destinationId: string | null
    location: string | null
    timeNeeded: string | null
    bestTime: string | null
    latitude: number | null
    longitude: number | null
    articleType: string | null
    authorName: string | null
    authorImage: string | null
    status: $Enums.BlogStatus | null
    featured: boolean | null
    views: number | null
    seoTitle: string | null
    seoDescription: string | null
    seoKeywords: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    ogImage: string | null
    categoryId: string | null
    destinationId: string | null
    location: string | null
    timeNeeded: string | null
    bestTime: string | null
    latitude: number | null
    longitude: number | null
    articleType: string | null
    authorName: string | null
    authorImage: string | null
    status: $Enums.BlogStatus | null
    featured: boolean | null
    views: number | null
    seoTitle: string | null
    seoDescription: string | null
    seoKeywords: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    coverImage: number
    ogImage: number
    categoryId: number
    destinationId: number
    location: number
    timeNeeded: number
    bestTime: number
    latitude: number
    longitude: number
    articleType: number
    authorName: number
    authorImage: number
    status: number
    featured: number
    views: number
    seoTitle: number
    seoDescription: number
    seoKeywords: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    views?: true
  }

  export type BlogPostSumAggregateInputType = {
    latitude?: true
    longitude?: true
    views?: true
  }

  export type BlogPostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    ogImage?: true
    categoryId?: true
    destinationId?: true
    location?: true
    timeNeeded?: true
    bestTime?: true
    latitude?: true
    longitude?: true
    articleType?: true
    authorName?: true
    authorImage?: true
    status?: true
    featured?: true
    views?: true
    seoTitle?: true
    seoDescription?: true
    seoKeywords?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    ogImage?: true
    categoryId?: true
    destinationId?: true
    location?: true
    timeNeeded?: true
    bestTime?: true
    latitude?: true
    longitude?: true
    articleType?: true
    authorName?: true
    authorImage?: true
    status?: true
    featured?: true
    views?: true
    seoTitle?: true
    seoDescription?: true
    seoKeywords?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    ogImage?: true
    categoryId?: true
    destinationId?: true
    location?: true
    timeNeeded?: true
    bestTime?: true
    latitude?: true
    longitude?: true
    articleType?: true
    authorName?: true
    authorImage?: true
    status?: true
    featured?: true
    views?: true
    seoTitle?: true
    seoDescription?: true
    seoKeywords?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _avg?: BlogPostAvgAggregateInputType
    _sum?: BlogPostSumAggregateInputType
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string
    coverImage: string | null
    ogImage: string | null
    categoryId: string | null
    destinationId: string | null
    location: string | null
    timeNeeded: string | null
    bestTime: string | null
    latitude: number | null
    longitude: number | null
    articleType: string | null
    authorName: string
    authorImage: string | null
    status: $Enums.BlogStatus
    featured: boolean
    views: number
    seoTitle: string | null
    seoDescription: string | null
    seoKeywords: string | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    ogImage?: boolean
    categoryId?: boolean
    destinationId?: boolean
    location?: boolean
    timeNeeded?: boolean
    bestTime?: boolean
    latitude?: boolean
    longitude?: boolean
    articleType?: boolean
    authorName?: boolean
    authorImage?: boolean
    status?: boolean
    featured?: boolean
    views?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    seoKeywords?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    tags?: boolean | BlogPost$tagsArgs<ExtArgs>
    destination?: boolean | BlogPost$destinationArgs<ExtArgs>
    placesMentioned?: boolean | BlogPost$placesMentionedArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    ogImage?: boolean
    categoryId?: boolean
    destinationId?: boolean
    location?: boolean
    timeNeeded?: boolean
    bestTime?: boolean
    latitude?: boolean
    longitude?: boolean
    articleType?: boolean
    authorName?: boolean
    authorImage?: boolean
    status?: boolean
    featured?: boolean
    views?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    seoKeywords?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    destination?: boolean | BlogPost$destinationArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    ogImage?: boolean
    categoryId?: boolean
    destinationId?: boolean
    location?: boolean
    timeNeeded?: boolean
    bestTime?: boolean
    latitude?: boolean
    longitude?: boolean
    articleType?: boolean
    authorName?: boolean
    authorImage?: boolean
    status?: boolean
    featured?: boolean
    views?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    seoKeywords?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    destination?: boolean | BlogPost$destinationArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    ogImage?: boolean
    categoryId?: boolean
    destinationId?: boolean
    location?: boolean
    timeNeeded?: boolean
    bestTime?: boolean
    latitude?: boolean
    longitude?: boolean
    articleType?: boolean
    authorName?: boolean
    authorImage?: boolean
    status?: boolean
    featured?: boolean
    views?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    seoKeywords?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "content" | "coverImage" | "ogImage" | "categoryId" | "destinationId" | "location" | "timeNeeded" | "bestTime" | "latitude" | "longitude" | "articleType" | "authorName" | "authorImage" | "status" | "featured" | "views" | "seoTitle" | "seoDescription" | "seoKeywords" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    tags?: boolean | BlogPost$tagsArgs<ExtArgs>
    destination?: boolean | BlogPost$destinationArgs<ExtArgs>
    placesMentioned?: boolean | BlogPost$placesMentionedArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    destination?: boolean | BlogPost$destinationArgs<ExtArgs>
  }
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    destination?: boolean | BlogPost$destinationArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      category: Prisma.$BlogCategoryPayload<ExtArgs> | null
      tags: Prisma.$BlogPostTagPayload<ExtArgs>[]
      destination: Prisma.$DestinationPayload<ExtArgs> | null
      placesMentioned: Prisma.$PlaceMentionedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string | null
      content: string
      coverImage: string | null
      ogImage: string | null
      categoryId: string | null
      destinationId: string | null
      location: string | null
      timeNeeded: string | null
      bestTime: string | null
      latitude: number | null
      longitude: number | null
      articleType: string | null
      authorName: string
      authorImage: string | null
      status: $Enums.BlogStatus
      featured: boolean
      views: number
      seoTitle: string | null
      seoDescription: string | null
      seoKeywords: string | null
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BlogPost$categoryArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$categoryArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends BlogPost$tagsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destination<T extends BlogPost$destinationArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$destinationArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    placesMentioned<T extends BlogPost$placesMentionedArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$placesMentionedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaceMentionedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly excerpt: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly coverImage: FieldRef<"BlogPost", 'String'>
    readonly ogImage: FieldRef<"BlogPost", 'String'>
    readonly categoryId: FieldRef<"BlogPost", 'String'>
    readonly destinationId: FieldRef<"BlogPost", 'String'>
    readonly location: FieldRef<"BlogPost", 'String'>
    readonly timeNeeded: FieldRef<"BlogPost", 'String'>
    readonly bestTime: FieldRef<"BlogPost", 'String'>
    readonly latitude: FieldRef<"BlogPost", 'Float'>
    readonly longitude: FieldRef<"BlogPost", 'Float'>
    readonly articleType: FieldRef<"BlogPost", 'String'>
    readonly authorName: FieldRef<"BlogPost", 'String'>
    readonly authorImage: FieldRef<"BlogPost", 'String'>
    readonly status: FieldRef<"BlogPost", 'BlogStatus'>
    readonly featured: FieldRef<"BlogPost", 'Boolean'>
    readonly views: FieldRef<"BlogPost", 'Int'>
    readonly seoTitle: FieldRef<"BlogPost", 'String'>
    readonly seoDescription: FieldRef<"BlogPost", 'String'>
    readonly seoKeywords: FieldRef<"BlogPost", 'String'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.category
   */
  export type BlogPost$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    where?: BlogCategoryWhereInput
  }

  /**
   * BlogPost.tags
   */
  export type BlogPost$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    where?: BlogPostTagWhereInput
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    cursor?: BlogPostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogPost.destination
   */
  export type BlogPost$destinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
  }

  /**
   * BlogPost.placesMentioned
   */
  export type BlogPost$placesMentionedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceMentioned
     */
    select?: PlaceMentionedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaceMentioned
     */
    omit?: PlaceMentionedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceMentionedInclude<ExtArgs> | null
    where?: PlaceMentionedWhereInput
    orderBy?: PlaceMentionedOrderByWithRelationInput | PlaceMentionedOrderByWithRelationInput[]
    cursor?: PlaceMentionedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaceMentionedScalarFieldEnum | PlaceMentionedScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model BlogPostTag
   */

  export type AggregateBlogPostTag = {
    _count: BlogPostTagCountAggregateOutputType | null
    _min: BlogPostTagMinAggregateOutputType | null
    _max: BlogPostTagMaxAggregateOutputType | null
  }

  export type BlogPostTagMinAggregateOutputType = {
    postId: string | null
    tagId: string | null
  }

  export type BlogPostTagMaxAggregateOutputType = {
    postId: string | null
    tagId: string | null
  }

  export type BlogPostTagCountAggregateOutputType = {
    postId: number
    tagId: number
    _all: number
  }


  export type BlogPostTagMinAggregateInputType = {
    postId?: true
    tagId?: true
  }

  export type BlogPostTagMaxAggregateInputType = {
    postId?: true
    tagId?: true
  }

  export type BlogPostTagCountAggregateInputType = {
    postId?: true
    tagId?: true
    _all?: true
  }

  export type BlogPostTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostTag to aggregate.
     */
    where?: BlogPostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTags to fetch.
     */
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPostTags
    **/
    _count?: true | BlogPostTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostTagMaxAggregateInputType
  }

  export type GetBlogPostTagAggregateType<T extends BlogPostTagAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPostTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPostTag[P]>
      : GetScalarType<T[P], AggregateBlogPostTag[P]>
  }




  export type BlogPostTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTagWhereInput
    orderBy?: BlogPostTagOrderByWithAggregationInput | BlogPostTagOrderByWithAggregationInput[]
    by: BlogPostTagScalarFieldEnum[] | BlogPostTagScalarFieldEnum
    having?: BlogPostTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostTagCountAggregateInputType | true
    _min?: BlogPostTagMinAggregateInputType
    _max?: BlogPostTagMaxAggregateInputType
  }

  export type BlogPostTagGroupByOutputType = {
    postId: string
    tagId: string
    _count: BlogPostTagCountAggregateOutputType | null
    _min: BlogPostTagMinAggregateOutputType | null
    _max: BlogPostTagMaxAggregateOutputType | null
  }

  type GetBlogPostTagGroupByPayload<T extends BlogPostTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostTagGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostTagGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    tag?: boolean | BlogTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTag"]>

  export type BlogPostTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    tag?: boolean | BlogTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTag"]>

  export type BlogPostTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    tag?: boolean | BlogTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTag"]>

  export type BlogPostTagSelectScalar = {
    postId?: boolean
    tagId?: boolean
  }

  export type BlogPostTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "tagId", ExtArgs["result"]["blogPostTag"]>
  export type BlogPostTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    tag?: boolean | BlogTagDefaultArgs<ExtArgs>
  }
  export type BlogPostTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    tag?: boolean | BlogTagDefaultArgs<ExtArgs>
  }
  export type BlogPostTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    tag?: boolean | BlogTagDefaultArgs<ExtArgs>
  }

  export type $BlogPostTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPostTag"
    objects: {
      post: Prisma.$BlogPostPayload<ExtArgs>
      tag: Prisma.$BlogTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      tagId: string
    }, ExtArgs["result"]["blogPostTag"]>
    composites: {}
  }

  type BlogPostTagGetPayload<S extends boolean | null | undefined | BlogPostTagDefaultArgs> = $Result.GetResult<Prisma.$BlogPostTagPayload, S>

  type BlogPostTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostTagCountAggregateInputType | true
    }

  export interface BlogPostTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPostTag'], meta: { name: 'BlogPostTag' } }
    /**
     * Find zero or one BlogPostTag that matches the filter.
     * @param {BlogPostTagFindUniqueArgs} args - Arguments to find a BlogPostTag
     * @example
     * // Get one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostTagFindUniqueArgs>(args: SelectSubset<T, BlogPostTagFindUniqueArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPostTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostTagFindUniqueOrThrowArgs} args - Arguments to find a BlogPostTag
     * @example
     * // Get one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostTagFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagFindFirstArgs} args - Arguments to find a BlogPostTag
     * @example
     * // Get one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostTagFindFirstArgs>(args?: SelectSubset<T, BlogPostTagFindFirstArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagFindFirstOrThrowArgs} args - Arguments to find a BlogPostTag
     * @example
     * // Get one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostTagFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPostTags
     * const blogPostTags = await prisma.blogPostTag.findMany()
     * 
     * // Get first 10 BlogPostTags
     * const blogPostTags = await prisma.blogPostTag.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const blogPostTagWithPostIdOnly = await prisma.blogPostTag.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends BlogPostTagFindManyArgs>(args?: SelectSubset<T, BlogPostTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPostTag.
     * @param {BlogPostTagCreateArgs} args - Arguments to create a BlogPostTag.
     * @example
     * // Create one BlogPostTag
     * const BlogPostTag = await prisma.blogPostTag.create({
     *   data: {
     *     // ... data to create a BlogPostTag
     *   }
     * })
     * 
     */
    create<T extends BlogPostTagCreateArgs>(args: SelectSubset<T, BlogPostTagCreateArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPostTags.
     * @param {BlogPostTagCreateManyArgs} args - Arguments to create many BlogPostTags.
     * @example
     * // Create many BlogPostTags
     * const blogPostTag = await prisma.blogPostTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostTagCreateManyArgs>(args?: SelectSubset<T, BlogPostTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPostTags and returns the data saved in the database.
     * @param {BlogPostTagCreateManyAndReturnArgs} args - Arguments to create many BlogPostTags.
     * @example
     * // Create many BlogPostTags
     * const blogPostTag = await prisma.blogPostTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPostTags and only return the `postId`
     * const blogPostTagWithPostIdOnly = await prisma.blogPostTag.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostTagCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPostTag.
     * @param {BlogPostTagDeleteArgs} args - Arguments to delete one BlogPostTag.
     * @example
     * // Delete one BlogPostTag
     * const BlogPostTag = await prisma.blogPostTag.delete({
     *   where: {
     *     // ... filter to delete one BlogPostTag
     *   }
     * })
     * 
     */
    delete<T extends BlogPostTagDeleteArgs>(args: SelectSubset<T, BlogPostTagDeleteArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPostTag.
     * @param {BlogPostTagUpdateArgs} args - Arguments to update one BlogPostTag.
     * @example
     * // Update one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostTagUpdateArgs>(args: SelectSubset<T, BlogPostTagUpdateArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPostTags.
     * @param {BlogPostTagDeleteManyArgs} args - Arguments to filter BlogPostTags to delete.
     * @example
     * // Delete a few BlogPostTags
     * const { count } = await prisma.blogPostTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostTagDeleteManyArgs>(args?: SelectSubset<T, BlogPostTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPostTags
     * const blogPostTag = await prisma.blogPostTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostTagUpdateManyArgs>(args: SelectSubset<T, BlogPostTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostTags and returns the data updated in the database.
     * @param {BlogPostTagUpdateManyAndReturnArgs} args - Arguments to update many BlogPostTags.
     * @example
     * // Update many BlogPostTags
     * const blogPostTag = await prisma.blogPostTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPostTags and only return the `postId`
     * const blogPostTagWithPostIdOnly = await prisma.blogPostTag.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostTagUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPostTag.
     * @param {BlogPostTagUpsertArgs} args - Arguments to update or create a BlogPostTag.
     * @example
     * // Update or create a BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.upsert({
     *   create: {
     *     // ... data to create a BlogPostTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPostTag we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostTagUpsertArgs>(args: SelectSubset<T, BlogPostTagUpsertArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagCountArgs} args - Arguments to filter BlogPostTags to count.
     * @example
     * // Count the number of BlogPostTags
     * const count = await prisma.blogPostTag.count({
     *   where: {
     *     // ... the filter for the BlogPostTags we want to count
     *   }
     * })
    **/
    count<T extends BlogPostTagCountArgs>(
      args?: Subset<T, BlogPostTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostTagAggregateArgs>(args: Subset<T, BlogPostTagAggregateArgs>): Prisma.PrismaPromise<GetBlogPostTagAggregateType<T>>

    /**
     * Group by BlogPostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostTagGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPostTag model
   */
  readonly fields: BlogPostTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends BlogTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogTagDefaultArgs<ExtArgs>>): Prisma__BlogTagClient<$Result.GetResult<Prisma.$BlogTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPostTag model
   */
  interface BlogPostTagFieldRefs {
    readonly postId: FieldRef<"BlogPostTag", 'String'>
    readonly tagId: FieldRef<"BlogPostTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogPostTag findUnique
   */
  export type BlogPostTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTag to fetch.
     */
    where: BlogPostTagWhereUniqueInput
  }

  /**
   * BlogPostTag findUniqueOrThrow
   */
  export type BlogPostTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTag to fetch.
     */
    where: BlogPostTagWhereUniqueInput
  }

  /**
   * BlogPostTag findFirst
   */
  export type BlogPostTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTag to fetch.
     */
    where?: BlogPostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTags to fetch.
     */
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostTags.
     */
    cursor?: BlogPostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTags.
     */
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogPostTag findFirstOrThrow
   */
  export type BlogPostTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTag to fetch.
     */
    where?: BlogPostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTags to fetch.
     */
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostTags.
     */
    cursor?: BlogPostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTags.
     */
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogPostTag findMany
   */
  export type BlogPostTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTags to fetch.
     */
    where?: BlogPostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTags to fetch.
     */
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostTags.
     */
    cursor?: BlogPostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTags.
     */
    skip?: number
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogPostTag create
   */
  export type BlogPostTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPostTag.
     */
    data: XOR<BlogPostTagCreateInput, BlogPostTagUncheckedCreateInput>
  }

  /**
   * BlogPostTag createMany
   */
  export type BlogPostTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPostTags.
     */
    data: BlogPostTagCreateManyInput | BlogPostTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPostTag createManyAndReturn
   */
  export type BlogPostTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPostTags.
     */
    data: BlogPostTagCreateManyInput | BlogPostTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostTag update
   */
  export type BlogPostTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPostTag.
     */
    data: XOR<BlogPostTagUpdateInput, BlogPostTagUncheckedUpdateInput>
    /**
     * Choose, which BlogPostTag to update.
     */
    where: BlogPostTagWhereUniqueInput
  }

  /**
   * BlogPostTag updateMany
   */
  export type BlogPostTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPostTags.
     */
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostTags to update
     */
    where?: BlogPostTagWhereInput
    /**
     * Limit how many BlogPostTags to update.
     */
    limit?: number
  }

  /**
   * BlogPostTag updateManyAndReturn
   */
  export type BlogPostTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * The data used to update BlogPostTags.
     */
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostTags to update
     */
    where?: BlogPostTagWhereInput
    /**
     * Limit how many BlogPostTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostTag upsert
   */
  export type BlogPostTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPostTag to update in case it exists.
     */
    where: BlogPostTagWhereUniqueInput
    /**
     * In case the BlogPostTag found by the `where` argument doesn't exist, create a new BlogPostTag with this data.
     */
    create: XOR<BlogPostTagCreateInput, BlogPostTagUncheckedCreateInput>
    /**
     * In case the BlogPostTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostTagUpdateInput, BlogPostTagUncheckedUpdateInput>
  }

  /**
   * BlogPostTag delete
   */
  export type BlogPostTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter which BlogPostTag to delete.
     */
    where: BlogPostTagWhereUniqueInput
  }

  /**
   * BlogPostTag deleteMany
   */
  export type BlogPostTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostTags to delete
     */
    where?: BlogPostTagWhereInput
    /**
     * Limit how many BlogPostTags to delete.
     */
    limit?: number
  }

  /**
   * BlogPostTag without action
   */
  export type BlogPostTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
  }


  /**
   * Model TourPackage
   */

  export type AggregateTourPackage = {
    _count: TourPackageCountAggregateOutputType | null
    _avg: TourPackageAvgAggregateOutputType | null
    _sum: TourPackageSumAggregateOutputType | null
    _min: TourPackageMinAggregateOutputType | null
    _max: TourPackageMaxAggregateOutputType | null
  }

  export type TourPackageAvgAggregateOutputType = {
    daysCount: number | null
    nightsCount: number | null
    price: number | null
    discountPrice: number | null
    rating: number | null
    reviewsCount: number | null
    maxGroupSize: number | null
  }

  export type TourPackageSumAggregateOutputType = {
    daysCount: number | null
    nightsCount: number | null
    price: number | null
    discountPrice: number | null
    rating: number | null
    reviewsCount: number | null
    maxGroupSize: number | null
  }

  export type TourPackageMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    duration: string | null
    daysCount: number | null
    nightsCount: number | null
    price: number | null
    discountPrice: number | null
    rating: number | null
    reviewsCount: number | null
    image: string | null
    ogImage: string | null
    overview: string | null
    destinations: string | null
    highlights: string | null
    itinerary: string | null
    included: string | null
    excluded: string | null
    featuredTag: string | null
    featured: boolean | null
    published: boolean | null
    maxGroupSize: number | null
    difficulty: string | null
    startLocation: string | null
    endLocation: string | null
    seoTitle: string | null
    seoDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourPackageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    duration: string | null
    daysCount: number | null
    nightsCount: number | null
    price: number | null
    discountPrice: number | null
    rating: number | null
    reviewsCount: number | null
    image: string | null
    ogImage: string | null
    overview: string | null
    destinations: string | null
    highlights: string | null
    itinerary: string | null
    included: string | null
    excluded: string | null
    featuredTag: string | null
    featured: boolean | null
    published: boolean | null
    maxGroupSize: number | null
    difficulty: string | null
    startLocation: string | null
    endLocation: string | null
    seoTitle: string | null
    seoDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourPackageCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    category: number
    duration: number
    daysCount: number
    nightsCount: number
    price: number
    discountPrice: number
    rating: number
    reviewsCount: number
    image: number
    ogImage: number
    overview: number
    destinations: number
    highlights: number
    itinerary: number
    included: number
    excluded: number
    featuredTag: number
    featured: number
    published: number
    maxGroupSize: number
    difficulty: number
    startLocation: number
    endLocation: number
    seoTitle: number
    seoDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourPackageAvgAggregateInputType = {
    daysCount?: true
    nightsCount?: true
    price?: true
    discountPrice?: true
    rating?: true
    reviewsCount?: true
    maxGroupSize?: true
  }

  export type TourPackageSumAggregateInputType = {
    daysCount?: true
    nightsCount?: true
    price?: true
    discountPrice?: true
    rating?: true
    reviewsCount?: true
    maxGroupSize?: true
  }

  export type TourPackageMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    duration?: true
    daysCount?: true
    nightsCount?: true
    price?: true
    discountPrice?: true
    rating?: true
    reviewsCount?: true
    image?: true
    ogImage?: true
    overview?: true
    destinations?: true
    highlights?: true
    itinerary?: true
    included?: true
    excluded?: true
    featuredTag?: true
    featured?: true
    published?: true
    maxGroupSize?: true
    difficulty?: true
    startLocation?: true
    endLocation?: true
    seoTitle?: true
    seoDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourPackageMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    duration?: true
    daysCount?: true
    nightsCount?: true
    price?: true
    discountPrice?: true
    rating?: true
    reviewsCount?: true
    image?: true
    ogImage?: true
    overview?: true
    destinations?: true
    highlights?: true
    itinerary?: true
    included?: true
    excluded?: true
    featuredTag?: true
    featured?: true
    published?: true
    maxGroupSize?: true
    difficulty?: true
    startLocation?: true
    endLocation?: true
    seoTitle?: true
    seoDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourPackageCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    duration?: true
    daysCount?: true
    nightsCount?: true
    price?: true
    discountPrice?: true
    rating?: true
    reviewsCount?: true
    image?: true
    ogImage?: true
    overview?: true
    destinations?: true
    highlights?: true
    itinerary?: true
    included?: true
    excluded?: true
    featuredTag?: true
    featured?: true
    published?: true
    maxGroupSize?: true
    difficulty?: true
    startLocation?: true
    endLocation?: true
    seoTitle?: true
    seoDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourPackage to aggregate.
     */
    where?: TourPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPackages to fetch.
     */
    orderBy?: TourPackageOrderByWithRelationInput | TourPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourPackages
    **/
    _count?: true | TourPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourPackageMaxAggregateInputType
  }

  export type GetTourPackageAggregateType<T extends TourPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateTourPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourPackage[P]>
      : GetScalarType<T[P], AggregateTourPackage[P]>
  }




  export type TourPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourPackageWhereInput
    orderBy?: TourPackageOrderByWithAggregationInput | TourPackageOrderByWithAggregationInput[]
    by: TourPackageScalarFieldEnum[] | TourPackageScalarFieldEnum
    having?: TourPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourPackageCountAggregateInputType | true
    _avg?: TourPackageAvgAggregateInputType
    _sum?: TourPackageSumAggregateInputType
    _min?: TourPackageMinAggregateInputType
    _max?: TourPackageMaxAggregateInputType
  }

  export type TourPackageGroupByOutputType = {
    id: string
    title: string
    slug: string
    category: string
    duration: string
    daysCount: number
    nightsCount: number
    price: number
    discountPrice: number | null
    rating: number
    reviewsCount: number
    image: string
    ogImage: string | null
    overview: string
    destinations: string
    highlights: string
    itinerary: string
    included: string
    excluded: string
    featuredTag: string | null
    featured: boolean
    published: boolean
    maxGroupSize: number | null
    difficulty: string | null
    startLocation: string | null
    endLocation: string | null
    seoTitle: string | null
    seoDescription: string | null
    createdAt: Date
    updatedAt: Date
    _count: TourPackageCountAggregateOutputType | null
    _avg: TourPackageAvgAggregateOutputType | null
    _sum: TourPackageSumAggregateOutputType | null
    _min: TourPackageMinAggregateOutputType | null
    _max: TourPackageMaxAggregateOutputType | null
  }

  type GetTourPackageGroupByPayload<T extends TourPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourPackageGroupByOutputType[P]>
            : GetScalarType<T[P], TourPackageGroupByOutputType[P]>
        }
      >
    >


  export type TourPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    duration?: boolean
    daysCount?: boolean
    nightsCount?: boolean
    price?: boolean
    discountPrice?: boolean
    rating?: boolean
    reviewsCount?: boolean
    image?: boolean
    ogImage?: boolean
    overview?: boolean
    destinations?: boolean
    highlights?: boolean
    itinerary?: boolean
    included?: boolean
    excluded?: boolean
    featuredTag?: boolean
    featured?: boolean
    published?: boolean
    maxGroupSize?: boolean
    difficulty?: boolean
    startLocation?: boolean
    endLocation?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inquiries?: boolean | TourPackage$inquiriesArgs<ExtArgs>
    _count?: boolean | TourPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourPackage"]>

  export type TourPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    duration?: boolean
    daysCount?: boolean
    nightsCount?: boolean
    price?: boolean
    discountPrice?: boolean
    rating?: boolean
    reviewsCount?: boolean
    image?: boolean
    ogImage?: boolean
    overview?: boolean
    destinations?: boolean
    highlights?: boolean
    itinerary?: boolean
    included?: boolean
    excluded?: boolean
    featuredTag?: boolean
    featured?: boolean
    published?: boolean
    maxGroupSize?: boolean
    difficulty?: boolean
    startLocation?: boolean
    endLocation?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tourPackage"]>

  export type TourPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    duration?: boolean
    daysCount?: boolean
    nightsCount?: boolean
    price?: boolean
    discountPrice?: boolean
    rating?: boolean
    reviewsCount?: boolean
    image?: boolean
    ogImage?: boolean
    overview?: boolean
    destinations?: boolean
    highlights?: boolean
    itinerary?: boolean
    included?: boolean
    excluded?: boolean
    featuredTag?: boolean
    featured?: boolean
    published?: boolean
    maxGroupSize?: boolean
    difficulty?: boolean
    startLocation?: boolean
    endLocation?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tourPackage"]>

  export type TourPackageSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    duration?: boolean
    daysCount?: boolean
    nightsCount?: boolean
    price?: boolean
    discountPrice?: boolean
    rating?: boolean
    reviewsCount?: boolean
    image?: boolean
    ogImage?: boolean
    overview?: boolean
    destinations?: boolean
    highlights?: boolean
    itinerary?: boolean
    included?: boolean
    excluded?: boolean
    featuredTag?: boolean
    featured?: boolean
    published?: boolean
    maxGroupSize?: boolean
    difficulty?: boolean
    startLocation?: boolean
    endLocation?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "category" | "duration" | "daysCount" | "nightsCount" | "price" | "discountPrice" | "rating" | "reviewsCount" | "image" | "ogImage" | "overview" | "destinations" | "highlights" | "itinerary" | "included" | "excluded" | "featuredTag" | "featured" | "published" | "maxGroupSize" | "difficulty" | "startLocation" | "endLocation" | "seoTitle" | "seoDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["tourPackage"]>
  export type TourPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inquiries?: boolean | TourPackage$inquiriesArgs<ExtArgs>
    _count?: boolean | TourPackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TourPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TourPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourPackage"
    objects: {
      inquiries: Prisma.$TourInquiryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      category: string
      duration: string
      daysCount: number
      nightsCount: number
      price: number
      discountPrice: number | null
      rating: number
      reviewsCount: number
      image: string
      ogImage: string | null
      overview: string
      destinations: string
      highlights: string
      itinerary: string
      included: string
      excluded: string
      featuredTag: string | null
      featured: boolean
      published: boolean
      maxGroupSize: number | null
      difficulty: string | null
      startLocation: string | null
      endLocation: string | null
      seoTitle: string | null
      seoDescription: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tourPackage"]>
    composites: {}
  }

  type TourPackageGetPayload<S extends boolean | null | undefined | TourPackageDefaultArgs> = $Result.GetResult<Prisma.$TourPackagePayload, S>

  type TourPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourPackageCountAggregateInputType | true
    }

  export interface TourPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourPackage'], meta: { name: 'TourPackage' } }
    /**
     * Find zero or one TourPackage that matches the filter.
     * @param {TourPackageFindUniqueArgs} args - Arguments to find a TourPackage
     * @example
     * // Get one TourPackage
     * const tourPackage = await prisma.tourPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourPackageFindUniqueArgs>(args: SelectSubset<T, TourPackageFindUniqueArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourPackageFindUniqueOrThrowArgs} args - Arguments to find a TourPackage
     * @example
     * // Get one TourPackage
     * const tourPackage = await prisma.tourPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, TourPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageFindFirstArgs} args - Arguments to find a TourPackage
     * @example
     * // Get one TourPackage
     * const tourPackage = await prisma.tourPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourPackageFindFirstArgs>(args?: SelectSubset<T, TourPackageFindFirstArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageFindFirstOrThrowArgs} args - Arguments to find a TourPackage
     * @example
     * // Get one TourPackage
     * const tourPackage = await prisma.tourPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, TourPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourPackages
     * const tourPackages = await prisma.tourPackage.findMany()
     * 
     * // Get first 10 TourPackages
     * const tourPackages = await prisma.tourPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourPackageWithIdOnly = await prisma.tourPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourPackageFindManyArgs>(args?: SelectSubset<T, TourPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourPackage.
     * @param {TourPackageCreateArgs} args - Arguments to create a TourPackage.
     * @example
     * // Create one TourPackage
     * const TourPackage = await prisma.tourPackage.create({
     *   data: {
     *     // ... data to create a TourPackage
     *   }
     * })
     * 
     */
    create<T extends TourPackageCreateArgs>(args: SelectSubset<T, TourPackageCreateArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourPackages.
     * @param {TourPackageCreateManyArgs} args - Arguments to create many TourPackages.
     * @example
     * // Create many TourPackages
     * const tourPackage = await prisma.tourPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourPackageCreateManyArgs>(args?: SelectSubset<T, TourPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourPackages and returns the data saved in the database.
     * @param {TourPackageCreateManyAndReturnArgs} args - Arguments to create many TourPackages.
     * @example
     * // Create many TourPackages
     * const tourPackage = await prisma.tourPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourPackages and only return the `id`
     * const tourPackageWithIdOnly = await prisma.tourPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, TourPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourPackage.
     * @param {TourPackageDeleteArgs} args - Arguments to delete one TourPackage.
     * @example
     * // Delete one TourPackage
     * const TourPackage = await prisma.tourPackage.delete({
     *   where: {
     *     // ... filter to delete one TourPackage
     *   }
     * })
     * 
     */
    delete<T extends TourPackageDeleteArgs>(args: SelectSubset<T, TourPackageDeleteArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourPackage.
     * @param {TourPackageUpdateArgs} args - Arguments to update one TourPackage.
     * @example
     * // Update one TourPackage
     * const tourPackage = await prisma.tourPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourPackageUpdateArgs>(args: SelectSubset<T, TourPackageUpdateArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourPackages.
     * @param {TourPackageDeleteManyArgs} args - Arguments to filter TourPackages to delete.
     * @example
     * // Delete a few TourPackages
     * const { count } = await prisma.tourPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourPackageDeleteManyArgs>(args?: SelectSubset<T, TourPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourPackages
     * const tourPackage = await prisma.tourPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourPackageUpdateManyArgs>(args: SelectSubset<T, TourPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourPackages and returns the data updated in the database.
     * @param {TourPackageUpdateManyAndReturnArgs} args - Arguments to update many TourPackages.
     * @example
     * // Update many TourPackages
     * const tourPackage = await prisma.tourPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourPackages and only return the `id`
     * const tourPackageWithIdOnly = await prisma.tourPackage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, TourPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourPackage.
     * @param {TourPackageUpsertArgs} args - Arguments to update or create a TourPackage.
     * @example
     * // Update or create a TourPackage
     * const tourPackage = await prisma.tourPackage.upsert({
     *   create: {
     *     // ... data to create a TourPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourPackage we want to update
     *   }
     * })
     */
    upsert<T extends TourPackageUpsertArgs>(args: SelectSubset<T, TourPackageUpsertArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageCountArgs} args - Arguments to filter TourPackages to count.
     * @example
     * // Count the number of TourPackages
     * const count = await prisma.tourPackage.count({
     *   where: {
     *     // ... the filter for the TourPackages we want to count
     *   }
     * })
    **/
    count<T extends TourPackageCountArgs>(
      args?: Subset<T, TourPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourPackageAggregateArgs>(args: Subset<T, TourPackageAggregateArgs>): Prisma.PrismaPromise<GetTourPackageAggregateType<T>>

    /**
     * Group by TourPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourPackageGroupByArgs['orderBy'] }
        : { orderBy?: TourPackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourPackage model
   */
  readonly fields: TourPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inquiries<T extends TourPackage$inquiriesArgs<ExtArgs> = {}>(args?: Subset<T, TourPackage$inquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourPackage model
   */
  interface TourPackageFieldRefs {
    readonly id: FieldRef<"TourPackage", 'String'>
    readonly title: FieldRef<"TourPackage", 'String'>
    readonly slug: FieldRef<"TourPackage", 'String'>
    readonly category: FieldRef<"TourPackage", 'String'>
    readonly duration: FieldRef<"TourPackage", 'String'>
    readonly daysCount: FieldRef<"TourPackage", 'Int'>
    readonly nightsCount: FieldRef<"TourPackage", 'Int'>
    readonly price: FieldRef<"TourPackage", 'Float'>
    readonly discountPrice: FieldRef<"TourPackage", 'Float'>
    readonly rating: FieldRef<"TourPackage", 'Float'>
    readonly reviewsCount: FieldRef<"TourPackage", 'Int'>
    readonly image: FieldRef<"TourPackage", 'String'>
    readonly ogImage: FieldRef<"TourPackage", 'String'>
    readonly overview: FieldRef<"TourPackage", 'String'>
    readonly destinations: FieldRef<"TourPackage", 'String'>
    readonly highlights: FieldRef<"TourPackage", 'String'>
    readonly itinerary: FieldRef<"TourPackage", 'String'>
    readonly included: FieldRef<"TourPackage", 'String'>
    readonly excluded: FieldRef<"TourPackage", 'String'>
    readonly featuredTag: FieldRef<"TourPackage", 'String'>
    readonly featured: FieldRef<"TourPackage", 'Boolean'>
    readonly published: FieldRef<"TourPackage", 'Boolean'>
    readonly maxGroupSize: FieldRef<"TourPackage", 'Int'>
    readonly difficulty: FieldRef<"TourPackage", 'String'>
    readonly startLocation: FieldRef<"TourPackage", 'String'>
    readonly endLocation: FieldRef<"TourPackage", 'String'>
    readonly seoTitle: FieldRef<"TourPackage", 'String'>
    readonly seoDescription: FieldRef<"TourPackage", 'String'>
    readonly createdAt: FieldRef<"TourPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"TourPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TourPackage findUnique
   */
  export type TourPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackage to fetch.
     */
    where: TourPackageWhereUniqueInput
  }

  /**
   * TourPackage findUniqueOrThrow
   */
  export type TourPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackage to fetch.
     */
    where: TourPackageWhereUniqueInput
  }

  /**
   * TourPackage findFirst
   */
  export type TourPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackage to fetch.
     */
    where?: TourPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPackages to fetch.
     */
    orderBy?: TourPackageOrderByWithRelationInput | TourPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourPackages.
     */
    cursor?: TourPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourPackages.
     */
    distinct?: TourPackageScalarFieldEnum | TourPackageScalarFieldEnum[]
  }

  /**
   * TourPackage findFirstOrThrow
   */
  export type TourPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackage to fetch.
     */
    where?: TourPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPackages to fetch.
     */
    orderBy?: TourPackageOrderByWithRelationInput | TourPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourPackages.
     */
    cursor?: TourPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourPackages.
     */
    distinct?: TourPackageScalarFieldEnum | TourPackageScalarFieldEnum[]
  }

  /**
   * TourPackage findMany
   */
  export type TourPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackages to fetch.
     */
    where?: TourPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPackages to fetch.
     */
    orderBy?: TourPackageOrderByWithRelationInput | TourPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourPackages.
     */
    cursor?: TourPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPackages.
     */
    skip?: number
    distinct?: TourPackageScalarFieldEnum | TourPackageScalarFieldEnum[]
  }

  /**
   * TourPackage create
   */
  export type TourPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a TourPackage.
     */
    data: XOR<TourPackageCreateInput, TourPackageUncheckedCreateInput>
  }

  /**
   * TourPackage createMany
   */
  export type TourPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourPackages.
     */
    data: TourPackageCreateManyInput | TourPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourPackage createManyAndReturn
   */
  export type TourPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * The data used to create many TourPackages.
     */
    data: TourPackageCreateManyInput | TourPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourPackage update
   */
  export type TourPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a TourPackage.
     */
    data: XOR<TourPackageUpdateInput, TourPackageUncheckedUpdateInput>
    /**
     * Choose, which TourPackage to update.
     */
    where: TourPackageWhereUniqueInput
  }

  /**
   * TourPackage updateMany
   */
  export type TourPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourPackages.
     */
    data: XOR<TourPackageUpdateManyMutationInput, TourPackageUncheckedUpdateManyInput>
    /**
     * Filter which TourPackages to update
     */
    where?: TourPackageWhereInput
    /**
     * Limit how many TourPackages to update.
     */
    limit?: number
  }

  /**
   * TourPackage updateManyAndReturn
   */
  export type TourPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * The data used to update TourPackages.
     */
    data: XOR<TourPackageUpdateManyMutationInput, TourPackageUncheckedUpdateManyInput>
    /**
     * Filter which TourPackages to update
     */
    where?: TourPackageWhereInput
    /**
     * Limit how many TourPackages to update.
     */
    limit?: number
  }

  /**
   * TourPackage upsert
   */
  export type TourPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the TourPackage to update in case it exists.
     */
    where: TourPackageWhereUniqueInput
    /**
     * In case the TourPackage found by the `where` argument doesn't exist, create a new TourPackage with this data.
     */
    create: XOR<TourPackageCreateInput, TourPackageUncheckedCreateInput>
    /**
     * In case the TourPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourPackageUpdateInput, TourPackageUncheckedUpdateInput>
  }

  /**
   * TourPackage delete
   */
  export type TourPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter which TourPackage to delete.
     */
    where: TourPackageWhereUniqueInput
  }

  /**
   * TourPackage deleteMany
   */
  export type TourPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourPackages to delete
     */
    where?: TourPackageWhereInput
    /**
     * Limit how many TourPackages to delete.
     */
    limit?: number
  }

  /**
   * TourPackage.inquiries
   */
  export type TourPackage$inquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    where?: TourInquiryWhereInput
    orderBy?: TourInquiryOrderByWithRelationInput | TourInquiryOrderByWithRelationInput[]
    cursor?: TourInquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourInquiryScalarFieldEnum | TourInquiryScalarFieldEnum[]
  }

  /**
   * TourPackage without action
   */
  export type TourPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
  }


  /**
   * Model TourInquiry
   */

  export type AggregateTourInquiry = {
    _count: TourInquiryCountAggregateOutputType | null
    _avg: TourInquiryAvgAggregateOutputType | null
    _sum: TourInquirySumAggregateOutputType | null
    _min: TourInquiryMinAggregateOutputType | null
    _max: TourInquiryMaxAggregateOutputType | null
  }

  export type TourInquiryAvgAggregateOutputType = {
    travelersCount: number | null
  }

  export type TourInquirySumAggregateOutputType = {
    travelersCount: number | null
  }

  export type TourInquiryMinAggregateOutputType = {
    id: string | null
    tourId: string | null
    name: string | null
    email: string | null
    phone: string | null
    travelDate: string | null
    travelersCount: number | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type TourInquiryMaxAggregateOutputType = {
    id: string | null
    tourId: string | null
    name: string | null
    email: string | null
    phone: string | null
    travelDate: string | null
    travelersCount: number | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type TourInquiryCountAggregateOutputType = {
    id: number
    tourId: number
    name: number
    email: number
    phone: number
    travelDate: number
    travelersCount: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type TourInquiryAvgAggregateInputType = {
    travelersCount?: true
  }

  export type TourInquirySumAggregateInputType = {
    travelersCount?: true
  }

  export type TourInquiryMinAggregateInputType = {
    id?: true
    tourId?: true
    name?: true
    email?: true
    phone?: true
    travelDate?: true
    travelersCount?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type TourInquiryMaxAggregateInputType = {
    id?: true
    tourId?: true
    name?: true
    email?: true
    phone?: true
    travelDate?: true
    travelersCount?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type TourInquiryCountAggregateInputType = {
    id?: true
    tourId?: true
    name?: true
    email?: true
    phone?: true
    travelDate?: true
    travelersCount?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TourInquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourInquiry to aggregate.
     */
    where?: TourInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourInquiries to fetch.
     */
    orderBy?: TourInquiryOrderByWithRelationInput | TourInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourInquiries
    **/
    _count?: true | TourInquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourInquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourInquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourInquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourInquiryMaxAggregateInputType
  }

  export type GetTourInquiryAggregateType<T extends TourInquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateTourInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourInquiry[P]>
      : GetScalarType<T[P], AggregateTourInquiry[P]>
  }




  export type TourInquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourInquiryWhereInput
    orderBy?: TourInquiryOrderByWithAggregationInput | TourInquiryOrderByWithAggregationInput[]
    by: TourInquiryScalarFieldEnum[] | TourInquiryScalarFieldEnum
    having?: TourInquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourInquiryCountAggregateInputType | true
    _avg?: TourInquiryAvgAggregateInputType
    _sum?: TourInquirySumAggregateInputType
    _min?: TourInquiryMinAggregateInputType
    _max?: TourInquiryMaxAggregateInputType
  }

  export type TourInquiryGroupByOutputType = {
    id: string
    tourId: string | null
    name: string
    email: string
    phone: string
    travelDate: string | null
    travelersCount: number
    message: string | null
    status: string
    createdAt: Date
    _count: TourInquiryCountAggregateOutputType | null
    _avg: TourInquiryAvgAggregateOutputType | null
    _sum: TourInquirySumAggregateOutputType | null
    _min: TourInquiryMinAggregateOutputType | null
    _max: TourInquiryMaxAggregateOutputType | null
  }

  type GetTourInquiryGroupByPayload<T extends TourInquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourInquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourInquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourInquiryGroupByOutputType[P]>
            : GetScalarType<T[P], TourInquiryGroupByOutputType[P]>
        }
      >
    >


  export type TourInquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    travelDate?: boolean
    travelersCount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    tour?: boolean | TourInquiry$tourArgs<ExtArgs>
  }, ExtArgs["result"]["tourInquiry"]>

  export type TourInquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    travelDate?: boolean
    travelersCount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    tour?: boolean | TourInquiry$tourArgs<ExtArgs>
  }, ExtArgs["result"]["tourInquiry"]>

  export type TourInquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    travelDate?: boolean
    travelersCount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    tour?: boolean | TourInquiry$tourArgs<ExtArgs>
  }, ExtArgs["result"]["tourInquiry"]>

  export type TourInquirySelectScalar = {
    id?: boolean
    tourId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    travelDate?: boolean
    travelersCount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TourInquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "name" | "email" | "phone" | "travelDate" | "travelersCount" | "message" | "status" | "createdAt", ExtArgs["result"]["tourInquiry"]>
  export type TourInquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourInquiry$tourArgs<ExtArgs>
  }
  export type TourInquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourInquiry$tourArgs<ExtArgs>
  }
  export type TourInquiryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourInquiry$tourArgs<ExtArgs>
  }

  export type $TourInquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourInquiry"
    objects: {
      tour: Prisma.$TourPackagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tourId: string | null
      name: string
      email: string
      phone: string
      travelDate: string | null
      travelersCount: number
      message: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["tourInquiry"]>
    composites: {}
  }

  type TourInquiryGetPayload<S extends boolean | null | undefined | TourInquiryDefaultArgs> = $Result.GetResult<Prisma.$TourInquiryPayload, S>

  type TourInquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourInquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourInquiryCountAggregateInputType | true
    }

  export interface TourInquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourInquiry'], meta: { name: 'TourInquiry' } }
    /**
     * Find zero or one TourInquiry that matches the filter.
     * @param {TourInquiryFindUniqueArgs} args - Arguments to find a TourInquiry
     * @example
     * // Get one TourInquiry
     * const tourInquiry = await prisma.tourInquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourInquiryFindUniqueArgs>(args: SelectSubset<T, TourInquiryFindUniqueArgs<ExtArgs>>): Prisma__TourInquiryClient<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourInquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourInquiryFindUniqueOrThrowArgs} args - Arguments to find a TourInquiry
     * @example
     * // Get one TourInquiry
     * const tourInquiry = await prisma.tourInquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourInquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, TourInquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourInquiryClient<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourInquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourInquiryFindFirstArgs} args - Arguments to find a TourInquiry
     * @example
     * // Get one TourInquiry
     * const tourInquiry = await prisma.tourInquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourInquiryFindFirstArgs>(args?: SelectSubset<T, TourInquiryFindFirstArgs<ExtArgs>>): Prisma__TourInquiryClient<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourInquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourInquiryFindFirstOrThrowArgs} args - Arguments to find a TourInquiry
     * @example
     * // Get one TourInquiry
     * const tourInquiry = await prisma.tourInquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourInquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, TourInquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourInquiryClient<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourInquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourInquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourInquiries
     * const tourInquiries = await prisma.tourInquiry.findMany()
     * 
     * // Get first 10 TourInquiries
     * const tourInquiries = await prisma.tourInquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourInquiryWithIdOnly = await prisma.tourInquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourInquiryFindManyArgs>(args?: SelectSubset<T, TourInquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourInquiry.
     * @param {TourInquiryCreateArgs} args - Arguments to create a TourInquiry.
     * @example
     * // Create one TourInquiry
     * const TourInquiry = await prisma.tourInquiry.create({
     *   data: {
     *     // ... data to create a TourInquiry
     *   }
     * })
     * 
     */
    create<T extends TourInquiryCreateArgs>(args: SelectSubset<T, TourInquiryCreateArgs<ExtArgs>>): Prisma__TourInquiryClient<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourInquiries.
     * @param {TourInquiryCreateManyArgs} args - Arguments to create many TourInquiries.
     * @example
     * // Create many TourInquiries
     * const tourInquiry = await prisma.tourInquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourInquiryCreateManyArgs>(args?: SelectSubset<T, TourInquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourInquiries and returns the data saved in the database.
     * @param {TourInquiryCreateManyAndReturnArgs} args - Arguments to create many TourInquiries.
     * @example
     * // Create many TourInquiries
     * const tourInquiry = await prisma.tourInquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourInquiries and only return the `id`
     * const tourInquiryWithIdOnly = await prisma.tourInquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourInquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, TourInquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourInquiry.
     * @param {TourInquiryDeleteArgs} args - Arguments to delete one TourInquiry.
     * @example
     * // Delete one TourInquiry
     * const TourInquiry = await prisma.tourInquiry.delete({
     *   where: {
     *     // ... filter to delete one TourInquiry
     *   }
     * })
     * 
     */
    delete<T extends TourInquiryDeleteArgs>(args: SelectSubset<T, TourInquiryDeleteArgs<ExtArgs>>): Prisma__TourInquiryClient<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourInquiry.
     * @param {TourInquiryUpdateArgs} args - Arguments to update one TourInquiry.
     * @example
     * // Update one TourInquiry
     * const tourInquiry = await prisma.tourInquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourInquiryUpdateArgs>(args: SelectSubset<T, TourInquiryUpdateArgs<ExtArgs>>): Prisma__TourInquiryClient<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourInquiries.
     * @param {TourInquiryDeleteManyArgs} args - Arguments to filter TourInquiries to delete.
     * @example
     * // Delete a few TourInquiries
     * const { count } = await prisma.tourInquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourInquiryDeleteManyArgs>(args?: SelectSubset<T, TourInquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourInquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourInquiries
     * const tourInquiry = await prisma.tourInquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourInquiryUpdateManyArgs>(args: SelectSubset<T, TourInquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourInquiries and returns the data updated in the database.
     * @param {TourInquiryUpdateManyAndReturnArgs} args - Arguments to update many TourInquiries.
     * @example
     * // Update many TourInquiries
     * const tourInquiry = await prisma.tourInquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourInquiries and only return the `id`
     * const tourInquiryWithIdOnly = await prisma.tourInquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourInquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, TourInquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourInquiry.
     * @param {TourInquiryUpsertArgs} args - Arguments to update or create a TourInquiry.
     * @example
     * // Update or create a TourInquiry
     * const tourInquiry = await prisma.tourInquiry.upsert({
     *   create: {
     *     // ... data to create a TourInquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourInquiry we want to update
     *   }
     * })
     */
    upsert<T extends TourInquiryUpsertArgs>(args: SelectSubset<T, TourInquiryUpsertArgs<ExtArgs>>): Prisma__TourInquiryClient<$Result.GetResult<Prisma.$TourInquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourInquiryCountArgs} args - Arguments to filter TourInquiries to count.
     * @example
     * // Count the number of TourInquiries
     * const count = await prisma.tourInquiry.count({
     *   where: {
     *     // ... the filter for the TourInquiries we want to count
     *   }
     * })
    **/
    count<T extends TourInquiryCountArgs>(
      args?: Subset<T, TourInquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourInquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourInquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourInquiryAggregateArgs>(args: Subset<T, TourInquiryAggregateArgs>): Prisma.PrismaPromise<GetTourInquiryAggregateType<T>>

    /**
     * Group by TourInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourInquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourInquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourInquiryGroupByArgs['orderBy'] }
        : { orderBy?: TourInquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourInquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourInquiry model
   */
  readonly fields: TourInquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourInquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourInquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourInquiry$tourArgs<ExtArgs> = {}>(args?: Subset<T, TourInquiry$tourArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourInquiry model
   */
  interface TourInquiryFieldRefs {
    readonly id: FieldRef<"TourInquiry", 'String'>
    readonly tourId: FieldRef<"TourInquiry", 'String'>
    readonly name: FieldRef<"TourInquiry", 'String'>
    readonly email: FieldRef<"TourInquiry", 'String'>
    readonly phone: FieldRef<"TourInquiry", 'String'>
    readonly travelDate: FieldRef<"TourInquiry", 'String'>
    readonly travelersCount: FieldRef<"TourInquiry", 'Int'>
    readonly message: FieldRef<"TourInquiry", 'String'>
    readonly status: FieldRef<"TourInquiry", 'String'>
    readonly createdAt: FieldRef<"TourInquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TourInquiry findUnique
   */
  export type TourInquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * Filter, which TourInquiry to fetch.
     */
    where: TourInquiryWhereUniqueInput
  }

  /**
   * TourInquiry findUniqueOrThrow
   */
  export type TourInquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * Filter, which TourInquiry to fetch.
     */
    where: TourInquiryWhereUniqueInput
  }

  /**
   * TourInquiry findFirst
   */
  export type TourInquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * Filter, which TourInquiry to fetch.
     */
    where?: TourInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourInquiries to fetch.
     */
    orderBy?: TourInquiryOrderByWithRelationInput | TourInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourInquiries.
     */
    cursor?: TourInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourInquiries.
     */
    distinct?: TourInquiryScalarFieldEnum | TourInquiryScalarFieldEnum[]
  }

  /**
   * TourInquiry findFirstOrThrow
   */
  export type TourInquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * Filter, which TourInquiry to fetch.
     */
    where?: TourInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourInquiries to fetch.
     */
    orderBy?: TourInquiryOrderByWithRelationInput | TourInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourInquiries.
     */
    cursor?: TourInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourInquiries.
     */
    distinct?: TourInquiryScalarFieldEnum | TourInquiryScalarFieldEnum[]
  }

  /**
   * TourInquiry findMany
   */
  export type TourInquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * Filter, which TourInquiries to fetch.
     */
    where?: TourInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourInquiries to fetch.
     */
    orderBy?: TourInquiryOrderByWithRelationInput | TourInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourInquiries.
     */
    cursor?: TourInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourInquiries.
     */
    skip?: number
    distinct?: TourInquiryScalarFieldEnum | TourInquiryScalarFieldEnum[]
  }

  /**
   * TourInquiry create
   */
  export type TourInquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a TourInquiry.
     */
    data: XOR<TourInquiryCreateInput, TourInquiryUncheckedCreateInput>
  }

  /**
   * TourInquiry createMany
   */
  export type TourInquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourInquiries.
     */
    data: TourInquiryCreateManyInput | TourInquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourInquiry createManyAndReturn
   */
  export type TourInquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * The data used to create many TourInquiries.
     */
    data: TourInquiryCreateManyInput | TourInquiryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourInquiry update
   */
  export type TourInquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a TourInquiry.
     */
    data: XOR<TourInquiryUpdateInput, TourInquiryUncheckedUpdateInput>
    /**
     * Choose, which TourInquiry to update.
     */
    where: TourInquiryWhereUniqueInput
  }

  /**
   * TourInquiry updateMany
   */
  export type TourInquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourInquiries.
     */
    data: XOR<TourInquiryUpdateManyMutationInput, TourInquiryUncheckedUpdateManyInput>
    /**
     * Filter which TourInquiries to update
     */
    where?: TourInquiryWhereInput
    /**
     * Limit how many TourInquiries to update.
     */
    limit?: number
  }

  /**
   * TourInquiry updateManyAndReturn
   */
  export type TourInquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * The data used to update TourInquiries.
     */
    data: XOR<TourInquiryUpdateManyMutationInput, TourInquiryUncheckedUpdateManyInput>
    /**
     * Filter which TourInquiries to update
     */
    where?: TourInquiryWhereInput
    /**
     * Limit how many TourInquiries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourInquiry upsert
   */
  export type TourInquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the TourInquiry to update in case it exists.
     */
    where: TourInquiryWhereUniqueInput
    /**
     * In case the TourInquiry found by the `where` argument doesn't exist, create a new TourInquiry with this data.
     */
    create: XOR<TourInquiryCreateInput, TourInquiryUncheckedCreateInput>
    /**
     * In case the TourInquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourInquiryUpdateInput, TourInquiryUncheckedUpdateInput>
  }

  /**
   * TourInquiry delete
   */
  export type TourInquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
    /**
     * Filter which TourInquiry to delete.
     */
    where: TourInquiryWhereUniqueInput
  }

  /**
   * TourInquiry deleteMany
   */
  export type TourInquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourInquiries to delete
     */
    where?: TourInquiryWhereInput
    /**
     * Limit how many TourInquiries to delete.
     */
    limit?: number
  }

  /**
   * TourInquiry.tour
   */
  export type TourInquiry$tourArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    where?: TourPackageWhereInput
  }

  /**
   * TourInquiry without action
   */
  export type TourInquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourInquiry
     */
    select?: TourInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourInquiry
     */
    omit?: TourInquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInquiryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender',
    email: 'email',
    phone: 'phone',
    password: 'password',
    country: 'country',
    stateProvince: 'stateProvince',
    profileImage: 'profileImage',
    role: 'role',
    status: 'status',
    emailVerifiedAt: 'emailVerifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


  export const AdminOtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type AdminOtpScalarFieldEnum = (typeof AdminOtpScalarFieldEnum)[keyof typeof AdminOtpScalarFieldEnum]


  export const GalleryItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    category: 'category',
    altText: 'altText',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryItemScalarFieldEnum = (typeof GalleryItemScalarFieldEnum)[keyof typeof GalleryItemScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    shortDescription: 'shortDescription',
    description: 'description',
    image: 'image',
    ogImage: 'ogImage',
    location: 'location',
    district: 'district',
    province: 'province',
    category: 'category',
    bestTime: 'bestTime',
    duration: 'duration',
    budget: 'budget',
    latitude: 'latitude',
    longitude: 'longitude',
    weatherAvg: 'weatherAvg',
    weatherRain: 'weatherRain',
    howToGetThere: 'howToGetThere',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    featured: 'featured',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const DestinationImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    destinationId: 'destinationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationImageScalarFieldEnum = (typeof DestinationImageScalarFieldEnum)[keyof typeof DestinationImageScalarFieldEnum]


  export const DestinationHighlightScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    destinationId: 'destinationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationHighlightScalarFieldEnum = (typeof DestinationHighlightScalarFieldEnum)[keyof typeof DestinationHighlightScalarFieldEnum]


  export const PlaceMentionedScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    latitude: 'latitude',
    longitude: 'longitude',
    postId: 'postId'
  };

  export type PlaceMentionedScalarFieldEnum = (typeof PlaceMentionedScalarFieldEnum)[keyof typeof PlaceMentionedScalarFieldEnum]


  export const BlogCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description'
  };

  export type BlogCategoryScalarFieldEnum = (typeof BlogCategoryScalarFieldEnum)[keyof typeof BlogCategoryScalarFieldEnum]


  export const BlogTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type BlogTagScalarFieldEnum = (typeof BlogTagScalarFieldEnum)[keyof typeof BlogTagScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    coverImage: 'coverImage',
    ogImage: 'ogImage',
    categoryId: 'categoryId',
    destinationId: 'destinationId',
    location: 'location',
    timeNeeded: 'timeNeeded',
    bestTime: 'bestTime',
    latitude: 'latitude',
    longitude: 'longitude',
    articleType: 'articleType',
    authorName: 'authorName',
    authorImage: 'authorImage',
    status: 'status',
    featured: 'featured',
    views: 'views',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    seoKeywords: 'seoKeywords',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const BlogPostTagScalarFieldEnum: {
    postId: 'postId',
    tagId: 'tagId'
  };

  export type BlogPostTagScalarFieldEnum = (typeof BlogPostTagScalarFieldEnum)[keyof typeof BlogPostTagScalarFieldEnum]


  export const TourPackageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    category: 'category',
    duration: 'duration',
    daysCount: 'daysCount',
    nightsCount: 'nightsCount',
    price: 'price',
    discountPrice: 'discountPrice',
    rating: 'rating',
    reviewsCount: 'reviewsCount',
    image: 'image',
    ogImage: 'ogImage',
    overview: 'overview',
    destinations: 'destinations',
    highlights: 'highlights',
    itinerary: 'itinerary',
    included: 'included',
    excluded: 'excluded',
    featuredTag: 'featuredTag',
    featured: 'featured',
    published: 'published',
    maxGroupSize: 'maxGroupSize',
    difficulty: 'difficulty',
    startLocation: 'startLocation',
    endLocation: 'endLocation',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourPackageScalarFieldEnum = (typeof TourPackageScalarFieldEnum)[keyof typeof TourPackageScalarFieldEnum]


  export const TourInquiryScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    travelDate: 'travelDate',
    travelersCount: 'travelersCount',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TourInquiryScalarFieldEnum = (typeof TourInquiryScalarFieldEnum)[keyof typeof TourInquiryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BlogStatus'
   */
  export type EnumBlogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogStatus'>
    


  /**
   * Reference to a field of type 'BlogStatus[]'
   */
  export type ListEnumBlogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    stateProvince?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stateProvince?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    password?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    stateProvince?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stateProvince?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    country?: StringWithAggregatesFilter<"User"> | string
    stateProvince?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    emailVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: UuidFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: UuidFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: UuidWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    id?: UuidFilter<"ContactMessage"> | string
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    phone?: StringNullableFilter<"ContactMessage"> | string | null
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    phone?: StringNullableFilter<"ContactMessage"> | string | null
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }, "id">

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ContactMessage"> | string
    name?: StringWithAggregatesFilter<"ContactMessage"> | string
    email?: StringWithAggregatesFilter<"ContactMessage"> | string
    phone?: StringNullableWithAggregatesFilter<"ContactMessage"> | string | null
    subject?: StringWithAggregatesFilter<"ContactMessage"> | string
    message?: StringWithAggregatesFilter<"ContactMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
  }

  export type AdminOtpWhereInput = {
    AND?: AdminOtpWhereInput | AdminOtpWhereInput[]
    OR?: AdminOtpWhereInput[]
    NOT?: AdminOtpWhereInput | AdminOtpWhereInput[]
    id?: UuidFilter<"AdminOtp"> | string
    email?: StringFilter<"AdminOtp"> | string
    code?: StringFilter<"AdminOtp"> | string
    expiresAt?: DateTimeFilter<"AdminOtp"> | Date | string
    createdAt?: DateTimeFilter<"AdminOtp"> | Date | string
  }

  export type AdminOtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminOtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminOtpWhereInput | AdminOtpWhereInput[]
    OR?: AdminOtpWhereInput[]
    NOT?: AdminOtpWhereInput | AdminOtpWhereInput[]
    code?: StringFilter<"AdminOtp"> | string
    expiresAt?: DateTimeFilter<"AdminOtp"> | Date | string
    createdAt?: DateTimeFilter<"AdminOtp"> | Date | string
  }, "id" | "email">

  export type AdminOtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: AdminOtpCountOrderByAggregateInput
    _max?: AdminOtpMaxOrderByAggregateInput
    _min?: AdminOtpMinOrderByAggregateInput
  }

  export type AdminOtpScalarWhereWithAggregatesInput = {
    AND?: AdminOtpScalarWhereWithAggregatesInput | AdminOtpScalarWhereWithAggregatesInput[]
    OR?: AdminOtpScalarWhereWithAggregatesInput[]
    NOT?: AdminOtpScalarWhereWithAggregatesInput | AdminOtpScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AdminOtp"> | string
    email?: StringWithAggregatesFilter<"AdminOtp"> | string
    code?: StringWithAggregatesFilter<"AdminOtp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AdminOtp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminOtp"> | Date | string
  }

  export type GalleryItemWhereInput = {
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    id?: UuidFilter<"GalleryItem"> | string
    title?: StringFilter<"GalleryItem"> | string
    url?: StringFilter<"GalleryItem"> | string
    category?: StringFilter<"GalleryItem"> | string
    altText?: StringNullableFilter<"GalleryItem"> | string | null
    description?: StringNullableFilter<"GalleryItem"> | string | null
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }

  export type GalleryItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    altText?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    title?: StringFilter<"GalleryItem"> | string
    url?: StringFilter<"GalleryItem"> | string
    category?: StringFilter<"GalleryItem"> | string
    altText?: StringNullableFilter<"GalleryItem"> | string | null
    description?: StringNullableFilter<"GalleryItem"> | string | null
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }, "id">

  export type GalleryItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    altText?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryItemCountOrderByAggregateInput
    _max?: GalleryItemMaxOrderByAggregateInput
    _min?: GalleryItemMinOrderByAggregateInput
  }

  export type GalleryItemScalarWhereWithAggregatesInput = {
    AND?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    OR?: GalleryItemScalarWhereWithAggregatesInput[]
    NOT?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GalleryItem"> | string
    title?: StringWithAggregatesFilter<"GalleryItem"> | string
    url?: StringWithAggregatesFilter<"GalleryItem"> | string
    category?: StringWithAggregatesFilter<"GalleryItem"> | string
    altText?: StringNullableWithAggregatesFilter<"GalleryItem"> | string | null
    description?: StringNullableWithAggregatesFilter<"GalleryItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: UuidFilter<"Destination"> | string
    name?: StringFilter<"Destination"> | string
    slug?: StringFilter<"Destination"> | string
    shortDescription?: StringNullableFilter<"Destination"> | string | null
    description?: StringFilter<"Destination"> | string
    image?: StringFilter<"Destination"> | string
    ogImage?: StringNullableFilter<"Destination"> | string | null
    location?: StringNullableFilter<"Destination"> | string | null
    district?: StringNullableFilter<"Destination"> | string | null
    province?: StringNullableFilter<"Destination"> | string | null
    category?: StringNullableFilter<"Destination"> | string | null
    bestTime?: StringNullableFilter<"Destination"> | string | null
    duration?: StringNullableFilter<"Destination"> | string | null
    budget?: StringNullableFilter<"Destination"> | string | null
    latitude?: FloatNullableFilter<"Destination"> | number | null
    longitude?: FloatNullableFilter<"Destination"> | number | null
    weatherAvg?: StringNullableFilter<"Destination"> | string | null
    weatherRain?: StringNullableFilter<"Destination"> | string | null
    howToGetThere?: StringNullableFilter<"Destination"> | string | null
    seoTitle?: StringNullableFilter<"Destination"> | string | null
    seoDescription?: StringNullableFilter<"Destination"> | string | null
    featured?: BoolFilter<"Destination"> | boolean
    published?: BoolFilter<"Destination"> | boolean
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    images?: DestinationImageListRelationFilter
    highlights?: DestinationHighlightListRelationFilter
    blogPosts?: BlogPostListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    description?: SortOrder
    image?: SortOrder
    ogImage?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    bestTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    weatherAvg?: SortOrderInput | SortOrder
    weatherRain?: SortOrderInput | SortOrder
    howToGetThere?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    featured?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: DestinationImageOrderByRelationAggregateInput
    highlights?: DestinationHighlightOrderByRelationAggregateInput
    blogPosts?: BlogPostOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    name?: StringFilter<"Destination"> | string
    shortDescription?: StringNullableFilter<"Destination"> | string | null
    description?: StringFilter<"Destination"> | string
    image?: StringFilter<"Destination"> | string
    ogImage?: StringNullableFilter<"Destination"> | string | null
    location?: StringNullableFilter<"Destination"> | string | null
    district?: StringNullableFilter<"Destination"> | string | null
    province?: StringNullableFilter<"Destination"> | string | null
    category?: StringNullableFilter<"Destination"> | string | null
    bestTime?: StringNullableFilter<"Destination"> | string | null
    duration?: StringNullableFilter<"Destination"> | string | null
    budget?: StringNullableFilter<"Destination"> | string | null
    latitude?: FloatNullableFilter<"Destination"> | number | null
    longitude?: FloatNullableFilter<"Destination"> | number | null
    weatherAvg?: StringNullableFilter<"Destination"> | string | null
    weatherRain?: StringNullableFilter<"Destination"> | string | null
    howToGetThere?: StringNullableFilter<"Destination"> | string | null
    seoTitle?: StringNullableFilter<"Destination"> | string | null
    seoDescription?: StringNullableFilter<"Destination"> | string | null
    featured?: BoolFilter<"Destination"> | boolean
    published?: BoolFilter<"Destination"> | boolean
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    images?: DestinationImageListRelationFilter
    highlights?: DestinationHighlightListRelationFilter
    blogPosts?: BlogPostListRelationFilter
  }, "id" | "slug">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    description?: SortOrder
    image?: SortOrder
    ogImage?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    bestTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    weatherAvg?: SortOrderInput | SortOrder
    weatherRain?: SortOrderInput | SortOrder
    howToGetThere?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    featured?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _avg?: DestinationAvgOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
    _sum?: DestinationSumOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Destination"> | string
    name?: StringWithAggregatesFilter<"Destination"> | string
    slug?: StringWithAggregatesFilter<"Destination"> | string
    shortDescription?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    description?: StringWithAggregatesFilter<"Destination"> | string
    image?: StringWithAggregatesFilter<"Destination"> | string
    ogImage?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    location?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    district?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    province?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    category?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    bestTime?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    duration?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    budget?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Destination"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Destination"> | number | null
    weatherAvg?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    weatherRain?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    howToGetThere?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    seoTitle?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    featured?: BoolWithAggregatesFilter<"Destination"> | boolean
    published?: BoolWithAggregatesFilter<"Destination"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
  }

  export type DestinationImageWhereInput = {
    AND?: DestinationImageWhereInput | DestinationImageWhereInput[]
    OR?: DestinationImageWhereInput[]
    NOT?: DestinationImageWhereInput | DestinationImageWhereInput[]
    id?: UuidFilter<"DestinationImage"> | string
    url?: StringFilter<"DestinationImage"> | string
    destinationId?: UuidFilter<"DestinationImage"> | string
    createdAt?: DateTimeFilter<"DestinationImage"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationImage"> | Date | string
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type DestinationImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    destination?: DestinationOrderByWithRelationInput
  }

  export type DestinationImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationImageWhereInput | DestinationImageWhereInput[]
    OR?: DestinationImageWhereInput[]
    NOT?: DestinationImageWhereInput | DestinationImageWhereInput[]
    url?: StringFilter<"DestinationImage"> | string
    destinationId?: UuidFilter<"DestinationImage"> | string
    createdAt?: DateTimeFilter<"DestinationImage"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationImage"> | Date | string
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id">

  export type DestinationImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationImageCountOrderByAggregateInput
    _max?: DestinationImageMaxOrderByAggregateInput
    _min?: DestinationImageMinOrderByAggregateInput
  }

  export type DestinationImageScalarWhereWithAggregatesInput = {
    AND?: DestinationImageScalarWhereWithAggregatesInput | DestinationImageScalarWhereWithAggregatesInput[]
    OR?: DestinationImageScalarWhereWithAggregatesInput[]
    NOT?: DestinationImageScalarWhereWithAggregatesInput | DestinationImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DestinationImage"> | string
    url?: StringWithAggregatesFilter<"DestinationImage"> | string
    destinationId?: UuidWithAggregatesFilter<"DestinationImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DestinationImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DestinationImage"> | Date | string
  }

  export type DestinationHighlightWhereInput = {
    AND?: DestinationHighlightWhereInput | DestinationHighlightWhereInput[]
    OR?: DestinationHighlightWhereInput[]
    NOT?: DestinationHighlightWhereInput | DestinationHighlightWhereInput[]
    id?: UuidFilter<"DestinationHighlight"> | string
    title?: StringFilter<"DestinationHighlight"> | string
    description?: StringFilter<"DestinationHighlight"> | string
    image?: StringFilter<"DestinationHighlight"> | string
    destinationId?: UuidFilter<"DestinationHighlight"> | string
    createdAt?: DateTimeFilter<"DestinationHighlight"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationHighlight"> | Date | string
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type DestinationHighlightOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    destination?: DestinationOrderByWithRelationInput
  }

  export type DestinationHighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationHighlightWhereInput | DestinationHighlightWhereInput[]
    OR?: DestinationHighlightWhereInput[]
    NOT?: DestinationHighlightWhereInput | DestinationHighlightWhereInput[]
    title?: StringFilter<"DestinationHighlight"> | string
    description?: StringFilter<"DestinationHighlight"> | string
    image?: StringFilter<"DestinationHighlight"> | string
    destinationId?: UuidFilter<"DestinationHighlight"> | string
    createdAt?: DateTimeFilter<"DestinationHighlight"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationHighlight"> | Date | string
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id">

  export type DestinationHighlightOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationHighlightCountOrderByAggregateInput
    _max?: DestinationHighlightMaxOrderByAggregateInput
    _min?: DestinationHighlightMinOrderByAggregateInput
  }

  export type DestinationHighlightScalarWhereWithAggregatesInput = {
    AND?: DestinationHighlightScalarWhereWithAggregatesInput | DestinationHighlightScalarWhereWithAggregatesInput[]
    OR?: DestinationHighlightScalarWhereWithAggregatesInput[]
    NOT?: DestinationHighlightScalarWhereWithAggregatesInput | DestinationHighlightScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DestinationHighlight"> | string
    title?: StringWithAggregatesFilter<"DestinationHighlight"> | string
    description?: StringWithAggregatesFilter<"DestinationHighlight"> | string
    image?: StringWithAggregatesFilter<"DestinationHighlight"> | string
    destinationId?: UuidWithAggregatesFilter<"DestinationHighlight"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DestinationHighlight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DestinationHighlight"> | Date | string
  }

  export type PlaceMentionedWhereInput = {
    AND?: PlaceMentionedWhereInput | PlaceMentionedWhereInput[]
    OR?: PlaceMentionedWhereInput[]
    NOT?: PlaceMentionedWhereInput | PlaceMentionedWhereInput[]
    id?: UuidFilter<"PlaceMentioned"> | string
    name?: StringFilter<"PlaceMentioned"> | string
    url?: StringNullableFilter<"PlaceMentioned"> | string | null
    latitude?: FloatNullableFilter<"PlaceMentioned"> | number | null
    longitude?: FloatNullableFilter<"PlaceMentioned"> | number | null
    postId?: UuidFilter<"PlaceMentioned"> | string
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
  }

  export type PlaceMentionedOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    postId?: SortOrder
    post?: BlogPostOrderByWithRelationInput
  }

  export type PlaceMentionedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaceMentionedWhereInput | PlaceMentionedWhereInput[]
    OR?: PlaceMentionedWhereInput[]
    NOT?: PlaceMentionedWhereInput | PlaceMentionedWhereInput[]
    name?: StringFilter<"PlaceMentioned"> | string
    url?: StringNullableFilter<"PlaceMentioned"> | string | null
    latitude?: FloatNullableFilter<"PlaceMentioned"> | number | null
    longitude?: FloatNullableFilter<"PlaceMentioned"> | number | null
    postId?: UuidFilter<"PlaceMentioned"> | string
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
  }, "id">

  export type PlaceMentionedOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    postId?: SortOrder
    _count?: PlaceMentionedCountOrderByAggregateInput
    _avg?: PlaceMentionedAvgOrderByAggregateInput
    _max?: PlaceMentionedMaxOrderByAggregateInput
    _min?: PlaceMentionedMinOrderByAggregateInput
    _sum?: PlaceMentionedSumOrderByAggregateInput
  }

  export type PlaceMentionedScalarWhereWithAggregatesInput = {
    AND?: PlaceMentionedScalarWhereWithAggregatesInput | PlaceMentionedScalarWhereWithAggregatesInput[]
    OR?: PlaceMentionedScalarWhereWithAggregatesInput[]
    NOT?: PlaceMentionedScalarWhereWithAggregatesInput | PlaceMentionedScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PlaceMentioned"> | string
    name?: StringWithAggregatesFilter<"PlaceMentioned"> | string
    url?: StringNullableWithAggregatesFilter<"PlaceMentioned"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"PlaceMentioned"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"PlaceMentioned"> | number | null
    postId?: UuidWithAggregatesFilter<"PlaceMentioned"> | string
  }

  export type BlogCategoryWhereInput = {
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    id?: UuidFilter<"BlogCategory"> | string
    name?: StringFilter<"BlogCategory"> | string
    slug?: StringFilter<"BlogCategory"> | string
    description?: StringNullableFilter<"BlogCategory"> | string | null
    posts?: BlogPostListRelationFilter
  }

  export type BlogCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    posts?: BlogPostOrderByRelationAggregateInput
  }

  export type BlogCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    description?: StringNullableFilter<"BlogCategory"> | string | null
    posts?: BlogPostListRelationFilter
  }, "id" | "name" | "slug">

  export type BlogCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: BlogCategoryCountOrderByAggregateInput
    _max?: BlogCategoryMaxOrderByAggregateInput
    _min?: BlogCategoryMinOrderByAggregateInput
  }

  export type BlogCategoryScalarWhereWithAggregatesInput = {
    AND?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    OR?: BlogCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlogCategory"> | string
    name?: StringWithAggregatesFilter<"BlogCategory"> | string
    slug?: StringWithAggregatesFilter<"BlogCategory"> | string
    description?: StringNullableWithAggregatesFilter<"BlogCategory"> | string | null
  }

  export type BlogTagWhereInput = {
    AND?: BlogTagWhereInput | BlogTagWhereInput[]
    OR?: BlogTagWhereInput[]
    NOT?: BlogTagWhereInput | BlogTagWhereInput[]
    id?: UuidFilter<"BlogTag"> | string
    name?: StringFilter<"BlogTag"> | string
    slug?: StringFilter<"BlogTag"> | string
    posts?: BlogPostTagListRelationFilter
  }

  export type BlogTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    posts?: BlogPostTagOrderByRelationAggregateInput
  }

  export type BlogTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: BlogTagWhereInput | BlogTagWhereInput[]
    OR?: BlogTagWhereInput[]
    NOT?: BlogTagWhereInput | BlogTagWhereInput[]
    posts?: BlogPostTagListRelationFilter
  }, "id" | "name" | "slug">

  export type BlogTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: BlogTagCountOrderByAggregateInput
    _max?: BlogTagMaxOrderByAggregateInput
    _min?: BlogTagMinOrderByAggregateInput
  }

  export type BlogTagScalarWhereWithAggregatesInput = {
    AND?: BlogTagScalarWhereWithAggregatesInput | BlogTagScalarWhereWithAggregatesInput[]
    OR?: BlogTagScalarWhereWithAggregatesInput[]
    NOT?: BlogTagScalarWhereWithAggregatesInput | BlogTagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlogTag"> | string
    name?: StringWithAggregatesFilter<"BlogTag"> | string
    slug?: StringWithAggregatesFilter<"BlogTag"> | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: UuidFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    content?: StringFilter<"BlogPost"> | string
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    ogImage?: StringNullableFilter<"BlogPost"> | string | null
    categoryId?: UuidNullableFilter<"BlogPost"> | string | null
    destinationId?: UuidNullableFilter<"BlogPost"> | string | null
    location?: StringNullableFilter<"BlogPost"> | string | null
    timeNeeded?: StringNullableFilter<"BlogPost"> | string | null
    bestTime?: StringNullableFilter<"BlogPost"> | string | null
    latitude?: FloatNullableFilter<"BlogPost"> | number | null
    longitude?: FloatNullableFilter<"BlogPost"> | number | null
    articleType?: StringNullableFilter<"BlogPost"> | string | null
    authorName?: StringFilter<"BlogPost"> | string
    authorImage?: StringNullableFilter<"BlogPost"> | string | null
    status?: EnumBlogStatusFilter<"BlogPost"> | $Enums.BlogStatus
    featured?: BoolFilter<"BlogPost"> | boolean
    views?: IntFilter<"BlogPost"> | number
    seoTitle?: StringNullableFilter<"BlogPost"> | string | null
    seoDescription?: StringNullableFilter<"BlogPost"> | string | null
    seoKeywords?: StringNullableFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    category?: XOR<BlogCategoryNullableScalarRelationFilter, BlogCategoryWhereInput> | null
    tags?: BlogPostTagListRelationFilter
    destination?: XOR<DestinationNullableScalarRelationFilter, DestinationWhereInput> | null
    placesMentioned?: PlaceMentionedListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    destinationId?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    timeNeeded?: SortOrderInput | SortOrder
    bestTime?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    articleType?: SortOrderInput | SortOrder
    authorName?: SortOrder
    authorImage?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    seoKeywords?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: BlogCategoryOrderByWithRelationInput
    tags?: BlogPostTagOrderByRelationAggregateInput
    destination?: DestinationOrderByWithRelationInput
    placesMentioned?: PlaceMentionedOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    content?: StringFilter<"BlogPost"> | string
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    ogImage?: StringNullableFilter<"BlogPost"> | string | null
    categoryId?: UuidNullableFilter<"BlogPost"> | string | null
    destinationId?: UuidNullableFilter<"BlogPost"> | string | null
    location?: StringNullableFilter<"BlogPost"> | string | null
    timeNeeded?: StringNullableFilter<"BlogPost"> | string | null
    bestTime?: StringNullableFilter<"BlogPost"> | string | null
    latitude?: FloatNullableFilter<"BlogPost"> | number | null
    longitude?: FloatNullableFilter<"BlogPost"> | number | null
    articleType?: StringNullableFilter<"BlogPost"> | string | null
    authorName?: StringFilter<"BlogPost"> | string
    authorImage?: StringNullableFilter<"BlogPost"> | string | null
    status?: EnumBlogStatusFilter<"BlogPost"> | $Enums.BlogStatus
    featured?: BoolFilter<"BlogPost"> | boolean
    views?: IntFilter<"BlogPost"> | number
    seoTitle?: StringNullableFilter<"BlogPost"> | string | null
    seoDescription?: StringNullableFilter<"BlogPost"> | string | null
    seoKeywords?: StringNullableFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    category?: XOR<BlogCategoryNullableScalarRelationFilter, BlogCategoryWhereInput> | null
    tags?: BlogPostTagListRelationFilter
    destination?: XOR<DestinationNullableScalarRelationFilter, DestinationWhereInput> | null
    placesMentioned?: PlaceMentionedListRelationFilter
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    destinationId?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    timeNeeded?: SortOrderInput | SortOrder
    bestTime?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    articleType?: SortOrderInput | SortOrder
    authorName?: SortOrder
    authorImage?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    seoKeywords?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _avg?: BlogPostAvgOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
    _sum?: BlogPostSumOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    excerpt?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    coverImage?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    ogImage?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    categoryId?: UuidNullableWithAggregatesFilter<"BlogPost"> | string | null
    destinationId?: UuidNullableWithAggregatesFilter<"BlogPost"> | string | null
    location?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    timeNeeded?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    bestTime?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"BlogPost"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"BlogPost"> | number | null
    articleType?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    authorName?: StringWithAggregatesFilter<"BlogPost"> | string
    authorImage?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    status?: EnumBlogStatusWithAggregatesFilter<"BlogPost"> | $Enums.BlogStatus
    featured?: BoolWithAggregatesFilter<"BlogPost"> | boolean
    views?: IntWithAggregatesFilter<"BlogPost"> | number
    seoTitle?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    seoKeywords?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type BlogPostTagWhereInput = {
    AND?: BlogPostTagWhereInput | BlogPostTagWhereInput[]
    OR?: BlogPostTagWhereInput[]
    NOT?: BlogPostTagWhereInput | BlogPostTagWhereInput[]
    postId?: UuidFilter<"BlogPostTag"> | string
    tagId?: UuidFilter<"BlogPostTag"> | string
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    tag?: XOR<BlogTagScalarRelationFilter, BlogTagWhereInput>
  }

  export type BlogPostTagOrderByWithRelationInput = {
    postId?: SortOrder
    tagId?: SortOrder
    post?: BlogPostOrderByWithRelationInput
    tag?: BlogTagOrderByWithRelationInput
  }

  export type BlogPostTagWhereUniqueInput = Prisma.AtLeast<{
    postId_tagId?: BlogPostTagPostIdTagIdCompoundUniqueInput
    AND?: BlogPostTagWhereInput | BlogPostTagWhereInput[]
    OR?: BlogPostTagWhereInput[]
    NOT?: BlogPostTagWhereInput | BlogPostTagWhereInput[]
    postId?: UuidFilter<"BlogPostTag"> | string
    tagId?: UuidFilter<"BlogPostTag"> | string
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    tag?: XOR<BlogTagScalarRelationFilter, BlogTagWhereInput>
  }, "postId_tagId">

  export type BlogPostTagOrderByWithAggregationInput = {
    postId?: SortOrder
    tagId?: SortOrder
    _count?: BlogPostTagCountOrderByAggregateInput
    _max?: BlogPostTagMaxOrderByAggregateInput
    _min?: BlogPostTagMinOrderByAggregateInput
  }

  export type BlogPostTagScalarWhereWithAggregatesInput = {
    AND?: BlogPostTagScalarWhereWithAggregatesInput | BlogPostTagScalarWhereWithAggregatesInput[]
    OR?: BlogPostTagScalarWhereWithAggregatesInput[]
    NOT?: BlogPostTagScalarWhereWithAggregatesInput | BlogPostTagScalarWhereWithAggregatesInput[]
    postId?: UuidWithAggregatesFilter<"BlogPostTag"> | string
    tagId?: UuidWithAggregatesFilter<"BlogPostTag"> | string
  }

  export type TourPackageWhereInput = {
    AND?: TourPackageWhereInput | TourPackageWhereInput[]
    OR?: TourPackageWhereInput[]
    NOT?: TourPackageWhereInput | TourPackageWhereInput[]
    id?: UuidFilter<"TourPackage"> | string
    title?: StringFilter<"TourPackage"> | string
    slug?: StringFilter<"TourPackage"> | string
    category?: StringFilter<"TourPackage"> | string
    duration?: StringFilter<"TourPackage"> | string
    daysCount?: IntFilter<"TourPackage"> | number
    nightsCount?: IntFilter<"TourPackage"> | number
    price?: FloatFilter<"TourPackage"> | number
    discountPrice?: FloatNullableFilter<"TourPackage"> | number | null
    rating?: FloatFilter<"TourPackage"> | number
    reviewsCount?: IntFilter<"TourPackage"> | number
    image?: StringFilter<"TourPackage"> | string
    ogImage?: StringNullableFilter<"TourPackage"> | string | null
    overview?: StringFilter<"TourPackage"> | string
    destinations?: StringFilter<"TourPackage"> | string
    highlights?: StringFilter<"TourPackage"> | string
    itinerary?: StringFilter<"TourPackage"> | string
    included?: StringFilter<"TourPackage"> | string
    excluded?: StringFilter<"TourPackage"> | string
    featuredTag?: StringNullableFilter<"TourPackage"> | string | null
    featured?: BoolFilter<"TourPackage"> | boolean
    published?: BoolFilter<"TourPackage"> | boolean
    maxGroupSize?: IntNullableFilter<"TourPackage"> | number | null
    difficulty?: StringNullableFilter<"TourPackage"> | string | null
    startLocation?: StringNullableFilter<"TourPackage"> | string | null
    endLocation?: StringNullableFilter<"TourPackage"> | string | null
    seoTitle?: StringNullableFilter<"TourPackage"> | string | null
    seoDescription?: StringNullableFilter<"TourPackage"> | string | null
    createdAt?: DateTimeFilter<"TourPackage"> | Date | string
    updatedAt?: DateTimeFilter<"TourPackage"> | Date | string
    inquiries?: TourInquiryListRelationFilter
  }

  export type TourPackageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    daysCount?: SortOrder
    nightsCount?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    image?: SortOrder
    ogImage?: SortOrderInput | SortOrder
    overview?: SortOrder
    destinations?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    included?: SortOrder
    excluded?: SortOrder
    featuredTag?: SortOrderInput | SortOrder
    featured?: SortOrder
    published?: SortOrder
    maxGroupSize?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    startLocation?: SortOrderInput | SortOrder
    endLocation?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inquiries?: TourInquiryOrderByRelationAggregateInput
  }

  export type TourPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TourPackageWhereInput | TourPackageWhereInput[]
    OR?: TourPackageWhereInput[]
    NOT?: TourPackageWhereInput | TourPackageWhereInput[]
    title?: StringFilter<"TourPackage"> | string
    category?: StringFilter<"TourPackage"> | string
    duration?: StringFilter<"TourPackage"> | string
    daysCount?: IntFilter<"TourPackage"> | number
    nightsCount?: IntFilter<"TourPackage"> | number
    price?: FloatFilter<"TourPackage"> | number
    discountPrice?: FloatNullableFilter<"TourPackage"> | number | null
    rating?: FloatFilter<"TourPackage"> | number
    reviewsCount?: IntFilter<"TourPackage"> | number
    image?: StringFilter<"TourPackage"> | string
    ogImage?: StringNullableFilter<"TourPackage"> | string | null
    overview?: StringFilter<"TourPackage"> | string
    destinations?: StringFilter<"TourPackage"> | string
    highlights?: StringFilter<"TourPackage"> | string
    itinerary?: StringFilter<"TourPackage"> | string
    included?: StringFilter<"TourPackage"> | string
    excluded?: StringFilter<"TourPackage"> | string
    featuredTag?: StringNullableFilter<"TourPackage"> | string | null
    featured?: BoolFilter<"TourPackage"> | boolean
    published?: BoolFilter<"TourPackage"> | boolean
    maxGroupSize?: IntNullableFilter<"TourPackage"> | number | null
    difficulty?: StringNullableFilter<"TourPackage"> | string | null
    startLocation?: StringNullableFilter<"TourPackage"> | string | null
    endLocation?: StringNullableFilter<"TourPackage"> | string | null
    seoTitle?: StringNullableFilter<"TourPackage"> | string | null
    seoDescription?: StringNullableFilter<"TourPackage"> | string | null
    createdAt?: DateTimeFilter<"TourPackage"> | Date | string
    updatedAt?: DateTimeFilter<"TourPackage"> | Date | string
    inquiries?: TourInquiryListRelationFilter
  }, "id" | "slug">

  export type TourPackageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    daysCount?: SortOrder
    nightsCount?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrderInput | SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    image?: SortOrder
    ogImage?: SortOrderInput | SortOrder
    overview?: SortOrder
    destinations?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    included?: SortOrder
    excluded?: SortOrder
    featuredTag?: SortOrderInput | SortOrder
    featured?: SortOrder
    published?: SortOrder
    maxGroupSize?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    startLocation?: SortOrderInput | SortOrder
    endLocation?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourPackageCountOrderByAggregateInput
    _avg?: TourPackageAvgOrderByAggregateInput
    _max?: TourPackageMaxOrderByAggregateInput
    _min?: TourPackageMinOrderByAggregateInput
    _sum?: TourPackageSumOrderByAggregateInput
  }

  export type TourPackageScalarWhereWithAggregatesInput = {
    AND?: TourPackageScalarWhereWithAggregatesInput | TourPackageScalarWhereWithAggregatesInput[]
    OR?: TourPackageScalarWhereWithAggregatesInput[]
    NOT?: TourPackageScalarWhereWithAggregatesInput | TourPackageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TourPackage"> | string
    title?: StringWithAggregatesFilter<"TourPackage"> | string
    slug?: StringWithAggregatesFilter<"TourPackage"> | string
    category?: StringWithAggregatesFilter<"TourPackage"> | string
    duration?: StringWithAggregatesFilter<"TourPackage"> | string
    daysCount?: IntWithAggregatesFilter<"TourPackage"> | number
    nightsCount?: IntWithAggregatesFilter<"TourPackage"> | number
    price?: FloatWithAggregatesFilter<"TourPackage"> | number
    discountPrice?: FloatNullableWithAggregatesFilter<"TourPackage"> | number | null
    rating?: FloatWithAggregatesFilter<"TourPackage"> | number
    reviewsCount?: IntWithAggregatesFilter<"TourPackage"> | number
    image?: StringWithAggregatesFilter<"TourPackage"> | string
    ogImage?: StringNullableWithAggregatesFilter<"TourPackage"> | string | null
    overview?: StringWithAggregatesFilter<"TourPackage"> | string
    destinations?: StringWithAggregatesFilter<"TourPackage"> | string
    highlights?: StringWithAggregatesFilter<"TourPackage"> | string
    itinerary?: StringWithAggregatesFilter<"TourPackage"> | string
    included?: StringWithAggregatesFilter<"TourPackage"> | string
    excluded?: StringWithAggregatesFilter<"TourPackage"> | string
    featuredTag?: StringNullableWithAggregatesFilter<"TourPackage"> | string | null
    featured?: BoolWithAggregatesFilter<"TourPackage"> | boolean
    published?: BoolWithAggregatesFilter<"TourPackage"> | boolean
    maxGroupSize?: IntNullableWithAggregatesFilter<"TourPackage"> | number | null
    difficulty?: StringNullableWithAggregatesFilter<"TourPackage"> | string | null
    startLocation?: StringNullableWithAggregatesFilter<"TourPackage"> | string | null
    endLocation?: StringNullableWithAggregatesFilter<"TourPackage"> | string | null
    seoTitle?: StringNullableWithAggregatesFilter<"TourPackage"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"TourPackage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TourPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TourPackage"> | Date | string
  }

  export type TourInquiryWhereInput = {
    AND?: TourInquiryWhereInput | TourInquiryWhereInput[]
    OR?: TourInquiryWhereInput[]
    NOT?: TourInquiryWhereInput | TourInquiryWhereInput[]
    id?: UuidFilter<"TourInquiry"> | string
    tourId?: UuidNullableFilter<"TourInquiry"> | string | null
    name?: StringFilter<"TourInquiry"> | string
    email?: StringFilter<"TourInquiry"> | string
    phone?: StringFilter<"TourInquiry"> | string
    travelDate?: StringNullableFilter<"TourInquiry"> | string | null
    travelersCount?: IntFilter<"TourInquiry"> | number
    message?: StringNullableFilter<"TourInquiry"> | string | null
    status?: StringFilter<"TourInquiry"> | string
    createdAt?: DateTimeFilter<"TourInquiry"> | Date | string
    tour?: XOR<TourPackageNullableScalarRelationFilter, TourPackageWhereInput> | null
  }

  export type TourInquiryOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    travelDate?: SortOrderInput | SortOrder
    travelersCount?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    tour?: TourPackageOrderByWithRelationInput
  }

  export type TourInquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourInquiryWhereInput | TourInquiryWhereInput[]
    OR?: TourInquiryWhereInput[]
    NOT?: TourInquiryWhereInput | TourInquiryWhereInput[]
    tourId?: UuidNullableFilter<"TourInquiry"> | string | null
    name?: StringFilter<"TourInquiry"> | string
    email?: StringFilter<"TourInquiry"> | string
    phone?: StringFilter<"TourInquiry"> | string
    travelDate?: StringNullableFilter<"TourInquiry"> | string | null
    travelersCount?: IntFilter<"TourInquiry"> | number
    message?: StringNullableFilter<"TourInquiry"> | string | null
    status?: StringFilter<"TourInquiry"> | string
    createdAt?: DateTimeFilter<"TourInquiry"> | Date | string
    tour?: XOR<TourPackageNullableScalarRelationFilter, TourPackageWhereInput> | null
  }, "id">

  export type TourInquiryOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    travelDate?: SortOrderInput | SortOrder
    travelersCount?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TourInquiryCountOrderByAggregateInput
    _avg?: TourInquiryAvgOrderByAggregateInput
    _max?: TourInquiryMaxOrderByAggregateInput
    _min?: TourInquiryMinOrderByAggregateInput
    _sum?: TourInquirySumOrderByAggregateInput
  }

  export type TourInquiryScalarWhereWithAggregatesInput = {
    AND?: TourInquiryScalarWhereWithAggregatesInput | TourInquiryScalarWhereWithAggregatesInput[]
    OR?: TourInquiryScalarWhereWithAggregatesInput[]
    NOT?: TourInquiryScalarWhereWithAggregatesInput | TourInquiryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TourInquiry"> | string
    tourId?: UuidNullableWithAggregatesFilter<"TourInquiry"> | string | null
    name?: StringWithAggregatesFilter<"TourInquiry"> | string
    email?: StringWithAggregatesFilter<"TourInquiry"> | string
    phone?: StringWithAggregatesFilter<"TourInquiry"> | string
    travelDate?: StringNullableWithAggregatesFilter<"TourInquiry"> | string | null
    travelersCount?: IntWithAggregatesFilter<"TourInquiry"> | number
    message?: StringNullableWithAggregatesFilter<"TourInquiry"> | string | null
    status?: StringWithAggregatesFilter<"TourInquiry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TourInquiry"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: $Enums.Gender | null
    email: string
    phone: string
    password: string
    country: string
    stateProvince: string
    profileImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    emailVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: $Enums.Gender | null
    email: string
    phone: string
    password: string
    country: string
    stateProvince: string
    profileImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    emailVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: $Enums.Gender | null
    email: string
    phone: string
    password: string
    country: string
    stateProvince: string
    profileImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    emailVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminOtpCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AdminOtpUncheckedCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AdminOtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminOtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminOtpCreateManyInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AdminOtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminOtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateInput = {
    id?: string
    title: string
    url: string
    category: string
    altText?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    category: string
    altText?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateManyInput = {
    id?: string
    title: string
    url: string
    category: string
    altText?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: DestinationImageCreateNestedManyWithoutDestinationInput
    highlights?: DestinationHighlightCreateNestedManyWithoutDestinationInput
    blogPosts?: BlogPostCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: DestinationImageUncheckedCreateNestedManyWithoutDestinationInput
    highlights?: DestinationHighlightUncheckedCreateNestedManyWithoutDestinationInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DestinationImageUpdateManyWithoutDestinationNestedInput
    highlights?: DestinationHighlightUpdateManyWithoutDestinationNestedInput
    blogPosts?: BlogPostUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DestinationImageUncheckedUpdateManyWithoutDestinationNestedInput
    highlights?: DestinationHighlightUncheckedUpdateManyWithoutDestinationNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    destination: DestinationCreateNestedOneWithoutImagesInput
  }

  export type DestinationImageUncheckedCreateInput = {
    id?: string
    url: string
    destinationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutImagesNestedInput
  }

  export type DestinationImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationImageCreateManyInput = {
    id?: string
    url: string
    destinationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationHighlightCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    destination: DestinationCreateNestedOneWithoutHighlightsInput
  }

  export type DestinationHighlightUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    destinationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationHighlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type DestinationHighlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationHighlightCreateManyInput = {
    id?: string
    title: string
    description: string
    image: string
    destinationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationHighlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationHighlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceMentionedCreateInput = {
    id?: string
    name: string
    url?: string | null
    latitude?: number | null
    longitude?: number | null
    post: BlogPostCreateNestedOneWithoutPlacesMentionedInput
  }

  export type PlaceMentionedUncheckedCreateInput = {
    id?: string
    name: string
    url?: string | null
    latitude?: number | null
    longitude?: number | null
    postId: string
  }

  export type PlaceMentionedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    post?: BlogPostUpdateOneRequiredWithoutPlacesMentionedNestedInput
  }

  export type PlaceMentionedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceMentionedCreateManyInput = {
    id?: string
    name: string
    url?: string | null
    latitude?: number | null
    longitude?: number | null
    postId: string
  }

  export type PlaceMentionedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlaceMentionedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    posts?: BlogPostCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    posts?: BlogPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BlogCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: BlogPostUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: BlogPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BlogCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
  }

  export type BlogCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogTagCreateInput = {
    id?: string
    name: string
    slug: string
    posts?: BlogPostTagCreateNestedManyWithoutTagInput
  }

  export type BlogTagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    posts?: BlogPostTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type BlogTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    posts?: BlogPostTagUpdateManyWithoutTagNestedInput
  }

  export type BlogTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    posts?: BlogPostTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type BlogTagCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type BlogTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type BlogTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: BlogCategoryCreateNestedOneWithoutPostsInput
    tags?: BlogPostTagCreateNestedManyWithoutPostInput
    destination?: DestinationCreateNestedOneWithoutBlogPostsInput
    placesMentioned?: PlaceMentionedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    categoryId?: string | null
    destinationId?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: BlogPostTagUncheckedCreateNestedManyWithoutPostInput
    placesMentioned?: PlaceMentionedUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneWithoutPostsNestedInput
    tags?: BlogPostTagUpdateManyWithoutPostNestedInput
    destination?: DestinationUpdateOneWithoutBlogPostsNestedInput
    placesMentioned?: PlaceMentionedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: BlogPostTagUncheckedUpdateManyWithoutPostNestedInput
    placesMentioned?: PlaceMentionedUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    categoryId?: string | null
    destinationId?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostTagCreateInput = {
    post: BlogPostCreateNestedOneWithoutTagsInput
    tag: BlogTagCreateNestedOneWithoutPostsInput
  }

  export type BlogPostTagUncheckedCreateInput = {
    postId: string
    tagId: string
  }

  export type BlogPostTagUpdateInput = {
    post?: BlogPostUpdateOneRequiredWithoutTagsNestedInput
    tag?: BlogTagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type BlogPostTagUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagCreateManyInput = {
    postId: string
    tagId: string
  }

  export type BlogPostTagUpdateManyMutationInput = {

  }

  export type BlogPostTagUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TourPackageCreateInput = {
    id?: string
    title: string
    slug: string
    category: string
    duration: string
    daysCount?: number
    nightsCount?: number
    price: number
    discountPrice?: number | null
    rating?: number
    reviewsCount?: number
    image: string
    ogImage?: string | null
    overview: string
    destinations: string
    highlights: string
    itinerary: string
    included: string
    excluded: string
    featuredTag?: string | null
    featured?: boolean
    published?: boolean
    maxGroupSize?: number | null
    difficulty?: string | null
    startLocation?: string | null
    endLocation?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inquiries?: TourInquiryCreateNestedManyWithoutTourInput
  }

  export type TourPackageUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    category: string
    duration: string
    daysCount?: number
    nightsCount?: number
    price: number
    discountPrice?: number | null
    rating?: number
    reviewsCount?: number
    image: string
    ogImage?: string | null
    overview: string
    destinations: string
    highlights: string
    itinerary: string
    included: string
    excluded: string
    featuredTag?: string | null
    featured?: boolean
    published?: boolean
    maxGroupSize?: number | null
    difficulty?: string | null
    startLocation?: string | null
    endLocation?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inquiries?: TourInquiryUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourPackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    daysCount?: IntFieldUpdateOperationsInput | number
    nightsCount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: StringFieldUpdateOperationsInput | string
    destinations?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    included?: StringFieldUpdateOperationsInput | string
    excluded?: StringFieldUpdateOperationsInput | string
    featuredTag?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    maxGroupSize?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    startLocation?: NullableStringFieldUpdateOperationsInput | string | null
    endLocation?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inquiries?: TourInquiryUpdateManyWithoutTourNestedInput
  }

  export type TourPackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    daysCount?: IntFieldUpdateOperationsInput | number
    nightsCount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: StringFieldUpdateOperationsInput | string
    destinations?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    included?: StringFieldUpdateOperationsInput | string
    excluded?: StringFieldUpdateOperationsInput | string
    featuredTag?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    maxGroupSize?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    startLocation?: NullableStringFieldUpdateOperationsInput | string | null
    endLocation?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inquiries?: TourInquiryUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourPackageCreateManyInput = {
    id?: string
    title: string
    slug: string
    category: string
    duration: string
    daysCount?: number
    nightsCount?: number
    price: number
    discountPrice?: number | null
    rating?: number
    reviewsCount?: number
    image: string
    ogImage?: string | null
    overview: string
    destinations: string
    highlights: string
    itinerary: string
    included: string
    excluded: string
    featuredTag?: string | null
    featured?: boolean
    published?: boolean
    maxGroupSize?: number | null
    difficulty?: string | null
    startLocation?: string | null
    endLocation?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourPackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    daysCount?: IntFieldUpdateOperationsInput | number
    nightsCount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: StringFieldUpdateOperationsInput | string
    destinations?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    included?: StringFieldUpdateOperationsInput | string
    excluded?: StringFieldUpdateOperationsInput | string
    featuredTag?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    maxGroupSize?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    startLocation?: NullableStringFieldUpdateOperationsInput | string | null
    endLocation?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    daysCount?: IntFieldUpdateOperationsInput | number
    nightsCount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: StringFieldUpdateOperationsInput | string
    destinations?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    included?: StringFieldUpdateOperationsInput | string
    excluded?: StringFieldUpdateOperationsInput | string
    featuredTag?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    maxGroupSize?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    startLocation?: NullableStringFieldUpdateOperationsInput | string | null
    endLocation?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourInquiryCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    travelDate?: string | null
    travelersCount?: number
    message?: string | null
    status?: string
    createdAt?: Date | string
    tour?: TourPackageCreateNestedOneWithoutInquiriesInput
  }

  export type TourInquiryUncheckedCreateInput = {
    id?: string
    tourId?: string | null
    name: string
    email: string
    phone: string
    travelDate?: string | null
    travelersCount?: number
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TourInquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    travelersCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourPackageUpdateOneWithoutInquiriesNestedInput
  }

  export type TourInquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    travelersCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourInquiryCreateManyInput = {
    id?: string
    tourId?: string | null
    name: string
    email: string
    phone: string
    travelDate?: string | null
    travelersCount?: number
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TourInquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    travelersCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourInquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tourId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    travelersCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stateProvince?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stateProvince?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stateProvince?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminOtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminOtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminOtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    altText?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    altText?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    altText?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DestinationImageListRelationFilter = {
    every?: DestinationImageWhereInput
    some?: DestinationImageWhereInput
    none?: DestinationImageWhereInput
  }

  export type DestinationHighlightListRelationFilter = {
    every?: DestinationHighlightWhereInput
    some?: DestinationHighlightWhereInput
    none?: DestinationHighlightWhereInput
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type DestinationImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationHighlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ogImage?: SortOrder
    location?: SortOrder
    district?: SortOrder
    province?: SortOrder
    category?: SortOrder
    bestTime?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    weatherAvg?: SortOrder
    weatherRain?: SortOrder
    howToGetThere?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ogImage?: SortOrder
    location?: SortOrder
    district?: SortOrder
    province?: SortOrder
    category?: SortOrder
    bestTime?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    weatherAvg?: SortOrder
    weatherRain?: SortOrder
    howToGetThere?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ogImage?: SortOrder
    location?: SortOrder
    district?: SortOrder
    province?: SortOrder
    category?: SortOrder
    bestTime?: SortOrder
    duration?: SortOrder
    budget?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    weatherAvg?: SortOrder
    weatherRain?: SortOrder
    howToGetThere?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DestinationScalarRelationFilter = {
    is?: DestinationWhereInput
    isNot?: DestinationWhereInput
  }

  export type DestinationImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationHighlightCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationHighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationHighlightMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostScalarRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type PlaceMentionedCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    postId?: SortOrder
  }

  export type PlaceMentionedAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PlaceMentionedMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    postId?: SortOrder
  }

  export type PlaceMentionedMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    postId?: SortOrder
  }

  export type PlaceMentionedSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BlogCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type BlogCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type BlogCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type BlogPostTagListRelationFilter = {
    every?: BlogPostTagWhereInput
    some?: BlogPostTagWhereInput
    none?: BlogPostTagWhereInput
  }

  export type BlogPostTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type BlogTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type BlogTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumBlogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusFilter<$PrismaModel> | $Enums.BlogStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BlogCategoryNullableScalarRelationFilter = {
    is?: BlogCategoryWhereInput | null
    isNot?: BlogCategoryWhereInput | null
  }

  export type DestinationNullableScalarRelationFilter = {
    is?: DestinationWhereInput | null
    isNot?: DestinationWhereInput | null
  }

  export type PlaceMentionedListRelationFilter = {
    every?: PlaceMentionedWhereInput
    some?: PlaceMentionedWhereInput
    none?: PlaceMentionedWhereInput
  }

  export type PlaceMentionedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    ogImage?: SortOrder
    categoryId?: SortOrder
    destinationId?: SortOrder
    location?: SortOrder
    timeNeeded?: SortOrder
    bestTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    articleType?: SortOrder
    authorName?: SortOrder
    authorImage?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoKeywords?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    views?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    ogImage?: SortOrder
    categoryId?: SortOrder
    destinationId?: SortOrder
    location?: SortOrder
    timeNeeded?: SortOrder
    bestTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    articleType?: SortOrder
    authorName?: SortOrder
    authorImage?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoKeywords?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    ogImage?: SortOrder
    categoryId?: SortOrder
    destinationId?: SortOrder
    location?: SortOrder
    timeNeeded?: SortOrder
    bestTime?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    articleType?: SortOrder
    authorName?: SortOrder
    authorImage?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoKeywords?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    views?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumBlogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BlogTagScalarRelationFilter = {
    is?: BlogTagWhereInput
    isNot?: BlogTagWhereInput
  }

  export type BlogPostTagPostIdTagIdCompoundUniqueInput = {
    postId: string
    tagId: string
  }

  export type BlogPostTagCountOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type BlogPostTagMaxOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type BlogPostTagMinOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TourInquiryListRelationFilter = {
    every?: TourInquiryWhereInput
    some?: TourInquiryWhereInput
    none?: TourInquiryWhereInput
  }

  export type TourInquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourPackageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    daysCount?: SortOrder
    nightsCount?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    image?: SortOrder
    ogImage?: SortOrder
    overview?: SortOrder
    destinations?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    included?: SortOrder
    excluded?: SortOrder
    featuredTag?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    maxGroupSize?: SortOrder
    difficulty?: SortOrder
    startLocation?: SortOrder
    endLocation?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourPackageAvgOrderByAggregateInput = {
    daysCount?: SortOrder
    nightsCount?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    maxGroupSize?: SortOrder
  }

  export type TourPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    daysCount?: SortOrder
    nightsCount?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    image?: SortOrder
    ogImage?: SortOrder
    overview?: SortOrder
    destinations?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    included?: SortOrder
    excluded?: SortOrder
    featuredTag?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    maxGroupSize?: SortOrder
    difficulty?: SortOrder
    startLocation?: SortOrder
    endLocation?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourPackageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    daysCount?: SortOrder
    nightsCount?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    image?: SortOrder
    ogImage?: SortOrder
    overview?: SortOrder
    destinations?: SortOrder
    highlights?: SortOrder
    itinerary?: SortOrder
    included?: SortOrder
    excluded?: SortOrder
    featuredTag?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    maxGroupSize?: SortOrder
    difficulty?: SortOrder
    startLocation?: SortOrder
    endLocation?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourPackageSumOrderByAggregateInput = {
    daysCount?: SortOrder
    nightsCount?: SortOrder
    price?: SortOrder
    discountPrice?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    maxGroupSize?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TourPackageNullableScalarRelationFilter = {
    is?: TourPackageWhereInput | null
    isNot?: TourPackageWhereInput | null
  }

  export type TourInquiryCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    travelDate?: SortOrder
    travelersCount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TourInquiryAvgOrderByAggregateInput = {
    travelersCount?: SortOrder
  }

  export type TourInquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    travelDate?: SortOrder
    travelersCount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TourInquiryMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    travelDate?: SortOrder
    travelersCount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TourInquirySumOrderByAggregateInput = {
    travelersCount?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type DestinationImageCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationImageCreateWithoutDestinationInput, DestinationImageUncheckedCreateWithoutDestinationInput> | DestinationImageCreateWithoutDestinationInput[] | DestinationImageUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationImageCreateOrConnectWithoutDestinationInput | DestinationImageCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationImageCreateManyDestinationInputEnvelope
    connect?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
  }

  export type DestinationHighlightCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationHighlightCreateWithoutDestinationInput, DestinationHighlightUncheckedCreateWithoutDestinationInput> | DestinationHighlightCreateWithoutDestinationInput[] | DestinationHighlightUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationHighlightCreateOrConnectWithoutDestinationInput | DestinationHighlightCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationHighlightCreateManyDestinationInputEnvelope
    connect?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
  }

  export type BlogPostCreateNestedManyWithoutDestinationInput = {
    create?: XOR<BlogPostCreateWithoutDestinationInput, BlogPostUncheckedCreateWithoutDestinationInput> | BlogPostCreateWithoutDestinationInput[] | BlogPostUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutDestinationInput | BlogPostCreateOrConnectWithoutDestinationInput[]
    createMany?: BlogPostCreateManyDestinationInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type DestinationImageUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationImageCreateWithoutDestinationInput, DestinationImageUncheckedCreateWithoutDestinationInput> | DestinationImageCreateWithoutDestinationInput[] | DestinationImageUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationImageCreateOrConnectWithoutDestinationInput | DestinationImageCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationImageCreateManyDestinationInputEnvelope
    connect?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
  }

  export type DestinationHighlightUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationHighlightCreateWithoutDestinationInput, DestinationHighlightUncheckedCreateWithoutDestinationInput> | DestinationHighlightCreateWithoutDestinationInput[] | DestinationHighlightUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationHighlightCreateOrConnectWithoutDestinationInput | DestinationHighlightCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationHighlightCreateManyDestinationInputEnvelope
    connect?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<BlogPostCreateWithoutDestinationInput, BlogPostUncheckedCreateWithoutDestinationInput> | BlogPostCreateWithoutDestinationInput[] | BlogPostUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutDestinationInput | BlogPostCreateOrConnectWithoutDestinationInput[]
    createMany?: BlogPostCreateManyDestinationInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DestinationImageUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationImageCreateWithoutDestinationInput, DestinationImageUncheckedCreateWithoutDestinationInput> | DestinationImageCreateWithoutDestinationInput[] | DestinationImageUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationImageCreateOrConnectWithoutDestinationInput | DestinationImageCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationImageUpsertWithWhereUniqueWithoutDestinationInput | DestinationImageUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationImageCreateManyDestinationInputEnvelope
    set?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
    disconnect?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
    delete?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
    connect?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
    update?: DestinationImageUpdateWithWhereUniqueWithoutDestinationInput | DestinationImageUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationImageUpdateManyWithWhereWithoutDestinationInput | DestinationImageUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationImageScalarWhereInput | DestinationImageScalarWhereInput[]
  }

  export type DestinationHighlightUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationHighlightCreateWithoutDestinationInput, DestinationHighlightUncheckedCreateWithoutDestinationInput> | DestinationHighlightCreateWithoutDestinationInput[] | DestinationHighlightUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationHighlightCreateOrConnectWithoutDestinationInput | DestinationHighlightCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationHighlightUpsertWithWhereUniqueWithoutDestinationInput | DestinationHighlightUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationHighlightCreateManyDestinationInputEnvelope
    set?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
    disconnect?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
    delete?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
    connect?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
    update?: DestinationHighlightUpdateWithWhereUniqueWithoutDestinationInput | DestinationHighlightUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationHighlightUpdateManyWithWhereWithoutDestinationInput | DestinationHighlightUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationHighlightScalarWhereInput | DestinationHighlightScalarWhereInput[]
  }

  export type BlogPostUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<BlogPostCreateWithoutDestinationInput, BlogPostUncheckedCreateWithoutDestinationInput> | BlogPostCreateWithoutDestinationInput[] | BlogPostUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutDestinationInput | BlogPostCreateOrConnectWithoutDestinationInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutDestinationInput | BlogPostUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: BlogPostCreateManyDestinationInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutDestinationInput | BlogPostUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutDestinationInput | BlogPostUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type DestinationImageUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationImageCreateWithoutDestinationInput, DestinationImageUncheckedCreateWithoutDestinationInput> | DestinationImageCreateWithoutDestinationInput[] | DestinationImageUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationImageCreateOrConnectWithoutDestinationInput | DestinationImageCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationImageUpsertWithWhereUniqueWithoutDestinationInput | DestinationImageUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationImageCreateManyDestinationInputEnvelope
    set?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
    disconnect?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
    delete?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
    connect?: DestinationImageWhereUniqueInput | DestinationImageWhereUniqueInput[]
    update?: DestinationImageUpdateWithWhereUniqueWithoutDestinationInput | DestinationImageUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationImageUpdateManyWithWhereWithoutDestinationInput | DestinationImageUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationImageScalarWhereInput | DestinationImageScalarWhereInput[]
  }

  export type DestinationHighlightUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationHighlightCreateWithoutDestinationInput, DestinationHighlightUncheckedCreateWithoutDestinationInput> | DestinationHighlightCreateWithoutDestinationInput[] | DestinationHighlightUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationHighlightCreateOrConnectWithoutDestinationInput | DestinationHighlightCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationHighlightUpsertWithWhereUniqueWithoutDestinationInput | DestinationHighlightUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationHighlightCreateManyDestinationInputEnvelope
    set?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
    disconnect?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
    delete?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
    connect?: DestinationHighlightWhereUniqueInput | DestinationHighlightWhereUniqueInput[]
    update?: DestinationHighlightUpdateWithWhereUniqueWithoutDestinationInput | DestinationHighlightUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationHighlightUpdateManyWithWhereWithoutDestinationInput | DestinationHighlightUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationHighlightScalarWhereInput | DestinationHighlightScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<BlogPostCreateWithoutDestinationInput, BlogPostUncheckedCreateWithoutDestinationInput> | BlogPostCreateWithoutDestinationInput[] | BlogPostUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutDestinationInput | BlogPostCreateOrConnectWithoutDestinationInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutDestinationInput | BlogPostUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: BlogPostCreateManyDestinationInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutDestinationInput | BlogPostUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutDestinationInput | BlogPostUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type DestinationCreateNestedOneWithoutImagesInput = {
    create?: XOR<DestinationCreateWithoutImagesInput, DestinationUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutImagesInput
    connect?: DestinationWhereUniqueInput
  }

  export type DestinationUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<DestinationCreateWithoutImagesInput, DestinationUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutImagesInput
    upsert?: DestinationUpsertWithoutImagesInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutImagesInput, DestinationUpdateWithoutImagesInput>, DestinationUncheckedUpdateWithoutImagesInput>
  }

  export type DestinationCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<DestinationCreateWithoutHighlightsInput, DestinationUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutHighlightsInput
    connect?: DestinationWhereUniqueInput
  }

  export type DestinationUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<DestinationCreateWithoutHighlightsInput, DestinationUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutHighlightsInput
    upsert?: DestinationUpsertWithoutHighlightsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutHighlightsInput, DestinationUpdateWithoutHighlightsInput>, DestinationUncheckedUpdateWithoutHighlightsInput>
  }

  export type BlogPostCreateNestedOneWithoutPlacesMentionedInput = {
    create?: XOR<BlogPostCreateWithoutPlacesMentionedInput, BlogPostUncheckedCreateWithoutPlacesMentionedInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutPlacesMentionedInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutPlacesMentionedNestedInput = {
    create?: XOR<BlogPostCreateWithoutPlacesMentionedInput, BlogPostUncheckedCreateWithoutPlacesMentionedInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutPlacesMentionedInput
    upsert?: BlogPostUpsertWithoutPlacesMentionedInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutPlacesMentionedInput, BlogPostUpdateWithoutPlacesMentionedInput>, BlogPostUncheckedUpdateWithoutPlacesMentionedInput>
  }

  export type BlogPostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutCategoryInput | BlogPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutCategoryInput | BlogPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutCategoryInput | BlogPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutCategoryInput | BlogPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutCategoryInput | BlogPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutCategoryInput | BlogPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostTagCreateNestedManyWithoutTagInput = {
    create?: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput> | BlogPostTagCreateWithoutTagInput[] | BlogPostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutTagInput | BlogPostTagCreateOrConnectWithoutTagInput[]
    createMany?: BlogPostTagCreateManyTagInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type BlogPostTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput> | BlogPostTagCreateWithoutTagInput[] | BlogPostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutTagInput | BlogPostTagCreateOrConnectWithoutTagInput[]
    createMany?: BlogPostTagCreateManyTagInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type BlogPostTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput> | BlogPostTagCreateWithoutTagInput[] | BlogPostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutTagInput | BlogPostTagCreateOrConnectWithoutTagInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutTagInput | BlogPostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BlogPostTagCreateManyTagInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutTagInput | BlogPostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutTagInput | BlogPostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type BlogPostTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput> | BlogPostTagCreateWithoutTagInput[] | BlogPostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutTagInput | BlogPostTagCreateOrConnectWithoutTagInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutTagInput | BlogPostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BlogPostTagCreateManyTagInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutTagInput | BlogPostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutTagInput | BlogPostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type BlogCategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<BlogCategoryCreateWithoutPostsInput, BlogCategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutPostsInput
    connect?: BlogCategoryWhereUniqueInput
  }

  export type BlogPostTagCreateNestedManyWithoutPostInput = {
    create?: XOR<BlogPostTagCreateWithoutPostInput, BlogPostTagUncheckedCreateWithoutPostInput> | BlogPostTagCreateWithoutPostInput[] | BlogPostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutPostInput | BlogPostTagCreateOrConnectWithoutPostInput[]
    createMany?: BlogPostTagCreateManyPostInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type DestinationCreateNestedOneWithoutBlogPostsInput = {
    create?: XOR<DestinationCreateWithoutBlogPostsInput, DestinationUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutBlogPostsInput
    connect?: DestinationWhereUniqueInput
  }

  export type PlaceMentionedCreateNestedManyWithoutPostInput = {
    create?: XOR<PlaceMentionedCreateWithoutPostInput, PlaceMentionedUncheckedCreateWithoutPostInput> | PlaceMentionedCreateWithoutPostInput[] | PlaceMentionedUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PlaceMentionedCreateOrConnectWithoutPostInput | PlaceMentionedCreateOrConnectWithoutPostInput[]
    createMany?: PlaceMentionedCreateManyPostInputEnvelope
    connect?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
  }

  export type BlogPostTagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<BlogPostTagCreateWithoutPostInput, BlogPostTagUncheckedCreateWithoutPostInput> | BlogPostTagCreateWithoutPostInput[] | BlogPostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutPostInput | BlogPostTagCreateOrConnectWithoutPostInput[]
    createMany?: BlogPostTagCreateManyPostInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type PlaceMentionedUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PlaceMentionedCreateWithoutPostInput, PlaceMentionedUncheckedCreateWithoutPostInput> | PlaceMentionedCreateWithoutPostInput[] | PlaceMentionedUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PlaceMentionedCreateOrConnectWithoutPostInput | PlaceMentionedCreateOrConnectWithoutPostInput[]
    createMany?: PlaceMentionedCreateManyPostInputEnvelope
    connect?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
  }

  export type EnumBlogStatusFieldUpdateOperationsInput = {
    set?: $Enums.BlogStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BlogCategoryUpdateOneWithoutPostsNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutPostsInput, BlogCategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutPostsInput
    upsert?: BlogCategoryUpsertWithoutPostsInput
    disconnect?: BlogCategoryWhereInput | boolean
    delete?: BlogCategoryWhereInput | boolean
    connect?: BlogCategoryWhereUniqueInput
    update?: XOR<XOR<BlogCategoryUpdateToOneWithWhereWithoutPostsInput, BlogCategoryUpdateWithoutPostsInput>, BlogCategoryUncheckedUpdateWithoutPostsInput>
  }

  export type BlogPostTagUpdateManyWithoutPostNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutPostInput, BlogPostTagUncheckedCreateWithoutPostInput> | BlogPostTagCreateWithoutPostInput[] | BlogPostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutPostInput | BlogPostTagCreateOrConnectWithoutPostInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutPostInput | BlogPostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BlogPostTagCreateManyPostInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutPostInput | BlogPostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutPostInput | BlogPostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type DestinationUpdateOneWithoutBlogPostsNestedInput = {
    create?: XOR<DestinationCreateWithoutBlogPostsInput, DestinationUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutBlogPostsInput
    upsert?: DestinationUpsertWithoutBlogPostsInput
    disconnect?: DestinationWhereInput | boolean
    delete?: DestinationWhereInput | boolean
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutBlogPostsInput, DestinationUpdateWithoutBlogPostsInput>, DestinationUncheckedUpdateWithoutBlogPostsInput>
  }

  export type PlaceMentionedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PlaceMentionedCreateWithoutPostInput, PlaceMentionedUncheckedCreateWithoutPostInput> | PlaceMentionedCreateWithoutPostInput[] | PlaceMentionedUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PlaceMentionedCreateOrConnectWithoutPostInput | PlaceMentionedCreateOrConnectWithoutPostInput[]
    upsert?: PlaceMentionedUpsertWithWhereUniqueWithoutPostInput | PlaceMentionedUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PlaceMentionedCreateManyPostInputEnvelope
    set?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
    disconnect?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
    delete?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
    connect?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
    update?: PlaceMentionedUpdateWithWhereUniqueWithoutPostInput | PlaceMentionedUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PlaceMentionedUpdateManyWithWhereWithoutPostInput | PlaceMentionedUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PlaceMentionedScalarWhereInput | PlaceMentionedScalarWhereInput[]
  }

  export type BlogPostTagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutPostInput, BlogPostTagUncheckedCreateWithoutPostInput> | BlogPostTagCreateWithoutPostInput[] | BlogPostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutPostInput | BlogPostTagCreateOrConnectWithoutPostInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutPostInput | BlogPostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BlogPostTagCreateManyPostInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutPostInput | BlogPostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutPostInput | BlogPostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type PlaceMentionedUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PlaceMentionedCreateWithoutPostInput, PlaceMentionedUncheckedCreateWithoutPostInput> | PlaceMentionedCreateWithoutPostInput[] | PlaceMentionedUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PlaceMentionedCreateOrConnectWithoutPostInput | PlaceMentionedCreateOrConnectWithoutPostInput[]
    upsert?: PlaceMentionedUpsertWithWhereUniqueWithoutPostInput | PlaceMentionedUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PlaceMentionedCreateManyPostInputEnvelope
    set?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
    disconnect?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
    delete?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
    connect?: PlaceMentionedWhereUniqueInput | PlaceMentionedWhereUniqueInput[]
    update?: PlaceMentionedUpdateWithWhereUniqueWithoutPostInput | PlaceMentionedUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PlaceMentionedUpdateManyWithWhereWithoutPostInput | PlaceMentionedUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PlaceMentionedScalarWhereInput | PlaceMentionedScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutTagsInput = {
    create?: XOR<BlogPostCreateWithoutTagsInput, BlogPostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutTagsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogTagCreateNestedOneWithoutPostsInput = {
    create?: XOR<BlogTagCreateWithoutPostsInput, BlogTagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: BlogTagCreateOrConnectWithoutPostsInput
    connect?: BlogTagWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<BlogPostCreateWithoutTagsInput, BlogPostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutTagsInput
    upsert?: BlogPostUpsertWithoutTagsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutTagsInput, BlogPostUpdateWithoutTagsInput>, BlogPostUncheckedUpdateWithoutTagsInput>
  }

  export type BlogTagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<BlogTagCreateWithoutPostsInput, BlogTagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: BlogTagCreateOrConnectWithoutPostsInput
    upsert?: BlogTagUpsertWithoutPostsInput
    connect?: BlogTagWhereUniqueInput
    update?: XOR<XOR<BlogTagUpdateToOneWithWhereWithoutPostsInput, BlogTagUpdateWithoutPostsInput>, BlogTagUncheckedUpdateWithoutPostsInput>
  }

  export type TourInquiryCreateNestedManyWithoutTourInput = {
    create?: XOR<TourInquiryCreateWithoutTourInput, TourInquiryUncheckedCreateWithoutTourInput> | TourInquiryCreateWithoutTourInput[] | TourInquiryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourInquiryCreateOrConnectWithoutTourInput | TourInquiryCreateOrConnectWithoutTourInput[]
    createMany?: TourInquiryCreateManyTourInputEnvelope
    connect?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
  }

  export type TourInquiryUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourInquiryCreateWithoutTourInput, TourInquiryUncheckedCreateWithoutTourInput> | TourInquiryCreateWithoutTourInput[] | TourInquiryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourInquiryCreateOrConnectWithoutTourInput | TourInquiryCreateOrConnectWithoutTourInput[]
    createMany?: TourInquiryCreateManyTourInputEnvelope
    connect?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TourInquiryUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourInquiryCreateWithoutTourInput, TourInquiryUncheckedCreateWithoutTourInput> | TourInquiryCreateWithoutTourInput[] | TourInquiryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourInquiryCreateOrConnectWithoutTourInput | TourInquiryCreateOrConnectWithoutTourInput[]
    upsert?: TourInquiryUpsertWithWhereUniqueWithoutTourInput | TourInquiryUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourInquiryCreateManyTourInputEnvelope
    set?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
    disconnect?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
    delete?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
    connect?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
    update?: TourInquiryUpdateWithWhereUniqueWithoutTourInput | TourInquiryUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourInquiryUpdateManyWithWhereWithoutTourInput | TourInquiryUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourInquiryScalarWhereInput | TourInquiryScalarWhereInput[]
  }

  export type TourInquiryUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourInquiryCreateWithoutTourInput, TourInquiryUncheckedCreateWithoutTourInput> | TourInquiryCreateWithoutTourInput[] | TourInquiryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourInquiryCreateOrConnectWithoutTourInput | TourInquiryCreateOrConnectWithoutTourInput[]
    upsert?: TourInquiryUpsertWithWhereUniqueWithoutTourInput | TourInquiryUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourInquiryCreateManyTourInputEnvelope
    set?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
    disconnect?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
    delete?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
    connect?: TourInquiryWhereUniqueInput | TourInquiryWhereUniqueInput[]
    update?: TourInquiryUpdateWithWhereUniqueWithoutTourInput | TourInquiryUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourInquiryUpdateManyWithWhereWithoutTourInput | TourInquiryUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourInquiryScalarWhereInput | TourInquiryScalarWhereInput[]
  }

  export type TourPackageCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<TourPackageCreateWithoutInquiriesInput, TourPackageUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: TourPackageCreateOrConnectWithoutInquiriesInput
    connect?: TourPackageWhereUniqueInput
  }

  export type TourPackageUpdateOneWithoutInquiriesNestedInput = {
    create?: XOR<TourPackageCreateWithoutInquiriesInput, TourPackageUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: TourPackageCreateOrConnectWithoutInquiriesInput
    upsert?: TourPackageUpsertWithoutInquiriesInput
    disconnect?: TourPackageWhereInput | boolean
    delete?: TourPackageWhereInput | boolean
    connect?: TourPackageWhereUniqueInput
    update?: XOR<XOR<TourPackageUpdateToOneWithWhereWithoutInquiriesInput, TourPackageUpdateWithoutInquiriesInput>, TourPackageUncheckedUpdateWithoutInquiriesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumBlogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusFilter<$PrismaModel> | $Enums.BlogStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogStatus | EnumBlogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogStatus[] | ListEnumBlogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: UuidFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: $Enums.Gender | null
    email: string
    phone: string
    password: string
    country: string
    stateProvince: string
    profileImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    emailVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: $Enums.Gender | null
    email: string
    phone: string
    password: string
    country: string
    stateProvince: string
    profileImage?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    emailVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stateProvince?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DestinationImageCreateWithoutDestinationInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationImageUncheckedCreateWithoutDestinationInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationImageCreateOrConnectWithoutDestinationInput = {
    where: DestinationImageWhereUniqueInput
    create: XOR<DestinationImageCreateWithoutDestinationInput, DestinationImageUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationImageCreateManyDestinationInputEnvelope = {
    data: DestinationImageCreateManyDestinationInput | DestinationImageCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type DestinationHighlightCreateWithoutDestinationInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationHighlightUncheckedCreateWithoutDestinationInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationHighlightCreateOrConnectWithoutDestinationInput = {
    where: DestinationHighlightWhereUniqueInput
    create: XOR<DestinationHighlightCreateWithoutDestinationInput, DestinationHighlightUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationHighlightCreateManyDestinationInputEnvelope = {
    data: DestinationHighlightCreateManyDestinationInput | DestinationHighlightCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostCreateWithoutDestinationInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: BlogCategoryCreateNestedOneWithoutPostsInput
    tags?: BlogPostTagCreateNestedManyWithoutPostInput
    placesMentioned?: PlaceMentionedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateWithoutDestinationInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    categoryId?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: BlogPostTagUncheckedCreateNestedManyWithoutPostInput
    placesMentioned?: PlaceMentionedUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostCreateOrConnectWithoutDestinationInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutDestinationInput, BlogPostUncheckedCreateWithoutDestinationInput>
  }

  export type BlogPostCreateManyDestinationInputEnvelope = {
    data: BlogPostCreateManyDestinationInput | BlogPostCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type DestinationImageUpsertWithWhereUniqueWithoutDestinationInput = {
    where: DestinationImageWhereUniqueInput
    update: XOR<DestinationImageUpdateWithoutDestinationInput, DestinationImageUncheckedUpdateWithoutDestinationInput>
    create: XOR<DestinationImageCreateWithoutDestinationInput, DestinationImageUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationImageUpdateWithWhereUniqueWithoutDestinationInput = {
    where: DestinationImageWhereUniqueInput
    data: XOR<DestinationImageUpdateWithoutDestinationInput, DestinationImageUncheckedUpdateWithoutDestinationInput>
  }

  export type DestinationImageUpdateManyWithWhereWithoutDestinationInput = {
    where: DestinationImageScalarWhereInput
    data: XOR<DestinationImageUpdateManyMutationInput, DestinationImageUncheckedUpdateManyWithoutDestinationInput>
  }

  export type DestinationImageScalarWhereInput = {
    AND?: DestinationImageScalarWhereInput | DestinationImageScalarWhereInput[]
    OR?: DestinationImageScalarWhereInput[]
    NOT?: DestinationImageScalarWhereInput | DestinationImageScalarWhereInput[]
    id?: UuidFilter<"DestinationImage"> | string
    url?: StringFilter<"DestinationImage"> | string
    destinationId?: UuidFilter<"DestinationImage"> | string
    createdAt?: DateTimeFilter<"DestinationImage"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationImage"> | Date | string
  }

  export type DestinationHighlightUpsertWithWhereUniqueWithoutDestinationInput = {
    where: DestinationHighlightWhereUniqueInput
    update: XOR<DestinationHighlightUpdateWithoutDestinationInput, DestinationHighlightUncheckedUpdateWithoutDestinationInput>
    create: XOR<DestinationHighlightCreateWithoutDestinationInput, DestinationHighlightUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationHighlightUpdateWithWhereUniqueWithoutDestinationInput = {
    where: DestinationHighlightWhereUniqueInput
    data: XOR<DestinationHighlightUpdateWithoutDestinationInput, DestinationHighlightUncheckedUpdateWithoutDestinationInput>
  }

  export type DestinationHighlightUpdateManyWithWhereWithoutDestinationInput = {
    where: DestinationHighlightScalarWhereInput
    data: XOR<DestinationHighlightUpdateManyMutationInput, DestinationHighlightUncheckedUpdateManyWithoutDestinationInput>
  }

  export type DestinationHighlightScalarWhereInput = {
    AND?: DestinationHighlightScalarWhereInput | DestinationHighlightScalarWhereInput[]
    OR?: DestinationHighlightScalarWhereInput[]
    NOT?: DestinationHighlightScalarWhereInput | DestinationHighlightScalarWhereInput[]
    id?: UuidFilter<"DestinationHighlight"> | string
    title?: StringFilter<"DestinationHighlight"> | string
    description?: StringFilter<"DestinationHighlight"> | string
    image?: StringFilter<"DestinationHighlight"> | string
    destinationId?: UuidFilter<"DestinationHighlight"> | string
    createdAt?: DateTimeFilter<"DestinationHighlight"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationHighlight"> | Date | string
  }

  export type BlogPostUpsertWithWhereUniqueWithoutDestinationInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutDestinationInput, BlogPostUncheckedUpdateWithoutDestinationInput>
    create: XOR<BlogPostCreateWithoutDestinationInput, BlogPostUncheckedCreateWithoutDestinationInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutDestinationInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutDestinationInput, BlogPostUncheckedUpdateWithoutDestinationInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutDestinationInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutDestinationInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: UuidFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    content?: StringFilter<"BlogPost"> | string
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    ogImage?: StringNullableFilter<"BlogPost"> | string | null
    categoryId?: UuidNullableFilter<"BlogPost"> | string | null
    destinationId?: UuidNullableFilter<"BlogPost"> | string | null
    location?: StringNullableFilter<"BlogPost"> | string | null
    timeNeeded?: StringNullableFilter<"BlogPost"> | string | null
    bestTime?: StringNullableFilter<"BlogPost"> | string | null
    latitude?: FloatNullableFilter<"BlogPost"> | number | null
    longitude?: FloatNullableFilter<"BlogPost"> | number | null
    articleType?: StringNullableFilter<"BlogPost"> | string | null
    authorName?: StringFilter<"BlogPost"> | string
    authorImage?: StringNullableFilter<"BlogPost"> | string | null
    status?: EnumBlogStatusFilter<"BlogPost"> | $Enums.BlogStatus
    featured?: BoolFilter<"BlogPost"> | boolean
    views?: IntFilter<"BlogPost"> | number
    seoTitle?: StringNullableFilter<"BlogPost"> | string | null
    seoDescription?: StringNullableFilter<"BlogPost"> | string | null
    seoKeywords?: StringNullableFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }

  export type DestinationCreateWithoutImagesInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    highlights?: DestinationHighlightCreateNestedManyWithoutDestinationInput
    blogPosts?: BlogPostCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    highlights?: DestinationHighlightUncheckedCreateNestedManyWithoutDestinationInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutImagesInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutImagesInput, DestinationUncheckedCreateWithoutImagesInput>
  }

  export type DestinationUpsertWithoutImagesInput = {
    update: XOR<DestinationUpdateWithoutImagesInput, DestinationUncheckedUpdateWithoutImagesInput>
    create: XOR<DestinationCreateWithoutImagesInput, DestinationUncheckedCreateWithoutImagesInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutImagesInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutImagesInput, DestinationUncheckedUpdateWithoutImagesInput>
  }

  export type DestinationUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: DestinationHighlightUpdateManyWithoutDestinationNestedInput
    blogPosts?: BlogPostUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: DestinationHighlightUncheckedUpdateManyWithoutDestinationNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateWithoutHighlightsInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: DestinationImageCreateNestedManyWithoutDestinationInput
    blogPosts?: BlogPostCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutHighlightsInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: DestinationImageUncheckedCreateNestedManyWithoutDestinationInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutHighlightsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutHighlightsInput, DestinationUncheckedCreateWithoutHighlightsInput>
  }

  export type DestinationUpsertWithoutHighlightsInput = {
    update: XOR<DestinationUpdateWithoutHighlightsInput, DestinationUncheckedUpdateWithoutHighlightsInput>
    create: XOR<DestinationCreateWithoutHighlightsInput, DestinationUncheckedCreateWithoutHighlightsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutHighlightsInput, DestinationUncheckedUpdateWithoutHighlightsInput>
  }

  export type DestinationUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DestinationImageUpdateManyWithoutDestinationNestedInput
    blogPosts?: BlogPostUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DestinationImageUncheckedUpdateManyWithoutDestinationNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type BlogPostCreateWithoutPlacesMentionedInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: BlogCategoryCreateNestedOneWithoutPostsInput
    tags?: BlogPostTagCreateNestedManyWithoutPostInput
    destination?: DestinationCreateNestedOneWithoutBlogPostsInput
  }

  export type BlogPostUncheckedCreateWithoutPlacesMentionedInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    categoryId?: string | null
    destinationId?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: BlogPostTagUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostCreateOrConnectWithoutPlacesMentionedInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutPlacesMentionedInput, BlogPostUncheckedCreateWithoutPlacesMentionedInput>
  }

  export type BlogPostUpsertWithoutPlacesMentionedInput = {
    update: XOR<BlogPostUpdateWithoutPlacesMentionedInput, BlogPostUncheckedUpdateWithoutPlacesMentionedInput>
    create: XOR<BlogPostCreateWithoutPlacesMentionedInput, BlogPostUncheckedCreateWithoutPlacesMentionedInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutPlacesMentionedInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutPlacesMentionedInput, BlogPostUncheckedUpdateWithoutPlacesMentionedInput>
  }

  export type BlogPostUpdateWithoutPlacesMentionedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneWithoutPostsNestedInput
    tags?: BlogPostTagUpdateManyWithoutPostNestedInput
    destination?: DestinationUpdateOneWithoutBlogPostsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutPlacesMentionedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: BlogPostTagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: BlogPostTagCreateNestedManyWithoutPostInput
    destination?: DestinationCreateNestedOneWithoutBlogPostsInput
    placesMentioned?: PlaceMentionedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    destinationId?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: BlogPostTagUncheckedCreateNestedManyWithoutPostInput
    placesMentioned?: PlaceMentionedUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostCreateOrConnectWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
  }

  export type BlogPostCreateManyCategoryInputEnvelope = {
    data: BlogPostCreateManyCategoryInput | BlogPostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutCategoryInput, BlogPostUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutCategoryInput, BlogPostUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutCategoryInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlogPostTagCreateWithoutTagInput = {
    post: BlogPostCreateNestedOneWithoutTagsInput
  }

  export type BlogPostTagUncheckedCreateWithoutTagInput = {
    postId: string
  }

  export type BlogPostTagCreateOrConnectWithoutTagInput = {
    where: BlogPostTagWhereUniqueInput
    create: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput>
  }

  export type BlogPostTagCreateManyTagInputEnvelope = {
    data: BlogPostTagCreateManyTagInput | BlogPostTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostTagUpsertWithWhereUniqueWithoutTagInput = {
    where: BlogPostTagWhereUniqueInput
    update: XOR<BlogPostTagUpdateWithoutTagInput, BlogPostTagUncheckedUpdateWithoutTagInput>
    create: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput>
  }

  export type BlogPostTagUpdateWithWhereUniqueWithoutTagInput = {
    where: BlogPostTagWhereUniqueInput
    data: XOR<BlogPostTagUpdateWithoutTagInput, BlogPostTagUncheckedUpdateWithoutTagInput>
  }

  export type BlogPostTagUpdateManyWithWhereWithoutTagInput = {
    where: BlogPostTagScalarWhereInput
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyWithoutTagInput>
  }

  export type BlogPostTagScalarWhereInput = {
    AND?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
    OR?: BlogPostTagScalarWhereInput[]
    NOT?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
    postId?: UuidFilter<"BlogPostTag"> | string
    tagId?: UuidFilter<"BlogPostTag"> | string
  }

  export type BlogCategoryCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
  }

  export type BlogCategoryUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
  }

  export type BlogCategoryCreateOrConnectWithoutPostsInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutPostsInput, BlogCategoryUncheckedCreateWithoutPostsInput>
  }

  export type BlogPostTagCreateWithoutPostInput = {
    tag: BlogTagCreateNestedOneWithoutPostsInput
  }

  export type BlogPostTagUncheckedCreateWithoutPostInput = {
    tagId: string
  }

  export type BlogPostTagCreateOrConnectWithoutPostInput = {
    where: BlogPostTagWhereUniqueInput
    create: XOR<BlogPostTagCreateWithoutPostInput, BlogPostTagUncheckedCreateWithoutPostInput>
  }

  export type BlogPostTagCreateManyPostInputEnvelope = {
    data: BlogPostTagCreateManyPostInput | BlogPostTagCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type DestinationCreateWithoutBlogPostsInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: DestinationImageCreateNestedManyWithoutDestinationInput
    highlights?: DestinationHighlightCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutBlogPostsInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description: string
    image: string
    ogImage?: string | null
    location?: string | null
    district?: string | null
    province?: string | null
    category?: string | null
    bestTime?: string | null
    duration?: string | null
    budget?: string | null
    latitude?: number | null
    longitude?: number | null
    weatherAvg?: string | null
    weatherRain?: string | null
    howToGetThere?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    featured?: boolean
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: DestinationImageUncheckedCreateNestedManyWithoutDestinationInput
    highlights?: DestinationHighlightUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutBlogPostsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutBlogPostsInput, DestinationUncheckedCreateWithoutBlogPostsInput>
  }

  export type PlaceMentionedCreateWithoutPostInput = {
    id?: string
    name: string
    url?: string | null
    latitude?: number | null
    longitude?: number | null
  }

  export type PlaceMentionedUncheckedCreateWithoutPostInput = {
    id?: string
    name: string
    url?: string | null
    latitude?: number | null
    longitude?: number | null
  }

  export type PlaceMentionedCreateOrConnectWithoutPostInput = {
    where: PlaceMentionedWhereUniqueInput
    create: XOR<PlaceMentionedCreateWithoutPostInput, PlaceMentionedUncheckedCreateWithoutPostInput>
  }

  export type PlaceMentionedCreateManyPostInputEnvelope = {
    data: PlaceMentionedCreateManyPostInput | PlaceMentionedCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type BlogCategoryUpsertWithoutPostsInput = {
    update: XOR<BlogCategoryUpdateWithoutPostsInput, BlogCategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<BlogCategoryCreateWithoutPostsInput, BlogCategoryUncheckedCreateWithoutPostsInput>
    where?: BlogCategoryWhereInput
  }

  export type BlogCategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: BlogCategoryWhereInput
    data: XOR<BlogCategoryUpdateWithoutPostsInput, BlogCategoryUncheckedUpdateWithoutPostsInput>
  }

  export type BlogCategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogCategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostTagUpsertWithWhereUniqueWithoutPostInput = {
    where: BlogPostTagWhereUniqueInput
    update: XOR<BlogPostTagUpdateWithoutPostInput, BlogPostTagUncheckedUpdateWithoutPostInput>
    create: XOR<BlogPostTagCreateWithoutPostInput, BlogPostTagUncheckedCreateWithoutPostInput>
  }

  export type BlogPostTagUpdateWithWhereUniqueWithoutPostInput = {
    where: BlogPostTagWhereUniqueInput
    data: XOR<BlogPostTagUpdateWithoutPostInput, BlogPostTagUncheckedUpdateWithoutPostInput>
  }

  export type BlogPostTagUpdateManyWithWhereWithoutPostInput = {
    where: BlogPostTagScalarWhereInput
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyWithoutPostInput>
  }

  export type DestinationUpsertWithoutBlogPostsInput = {
    update: XOR<DestinationUpdateWithoutBlogPostsInput, DestinationUncheckedUpdateWithoutBlogPostsInput>
    create: XOR<DestinationCreateWithoutBlogPostsInput, DestinationUncheckedCreateWithoutBlogPostsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutBlogPostsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutBlogPostsInput, DestinationUncheckedUpdateWithoutBlogPostsInput>
  }

  export type DestinationUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DestinationImageUpdateManyWithoutDestinationNestedInput
    highlights?: DestinationHighlightUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    weatherAvg?: NullableStringFieldUpdateOperationsInput | string | null
    weatherRain?: NullableStringFieldUpdateOperationsInput | string | null
    howToGetThere?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DestinationImageUncheckedUpdateManyWithoutDestinationNestedInput
    highlights?: DestinationHighlightUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type PlaceMentionedUpsertWithWhereUniqueWithoutPostInput = {
    where: PlaceMentionedWhereUniqueInput
    update: XOR<PlaceMentionedUpdateWithoutPostInput, PlaceMentionedUncheckedUpdateWithoutPostInput>
    create: XOR<PlaceMentionedCreateWithoutPostInput, PlaceMentionedUncheckedCreateWithoutPostInput>
  }

  export type PlaceMentionedUpdateWithWhereUniqueWithoutPostInput = {
    where: PlaceMentionedWhereUniqueInput
    data: XOR<PlaceMentionedUpdateWithoutPostInput, PlaceMentionedUncheckedUpdateWithoutPostInput>
  }

  export type PlaceMentionedUpdateManyWithWhereWithoutPostInput = {
    where: PlaceMentionedScalarWhereInput
    data: XOR<PlaceMentionedUpdateManyMutationInput, PlaceMentionedUncheckedUpdateManyWithoutPostInput>
  }

  export type PlaceMentionedScalarWhereInput = {
    AND?: PlaceMentionedScalarWhereInput | PlaceMentionedScalarWhereInput[]
    OR?: PlaceMentionedScalarWhereInput[]
    NOT?: PlaceMentionedScalarWhereInput | PlaceMentionedScalarWhereInput[]
    id?: UuidFilter<"PlaceMentioned"> | string
    name?: StringFilter<"PlaceMentioned"> | string
    url?: StringNullableFilter<"PlaceMentioned"> | string | null
    latitude?: FloatNullableFilter<"PlaceMentioned"> | number | null
    longitude?: FloatNullableFilter<"PlaceMentioned"> | number | null
    postId?: UuidFilter<"PlaceMentioned"> | string
  }

  export type BlogPostCreateWithoutTagsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: BlogCategoryCreateNestedOneWithoutPostsInput
    destination?: DestinationCreateNestedOneWithoutBlogPostsInput
    placesMentioned?: PlaceMentionedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    categoryId?: string | null
    destinationId?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    placesMentioned?: PlaceMentionedUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostCreateOrConnectWithoutTagsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutTagsInput, BlogPostUncheckedCreateWithoutTagsInput>
  }

  export type BlogTagCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
  }

  export type BlogTagUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
  }

  export type BlogTagCreateOrConnectWithoutPostsInput = {
    where: BlogTagWhereUniqueInput
    create: XOR<BlogTagCreateWithoutPostsInput, BlogTagUncheckedCreateWithoutPostsInput>
  }

  export type BlogPostUpsertWithoutTagsInput = {
    update: XOR<BlogPostUpdateWithoutTagsInput, BlogPostUncheckedUpdateWithoutTagsInput>
    create: XOR<BlogPostCreateWithoutTagsInput, BlogPostUncheckedCreateWithoutTagsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutTagsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutTagsInput, BlogPostUncheckedUpdateWithoutTagsInput>
  }

  export type BlogPostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneWithoutPostsNestedInput
    destination?: DestinationUpdateOneWithoutBlogPostsNestedInput
    placesMentioned?: PlaceMentionedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placesMentioned?: PlaceMentionedUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogTagUpsertWithoutPostsInput = {
    update: XOR<BlogTagUpdateWithoutPostsInput, BlogTagUncheckedUpdateWithoutPostsInput>
    create: XOR<BlogTagCreateWithoutPostsInput, BlogTagUncheckedCreateWithoutPostsInput>
    where?: BlogTagWhereInput
  }

  export type BlogTagUpdateToOneWithWhereWithoutPostsInput = {
    where?: BlogTagWhereInput
    data: XOR<BlogTagUpdateWithoutPostsInput, BlogTagUncheckedUpdateWithoutPostsInput>
  }

  export type BlogTagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type BlogTagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TourInquiryCreateWithoutTourInput = {
    id?: string
    name: string
    email: string
    phone: string
    travelDate?: string | null
    travelersCount?: number
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TourInquiryUncheckedCreateWithoutTourInput = {
    id?: string
    name: string
    email: string
    phone: string
    travelDate?: string | null
    travelersCount?: number
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TourInquiryCreateOrConnectWithoutTourInput = {
    where: TourInquiryWhereUniqueInput
    create: XOR<TourInquiryCreateWithoutTourInput, TourInquiryUncheckedCreateWithoutTourInput>
  }

  export type TourInquiryCreateManyTourInputEnvelope = {
    data: TourInquiryCreateManyTourInput | TourInquiryCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourInquiryUpsertWithWhereUniqueWithoutTourInput = {
    where: TourInquiryWhereUniqueInput
    update: XOR<TourInquiryUpdateWithoutTourInput, TourInquiryUncheckedUpdateWithoutTourInput>
    create: XOR<TourInquiryCreateWithoutTourInput, TourInquiryUncheckedCreateWithoutTourInput>
  }

  export type TourInquiryUpdateWithWhereUniqueWithoutTourInput = {
    where: TourInquiryWhereUniqueInput
    data: XOR<TourInquiryUpdateWithoutTourInput, TourInquiryUncheckedUpdateWithoutTourInput>
  }

  export type TourInquiryUpdateManyWithWhereWithoutTourInput = {
    where: TourInquiryScalarWhereInput
    data: XOR<TourInquiryUpdateManyMutationInput, TourInquiryUncheckedUpdateManyWithoutTourInput>
  }

  export type TourInquiryScalarWhereInput = {
    AND?: TourInquiryScalarWhereInput | TourInquiryScalarWhereInput[]
    OR?: TourInquiryScalarWhereInput[]
    NOT?: TourInquiryScalarWhereInput | TourInquiryScalarWhereInput[]
    id?: UuidFilter<"TourInquiry"> | string
    tourId?: UuidNullableFilter<"TourInquiry"> | string | null
    name?: StringFilter<"TourInquiry"> | string
    email?: StringFilter<"TourInquiry"> | string
    phone?: StringFilter<"TourInquiry"> | string
    travelDate?: StringNullableFilter<"TourInquiry"> | string | null
    travelersCount?: IntFilter<"TourInquiry"> | number
    message?: StringNullableFilter<"TourInquiry"> | string | null
    status?: StringFilter<"TourInquiry"> | string
    createdAt?: DateTimeFilter<"TourInquiry"> | Date | string
  }

  export type TourPackageCreateWithoutInquiriesInput = {
    id?: string
    title: string
    slug: string
    category: string
    duration: string
    daysCount?: number
    nightsCount?: number
    price: number
    discountPrice?: number | null
    rating?: number
    reviewsCount?: number
    image: string
    ogImage?: string | null
    overview: string
    destinations: string
    highlights: string
    itinerary: string
    included: string
    excluded: string
    featuredTag?: string | null
    featured?: boolean
    published?: boolean
    maxGroupSize?: number | null
    difficulty?: string | null
    startLocation?: string | null
    endLocation?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourPackageUncheckedCreateWithoutInquiriesInput = {
    id?: string
    title: string
    slug: string
    category: string
    duration: string
    daysCount?: number
    nightsCount?: number
    price: number
    discountPrice?: number | null
    rating?: number
    reviewsCount?: number
    image: string
    ogImage?: string | null
    overview: string
    destinations: string
    highlights: string
    itinerary: string
    included: string
    excluded: string
    featuredTag?: string | null
    featured?: boolean
    published?: boolean
    maxGroupSize?: number | null
    difficulty?: string | null
    startLocation?: string | null
    endLocation?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourPackageCreateOrConnectWithoutInquiriesInput = {
    where: TourPackageWhereUniqueInput
    create: XOR<TourPackageCreateWithoutInquiriesInput, TourPackageUncheckedCreateWithoutInquiriesInput>
  }

  export type TourPackageUpsertWithoutInquiriesInput = {
    update: XOR<TourPackageUpdateWithoutInquiriesInput, TourPackageUncheckedUpdateWithoutInquiriesInput>
    create: XOR<TourPackageCreateWithoutInquiriesInput, TourPackageUncheckedCreateWithoutInquiriesInput>
    where?: TourPackageWhereInput
  }

  export type TourPackageUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: TourPackageWhereInput
    data: XOR<TourPackageUpdateWithoutInquiriesInput, TourPackageUncheckedUpdateWithoutInquiriesInput>
  }

  export type TourPackageUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    daysCount?: IntFieldUpdateOperationsInput | number
    nightsCount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: StringFieldUpdateOperationsInput | string
    destinations?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    included?: StringFieldUpdateOperationsInput | string
    excluded?: StringFieldUpdateOperationsInput | string
    featuredTag?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    maxGroupSize?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    startLocation?: NullableStringFieldUpdateOperationsInput | string | null
    endLocation?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPackageUncheckedUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    daysCount?: IntFieldUpdateOperationsInput | number
    nightsCount?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discountPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: StringFieldUpdateOperationsInput | string
    destinations?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    itinerary?: StringFieldUpdateOperationsInput | string
    included?: StringFieldUpdateOperationsInput | string
    excluded?: StringFieldUpdateOperationsInput | string
    featuredTag?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    maxGroupSize?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    startLocation?: NullableStringFieldUpdateOperationsInput | string | null
    endLocation?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationImageCreateManyDestinationInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationHighlightCreateManyDestinationInput = {
    id?: string
    title: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostCreateManyDestinationInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    categoryId?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationImageUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationImageUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationImageUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationHighlightUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationHighlightUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationHighlightUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BlogCategoryUpdateOneWithoutPostsNestedInput
    tags?: BlogPostTagUpdateManyWithoutPostNestedInput
    placesMentioned?: PlaceMentionedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: BlogPostTagUncheckedUpdateManyWithoutPostNestedInput
    placesMentioned?: PlaceMentionedUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateManyCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    ogImage?: string | null
    destinationId?: string | null
    location?: string | null
    timeNeeded?: string | null
    bestTime?: string | null
    latitude?: number | null
    longitude?: number | null
    articleType?: string | null
    authorName?: string
    authorImage?: string | null
    status?: $Enums.BlogStatus
    featured?: boolean
    views?: number
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: BlogPostTagUpdateManyWithoutPostNestedInput
    destination?: DestinationUpdateOneWithoutBlogPostsNestedInput
    placesMentioned?: PlaceMentionedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: BlogPostTagUncheckedUpdateManyWithoutPostNestedInput
    placesMentioned?: PlaceMentionedUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    bestTime?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    articleType?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: StringFieldUpdateOperationsInput | string
    authorImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogStatusFieldUpdateOperationsInput | $Enums.BlogStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostTagCreateManyTagInput = {
    postId: string
  }

  export type BlogPostTagUpdateWithoutTagInput = {
    post?: BlogPostUpdateOneRequiredWithoutTagsNestedInput
  }

  export type BlogPostTagUncheckedUpdateWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagUncheckedUpdateManyWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagCreateManyPostInput = {
    tagId: string
  }

  export type PlaceMentionedCreateManyPostInput = {
    id?: string
    name: string
    url?: string | null
    latitude?: number | null
    longitude?: number | null
  }

  export type BlogPostTagUpdateWithoutPostInput = {
    tag?: BlogTagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type BlogPostTagUncheckedUpdateWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagUncheckedUpdateManyWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceMentionedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlaceMentionedUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlaceMentionedUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TourInquiryCreateManyTourInput = {
    id?: string
    name: string
    email: string
    phone: string
    travelDate?: string | null
    travelersCount?: number
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type TourInquiryUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    travelersCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourInquiryUncheckedUpdateWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    travelersCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourInquiryUncheckedUpdateManyWithoutTourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    travelDate?: NullableStringFieldUpdateOperationsInput | string | null
    travelersCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}