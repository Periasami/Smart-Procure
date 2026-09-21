
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model centre_crops
 * 
 */
export type centre_crops = $Result.DefaultSelection<Prisma.$centre_cropsPayload>
/**
 * Model centres
 * 
 */
export type centres = $Result.DefaultSelection<Prisma.$centresPayload>
/**
 * Model crops
 * 
 */
export type crops = $Result.DefaultSelection<Prisma.$cropsPayload>
/**
 * Model farmers
 * 
 */
export type farmers = $Result.DefaultSelection<Prisma.$farmersPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model procurements
 * 
 */
export type procurements = $Result.DefaultSelection<Prisma.$procurementsPayload>
/**
 * Model queue_entries
 * 
 */
export type queue_entries = $Result.DefaultSelection<Prisma.$queue_entriesPayload>
/**
 * Model schedules
 * 
 */
export type schedules = $Result.DefaultSelection<Prisma.$schedulesPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Bookings
 * const bookings = await prisma.bookings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Bookings
   * const bookings = await prisma.bookings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centre_crops`: Exposes CRUD operations for the **centre_crops** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centre_crops
    * const centre_crops = await prisma.centre_crops.findMany()
    * ```
    */
  get centre_crops(): Prisma.centre_cropsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centres`: Exposes CRUD operations for the **centres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centres
    * const centres = await prisma.centres.findMany()
    * ```
    */
  get centres(): Prisma.centresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crops`: Exposes CRUD operations for the **crops** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crops.findMany()
    * ```
    */
  get crops(): Prisma.cropsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmers`: Exposes CRUD operations for the **farmers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farmers
    * const farmers = await prisma.farmers.findMany()
    * ```
    */
  get farmers(): Prisma.farmersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procurements`: Exposes CRUD operations for the **procurements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procurements
    * const procurements = await prisma.procurements.findMany()
    * ```
    */
  get procurements(): Prisma.procurementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queue_entries`: Exposes CRUD operations for the **queue_entries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queue_entries
    * const queue_entries = await prisma.queue_entries.findMany()
    * ```
    */
  get queue_entries(): Prisma.queue_entriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedules`: Exposes CRUD operations for the **schedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedules.findMany()
    * ```
    */
  get schedules(): Prisma.schedulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    bookings: 'bookings',
    centre_crops: 'centre_crops',
    centres: 'centres',
    crops: 'crops',
    farmers: 'farmers',
    notifications: 'notifications',
    payments: 'payments',
    procurements: 'procurements',
    queue_entries: 'queue_entries',
    schedules: 'schedules',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bookings" | "centre_crops" | "centres" | "crops" | "farmers" | "notifications" | "payments" | "procurements" | "queue_entries" | "schedules" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      centre_crops: {
        payload: Prisma.$centre_cropsPayload<ExtArgs>
        fields: Prisma.centre_cropsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.centre_cropsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.centre_cropsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>
          }
          findFirst: {
            args: Prisma.centre_cropsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.centre_cropsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>
          }
          findMany: {
            args: Prisma.centre_cropsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>[]
          }
          create: {
            args: Prisma.centre_cropsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>
          }
          createMany: {
            args: Prisma.centre_cropsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.centre_cropsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>[]
          }
          delete: {
            args: Prisma.centre_cropsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>
          }
          update: {
            args: Prisma.centre_cropsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>
          }
          deleteMany: {
            args: Prisma.centre_cropsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.centre_cropsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.centre_cropsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>[]
          }
          upsert: {
            args: Prisma.centre_cropsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centre_cropsPayload>
          }
          aggregate: {
            args: Prisma.Centre_cropsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentre_crops>
          }
          groupBy: {
            args: Prisma.centre_cropsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Centre_cropsGroupByOutputType>[]
          }
          count: {
            args: Prisma.centre_cropsCountArgs<ExtArgs>
            result: $Utils.Optional<Centre_cropsCountAggregateOutputType> | number
          }
        }
      }
      centres: {
        payload: Prisma.$centresPayload<ExtArgs>
        fields: Prisma.centresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.centresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.centresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>
          }
          findFirst: {
            args: Prisma.centresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.centresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>
          }
          findMany: {
            args: Prisma.centresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>[]
          }
          create: {
            args: Prisma.centresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>
          }
          createMany: {
            args: Prisma.centresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.centresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>[]
          }
          delete: {
            args: Prisma.centresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>
          }
          update: {
            args: Prisma.centresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>
          }
          deleteMany: {
            args: Prisma.centresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.centresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.centresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>[]
          }
          upsert: {
            args: Prisma.centresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centresPayload>
          }
          aggregate: {
            args: Prisma.CentresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentres>
          }
          groupBy: {
            args: Prisma.centresGroupByArgs<ExtArgs>
            result: $Utils.Optional<CentresGroupByOutputType>[]
          }
          count: {
            args: Prisma.centresCountArgs<ExtArgs>
            result: $Utils.Optional<CentresCountAggregateOutputType> | number
          }
        }
      }
      crops: {
        payload: Prisma.$cropsPayload<ExtArgs>
        fields: Prisma.cropsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cropsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cropsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          findFirst: {
            args: Prisma.cropsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cropsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          findMany: {
            args: Prisma.cropsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>[]
          }
          create: {
            args: Prisma.cropsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          createMany: {
            args: Prisma.cropsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cropsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>[]
          }
          delete: {
            args: Prisma.cropsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          update: {
            args: Prisma.cropsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          deleteMany: {
            args: Prisma.cropsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cropsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cropsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>[]
          }
          upsert: {
            args: Prisma.cropsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cropsPayload>
          }
          aggregate: {
            args: Prisma.CropsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrops>
          }
          groupBy: {
            args: Prisma.cropsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cropsCountArgs<ExtArgs>
            result: $Utils.Optional<CropsCountAggregateOutputType> | number
          }
        }
      }
      farmers: {
        payload: Prisma.$farmersPayload<ExtArgs>
        fields: Prisma.farmersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.farmersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.farmersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>
          }
          findFirst: {
            args: Prisma.farmersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.farmersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>
          }
          findMany: {
            args: Prisma.farmersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>[]
          }
          create: {
            args: Prisma.farmersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>
          }
          createMany: {
            args: Prisma.farmersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.farmersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>[]
          }
          delete: {
            args: Prisma.farmersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>
          }
          update: {
            args: Prisma.farmersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>
          }
          deleteMany: {
            args: Prisma.farmersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.farmersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.farmersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>[]
          }
          upsert: {
            args: Prisma.farmersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmersPayload>
          }
          aggregate: {
            args: Prisma.FarmersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmers>
          }
          groupBy: {
            args: Prisma.farmersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmersGroupByOutputType>[]
          }
          count: {
            args: Prisma.farmersCountArgs<ExtArgs>
            result: $Utils.Optional<FarmersCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      procurements: {
        payload: Prisma.$procurementsPayload<ExtArgs>
        fields: Prisma.procurementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.procurementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.procurementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          findFirst: {
            args: Prisma.procurementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.procurementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          findMany: {
            args: Prisma.procurementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>[]
          }
          create: {
            args: Prisma.procurementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          createMany: {
            args: Prisma.procurementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.procurementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>[]
          }
          delete: {
            args: Prisma.procurementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          update: {
            args: Prisma.procurementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          deleteMany: {
            args: Prisma.procurementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.procurementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.procurementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>[]
          }
          upsert: {
            args: Prisma.procurementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          aggregate: {
            args: Prisma.ProcurementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcurements>
          }
          groupBy: {
            args: Prisma.procurementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcurementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.procurementsCountArgs<ExtArgs>
            result: $Utils.Optional<ProcurementsCountAggregateOutputType> | number
          }
        }
      }
      queue_entries: {
        payload: Prisma.$queue_entriesPayload<ExtArgs>
        fields: Prisma.queue_entriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.queue_entriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.queue_entriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>
          }
          findFirst: {
            args: Prisma.queue_entriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.queue_entriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>
          }
          findMany: {
            args: Prisma.queue_entriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>[]
          }
          create: {
            args: Prisma.queue_entriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>
          }
          createMany: {
            args: Prisma.queue_entriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.queue_entriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>[]
          }
          delete: {
            args: Prisma.queue_entriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>
          }
          update: {
            args: Prisma.queue_entriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>
          }
          deleteMany: {
            args: Prisma.queue_entriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.queue_entriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.queue_entriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>[]
          }
          upsert: {
            args: Prisma.queue_entriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queue_entriesPayload>
          }
          aggregate: {
            args: Prisma.Queue_entriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueue_entries>
          }
          groupBy: {
            args: Prisma.queue_entriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Queue_entriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.queue_entriesCountArgs<ExtArgs>
            result: $Utils.Optional<Queue_entriesCountAggregateOutputType> | number
          }
        }
      }
      schedules: {
        payload: Prisma.$schedulesPayload<ExtArgs>
        fields: Prisma.schedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          findFirst: {
            args: Prisma.schedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          findMany: {
            args: Prisma.schedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          create: {
            args: Prisma.schedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          createMany: {
            args: Prisma.schedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.schedulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          delete: {
            args: Prisma.schedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          update: {
            args: Prisma.schedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          deleteMany: {
            args: Prisma.schedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.schedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.schedulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          upsert: {
            args: Prisma.schedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          aggregate: {
            args: Prisma.SchedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedules>
          }
          groupBy: {
            args: Prisma.schedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.schedulesCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    bookings?: bookingsOmit
    centre_crops?: centre_cropsOmit
    centres?: centresOmit
    crops?: cropsOmit
    farmers?: farmersOmit
    notifications?: notificationsOmit
    payments?: paymentsOmit
    procurements?: procurementsOmit
    queue_entries?: queue_entriesOmit
    schedules?: schedulesOmit
    users?: usersOmit
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
   * Count Type CentresCountOutputType
   */

  export type CentresCountOutputType = {
    centre_crops: number
    schedules: number
  }

  export type CentresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centre_crops?: boolean | CentresCountOutputTypeCountCentre_cropsArgs
    schedules?: boolean | CentresCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * CentresCountOutputType without action
   */
  export type CentresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentresCountOutputType
     */
    select?: CentresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CentresCountOutputType without action
   */
  export type CentresCountOutputTypeCountCentre_cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: centre_cropsWhereInput
  }

  /**
   * CentresCountOutputType without action
   */
  export type CentresCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
  }


  /**
   * Count Type CropsCountOutputType
   */

  export type CropsCountOutputType = {
    centre_crops: number
    schedules: number
  }

  export type CropsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centre_crops?: boolean | CropsCountOutputTypeCountCentre_cropsArgs
    schedules?: boolean | CropsCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * CropsCountOutputType without action
   */
  export type CropsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropsCountOutputType
     */
    select?: CropsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CropsCountOutputType without action
   */
  export type CropsCountOutputTypeCountCentre_cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: centre_cropsWhereInput
  }

  /**
   * CropsCountOutputType without action
   */
  export type CropsCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
  }


  /**
   * Count Type FarmersCountOutputType
   */

  export type FarmersCountOutputType = {
    bookings: number
  }

  export type FarmersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | FarmersCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * FarmersCountOutputType without action
   */
  export type FarmersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmersCountOutputType
     */
    select?: FarmersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmersCountOutputType without action
   */
  export type FarmersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Count Type SchedulesCountOutputType
   */

  export type SchedulesCountOutputType = {
    bookings: number
  }

  export type SchedulesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | SchedulesCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * SchedulesCountOutputType without action
   */
  export type SchedulesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulesCountOutputType
     */
    select?: SchedulesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchedulesCountOutputType without action
   */
  export type SchedulesCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    notifications: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    id: number | null
    farmer_id: number | null
    schedule_id: number | null
    token_number: number | null
    estimated_wait_minutes: number | null
  }

  export type BookingsSumAggregateOutputType = {
    id: number | null
    farmer_id: number | null
    schedule_id: number | null
    token_number: number | null
    estimated_wait_minutes: number | null
  }

  export type BookingsMinAggregateOutputType = {
    id: number | null
    farmer_id: number | null
    schedule_id: number | null
    token_number: number | null
    booking_date: Date | null
    status: string | null
    estimated_wait_minutes: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: number | null
    farmer_id: number | null
    schedule_id: number | null
    token_number: number | null
    booking_date: Date | null
    status: string | null
    estimated_wait_minutes: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    farmer_id: number
    schedule_id: number
    token_number: number
    booking_date: number
    status: number
    estimated_wait_minutes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    id?: true
    farmer_id?: true
    schedule_id?: true
    token_number?: true
    estimated_wait_minutes?: true
  }

  export type BookingsSumAggregateInputType = {
    id?: true
    farmer_id?: true
    schedule_id?: true
    token_number?: true
    estimated_wait_minutes?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    farmer_id?: true
    schedule_id?: true
    token_number?: true
    booking_date?: true
    status?: true
    estimated_wait_minutes?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    farmer_id?: true
    schedule_id?: true
    token_number?: true
    booking_date?: true
    status?: true
    estimated_wait_minutes?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    farmer_id?: true
    schedule_id?: true
    token_number?: true
    booking_date?: true
    status?: true
    estimated_wait_minutes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: number
    farmer_id: number
    schedule_id: number
    token_number: number
    booking_date: Date | null
    status: string
    estimated_wait_minutes: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmer_id?: boolean
    schedule_id?: boolean
    token_number?: boolean
    booking_date?: boolean
    status?: boolean
    estimated_wait_minutes?: boolean
    created_at?: boolean
    updated_at?: boolean
    farmers?: boolean | farmersDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
    procurements?: boolean | bookings$procurementsArgs<ExtArgs>
    queue_entries?: boolean | bookings$queue_entriesArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmer_id?: boolean
    schedule_id?: boolean
    token_number?: boolean
    booking_date?: boolean
    status?: boolean
    estimated_wait_minutes?: boolean
    created_at?: boolean
    updated_at?: boolean
    farmers?: boolean | farmersDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmer_id?: boolean
    schedule_id?: boolean
    token_number?: boolean
    booking_date?: boolean
    status?: boolean
    estimated_wait_minutes?: boolean
    created_at?: boolean
    updated_at?: boolean
    farmers?: boolean | farmersDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id?: boolean
    farmer_id?: boolean
    schedule_id?: boolean
    token_number?: boolean
    booking_date?: boolean
    status?: boolean
    estimated_wait_minutes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmer_id" | "schedule_id" | "token_number" | "booking_date" | "status" | "estimated_wait_minutes" | "created_at" | "updated_at", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | farmersDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
    procurements?: boolean | bookings$procurementsArgs<ExtArgs>
    queue_entries?: boolean | bookings$queue_entriesArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | farmersDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | farmersDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      farmers: Prisma.$farmersPayload<ExtArgs>
      schedules: Prisma.$schedulesPayload<ExtArgs>
      procurements: Prisma.$procurementsPayload<ExtArgs> | null
      queue_entries: Prisma.$queue_entriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      farmer_id: number
      schedule_id: number
      token_number: number
      booking_date: Date | null
      status: string
      estimated_wait_minutes: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
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
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
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
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmers<T extends farmersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, farmersDefaultArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends schedulesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, schedulesDefaultArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    procurements<T extends bookings$procurementsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$procurementsArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    queue_entries<T extends bookings$queue_entriesArgs<ExtArgs> = {}>(args?: Subset<T, bookings$queue_entriesArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'Int'>
    readonly farmer_id: FieldRef<"bookings", 'Int'>
    readonly schedule_id: FieldRef<"bookings", 'Int'>
    readonly token_number: FieldRef<"bookings", 'Int'>
    readonly booking_date: FieldRef<"bookings", 'DateTime'>
    readonly status: FieldRef<"bookings", 'String'>
    readonly estimated_wait_minutes: FieldRef<"bookings", 'Int'>
    readonly created_at: FieldRef<"bookings", 'DateTime'>
    readonly updated_at: FieldRef<"bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings.procurements
   */
  export type bookings$procurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    where?: procurementsWhereInput
  }

  /**
   * bookings.queue_entries
   */
  export type bookings$queue_entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    where?: queue_entriesWhereInput
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model centre_crops
   */

  export type AggregateCentre_crops = {
    _count: Centre_cropsCountAggregateOutputType | null
    _avg: Centre_cropsAvgAggregateOutputType | null
    _sum: Centre_cropsSumAggregateOutputType | null
    _min: Centre_cropsMinAggregateOutputType | null
    _max: Centre_cropsMaxAggregateOutputType | null
  }

  export type Centre_cropsAvgAggregateOutputType = {
    centre_id: number | null
    crop_id: number | null
  }

  export type Centre_cropsSumAggregateOutputType = {
    centre_id: number | null
    crop_id: number | null
  }

  export type Centre_cropsMinAggregateOutputType = {
    centre_id: number | null
    crop_id: number | null
  }

  export type Centre_cropsMaxAggregateOutputType = {
    centre_id: number | null
    crop_id: number | null
  }

  export type Centre_cropsCountAggregateOutputType = {
    centre_id: number
    crop_id: number
    _all: number
  }


  export type Centre_cropsAvgAggregateInputType = {
    centre_id?: true
    crop_id?: true
  }

  export type Centre_cropsSumAggregateInputType = {
    centre_id?: true
    crop_id?: true
  }

  export type Centre_cropsMinAggregateInputType = {
    centre_id?: true
    crop_id?: true
  }

  export type Centre_cropsMaxAggregateInputType = {
    centre_id?: true
    crop_id?: true
  }

  export type Centre_cropsCountAggregateInputType = {
    centre_id?: true
    crop_id?: true
    _all?: true
  }

  export type Centre_cropsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which centre_crops to aggregate.
     */
    where?: centre_cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centre_crops to fetch.
     */
    orderBy?: centre_cropsOrderByWithRelationInput | centre_cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: centre_cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centre_crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centre_crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned centre_crops
    **/
    _count?: true | Centre_cropsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Centre_cropsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Centre_cropsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Centre_cropsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Centre_cropsMaxAggregateInputType
  }

  export type GetCentre_cropsAggregateType<T extends Centre_cropsAggregateArgs> = {
        [P in keyof T & keyof AggregateCentre_crops]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentre_crops[P]>
      : GetScalarType<T[P], AggregateCentre_crops[P]>
  }




  export type centre_cropsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: centre_cropsWhereInput
    orderBy?: centre_cropsOrderByWithAggregationInput | centre_cropsOrderByWithAggregationInput[]
    by: Centre_cropsScalarFieldEnum[] | Centre_cropsScalarFieldEnum
    having?: centre_cropsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Centre_cropsCountAggregateInputType | true
    _avg?: Centre_cropsAvgAggregateInputType
    _sum?: Centre_cropsSumAggregateInputType
    _min?: Centre_cropsMinAggregateInputType
    _max?: Centre_cropsMaxAggregateInputType
  }

  export type Centre_cropsGroupByOutputType = {
    centre_id: number
    crop_id: number
    _count: Centre_cropsCountAggregateOutputType | null
    _avg: Centre_cropsAvgAggregateOutputType | null
    _sum: Centre_cropsSumAggregateOutputType | null
    _min: Centre_cropsMinAggregateOutputType | null
    _max: Centre_cropsMaxAggregateOutputType | null
  }

  type GetCentre_cropsGroupByPayload<T extends centre_cropsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Centre_cropsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Centre_cropsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Centre_cropsGroupByOutputType[P]>
            : GetScalarType<T[P], Centre_cropsGroupByOutputType[P]>
        }
      >
    >


  export type centre_cropsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    centre_id?: boolean
    crop_id?: boolean
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centre_crops"]>

  export type centre_cropsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    centre_id?: boolean
    crop_id?: boolean
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centre_crops"]>

  export type centre_cropsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    centre_id?: boolean
    crop_id?: boolean
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centre_crops"]>

  export type centre_cropsSelectScalar = {
    centre_id?: boolean
    crop_id?: boolean
  }

  export type centre_cropsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"centre_id" | "crop_id", ExtArgs["result"]["centre_crops"]>
  export type centre_cropsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }
  export type centre_cropsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }
  export type centre_cropsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }

  export type $centre_cropsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "centre_crops"
    objects: {
      centres: Prisma.$centresPayload<ExtArgs>
      crops: Prisma.$cropsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      centre_id: number
      crop_id: number
    }, ExtArgs["result"]["centre_crops"]>
    composites: {}
  }

  type centre_cropsGetPayload<S extends boolean | null | undefined | centre_cropsDefaultArgs> = $Result.GetResult<Prisma.$centre_cropsPayload, S>

  type centre_cropsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<centre_cropsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Centre_cropsCountAggregateInputType | true
    }

  export interface centre_cropsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['centre_crops'], meta: { name: 'centre_crops' } }
    /**
     * Find zero or one Centre_crops that matches the filter.
     * @param {centre_cropsFindUniqueArgs} args - Arguments to find a Centre_crops
     * @example
     * // Get one Centre_crops
     * const centre_crops = await prisma.centre_crops.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends centre_cropsFindUniqueArgs>(args: SelectSubset<T, centre_cropsFindUniqueArgs<ExtArgs>>): Prisma__centre_cropsClient<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Centre_crops that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {centre_cropsFindUniqueOrThrowArgs} args - Arguments to find a Centre_crops
     * @example
     * // Get one Centre_crops
     * const centre_crops = await prisma.centre_crops.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends centre_cropsFindUniqueOrThrowArgs>(args: SelectSubset<T, centre_cropsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__centre_cropsClient<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centre_crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_cropsFindFirstArgs} args - Arguments to find a Centre_crops
     * @example
     * // Get one Centre_crops
     * const centre_crops = await prisma.centre_crops.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends centre_cropsFindFirstArgs>(args?: SelectSubset<T, centre_cropsFindFirstArgs<ExtArgs>>): Prisma__centre_cropsClient<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centre_crops that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_cropsFindFirstOrThrowArgs} args - Arguments to find a Centre_crops
     * @example
     * // Get one Centre_crops
     * const centre_crops = await prisma.centre_crops.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends centre_cropsFindFirstOrThrowArgs>(args?: SelectSubset<T, centre_cropsFindFirstOrThrowArgs<ExtArgs>>): Prisma__centre_cropsClient<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centre_crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_cropsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centre_crops
     * const centre_crops = await prisma.centre_crops.findMany()
     * 
     * // Get first 10 Centre_crops
     * const centre_crops = await prisma.centre_crops.findMany({ take: 10 })
     * 
     * // Only select the `centre_id`
     * const centre_cropsWithCentre_idOnly = await prisma.centre_crops.findMany({ select: { centre_id: true } })
     * 
     */
    findMany<T extends centre_cropsFindManyArgs>(args?: SelectSubset<T, centre_cropsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Centre_crops.
     * @param {centre_cropsCreateArgs} args - Arguments to create a Centre_crops.
     * @example
     * // Create one Centre_crops
     * const Centre_crops = await prisma.centre_crops.create({
     *   data: {
     *     // ... data to create a Centre_crops
     *   }
     * })
     * 
     */
    create<T extends centre_cropsCreateArgs>(args: SelectSubset<T, centre_cropsCreateArgs<ExtArgs>>): Prisma__centre_cropsClient<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centre_crops.
     * @param {centre_cropsCreateManyArgs} args - Arguments to create many Centre_crops.
     * @example
     * // Create many Centre_crops
     * const centre_crops = await prisma.centre_crops.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends centre_cropsCreateManyArgs>(args?: SelectSubset<T, centre_cropsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Centre_crops and returns the data saved in the database.
     * @param {centre_cropsCreateManyAndReturnArgs} args - Arguments to create many Centre_crops.
     * @example
     * // Create many Centre_crops
     * const centre_crops = await prisma.centre_crops.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Centre_crops and only return the `centre_id`
     * const centre_cropsWithCentre_idOnly = await prisma.centre_crops.createManyAndReturn({
     *   select: { centre_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends centre_cropsCreateManyAndReturnArgs>(args?: SelectSubset<T, centre_cropsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Centre_crops.
     * @param {centre_cropsDeleteArgs} args - Arguments to delete one Centre_crops.
     * @example
     * // Delete one Centre_crops
     * const Centre_crops = await prisma.centre_crops.delete({
     *   where: {
     *     // ... filter to delete one Centre_crops
     *   }
     * })
     * 
     */
    delete<T extends centre_cropsDeleteArgs>(args: SelectSubset<T, centre_cropsDeleteArgs<ExtArgs>>): Prisma__centre_cropsClient<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Centre_crops.
     * @param {centre_cropsUpdateArgs} args - Arguments to update one Centre_crops.
     * @example
     * // Update one Centre_crops
     * const centre_crops = await prisma.centre_crops.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends centre_cropsUpdateArgs>(args: SelectSubset<T, centre_cropsUpdateArgs<ExtArgs>>): Prisma__centre_cropsClient<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centre_crops.
     * @param {centre_cropsDeleteManyArgs} args - Arguments to filter Centre_crops to delete.
     * @example
     * // Delete a few Centre_crops
     * const { count } = await prisma.centre_crops.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends centre_cropsDeleteManyArgs>(args?: SelectSubset<T, centre_cropsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centre_crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_cropsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centre_crops
     * const centre_crops = await prisma.centre_crops.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends centre_cropsUpdateManyArgs>(args: SelectSubset<T, centre_cropsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centre_crops and returns the data updated in the database.
     * @param {centre_cropsUpdateManyAndReturnArgs} args - Arguments to update many Centre_crops.
     * @example
     * // Update many Centre_crops
     * const centre_crops = await prisma.centre_crops.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Centre_crops and only return the `centre_id`
     * const centre_cropsWithCentre_idOnly = await prisma.centre_crops.updateManyAndReturn({
     *   select: { centre_id: true },
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
    updateManyAndReturn<T extends centre_cropsUpdateManyAndReturnArgs>(args: SelectSubset<T, centre_cropsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Centre_crops.
     * @param {centre_cropsUpsertArgs} args - Arguments to update or create a Centre_crops.
     * @example
     * // Update or create a Centre_crops
     * const centre_crops = await prisma.centre_crops.upsert({
     *   create: {
     *     // ... data to create a Centre_crops
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Centre_crops we want to update
     *   }
     * })
     */
    upsert<T extends centre_cropsUpsertArgs>(args: SelectSubset<T, centre_cropsUpsertArgs<ExtArgs>>): Prisma__centre_cropsClient<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centre_crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_cropsCountArgs} args - Arguments to filter Centre_crops to count.
     * @example
     * // Count the number of Centre_crops
     * const count = await prisma.centre_crops.count({
     *   where: {
     *     // ... the filter for the Centre_crops we want to count
     *   }
     * })
    **/
    count<T extends centre_cropsCountArgs>(
      args?: Subset<T, centre_cropsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Centre_cropsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Centre_crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Centre_cropsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Centre_cropsAggregateArgs>(args: Subset<T, Centre_cropsAggregateArgs>): Prisma.PrismaPromise<GetCentre_cropsAggregateType<T>>

    /**
     * Group by Centre_crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centre_cropsGroupByArgs} args - Group by arguments.
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
      T extends centre_cropsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: centre_cropsGroupByArgs['orderBy'] }
        : { orderBy?: centre_cropsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, centre_cropsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentre_cropsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the centre_crops model
   */
  readonly fields: centre_cropsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for centre_crops.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__centre_cropsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    centres<T extends centresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, centresDefaultArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    crops<T extends cropsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cropsDefaultArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the centre_crops model
   */
  interface centre_cropsFieldRefs {
    readonly centre_id: FieldRef<"centre_crops", 'Int'>
    readonly crop_id: FieldRef<"centre_crops", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * centre_crops findUnique
   */
  export type centre_cropsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * Filter, which centre_crops to fetch.
     */
    where: centre_cropsWhereUniqueInput
  }

  /**
   * centre_crops findUniqueOrThrow
   */
  export type centre_cropsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * Filter, which centre_crops to fetch.
     */
    where: centre_cropsWhereUniqueInput
  }

  /**
   * centre_crops findFirst
   */
  export type centre_cropsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * Filter, which centre_crops to fetch.
     */
    where?: centre_cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centre_crops to fetch.
     */
    orderBy?: centre_cropsOrderByWithRelationInput | centre_cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for centre_crops.
     */
    cursor?: centre_cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centre_crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centre_crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centre_crops.
     */
    distinct?: Centre_cropsScalarFieldEnum | Centre_cropsScalarFieldEnum[]
  }

  /**
   * centre_crops findFirstOrThrow
   */
  export type centre_cropsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * Filter, which centre_crops to fetch.
     */
    where?: centre_cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centre_crops to fetch.
     */
    orderBy?: centre_cropsOrderByWithRelationInput | centre_cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for centre_crops.
     */
    cursor?: centre_cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centre_crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centre_crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centre_crops.
     */
    distinct?: Centre_cropsScalarFieldEnum | Centre_cropsScalarFieldEnum[]
  }

  /**
   * centre_crops findMany
   */
  export type centre_cropsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * Filter, which centre_crops to fetch.
     */
    where?: centre_cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centre_crops to fetch.
     */
    orderBy?: centre_cropsOrderByWithRelationInput | centre_cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing centre_crops.
     */
    cursor?: centre_cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centre_crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centre_crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centre_crops.
     */
    distinct?: Centre_cropsScalarFieldEnum | Centre_cropsScalarFieldEnum[]
  }

  /**
   * centre_crops create
   */
  export type centre_cropsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * The data needed to create a centre_crops.
     */
    data: XOR<centre_cropsCreateInput, centre_cropsUncheckedCreateInput>
  }

  /**
   * centre_crops createMany
   */
  export type centre_cropsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many centre_crops.
     */
    data: centre_cropsCreateManyInput | centre_cropsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * centre_crops createManyAndReturn
   */
  export type centre_cropsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * The data used to create many centre_crops.
     */
    data: centre_cropsCreateManyInput | centre_cropsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * centre_crops update
   */
  export type centre_cropsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * The data needed to update a centre_crops.
     */
    data: XOR<centre_cropsUpdateInput, centre_cropsUncheckedUpdateInput>
    /**
     * Choose, which centre_crops to update.
     */
    where: centre_cropsWhereUniqueInput
  }

  /**
   * centre_crops updateMany
   */
  export type centre_cropsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update centre_crops.
     */
    data: XOR<centre_cropsUpdateManyMutationInput, centre_cropsUncheckedUpdateManyInput>
    /**
     * Filter which centre_crops to update
     */
    where?: centre_cropsWhereInput
    /**
     * Limit how many centre_crops to update.
     */
    limit?: number
  }

  /**
   * centre_crops updateManyAndReturn
   */
  export type centre_cropsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * The data used to update centre_crops.
     */
    data: XOR<centre_cropsUpdateManyMutationInput, centre_cropsUncheckedUpdateManyInput>
    /**
     * Filter which centre_crops to update
     */
    where?: centre_cropsWhereInput
    /**
     * Limit how many centre_crops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * centre_crops upsert
   */
  export type centre_cropsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * The filter to search for the centre_crops to update in case it exists.
     */
    where: centre_cropsWhereUniqueInput
    /**
     * In case the centre_crops found by the `where` argument doesn't exist, create a new centre_crops with this data.
     */
    create: XOR<centre_cropsCreateInput, centre_cropsUncheckedCreateInput>
    /**
     * In case the centre_crops was found with the provided `where` argument, update it with this data.
     */
    update: XOR<centre_cropsUpdateInput, centre_cropsUncheckedUpdateInput>
  }

  /**
   * centre_crops delete
   */
  export type centre_cropsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    /**
     * Filter which centre_crops to delete.
     */
    where: centre_cropsWhereUniqueInput
  }

  /**
   * centre_crops deleteMany
   */
  export type centre_cropsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which centre_crops to delete
     */
    where?: centre_cropsWhereInput
    /**
     * Limit how many centre_crops to delete.
     */
    limit?: number
  }

  /**
   * centre_crops without action
   */
  export type centre_cropsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
  }


  /**
   * Model centres
   */

  export type AggregateCentres = {
    _count: CentresCountAggregateOutputType | null
    _avg: CentresAvgAggregateOutputType | null
    _sum: CentresSumAggregateOutputType | null
    _min: CentresMinAggregateOutputType | null
    _max: CentresMaxAggregateOutputType | null
  }

  export type CentresAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    capacity: number | null
    active_counters: number | null
  }

  export type CentresSumAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    capacity: number | null
    active_counters: number | null
  }

  export type CentresMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    village: string | null
    district: string | null
    state: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    capacity: number | null
    active_counters: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CentresMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    village: string | null
    district: string | null
    state: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    capacity: number | null
    active_counters: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CentresCountAggregateOutputType = {
    id: number
    name: number
    address: number
    village: number
    district: number
    state: number
    latitude: number
    longitude: number
    capacity: number
    active_counters: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CentresAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    capacity?: true
    active_counters?: true
  }

  export type CentresSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    capacity?: true
    active_counters?: true
  }

  export type CentresMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    village?: true
    district?: true
    state?: true
    latitude?: true
    longitude?: true
    capacity?: true
    active_counters?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CentresMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    village?: true
    district?: true
    state?: true
    latitude?: true
    longitude?: true
    capacity?: true
    active_counters?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CentresCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    village?: true
    district?: true
    state?: true
    latitude?: true
    longitude?: true
    capacity?: true
    active_counters?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CentresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which centres to aggregate.
     */
    where?: centresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centres to fetch.
     */
    orderBy?: centresOrderByWithRelationInput | centresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: centresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned centres
    **/
    _count?: true | CentresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CentresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CentresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CentresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CentresMaxAggregateInputType
  }

  export type GetCentresAggregateType<T extends CentresAggregateArgs> = {
        [P in keyof T & keyof AggregateCentres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentres[P]>
      : GetScalarType<T[P], AggregateCentres[P]>
  }




  export type centresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: centresWhereInput
    orderBy?: centresOrderByWithAggregationInput | centresOrderByWithAggregationInput[]
    by: CentresScalarFieldEnum[] | CentresScalarFieldEnum
    having?: centresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CentresCountAggregateInputType | true
    _avg?: CentresAvgAggregateInputType
    _sum?: CentresSumAggregateInputType
    _min?: CentresMinAggregateInputType
    _max?: CentresMaxAggregateInputType
  }

  export type CentresGroupByOutputType = {
    id: number
    name: string
    address: string
    village: string | null
    district: string | null
    state: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    capacity: number
    active_counters: number
    status: string
    created_at: Date | null
    updated_at: Date | null
    _count: CentresCountAggregateOutputType | null
    _avg: CentresAvgAggregateOutputType | null
    _sum: CentresSumAggregateOutputType | null
    _min: CentresMinAggregateOutputType | null
    _max: CentresMaxAggregateOutputType | null
  }

  type GetCentresGroupByPayload<T extends centresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CentresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CentresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CentresGroupByOutputType[P]>
            : GetScalarType<T[P], CentresGroupByOutputType[P]>
        }
      >
    >


  export type centresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    village?: boolean
    district?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    capacity?: boolean
    active_counters?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    centre_crops?: boolean | centres$centre_cropsArgs<ExtArgs>
    schedules?: boolean | centres$schedulesArgs<ExtArgs>
    _count?: boolean | CentresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centres"]>

  export type centresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    village?: boolean
    district?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    capacity?: boolean
    active_counters?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["centres"]>

  export type centresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    village?: boolean
    district?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    capacity?: boolean
    active_counters?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["centres"]>

  export type centresSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    village?: boolean
    district?: boolean
    state?: boolean
    latitude?: boolean
    longitude?: boolean
    capacity?: boolean
    active_counters?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type centresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "village" | "district" | "state" | "latitude" | "longitude" | "capacity" | "active_counters" | "status" | "created_at" | "updated_at", ExtArgs["result"]["centres"]>
  export type centresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centre_crops?: boolean | centres$centre_cropsArgs<ExtArgs>
    schedules?: boolean | centres$schedulesArgs<ExtArgs>
    _count?: boolean | CentresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type centresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type centresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $centresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "centres"
    objects: {
      centre_crops: Prisma.$centre_cropsPayload<ExtArgs>[]
      schedules: Prisma.$schedulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      village: string | null
      district: string | null
      state: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      capacity: number
      active_counters: number
      status: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["centres"]>
    composites: {}
  }

  type centresGetPayload<S extends boolean | null | undefined | centresDefaultArgs> = $Result.GetResult<Prisma.$centresPayload, S>

  type centresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<centresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CentresCountAggregateInputType | true
    }

  export interface centresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['centres'], meta: { name: 'centres' } }
    /**
     * Find zero or one Centres that matches the filter.
     * @param {centresFindUniqueArgs} args - Arguments to find a Centres
     * @example
     * // Get one Centres
     * const centres = await prisma.centres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends centresFindUniqueArgs>(args: SelectSubset<T, centresFindUniqueArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Centres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {centresFindUniqueOrThrowArgs} args - Arguments to find a Centres
     * @example
     * // Get one Centres
     * const centres = await prisma.centres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends centresFindUniqueOrThrowArgs>(args: SelectSubset<T, centresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centresFindFirstArgs} args - Arguments to find a Centres
     * @example
     * // Get one Centres
     * const centres = await prisma.centres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends centresFindFirstArgs>(args?: SelectSubset<T, centresFindFirstArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centresFindFirstOrThrowArgs} args - Arguments to find a Centres
     * @example
     * // Get one Centres
     * const centres = await prisma.centres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends centresFindFirstOrThrowArgs>(args?: SelectSubset<T, centresFindFirstOrThrowArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centres
     * const centres = await prisma.centres.findMany()
     * 
     * // Get first 10 Centres
     * const centres = await prisma.centres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centresWithIdOnly = await prisma.centres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends centresFindManyArgs>(args?: SelectSubset<T, centresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Centres.
     * @param {centresCreateArgs} args - Arguments to create a Centres.
     * @example
     * // Create one Centres
     * const Centres = await prisma.centres.create({
     *   data: {
     *     // ... data to create a Centres
     *   }
     * })
     * 
     */
    create<T extends centresCreateArgs>(args: SelectSubset<T, centresCreateArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centres.
     * @param {centresCreateManyArgs} args - Arguments to create many Centres.
     * @example
     * // Create many Centres
     * const centres = await prisma.centres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends centresCreateManyArgs>(args?: SelectSubset<T, centresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Centres and returns the data saved in the database.
     * @param {centresCreateManyAndReturnArgs} args - Arguments to create many Centres.
     * @example
     * // Create many Centres
     * const centres = await prisma.centres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Centres and only return the `id`
     * const centresWithIdOnly = await prisma.centres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends centresCreateManyAndReturnArgs>(args?: SelectSubset<T, centresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Centres.
     * @param {centresDeleteArgs} args - Arguments to delete one Centres.
     * @example
     * // Delete one Centres
     * const Centres = await prisma.centres.delete({
     *   where: {
     *     // ... filter to delete one Centres
     *   }
     * })
     * 
     */
    delete<T extends centresDeleteArgs>(args: SelectSubset<T, centresDeleteArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Centres.
     * @param {centresUpdateArgs} args - Arguments to update one Centres.
     * @example
     * // Update one Centres
     * const centres = await prisma.centres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends centresUpdateArgs>(args: SelectSubset<T, centresUpdateArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centres.
     * @param {centresDeleteManyArgs} args - Arguments to filter Centres to delete.
     * @example
     * // Delete a few Centres
     * const { count } = await prisma.centres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends centresDeleteManyArgs>(args?: SelectSubset<T, centresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centres
     * const centres = await prisma.centres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends centresUpdateManyArgs>(args: SelectSubset<T, centresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centres and returns the data updated in the database.
     * @param {centresUpdateManyAndReturnArgs} args - Arguments to update many Centres.
     * @example
     * // Update many Centres
     * const centres = await prisma.centres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Centres and only return the `id`
     * const centresWithIdOnly = await prisma.centres.updateManyAndReturn({
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
    updateManyAndReturn<T extends centresUpdateManyAndReturnArgs>(args: SelectSubset<T, centresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Centres.
     * @param {centresUpsertArgs} args - Arguments to update or create a Centres.
     * @example
     * // Update or create a Centres
     * const centres = await prisma.centres.upsert({
     *   create: {
     *     // ... data to create a Centres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Centres we want to update
     *   }
     * })
     */
    upsert<T extends centresUpsertArgs>(args: SelectSubset<T, centresUpsertArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centresCountArgs} args - Arguments to filter Centres to count.
     * @example
     * // Count the number of Centres
     * const count = await prisma.centres.count({
     *   where: {
     *     // ... the filter for the Centres we want to count
     *   }
     * })
    **/
    count<T extends centresCountArgs>(
      args?: Subset<T, centresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CentresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Centres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CentresAggregateArgs>(args: Subset<T, CentresAggregateArgs>): Prisma.PrismaPromise<GetCentresAggregateType<T>>

    /**
     * Group by Centres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centresGroupByArgs} args - Group by arguments.
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
      T extends centresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: centresGroupByArgs['orderBy'] }
        : { orderBy?: centresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, centresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the centres model
   */
  readonly fields: centresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for centres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__centresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    centre_crops<T extends centres$centre_cropsArgs<ExtArgs> = {}>(args?: Subset<T, centres$centre_cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends centres$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, centres$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the centres model
   */
  interface centresFieldRefs {
    readonly id: FieldRef<"centres", 'Int'>
    readonly name: FieldRef<"centres", 'String'>
    readonly address: FieldRef<"centres", 'String'>
    readonly village: FieldRef<"centres", 'String'>
    readonly district: FieldRef<"centres", 'String'>
    readonly state: FieldRef<"centres", 'String'>
    readonly latitude: FieldRef<"centres", 'Decimal'>
    readonly longitude: FieldRef<"centres", 'Decimal'>
    readonly capacity: FieldRef<"centres", 'Int'>
    readonly active_counters: FieldRef<"centres", 'Int'>
    readonly status: FieldRef<"centres", 'String'>
    readonly created_at: FieldRef<"centres", 'DateTime'>
    readonly updated_at: FieldRef<"centres", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * centres findUnique
   */
  export type centresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * Filter, which centres to fetch.
     */
    where: centresWhereUniqueInput
  }

  /**
   * centres findUniqueOrThrow
   */
  export type centresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * Filter, which centres to fetch.
     */
    where: centresWhereUniqueInput
  }

  /**
   * centres findFirst
   */
  export type centresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * Filter, which centres to fetch.
     */
    where?: centresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centres to fetch.
     */
    orderBy?: centresOrderByWithRelationInput | centresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for centres.
     */
    cursor?: centresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centres.
     */
    distinct?: CentresScalarFieldEnum | CentresScalarFieldEnum[]
  }

  /**
   * centres findFirstOrThrow
   */
  export type centresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * Filter, which centres to fetch.
     */
    where?: centresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centres to fetch.
     */
    orderBy?: centresOrderByWithRelationInput | centresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for centres.
     */
    cursor?: centresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centres.
     */
    distinct?: CentresScalarFieldEnum | CentresScalarFieldEnum[]
  }

  /**
   * centres findMany
   */
  export type centresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * Filter, which centres to fetch.
     */
    where?: centresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centres to fetch.
     */
    orderBy?: centresOrderByWithRelationInput | centresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing centres.
     */
    cursor?: centresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centres.
     */
    distinct?: CentresScalarFieldEnum | CentresScalarFieldEnum[]
  }

  /**
   * centres create
   */
  export type centresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * The data needed to create a centres.
     */
    data: XOR<centresCreateInput, centresUncheckedCreateInput>
  }

  /**
   * centres createMany
   */
  export type centresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many centres.
     */
    data: centresCreateManyInput | centresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * centres createManyAndReturn
   */
  export type centresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * The data used to create many centres.
     */
    data: centresCreateManyInput | centresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * centres update
   */
  export type centresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * The data needed to update a centres.
     */
    data: XOR<centresUpdateInput, centresUncheckedUpdateInput>
    /**
     * Choose, which centres to update.
     */
    where: centresWhereUniqueInput
  }

  /**
   * centres updateMany
   */
  export type centresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update centres.
     */
    data: XOR<centresUpdateManyMutationInput, centresUncheckedUpdateManyInput>
    /**
     * Filter which centres to update
     */
    where?: centresWhereInput
    /**
     * Limit how many centres to update.
     */
    limit?: number
  }

  /**
   * centres updateManyAndReturn
   */
  export type centresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * The data used to update centres.
     */
    data: XOR<centresUpdateManyMutationInput, centresUncheckedUpdateManyInput>
    /**
     * Filter which centres to update
     */
    where?: centresWhereInput
    /**
     * Limit how many centres to update.
     */
    limit?: number
  }

  /**
   * centres upsert
   */
  export type centresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * The filter to search for the centres to update in case it exists.
     */
    where: centresWhereUniqueInput
    /**
     * In case the centres found by the `where` argument doesn't exist, create a new centres with this data.
     */
    create: XOR<centresCreateInput, centresUncheckedCreateInput>
    /**
     * In case the centres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<centresUpdateInput, centresUncheckedUpdateInput>
  }

  /**
   * centres delete
   */
  export type centresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
    /**
     * Filter which centres to delete.
     */
    where: centresWhereUniqueInput
  }

  /**
   * centres deleteMany
   */
  export type centresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which centres to delete
     */
    where?: centresWhereInput
    /**
     * Limit how many centres to delete.
     */
    limit?: number
  }

  /**
   * centres.centre_crops
   */
  export type centres$centre_cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    where?: centre_cropsWhereInput
    orderBy?: centre_cropsOrderByWithRelationInput | centre_cropsOrderByWithRelationInput[]
    cursor?: centre_cropsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Centre_cropsScalarFieldEnum | Centre_cropsScalarFieldEnum[]
  }

  /**
   * centres.schedules
   */
  export type centres$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    cursor?: schedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * centres without action
   */
  export type centresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centres
     */
    select?: centresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centres
     */
    omit?: centresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centresInclude<ExtArgs> | null
  }


  /**
   * Model crops
   */

  export type AggregateCrops = {
    _count: CropsCountAggregateOutputType | null
    _avg: CropsAvgAggregateOutputType | null
    _sum: CropsSumAggregateOutputType | null
    _min: CropsMinAggregateOutputType | null
    _max: CropsMaxAggregateOutputType | null
  }

  export type CropsAvgAggregateOutputType = {
    id: number | null
  }

  export type CropsSumAggregateOutputType = {
    id: number | null
  }

  export type CropsMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type CropsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type CropsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type CropsAvgAggregateInputType = {
    id?: true
  }

  export type CropsSumAggregateInputType = {
    id?: true
  }

  export type CropsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type CropsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type CropsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type CropsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which crops to aggregate.
     */
    where?: cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crops to fetch.
     */
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned crops
    **/
    _count?: true | CropsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CropsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CropsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropsMaxAggregateInputType
  }

  export type GetCropsAggregateType<T extends CropsAggregateArgs> = {
        [P in keyof T & keyof AggregateCrops]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrops[P]>
      : GetScalarType<T[P], AggregateCrops[P]>
  }




  export type cropsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cropsWhereInput
    orderBy?: cropsOrderByWithAggregationInput | cropsOrderByWithAggregationInput[]
    by: CropsScalarFieldEnum[] | CropsScalarFieldEnum
    having?: cropsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropsCountAggregateInputType | true
    _avg?: CropsAvgAggregateInputType
    _sum?: CropsSumAggregateInputType
    _min?: CropsMinAggregateInputType
    _max?: CropsMaxAggregateInputType
  }

  export type CropsGroupByOutputType = {
    id: number
    name: string
    created_at: Date | null
    _count: CropsCountAggregateOutputType | null
    _avg: CropsAvgAggregateOutputType | null
    _sum: CropsSumAggregateOutputType | null
    _min: CropsMinAggregateOutputType | null
    _max: CropsMaxAggregateOutputType | null
  }

  type GetCropsGroupByPayload<T extends cropsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropsGroupByOutputType[P]>
            : GetScalarType<T[P], CropsGroupByOutputType[P]>
        }
      >
    >


  export type cropsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    centre_crops?: boolean | crops$centre_cropsArgs<ExtArgs>
    schedules?: boolean | crops$schedulesArgs<ExtArgs>
    _count?: boolean | CropsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crops"]>

  export type cropsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["crops"]>

  export type cropsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["crops"]>

  export type cropsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type cropsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["crops"]>
  export type cropsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centre_crops?: boolean | crops$centre_cropsArgs<ExtArgs>
    schedules?: boolean | crops$schedulesArgs<ExtArgs>
    _count?: boolean | CropsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cropsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cropsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cropsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "crops"
    objects: {
      centre_crops: Prisma.$centre_cropsPayload<ExtArgs>[]
      schedules: Prisma.$schedulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date | null
    }, ExtArgs["result"]["crops"]>
    composites: {}
  }

  type cropsGetPayload<S extends boolean | null | undefined | cropsDefaultArgs> = $Result.GetResult<Prisma.$cropsPayload, S>

  type cropsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cropsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CropsCountAggregateInputType | true
    }

  export interface cropsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['crops'], meta: { name: 'crops' } }
    /**
     * Find zero or one Crops that matches the filter.
     * @param {cropsFindUniqueArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cropsFindUniqueArgs>(args: SelectSubset<T, cropsFindUniqueArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crops that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cropsFindUniqueOrThrowArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cropsFindUniqueOrThrowArgs>(args: SelectSubset<T, cropsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsFindFirstArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cropsFindFirstArgs>(args?: SelectSubset<T, cropsFindFirstArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crops that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsFindFirstOrThrowArgs} args - Arguments to find a Crops
     * @example
     * // Get one Crops
     * const crops = await prisma.crops.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cropsFindFirstOrThrowArgs>(args?: SelectSubset<T, cropsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crops.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crops.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropsWithIdOnly = await prisma.crops.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cropsFindManyArgs>(args?: SelectSubset<T, cropsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crops.
     * @param {cropsCreateArgs} args - Arguments to create a Crops.
     * @example
     * // Create one Crops
     * const Crops = await prisma.crops.create({
     *   data: {
     *     // ... data to create a Crops
     *   }
     * })
     * 
     */
    create<T extends cropsCreateArgs>(args: SelectSubset<T, cropsCreateArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crops.
     * @param {cropsCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crops = await prisma.crops.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cropsCreateManyArgs>(args?: SelectSubset<T, cropsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crops and returns the data saved in the database.
     * @param {cropsCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crops = await prisma.crops.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crops and only return the `id`
     * const cropsWithIdOnly = await prisma.crops.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cropsCreateManyAndReturnArgs>(args?: SelectSubset<T, cropsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crops.
     * @param {cropsDeleteArgs} args - Arguments to delete one Crops.
     * @example
     * // Delete one Crops
     * const Crops = await prisma.crops.delete({
     *   where: {
     *     // ... filter to delete one Crops
     *   }
     * })
     * 
     */
    delete<T extends cropsDeleteArgs>(args: SelectSubset<T, cropsDeleteArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crops.
     * @param {cropsUpdateArgs} args - Arguments to update one Crops.
     * @example
     * // Update one Crops
     * const crops = await prisma.crops.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cropsUpdateArgs>(args: SelectSubset<T, cropsUpdateArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crops.
     * @param {cropsDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crops.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cropsDeleteManyArgs>(args?: SelectSubset<T, cropsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crops = await prisma.crops.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cropsUpdateManyArgs>(args: SelectSubset<T, cropsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops and returns the data updated in the database.
     * @param {cropsUpdateManyAndReturnArgs} args - Arguments to update many Crops.
     * @example
     * // Update many Crops
     * const crops = await prisma.crops.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crops and only return the `id`
     * const cropsWithIdOnly = await prisma.crops.updateManyAndReturn({
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
    updateManyAndReturn<T extends cropsUpdateManyAndReturnArgs>(args: SelectSubset<T, cropsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crops.
     * @param {cropsUpsertArgs} args - Arguments to update or create a Crops.
     * @example
     * // Update or create a Crops
     * const crops = await prisma.crops.upsert({
     *   create: {
     *     // ... data to create a Crops
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crops we want to update
     *   }
     * })
     */
    upsert<T extends cropsUpsertArgs>(args: SelectSubset<T, cropsUpsertArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crops.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends cropsCountArgs>(
      args?: Subset<T, cropsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropsAggregateArgs>(args: Subset<T, CropsAggregateArgs>): Prisma.PrismaPromise<GetCropsAggregateType<T>>

    /**
     * Group by Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cropsGroupByArgs} args - Group by arguments.
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
      T extends cropsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cropsGroupByArgs['orderBy'] }
        : { orderBy?: cropsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cropsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the crops model
   */
  readonly fields: cropsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for crops.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cropsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    centre_crops<T extends crops$centre_cropsArgs<ExtArgs> = {}>(args?: Subset<T, crops$centre_cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centre_cropsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends crops$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, crops$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the crops model
   */
  interface cropsFieldRefs {
    readonly id: FieldRef<"crops", 'Int'>
    readonly name: FieldRef<"crops", 'String'>
    readonly created_at: FieldRef<"crops", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * crops findUnique
   */
  export type cropsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where: cropsWhereUniqueInput
  }

  /**
   * crops findUniqueOrThrow
   */
  export type cropsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where: cropsWhereUniqueInput
  }

  /**
   * crops findFirst
   */
  export type cropsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where?: cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crops to fetch.
     */
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for crops.
     */
    cursor?: cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crops.
     */
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * crops findFirstOrThrow
   */
  export type cropsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where?: cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crops to fetch.
     */
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for crops.
     */
    cursor?: cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crops.
     */
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * crops findMany
   */
  export type cropsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter, which crops to fetch.
     */
    where?: cropsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of crops to fetch.
     */
    orderBy?: cropsOrderByWithRelationInput | cropsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing crops.
     */
    cursor?: cropsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of crops.
     */
    distinct?: CropsScalarFieldEnum | CropsScalarFieldEnum[]
  }

  /**
   * crops create
   */
  export type cropsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * The data needed to create a crops.
     */
    data: XOR<cropsCreateInput, cropsUncheckedCreateInput>
  }

  /**
   * crops createMany
   */
  export type cropsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many crops.
     */
    data: cropsCreateManyInput | cropsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * crops createManyAndReturn
   */
  export type cropsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * The data used to create many crops.
     */
    data: cropsCreateManyInput | cropsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * crops update
   */
  export type cropsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * The data needed to update a crops.
     */
    data: XOR<cropsUpdateInput, cropsUncheckedUpdateInput>
    /**
     * Choose, which crops to update.
     */
    where: cropsWhereUniqueInput
  }

  /**
   * crops updateMany
   */
  export type cropsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update crops.
     */
    data: XOR<cropsUpdateManyMutationInput, cropsUncheckedUpdateManyInput>
    /**
     * Filter which crops to update
     */
    where?: cropsWhereInput
    /**
     * Limit how many crops to update.
     */
    limit?: number
  }

  /**
   * crops updateManyAndReturn
   */
  export type cropsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * The data used to update crops.
     */
    data: XOR<cropsUpdateManyMutationInput, cropsUncheckedUpdateManyInput>
    /**
     * Filter which crops to update
     */
    where?: cropsWhereInput
    /**
     * Limit how many crops to update.
     */
    limit?: number
  }

  /**
   * crops upsert
   */
  export type cropsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * The filter to search for the crops to update in case it exists.
     */
    where: cropsWhereUniqueInput
    /**
     * In case the crops found by the `where` argument doesn't exist, create a new crops with this data.
     */
    create: XOR<cropsCreateInput, cropsUncheckedCreateInput>
    /**
     * In case the crops was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cropsUpdateInput, cropsUncheckedUpdateInput>
  }

  /**
   * crops delete
   */
  export type cropsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
    /**
     * Filter which crops to delete.
     */
    where: cropsWhereUniqueInput
  }

  /**
   * crops deleteMany
   */
  export type cropsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which crops to delete
     */
    where?: cropsWhereInput
    /**
     * Limit how many crops to delete.
     */
    limit?: number
  }

  /**
   * crops.centre_crops
   */
  export type crops$centre_cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centre_crops
     */
    select?: centre_cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centre_crops
     */
    omit?: centre_cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: centre_cropsInclude<ExtArgs> | null
    where?: centre_cropsWhereInput
    orderBy?: centre_cropsOrderByWithRelationInput | centre_cropsOrderByWithRelationInput[]
    cursor?: centre_cropsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Centre_cropsScalarFieldEnum | Centre_cropsScalarFieldEnum[]
  }

  /**
   * crops.schedules
   */
  export type crops$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    cursor?: schedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * crops without action
   */
  export type cropsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the crops
     */
    select?: cropsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the crops
     */
    omit?: cropsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cropsInclude<ExtArgs> | null
  }


  /**
   * Model farmers
   */

  export type AggregateFarmers = {
    _count: FarmersCountAggregateOutputType | null
    _avg: FarmersAvgAggregateOutputType | null
    _sum: FarmersSumAggregateOutputType | null
    _min: FarmersMinAggregateOutputType | null
    _max: FarmersMaxAggregateOutputType | null
  }

  export type FarmersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FarmersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FarmersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    address: string | null
    village: string | null
    district: string | null
    state: string | null
    created_at: Date | null
  }

  export type FarmersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    address: string | null
    village: string | null
    district: string | null
    state: string | null
    created_at: Date | null
  }

  export type FarmersCountAggregateOutputType = {
    id: number
    user_id: number
    address: number
    village: number
    district: number
    state: number
    created_at: number
    _all: number
  }


  export type FarmersAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FarmersSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FarmersMinAggregateInputType = {
    id?: true
    user_id?: true
    address?: true
    village?: true
    district?: true
    state?: true
    created_at?: true
  }

  export type FarmersMaxAggregateInputType = {
    id?: true
    user_id?: true
    address?: true
    village?: true
    district?: true
    state?: true
    created_at?: true
  }

  export type FarmersCountAggregateInputType = {
    id?: true
    user_id?: true
    address?: true
    village?: true
    district?: true
    state?: true
    created_at?: true
    _all?: true
  }

  export type FarmersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which farmers to aggregate.
     */
    where?: farmersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmersOrderByWithRelationInput | farmersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: farmersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned farmers
    **/
    _count?: true | FarmersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmersMaxAggregateInputType
  }

  export type GetFarmersAggregateType<T extends FarmersAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmers[P]>
      : GetScalarType<T[P], AggregateFarmers[P]>
  }




  export type farmersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: farmersWhereInput
    orderBy?: farmersOrderByWithAggregationInput | farmersOrderByWithAggregationInput[]
    by: FarmersScalarFieldEnum[] | FarmersScalarFieldEnum
    having?: farmersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmersCountAggregateInputType | true
    _avg?: FarmersAvgAggregateInputType
    _sum?: FarmersSumAggregateInputType
    _min?: FarmersMinAggregateInputType
    _max?: FarmersMaxAggregateInputType
  }

  export type FarmersGroupByOutputType = {
    id: number
    user_id: number
    address: string | null
    village: string | null
    district: string | null
    state: string | null
    created_at: Date | null
    _count: FarmersCountAggregateOutputType | null
    _avg: FarmersAvgAggregateOutputType | null
    _sum: FarmersSumAggregateOutputType | null
    _min: FarmersMinAggregateOutputType | null
    _max: FarmersMaxAggregateOutputType | null
  }

  type GetFarmersGroupByPayload<T extends farmersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmersGroupByOutputType[P]>
            : GetScalarType<T[P], FarmersGroupByOutputType[P]>
        }
      >
    >


  export type farmersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address?: boolean
    village?: boolean
    district?: boolean
    state?: boolean
    created_at?: boolean
    bookings?: boolean | farmers$bookingsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | FarmersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmers"]>

  export type farmersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address?: boolean
    village?: boolean
    district?: boolean
    state?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmers"]>

  export type farmersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address?: boolean
    village?: boolean
    district?: boolean
    state?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmers"]>

  export type farmersSelectScalar = {
    id?: boolean
    user_id?: boolean
    address?: boolean
    village?: boolean
    district?: boolean
    state?: boolean
    created_at?: boolean
  }

  export type farmersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "address" | "village" | "district" | "state" | "created_at", ExtArgs["result"]["farmers"]>
  export type farmersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | farmers$bookingsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | FarmersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type farmersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type farmersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $farmersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "farmers"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      address: string | null
      village: string | null
      district: string | null
      state: string | null
      created_at: Date | null
    }, ExtArgs["result"]["farmers"]>
    composites: {}
  }

  type farmersGetPayload<S extends boolean | null | undefined | farmersDefaultArgs> = $Result.GetResult<Prisma.$farmersPayload, S>

  type farmersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<farmersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmersCountAggregateInputType | true
    }

  export interface farmersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['farmers'], meta: { name: 'farmers' } }
    /**
     * Find zero or one Farmers that matches the filter.
     * @param {farmersFindUniqueArgs} args - Arguments to find a Farmers
     * @example
     * // Get one Farmers
     * const farmers = await prisma.farmers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends farmersFindUniqueArgs>(args: SelectSubset<T, farmersFindUniqueArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farmers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {farmersFindUniqueOrThrowArgs} args - Arguments to find a Farmers
     * @example
     * // Get one Farmers
     * const farmers = await prisma.farmers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends farmersFindUniqueOrThrowArgs>(args: SelectSubset<T, farmersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmersFindFirstArgs} args - Arguments to find a Farmers
     * @example
     * // Get one Farmers
     * const farmers = await prisma.farmers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends farmersFindFirstArgs>(args?: SelectSubset<T, farmersFindFirstArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmersFindFirstOrThrowArgs} args - Arguments to find a Farmers
     * @example
     * // Get one Farmers
     * const farmers = await prisma.farmers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends farmersFindFirstOrThrowArgs>(args?: SelectSubset<T, farmersFindFirstOrThrowArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farmers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmers
     * const farmers = await prisma.farmers.findMany()
     * 
     * // Get first 10 Farmers
     * const farmers = await prisma.farmers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmersWithIdOnly = await prisma.farmers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends farmersFindManyArgs>(args?: SelectSubset<T, farmersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farmers.
     * @param {farmersCreateArgs} args - Arguments to create a Farmers.
     * @example
     * // Create one Farmers
     * const Farmers = await prisma.farmers.create({
     *   data: {
     *     // ... data to create a Farmers
     *   }
     * })
     * 
     */
    create<T extends farmersCreateArgs>(args: SelectSubset<T, farmersCreateArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farmers.
     * @param {farmersCreateManyArgs} args - Arguments to create many Farmers.
     * @example
     * // Create many Farmers
     * const farmers = await prisma.farmers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends farmersCreateManyArgs>(args?: SelectSubset<T, farmersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Farmers and returns the data saved in the database.
     * @param {farmersCreateManyAndReturnArgs} args - Arguments to create many Farmers.
     * @example
     * // Create many Farmers
     * const farmers = await prisma.farmers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Farmers and only return the `id`
     * const farmersWithIdOnly = await prisma.farmers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends farmersCreateManyAndReturnArgs>(args?: SelectSubset<T, farmersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Farmers.
     * @param {farmersDeleteArgs} args - Arguments to delete one Farmers.
     * @example
     * // Delete one Farmers
     * const Farmers = await prisma.farmers.delete({
     *   where: {
     *     // ... filter to delete one Farmers
     *   }
     * })
     * 
     */
    delete<T extends farmersDeleteArgs>(args: SelectSubset<T, farmersDeleteArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farmers.
     * @param {farmersUpdateArgs} args - Arguments to update one Farmers.
     * @example
     * // Update one Farmers
     * const farmers = await prisma.farmers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends farmersUpdateArgs>(args: SelectSubset<T, farmersUpdateArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farmers.
     * @param {farmersDeleteManyArgs} args - Arguments to filter Farmers to delete.
     * @example
     * // Delete a few Farmers
     * const { count } = await prisma.farmers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends farmersDeleteManyArgs>(args?: SelectSubset<T, farmersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmers
     * const farmers = await prisma.farmers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends farmersUpdateManyArgs>(args: SelectSubset<T, farmersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmers and returns the data updated in the database.
     * @param {farmersUpdateManyAndReturnArgs} args - Arguments to update many Farmers.
     * @example
     * // Update many Farmers
     * const farmers = await prisma.farmers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Farmers and only return the `id`
     * const farmersWithIdOnly = await prisma.farmers.updateManyAndReturn({
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
    updateManyAndReturn<T extends farmersUpdateManyAndReturnArgs>(args: SelectSubset<T, farmersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Farmers.
     * @param {farmersUpsertArgs} args - Arguments to update or create a Farmers.
     * @example
     * // Update or create a Farmers
     * const farmers = await prisma.farmers.upsert({
     *   create: {
     *     // ... data to create a Farmers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmers we want to update
     *   }
     * })
     */
    upsert<T extends farmersUpsertArgs>(args: SelectSubset<T, farmersUpsertArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmersCountArgs} args - Arguments to filter Farmers to count.
     * @example
     * // Count the number of Farmers
     * const count = await prisma.farmers.count({
     *   where: {
     *     // ... the filter for the Farmers we want to count
     *   }
     * })
    **/
    count<T extends farmersCountArgs>(
      args?: Subset<T, farmersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmersAggregateArgs>(args: Subset<T, FarmersAggregateArgs>): Prisma.PrismaPromise<GetFarmersAggregateType<T>>

    /**
     * Group by Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmersGroupByArgs} args - Group by arguments.
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
      T extends farmersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: farmersGroupByArgs['orderBy'] }
        : { orderBy?: farmersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, farmersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the farmers model
   */
  readonly fields: farmersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for farmers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__farmersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends farmers$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, farmers$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the farmers model
   */
  interface farmersFieldRefs {
    readonly id: FieldRef<"farmers", 'Int'>
    readonly user_id: FieldRef<"farmers", 'Int'>
    readonly address: FieldRef<"farmers", 'String'>
    readonly village: FieldRef<"farmers", 'String'>
    readonly district: FieldRef<"farmers", 'String'>
    readonly state: FieldRef<"farmers", 'String'>
    readonly created_at: FieldRef<"farmers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * farmers findUnique
   */
  export type farmersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * Filter, which farmers to fetch.
     */
    where: farmersWhereUniqueInput
  }

  /**
   * farmers findUniqueOrThrow
   */
  export type farmersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * Filter, which farmers to fetch.
     */
    where: farmersWhereUniqueInput
  }

  /**
   * farmers findFirst
   */
  export type farmersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * Filter, which farmers to fetch.
     */
    where?: farmersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmersOrderByWithRelationInput | farmersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for farmers.
     */
    cursor?: farmersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of farmers.
     */
    distinct?: FarmersScalarFieldEnum | FarmersScalarFieldEnum[]
  }

  /**
   * farmers findFirstOrThrow
   */
  export type farmersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * Filter, which farmers to fetch.
     */
    where?: farmersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmersOrderByWithRelationInput | farmersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for farmers.
     */
    cursor?: farmersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of farmers.
     */
    distinct?: FarmersScalarFieldEnum | FarmersScalarFieldEnum[]
  }

  /**
   * farmers findMany
   */
  export type farmersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * Filter, which farmers to fetch.
     */
    where?: farmersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmersOrderByWithRelationInput | farmersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing farmers.
     */
    cursor?: farmersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of farmers.
     */
    distinct?: FarmersScalarFieldEnum | FarmersScalarFieldEnum[]
  }

  /**
   * farmers create
   */
  export type farmersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * The data needed to create a farmers.
     */
    data: XOR<farmersCreateInput, farmersUncheckedCreateInput>
  }

  /**
   * farmers createMany
   */
  export type farmersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many farmers.
     */
    data: farmersCreateManyInput | farmersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * farmers createManyAndReturn
   */
  export type farmersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * The data used to create many farmers.
     */
    data: farmersCreateManyInput | farmersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * farmers update
   */
  export type farmersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * The data needed to update a farmers.
     */
    data: XOR<farmersUpdateInput, farmersUncheckedUpdateInput>
    /**
     * Choose, which farmers to update.
     */
    where: farmersWhereUniqueInput
  }

  /**
   * farmers updateMany
   */
  export type farmersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update farmers.
     */
    data: XOR<farmersUpdateManyMutationInput, farmersUncheckedUpdateManyInput>
    /**
     * Filter which farmers to update
     */
    where?: farmersWhereInput
    /**
     * Limit how many farmers to update.
     */
    limit?: number
  }

  /**
   * farmers updateManyAndReturn
   */
  export type farmersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * The data used to update farmers.
     */
    data: XOR<farmersUpdateManyMutationInput, farmersUncheckedUpdateManyInput>
    /**
     * Filter which farmers to update
     */
    where?: farmersWhereInput
    /**
     * Limit how many farmers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * farmers upsert
   */
  export type farmersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * The filter to search for the farmers to update in case it exists.
     */
    where: farmersWhereUniqueInput
    /**
     * In case the farmers found by the `where` argument doesn't exist, create a new farmers with this data.
     */
    create: XOR<farmersCreateInput, farmersUncheckedCreateInput>
    /**
     * In case the farmers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<farmersUpdateInput, farmersUncheckedUpdateInput>
  }

  /**
   * farmers delete
   */
  export type farmersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    /**
     * Filter which farmers to delete.
     */
    where: farmersWhereUniqueInput
  }

  /**
   * farmers deleteMany
   */
  export type farmersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which farmers to delete
     */
    where?: farmersWhereInput
    /**
     * Limit how many farmers to delete.
     */
    limit?: number
  }

  /**
   * farmers.bookings
   */
  export type farmers$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * farmers without action
   */
  export type farmersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    type: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    type: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    message: number
    type: number
    is_read: number
    created_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    user_id: number
    title: string
    message: string
    type: string
    is_read: boolean
    created_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "message" | "type" | "is_read" | "created_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      message: string
      type: string
      is_read: boolean
      created_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly user_id: FieldRef<"notifications", 'Int'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly type: FieldRef<"notifications", 'String'>
    readonly is_read: FieldRef<"notifications", 'Boolean'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    procurement_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    procurement_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    procurement_id: number | null
    amount: Decimal | null
    payment_method: string | null
    transaction_reference: string | null
    status: string | null
    paid_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    procurement_id: number | null
    amount: Decimal | null
    payment_method: string | null
    transaction_reference: string | null
    status: string | null
    paid_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    procurement_id: number
    amount: number
    payment_method: number
    transaction_reference: number
    status: number
    paid_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    procurement_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    procurement_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    procurement_id?: true
    amount?: true
    payment_method?: true
    transaction_reference?: true
    status?: true
    paid_at?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    procurement_id?: true
    amount?: true
    payment_method?: true
    transaction_reference?: true
    status?: true
    paid_at?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    procurement_id?: true
    amount?: true
    payment_method?: true
    transaction_reference?: true
    status?: true
    paid_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    procurement_id: number
    amount: Decimal
    payment_method: string | null
    transaction_reference: string | null
    status: string
    paid_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procurement_id?: boolean
    amount?: boolean
    payment_method?: boolean
    transaction_reference?: boolean
    status?: boolean
    paid_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    procurements?: boolean | procurementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procurement_id?: boolean
    amount?: boolean
    payment_method?: boolean
    transaction_reference?: boolean
    status?: boolean
    paid_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    procurements?: boolean | procurementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    procurement_id?: boolean
    amount?: boolean
    payment_method?: boolean
    transaction_reference?: boolean
    status?: boolean
    paid_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    procurements?: boolean | procurementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    procurement_id?: boolean
    amount?: boolean
    payment_method?: boolean
    transaction_reference?: boolean
    status?: boolean
    paid_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "procurement_id" | "amount" | "payment_method" | "transaction_reference" | "status" | "paid_at" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procurements?: boolean | procurementsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procurements?: boolean | procurementsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procurements?: boolean | procurementsDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      procurements: Prisma.$procurementsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      procurement_id: number
      amount: Prisma.Decimal
      payment_method: string | null
      transaction_reference: string | null
      status: string
      paid_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procurements<T extends procurementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, procurementsDefaultArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly procurement_id: FieldRef<"payments", 'Int'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly payment_method: FieldRef<"payments", 'String'>
    readonly transaction_reference: FieldRef<"payments", 'String'>
    readonly status: FieldRef<"payments", 'String'>
    readonly paid_at: FieldRef<"payments", 'DateTime'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
    readonly updated_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model procurements
   */

  export type AggregateProcurements = {
    _count: ProcurementsCountAggregateOutputType | null
    _avg: ProcurementsAvgAggregateOutputType | null
    _sum: ProcurementsSumAggregateOutputType | null
    _min: ProcurementsMinAggregateOutputType | null
    _max: ProcurementsMaxAggregateOutputType | null
  }

  export type ProcurementsAvgAggregateOutputType = {
    id: number | null
    booking_id: number | null
    quantity_kg: Decimal | null
    procurement_price: Decimal | null
    total_amount: Decimal | null
  }

  export type ProcurementsSumAggregateOutputType = {
    id: number | null
    booking_id: number | null
    quantity_kg: Decimal | null
    procurement_price: Decimal | null
    total_amount: Decimal | null
  }

  export type ProcurementsMinAggregateOutputType = {
    id: number | null
    booking_id: number | null
    quantity_kg: Decimal | null
    procurement_price: Decimal | null
    total_amount: Decimal | null
    status: string | null
    procured_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProcurementsMaxAggregateOutputType = {
    id: number | null
    booking_id: number | null
    quantity_kg: Decimal | null
    procurement_price: Decimal | null
    total_amount: Decimal | null
    status: string | null
    procured_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProcurementsCountAggregateOutputType = {
    id: number
    booking_id: number
    quantity_kg: number
    procurement_price: number
    total_amount: number
    status: number
    procured_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProcurementsAvgAggregateInputType = {
    id?: true
    booking_id?: true
    quantity_kg?: true
    procurement_price?: true
    total_amount?: true
  }

  export type ProcurementsSumAggregateInputType = {
    id?: true
    booking_id?: true
    quantity_kg?: true
    procurement_price?: true
    total_amount?: true
  }

  export type ProcurementsMinAggregateInputType = {
    id?: true
    booking_id?: true
    quantity_kg?: true
    procurement_price?: true
    total_amount?: true
    status?: true
    procured_at?: true
    created_at?: true
    updated_at?: true
  }

  export type ProcurementsMaxAggregateInputType = {
    id?: true
    booking_id?: true
    quantity_kg?: true
    procurement_price?: true
    total_amount?: true
    status?: true
    procured_at?: true
    created_at?: true
    updated_at?: true
  }

  export type ProcurementsCountAggregateInputType = {
    id?: true
    booking_id?: true
    quantity_kg?: true
    procurement_price?: true
    total_amount?: true
    status?: true
    procured_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProcurementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which procurements to aggregate.
     */
    where?: procurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procurements to fetch.
     */
    orderBy?: procurementsOrderByWithRelationInput | procurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: procurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned procurements
    **/
    _count?: true | ProcurementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcurementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcurementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcurementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcurementsMaxAggregateInputType
  }

  export type GetProcurementsAggregateType<T extends ProcurementsAggregateArgs> = {
        [P in keyof T & keyof AggregateProcurements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcurements[P]>
      : GetScalarType<T[P], AggregateProcurements[P]>
  }




  export type procurementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: procurementsWhereInput
    orderBy?: procurementsOrderByWithAggregationInput | procurementsOrderByWithAggregationInput[]
    by: ProcurementsScalarFieldEnum[] | ProcurementsScalarFieldEnum
    having?: procurementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcurementsCountAggregateInputType | true
    _avg?: ProcurementsAvgAggregateInputType
    _sum?: ProcurementsSumAggregateInputType
    _min?: ProcurementsMinAggregateInputType
    _max?: ProcurementsMaxAggregateInputType
  }

  export type ProcurementsGroupByOutputType = {
    id: number
    booking_id: number
    quantity_kg: Decimal
    procurement_price: Decimal
    total_amount: Decimal
    status: string
    procured_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProcurementsCountAggregateOutputType | null
    _avg: ProcurementsAvgAggregateOutputType | null
    _sum: ProcurementsSumAggregateOutputType | null
    _min: ProcurementsMinAggregateOutputType | null
    _max: ProcurementsMaxAggregateOutputType | null
  }

  type GetProcurementsGroupByPayload<T extends procurementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcurementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcurementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcurementsGroupByOutputType[P]>
            : GetScalarType<T[P], ProcurementsGroupByOutputType[P]>
        }
      >
    >


  export type procurementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    quantity_kg?: boolean
    procurement_price?: boolean
    total_amount?: boolean
    status?: boolean
    procured_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    payments?: boolean | procurements$paymentsArgs<ExtArgs>
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurements"]>

  export type procurementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    quantity_kg?: boolean
    procurement_price?: boolean
    total_amount?: boolean
    status?: boolean
    procured_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurements"]>

  export type procurementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    quantity_kg?: boolean
    procurement_price?: boolean
    total_amount?: boolean
    status?: boolean
    procured_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurements"]>

  export type procurementsSelectScalar = {
    id?: boolean
    booking_id?: boolean
    quantity_kg?: boolean
    procurement_price?: boolean
    total_amount?: boolean
    status?: boolean
    procured_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type procurementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "quantity_kg" | "procurement_price" | "total_amount" | "status" | "procured_at" | "created_at" | "updated_at", ExtArgs["result"]["procurements"]>
  export type procurementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | procurements$paymentsArgs<ExtArgs>
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }
  export type procurementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }
  export type procurementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }

  export type $procurementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "procurements"
    objects: {
      payments: Prisma.$paymentsPayload<ExtArgs> | null
      bookings: Prisma.$bookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      booking_id: number
      quantity_kg: Prisma.Decimal
      procurement_price: Prisma.Decimal
      total_amount: Prisma.Decimal
      status: string
      procured_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["procurements"]>
    composites: {}
  }

  type procurementsGetPayload<S extends boolean | null | undefined | procurementsDefaultArgs> = $Result.GetResult<Prisma.$procurementsPayload, S>

  type procurementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<procurementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcurementsCountAggregateInputType | true
    }

  export interface procurementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['procurements'], meta: { name: 'procurements' } }
    /**
     * Find zero or one Procurements that matches the filter.
     * @param {procurementsFindUniqueArgs} args - Arguments to find a Procurements
     * @example
     * // Get one Procurements
     * const procurements = await prisma.procurements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends procurementsFindUniqueArgs>(args: SelectSubset<T, procurementsFindUniqueArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Procurements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {procurementsFindUniqueOrThrowArgs} args - Arguments to find a Procurements
     * @example
     * // Get one Procurements
     * const procurements = await prisma.procurements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends procurementsFindUniqueOrThrowArgs>(args: SelectSubset<T, procurementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsFindFirstArgs} args - Arguments to find a Procurements
     * @example
     * // Get one Procurements
     * const procurements = await prisma.procurements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends procurementsFindFirstArgs>(args?: SelectSubset<T, procurementsFindFirstArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procurements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsFindFirstOrThrowArgs} args - Arguments to find a Procurements
     * @example
     * // Get one Procurements
     * const procurements = await prisma.procurements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends procurementsFindFirstOrThrowArgs>(args?: SelectSubset<T, procurementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Procurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procurements
     * const procurements = await prisma.procurements.findMany()
     * 
     * // Get first 10 Procurements
     * const procurements = await prisma.procurements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procurementsWithIdOnly = await prisma.procurements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends procurementsFindManyArgs>(args?: SelectSubset<T, procurementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Procurements.
     * @param {procurementsCreateArgs} args - Arguments to create a Procurements.
     * @example
     * // Create one Procurements
     * const Procurements = await prisma.procurements.create({
     *   data: {
     *     // ... data to create a Procurements
     *   }
     * })
     * 
     */
    create<T extends procurementsCreateArgs>(args: SelectSubset<T, procurementsCreateArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Procurements.
     * @param {procurementsCreateManyArgs} args - Arguments to create many Procurements.
     * @example
     * // Create many Procurements
     * const procurements = await prisma.procurements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends procurementsCreateManyArgs>(args?: SelectSubset<T, procurementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Procurements and returns the data saved in the database.
     * @param {procurementsCreateManyAndReturnArgs} args - Arguments to create many Procurements.
     * @example
     * // Create many Procurements
     * const procurements = await prisma.procurements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Procurements and only return the `id`
     * const procurementsWithIdOnly = await prisma.procurements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends procurementsCreateManyAndReturnArgs>(args?: SelectSubset<T, procurementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Procurements.
     * @param {procurementsDeleteArgs} args - Arguments to delete one Procurements.
     * @example
     * // Delete one Procurements
     * const Procurements = await prisma.procurements.delete({
     *   where: {
     *     // ... filter to delete one Procurements
     *   }
     * })
     * 
     */
    delete<T extends procurementsDeleteArgs>(args: SelectSubset<T, procurementsDeleteArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Procurements.
     * @param {procurementsUpdateArgs} args - Arguments to update one Procurements.
     * @example
     * // Update one Procurements
     * const procurements = await prisma.procurements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends procurementsUpdateArgs>(args: SelectSubset<T, procurementsUpdateArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Procurements.
     * @param {procurementsDeleteManyArgs} args - Arguments to filter Procurements to delete.
     * @example
     * // Delete a few Procurements
     * const { count } = await prisma.procurements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends procurementsDeleteManyArgs>(args?: SelectSubset<T, procurementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procurements
     * const procurements = await prisma.procurements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends procurementsUpdateManyArgs>(args: SelectSubset<T, procurementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procurements and returns the data updated in the database.
     * @param {procurementsUpdateManyAndReturnArgs} args - Arguments to update many Procurements.
     * @example
     * // Update many Procurements
     * const procurements = await prisma.procurements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Procurements and only return the `id`
     * const procurementsWithIdOnly = await prisma.procurements.updateManyAndReturn({
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
    updateManyAndReturn<T extends procurementsUpdateManyAndReturnArgs>(args: SelectSubset<T, procurementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Procurements.
     * @param {procurementsUpsertArgs} args - Arguments to update or create a Procurements.
     * @example
     * // Update or create a Procurements
     * const procurements = await prisma.procurements.upsert({
     *   create: {
     *     // ... data to create a Procurements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procurements we want to update
     *   }
     * })
     */
    upsert<T extends procurementsUpsertArgs>(args: SelectSubset<T, procurementsUpsertArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsCountArgs} args - Arguments to filter Procurements to count.
     * @example
     * // Count the number of Procurements
     * const count = await prisma.procurements.count({
     *   where: {
     *     // ... the filter for the Procurements we want to count
     *   }
     * })
    **/
    count<T extends procurementsCountArgs>(
      args?: Subset<T, procurementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcurementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcurementsAggregateArgs>(args: Subset<T, ProcurementsAggregateArgs>): Prisma.PrismaPromise<GetProcurementsAggregateType<T>>

    /**
     * Group by Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsGroupByArgs} args - Group by arguments.
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
      T extends procurementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: procurementsGroupByArgs['orderBy'] }
        : { orderBy?: procurementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, procurementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcurementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the procurements model
   */
  readonly fields: procurementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for procurements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__procurementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends procurements$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, procurements$paymentsArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends bookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingsDefaultArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the procurements model
   */
  interface procurementsFieldRefs {
    readonly id: FieldRef<"procurements", 'Int'>
    readonly booking_id: FieldRef<"procurements", 'Int'>
    readonly quantity_kg: FieldRef<"procurements", 'Decimal'>
    readonly procurement_price: FieldRef<"procurements", 'Decimal'>
    readonly total_amount: FieldRef<"procurements", 'Decimal'>
    readonly status: FieldRef<"procurements", 'String'>
    readonly procured_at: FieldRef<"procurements", 'DateTime'>
    readonly created_at: FieldRef<"procurements", 'DateTime'>
    readonly updated_at: FieldRef<"procurements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * procurements findUnique
   */
  export type procurementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where: procurementsWhereUniqueInput
  }

  /**
   * procurements findUniqueOrThrow
   */
  export type procurementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where: procurementsWhereUniqueInput
  }

  /**
   * procurements findFirst
   */
  export type procurementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where?: procurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procurements to fetch.
     */
    orderBy?: procurementsOrderByWithRelationInput | procurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for procurements.
     */
    cursor?: procurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of procurements.
     */
    distinct?: ProcurementsScalarFieldEnum | ProcurementsScalarFieldEnum[]
  }

  /**
   * procurements findFirstOrThrow
   */
  export type procurementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where?: procurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procurements to fetch.
     */
    orderBy?: procurementsOrderByWithRelationInput | procurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for procurements.
     */
    cursor?: procurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of procurements.
     */
    distinct?: ProcurementsScalarFieldEnum | ProcurementsScalarFieldEnum[]
  }

  /**
   * procurements findMany
   */
  export type procurementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where?: procurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procurements to fetch.
     */
    orderBy?: procurementsOrderByWithRelationInput | procurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing procurements.
     */
    cursor?: procurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of procurements.
     */
    distinct?: ProcurementsScalarFieldEnum | ProcurementsScalarFieldEnum[]
  }

  /**
   * procurements create
   */
  export type procurementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * The data needed to create a procurements.
     */
    data: XOR<procurementsCreateInput, procurementsUncheckedCreateInput>
  }

  /**
   * procurements createMany
   */
  export type procurementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many procurements.
     */
    data: procurementsCreateManyInput | procurementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * procurements createManyAndReturn
   */
  export type procurementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * The data used to create many procurements.
     */
    data: procurementsCreateManyInput | procurementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * procurements update
   */
  export type procurementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * The data needed to update a procurements.
     */
    data: XOR<procurementsUpdateInput, procurementsUncheckedUpdateInput>
    /**
     * Choose, which procurements to update.
     */
    where: procurementsWhereUniqueInput
  }

  /**
   * procurements updateMany
   */
  export type procurementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update procurements.
     */
    data: XOR<procurementsUpdateManyMutationInput, procurementsUncheckedUpdateManyInput>
    /**
     * Filter which procurements to update
     */
    where?: procurementsWhereInput
    /**
     * Limit how many procurements to update.
     */
    limit?: number
  }

  /**
   * procurements updateManyAndReturn
   */
  export type procurementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * The data used to update procurements.
     */
    data: XOR<procurementsUpdateManyMutationInput, procurementsUncheckedUpdateManyInput>
    /**
     * Filter which procurements to update
     */
    where?: procurementsWhereInput
    /**
     * Limit how many procurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * procurements upsert
   */
  export type procurementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * The filter to search for the procurements to update in case it exists.
     */
    where: procurementsWhereUniqueInput
    /**
     * In case the procurements found by the `where` argument doesn't exist, create a new procurements with this data.
     */
    create: XOR<procurementsCreateInput, procurementsUncheckedCreateInput>
    /**
     * In case the procurements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<procurementsUpdateInput, procurementsUncheckedUpdateInput>
  }

  /**
   * procurements delete
   */
  export type procurementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
    /**
     * Filter which procurements to delete.
     */
    where: procurementsWhereUniqueInput
  }

  /**
   * procurements deleteMany
   */
  export type procurementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which procurements to delete
     */
    where?: procurementsWhereInput
    /**
     * Limit how many procurements to delete.
     */
    limit?: number
  }

  /**
   * procurements.payments
   */
  export type procurements$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
  }

  /**
   * procurements without action
   */
  export type procurementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: procurementsInclude<ExtArgs> | null
  }


  /**
   * Model queue_entries
   */

  export type AggregateQueue_entries = {
    _count: Queue_entriesCountAggregateOutputType | null
    _avg: Queue_entriesAvgAggregateOutputType | null
    _sum: Queue_entriesSumAggregateOutputType | null
    _min: Queue_entriesMinAggregateOutputType | null
    _max: Queue_entriesMaxAggregateOutputType | null
  }

  export type Queue_entriesAvgAggregateOutputType = {
    id: number | null
    booking_id: number | null
    queue_position: number | null
  }

  export type Queue_entriesSumAggregateOutputType = {
    id: number | null
    booking_id: number | null
    queue_position: number | null
  }

  export type Queue_entriesMinAggregateOutputType = {
    id: number | null
    booking_id: number | null
    queue_position: number | null
    status: string | null
    joined_at: Date | null
    called_at: Date | null
    completed_at: Date | null
  }

  export type Queue_entriesMaxAggregateOutputType = {
    id: number | null
    booking_id: number | null
    queue_position: number | null
    status: string | null
    joined_at: Date | null
    called_at: Date | null
    completed_at: Date | null
  }

  export type Queue_entriesCountAggregateOutputType = {
    id: number
    booking_id: number
    queue_position: number
    status: number
    joined_at: number
    called_at: number
    completed_at: number
    _all: number
  }


  export type Queue_entriesAvgAggregateInputType = {
    id?: true
    booking_id?: true
    queue_position?: true
  }

  export type Queue_entriesSumAggregateInputType = {
    id?: true
    booking_id?: true
    queue_position?: true
  }

  export type Queue_entriesMinAggregateInputType = {
    id?: true
    booking_id?: true
    queue_position?: true
    status?: true
    joined_at?: true
    called_at?: true
    completed_at?: true
  }

  export type Queue_entriesMaxAggregateInputType = {
    id?: true
    booking_id?: true
    queue_position?: true
    status?: true
    joined_at?: true
    called_at?: true
    completed_at?: true
  }

  export type Queue_entriesCountAggregateInputType = {
    id?: true
    booking_id?: true
    queue_position?: true
    status?: true
    joined_at?: true
    called_at?: true
    completed_at?: true
    _all?: true
  }

  export type Queue_entriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which queue_entries to aggregate.
     */
    where?: queue_entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queue_entries to fetch.
     */
    orderBy?: queue_entriesOrderByWithRelationInput | queue_entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: queue_entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queue_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queue_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned queue_entries
    **/
    _count?: true | Queue_entriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Queue_entriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Queue_entriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Queue_entriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Queue_entriesMaxAggregateInputType
  }

  export type GetQueue_entriesAggregateType<T extends Queue_entriesAggregateArgs> = {
        [P in keyof T & keyof AggregateQueue_entries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueue_entries[P]>
      : GetScalarType<T[P], AggregateQueue_entries[P]>
  }




  export type queue_entriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: queue_entriesWhereInput
    orderBy?: queue_entriesOrderByWithAggregationInput | queue_entriesOrderByWithAggregationInput[]
    by: Queue_entriesScalarFieldEnum[] | Queue_entriesScalarFieldEnum
    having?: queue_entriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Queue_entriesCountAggregateInputType | true
    _avg?: Queue_entriesAvgAggregateInputType
    _sum?: Queue_entriesSumAggregateInputType
    _min?: Queue_entriesMinAggregateInputType
    _max?: Queue_entriesMaxAggregateInputType
  }

  export type Queue_entriesGroupByOutputType = {
    id: number
    booking_id: number
    queue_position: number
    status: string
    joined_at: Date | null
    called_at: Date | null
    completed_at: Date | null
    _count: Queue_entriesCountAggregateOutputType | null
    _avg: Queue_entriesAvgAggregateOutputType | null
    _sum: Queue_entriesSumAggregateOutputType | null
    _min: Queue_entriesMinAggregateOutputType | null
    _max: Queue_entriesMaxAggregateOutputType | null
  }

  type GetQueue_entriesGroupByPayload<T extends queue_entriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Queue_entriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Queue_entriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Queue_entriesGroupByOutputType[P]>
            : GetScalarType<T[P], Queue_entriesGroupByOutputType[P]>
        }
      >
    >


  export type queue_entriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    queue_position?: boolean
    status?: boolean
    joined_at?: boolean
    called_at?: boolean
    completed_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue_entries"]>

  export type queue_entriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    queue_position?: boolean
    status?: boolean
    joined_at?: boolean
    called_at?: boolean
    completed_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue_entries"]>

  export type queue_entriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    queue_position?: boolean
    status?: boolean
    joined_at?: boolean
    called_at?: boolean
    completed_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue_entries"]>

  export type queue_entriesSelectScalar = {
    id?: boolean
    booking_id?: boolean
    queue_position?: boolean
    status?: boolean
    joined_at?: boolean
    called_at?: boolean
    completed_at?: boolean
  }

  export type queue_entriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "queue_position" | "status" | "joined_at" | "called_at" | "completed_at", ExtArgs["result"]["queue_entries"]>
  export type queue_entriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }
  export type queue_entriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }
  export type queue_entriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }

  export type $queue_entriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "queue_entries"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      booking_id: number
      queue_position: number
      status: string
      joined_at: Date | null
      called_at: Date | null
      completed_at: Date | null
    }, ExtArgs["result"]["queue_entries"]>
    composites: {}
  }

  type queue_entriesGetPayload<S extends boolean | null | undefined | queue_entriesDefaultArgs> = $Result.GetResult<Prisma.$queue_entriesPayload, S>

  type queue_entriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<queue_entriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Queue_entriesCountAggregateInputType | true
    }

  export interface queue_entriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['queue_entries'], meta: { name: 'queue_entries' } }
    /**
     * Find zero or one Queue_entries that matches the filter.
     * @param {queue_entriesFindUniqueArgs} args - Arguments to find a Queue_entries
     * @example
     * // Get one Queue_entries
     * const queue_entries = await prisma.queue_entries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends queue_entriesFindUniqueArgs>(args: SelectSubset<T, queue_entriesFindUniqueArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Queue_entries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {queue_entriesFindUniqueOrThrowArgs} args - Arguments to find a Queue_entries
     * @example
     * // Get one Queue_entries
     * const queue_entries = await prisma.queue_entries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends queue_entriesFindUniqueOrThrowArgs>(args: SelectSubset<T, queue_entriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queue_entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_entriesFindFirstArgs} args - Arguments to find a Queue_entries
     * @example
     * // Get one Queue_entries
     * const queue_entries = await prisma.queue_entries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends queue_entriesFindFirstArgs>(args?: SelectSubset<T, queue_entriesFindFirstArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queue_entries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_entriesFindFirstOrThrowArgs} args - Arguments to find a Queue_entries
     * @example
     * // Get one Queue_entries
     * const queue_entries = await prisma.queue_entries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends queue_entriesFindFirstOrThrowArgs>(args?: SelectSubset<T, queue_entriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queue_entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_entriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queue_entries
     * const queue_entries = await prisma.queue_entries.findMany()
     * 
     * // Get first 10 Queue_entries
     * const queue_entries = await prisma.queue_entries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queue_entriesWithIdOnly = await prisma.queue_entries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends queue_entriesFindManyArgs>(args?: SelectSubset<T, queue_entriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Queue_entries.
     * @param {queue_entriesCreateArgs} args - Arguments to create a Queue_entries.
     * @example
     * // Create one Queue_entries
     * const Queue_entries = await prisma.queue_entries.create({
     *   data: {
     *     // ... data to create a Queue_entries
     *   }
     * })
     * 
     */
    create<T extends queue_entriesCreateArgs>(args: SelectSubset<T, queue_entriesCreateArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queue_entries.
     * @param {queue_entriesCreateManyArgs} args - Arguments to create many Queue_entries.
     * @example
     * // Create many Queue_entries
     * const queue_entries = await prisma.queue_entries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends queue_entriesCreateManyArgs>(args?: SelectSubset<T, queue_entriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Queue_entries and returns the data saved in the database.
     * @param {queue_entriesCreateManyAndReturnArgs} args - Arguments to create many Queue_entries.
     * @example
     * // Create many Queue_entries
     * const queue_entries = await prisma.queue_entries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Queue_entries and only return the `id`
     * const queue_entriesWithIdOnly = await prisma.queue_entries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends queue_entriesCreateManyAndReturnArgs>(args?: SelectSubset<T, queue_entriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Queue_entries.
     * @param {queue_entriesDeleteArgs} args - Arguments to delete one Queue_entries.
     * @example
     * // Delete one Queue_entries
     * const Queue_entries = await prisma.queue_entries.delete({
     *   where: {
     *     // ... filter to delete one Queue_entries
     *   }
     * })
     * 
     */
    delete<T extends queue_entriesDeleteArgs>(args: SelectSubset<T, queue_entriesDeleteArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Queue_entries.
     * @param {queue_entriesUpdateArgs} args - Arguments to update one Queue_entries.
     * @example
     * // Update one Queue_entries
     * const queue_entries = await prisma.queue_entries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends queue_entriesUpdateArgs>(args: SelectSubset<T, queue_entriesUpdateArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queue_entries.
     * @param {queue_entriesDeleteManyArgs} args - Arguments to filter Queue_entries to delete.
     * @example
     * // Delete a few Queue_entries
     * const { count } = await prisma.queue_entries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends queue_entriesDeleteManyArgs>(args?: SelectSubset<T, queue_entriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queue_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_entriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queue_entries
     * const queue_entries = await prisma.queue_entries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends queue_entriesUpdateManyArgs>(args: SelectSubset<T, queue_entriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queue_entries and returns the data updated in the database.
     * @param {queue_entriesUpdateManyAndReturnArgs} args - Arguments to update many Queue_entries.
     * @example
     * // Update many Queue_entries
     * const queue_entries = await prisma.queue_entries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Queue_entries and only return the `id`
     * const queue_entriesWithIdOnly = await prisma.queue_entries.updateManyAndReturn({
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
    updateManyAndReturn<T extends queue_entriesUpdateManyAndReturnArgs>(args: SelectSubset<T, queue_entriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Queue_entries.
     * @param {queue_entriesUpsertArgs} args - Arguments to update or create a Queue_entries.
     * @example
     * // Update or create a Queue_entries
     * const queue_entries = await prisma.queue_entries.upsert({
     *   create: {
     *     // ... data to create a Queue_entries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Queue_entries we want to update
     *   }
     * })
     */
    upsert<T extends queue_entriesUpsertArgs>(args: SelectSubset<T, queue_entriesUpsertArgs<ExtArgs>>): Prisma__queue_entriesClient<$Result.GetResult<Prisma.$queue_entriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queue_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_entriesCountArgs} args - Arguments to filter Queue_entries to count.
     * @example
     * // Count the number of Queue_entries
     * const count = await prisma.queue_entries.count({
     *   where: {
     *     // ... the filter for the Queue_entries we want to count
     *   }
     * })
    **/
    count<T extends queue_entriesCountArgs>(
      args?: Subset<T, queue_entriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Queue_entriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Queue_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Queue_entriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Queue_entriesAggregateArgs>(args: Subset<T, Queue_entriesAggregateArgs>): Prisma.PrismaPromise<GetQueue_entriesAggregateType<T>>

    /**
     * Group by Queue_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queue_entriesGroupByArgs} args - Group by arguments.
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
      T extends queue_entriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: queue_entriesGroupByArgs['orderBy'] }
        : { orderBy?: queue_entriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, queue_entriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueue_entriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the queue_entries model
   */
  readonly fields: queue_entriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for queue_entries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__queue_entriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends bookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingsDefaultArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the queue_entries model
   */
  interface queue_entriesFieldRefs {
    readonly id: FieldRef<"queue_entries", 'Int'>
    readonly booking_id: FieldRef<"queue_entries", 'Int'>
    readonly queue_position: FieldRef<"queue_entries", 'Int'>
    readonly status: FieldRef<"queue_entries", 'String'>
    readonly joined_at: FieldRef<"queue_entries", 'DateTime'>
    readonly called_at: FieldRef<"queue_entries", 'DateTime'>
    readonly completed_at: FieldRef<"queue_entries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * queue_entries findUnique
   */
  export type queue_entriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * Filter, which queue_entries to fetch.
     */
    where: queue_entriesWhereUniqueInput
  }

  /**
   * queue_entries findUniqueOrThrow
   */
  export type queue_entriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * Filter, which queue_entries to fetch.
     */
    where: queue_entriesWhereUniqueInput
  }

  /**
   * queue_entries findFirst
   */
  export type queue_entriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * Filter, which queue_entries to fetch.
     */
    where?: queue_entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queue_entries to fetch.
     */
    orderBy?: queue_entriesOrderByWithRelationInput | queue_entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for queue_entries.
     */
    cursor?: queue_entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queue_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queue_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of queue_entries.
     */
    distinct?: Queue_entriesScalarFieldEnum | Queue_entriesScalarFieldEnum[]
  }

  /**
   * queue_entries findFirstOrThrow
   */
  export type queue_entriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * Filter, which queue_entries to fetch.
     */
    where?: queue_entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queue_entries to fetch.
     */
    orderBy?: queue_entriesOrderByWithRelationInput | queue_entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for queue_entries.
     */
    cursor?: queue_entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queue_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queue_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of queue_entries.
     */
    distinct?: Queue_entriesScalarFieldEnum | Queue_entriesScalarFieldEnum[]
  }

  /**
   * queue_entries findMany
   */
  export type queue_entriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * Filter, which queue_entries to fetch.
     */
    where?: queue_entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queue_entries to fetch.
     */
    orderBy?: queue_entriesOrderByWithRelationInput | queue_entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing queue_entries.
     */
    cursor?: queue_entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queue_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queue_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of queue_entries.
     */
    distinct?: Queue_entriesScalarFieldEnum | Queue_entriesScalarFieldEnum[]
  }

  /**
   * queue_entries create
   */
  export type queue_entriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * The data needed to create a queue_entries.
     */
    data: XOR<queue_entriesCreateInput, queue_entriesUncheckedCreateInput>
  }

  /**
   * queue_entries createMany
   */
  export type queue_entriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many queue_entries.
     */
    data: queue_entriesCreateManyInput | queue_entriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * queue_entries createManyAndReturn
   */
  export type queue_entriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * The data used to create many queue_entries.
     */
    data: queue_entriesCreateManyInput | queue_entriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * queue_entries update
   */
  export type queue_entriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * The data needed to update a queue_entries.
     */
    data: XOR<queue_entriesUpdateInput, queue_entriesUncheckedUpdateInput>
    /**
     * Choose, which queue_entries to update.
     */
    where: queue_entriesWhereUniqueInput
  }

  /**
   * queue_entries updateMany
   */
  export type queue_entriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update queue_entries.
     */
    data: XOR<queue_entriesUpdateManyMutationInput, queue_entriesUncheckedUpdateManyInput>
    /**
     * Filter which queue_entries to update
     */
    where?: queue_entriesWhereInput
    /**
     * Limit how many queue_entries to update.
     */
    limit?: number
  }

  /**
   * queue_entries updateManyAndReturn
   */
  export type queue_entriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * The data used to update queue_entries.
     */
    data: XOR<queue_entriesUpdateManyMutationInput, queue_entriesUncheckedUpdateManyInput>
    /**
     * Filter which queue_entries to update
     */
    where?: queue_entriesWhereInput
    /**
     * Limit how many queue_entries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * queue_entries upsert
   */
  export type queue_entriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * The filter to search for the queue_entries to update in case it exists.
     */
    where: queue_entriesWhereUniqueInput
    /**
     * In case the queue_entries found by the `where` argument doesn't exist, create a new queue_entries with this data.
     */
    create: XOR<queue_entriesCreateInput, queue_entriesUncheckedCreateInput>
    /**
     * In case the queue_entries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<queue_entriesUpdateInput, queue_entriesUncheckedUpdateInput>
  }

  /**
   * queue_entries delete
   */
  export type queue_entriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
    /**
     * Filter which queue_entries to delete.
     */
    where: queue_entriesWhereUniqueInput
  }

  /**
   * queue_entries deleteMany
   */
  export type queue_entriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which queue_entries to delete
     */
    where?: queue_entriesWhereInput
    /**
     * Limit how many queue_entries to delete.
     */
    limit?: number
  }

  /**
   * queue_entries without action
   */
  export type queue_entriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queue_entries
     */
    select?: queue_entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queue_entries
     */
    omit?: queue_entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queue_entriesInclude<ExtArgs> | null
  }


  /**
   * Model schedules
   */

  export type AggregateSchedules = {
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  export type SchedulesAvgAggregateOutputType = {
    id: number | null
    centre_id: number | null
    crop_id: number | null
    slot_capacity: number | null
    booked_slots: number | null
  }

  export type SchedulesSumAggregateOutputType = {
    id: number | null
    centre_id: number | null
    crop_id: number | null
    slot_capacity: number | null
    booked_slots: number | null
  }

  export type SchedulesMinAggregateOutputType = {
    id: number | null
    centre_id: number | null
    crop_id: number | null
    schedule_date: Date | null
    start_time: Date | null
    end_time: Date | null
    slot_capacity: number | null
    booked_slots: number | null
    status: string | null
    created_at: Date | null
  }

  export type SchedulesMaxAggregateOutputType = {
    id: number | null
    centre_id: number | null
    crop_id: number | null
    schedule_date: Date | null
    start_time: Date | null
    end_time: Date | null
    slot_capacity: number | null
    booked_slots: number | null
    status: string | null
    created_at: Date | null
  }

  export type SchedulesCountAggregateOutputType = {
    id: number
    centre_id: number
    crop_id: number
    schedule_date: number
    start_time: number
    end_time: number
    slot_capacity: number
    booked_slots: number
    status: number
    created_at: number
    _all: number
  }


  export type SchedulesAvgAggregateInputType = {
    id?: true
    centre_id?: true
    crop_id?: true
    slot_capacity?: true
    booked_slots?: true
  }

  export type SchedulesSumAggregateInputType = {
    id?: true
    centre_id?: true
    crop_id?: true
    slot_capacity?: true
    booked_slots?: true
  }

  export type SchedulesMinAggregateInputType = {
    id?: true
    centre_id?: true
    crop_id?: true
    schedule_date?: true
    start_time?: true
    end_time?: true
    slot_capacity?: true
    booked_slots?: true
    status?: true
    created_at?: true
  }

  export type SchedulesMaxAggregateInputType = {
    id?: true
    centre_id?: true
    crop_id?: true
    schedule_date?: true
    start_time?: true
    end_time?: true
    slot_capacity?: true
    booked_slots?: true
    status?: true
    created_at?: true
  }

  export type SchedulesCountAggregateInputType = {
    id?: true
    centre_id?: true
    crop_id?: true
    schedule_date?: true
    start_time?: true
    end_time?: true
    slot_capacity?: true
    booked_slots?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type SchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to aggregate.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | SchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulesMaxAggregateInputType
  }

  export type GetSchedulesAggregateType<T extends SchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedules[P]>
      : GetScalarType<T[P], AggregateSchedules[P]>
  }




  export type schedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithAggregationInput | schedulesOrderByWithAggregationInput[]
    by: SchedulesScalarFieldEnum[] | SchedulesScalarFieldEnum
    having?: schedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulesCountAggregateInputType | true
    _avg?: SchedulesAvgAggregateInputType
    _sum?: SchedulesSumAggregateInputType
    _min?: SchedulesMinAggregateInputType
    _max?: SchedulesMaxAggregateInputType
  }

  export type SchedulesGroupByOutputType = {
    id: number
    centre_id: number
    crop_id: number
    schedule_date: Date
    start_time: Date
    end_time: Date
    slot_capacity: number
    booked_slots: number
    status: string
    created_at: Date | null
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  type GetSchedulesGroupByPayload<T extends schedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
        }
      >
    >


  export type schedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centre_id?: boolean
    crop_id?: boolean
    schedule_date?: boolean
    start_time?: boolean
    end_time?: boolean
    slot_capacity?: boolean
    booked_slots?: boolean
    status?: boolean
    created_at?: boolean
    bookings?: boolean | schedules$bookingsArgs<ExtArgs>
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
    _count?: boolean | SchedulesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centre_id?: boolean
    crop_id?: boolean
    schedule_date?: boolean
    start_time?: boolean
    end_time?: boolean
    slot_capacity?: boolean
    booked_slots?: boolean
    status?: boolean
    created_at?: boolean
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centre_id?: boolean
    crop_id?: boolean
    schedule_date?: boolean
    start_time?: boolean
    end_time?: boolean
    slot_capacity?: boolean
    booked_slots?: boolean
    status?: boolean
    created_at?: boolean
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectScalar = {
    id?: boolean
    centre_id?: boolean
    crop_id?: boolean
    schedule_date?: boolean
    start_time?: boolean
    end_time?: boolean
    slot_capacity?: boolean
    booked_slots?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type schedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "centre_id" | "crop_id" | "schedule_date" | "start_time" | "end_time" | "slot_capacity" | "booked_slots" | "status" | "created_at", ExtArgs["result"]["schedules"]>
  export type schedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | schedules$bookingsArgs<ExtArgs>
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
    _count?: boolean | SchedulesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type schedulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }
  export type schedulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centres?: boolean | centresDefaultArgs<ExtArgs>
    crops?: boolean | cropsDefaultArgs<ExtArgs>
  }

  export type $schedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schedules"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      centres: Prisma.$centresPayload<ExtArgs>
      crops: Prisma.$cropsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      centre_id: number
      crop_id: number
      schedule_date: Date
      start_time: Date
      end_time: Date
      slot_capacity: number
      booked_slots: number
      status: string
      created_at: Date | null
    }, ExtArgs["result"]["schedules"]>
    composites: {}
  }

  type schedulesGetPayload<S extends boolean | null | undefined | schedulesDefaultArgs> = $Result.GetResult<Prisma.$schedulesPayload, S>

  type schedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<schedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulesCountAggregateInputType | true
    }

  export interface schedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedules'], meta: { name: 'schedules' } }
    /**
     * Find zero or one Schedules that matches the filter.
     * @param {schedulesFindUniqueArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends schedulesFindUniqueArgs>(args: SelectSubset<T, schedulesFindUniqueArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {schedulesFindUniqueOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends schedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, schedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends schedulesFindFirstArgs>(args?: SelectSubset<T, schedulesFindFirstArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends schedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, schedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedules.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulesWithIdOnly = await prisma.schedules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends schedulesFindManyArgs>(args?: SelectSubset<T, schedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedules.
     * @param {schedulesCreateArgs} args - Arguments to create a Schedules.
     * @example
     * // Create one Schedules
     * const Schedules = await prisma.schedules.create({
     *   data: {
     *     // ... data to create a Schedules
     *   }
     * })
     * 
     */
    create<T extends schedulesCreateArgs>(args: SelectSubset<T, schedulesCreateArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {schedulesCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedules = await prisma.schedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends schedulesCreateManyArgs>(args?: SelectSubset<T, schedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {schedulesCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedules = await prisma.schedules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const schedulesWithIdOnly = await prisma.schedules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends schedulesCreateManyAndReturnArgs>(args?: SelectSubset<T, schedulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedules.
     * @param {schedulesDeleteArgs} args - Arguments to delete one Schedules.
     * @example
     * // Delete one Schedules
     * const Schedules = await prisma.schedules.delete({
     *   where: {
     *     // ... filter to delete one Schedules
     *   }
     * })
     * 
     */
    delete<T extends schedulesDeleteArgs>(args: SelectSubset<T, schedulesDeleteArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedules.
     * @param {schedulesUpdateArgs} args - Arguments to update one Schedules.
     * @example
     * // Update one Schedules
     * const schedules = await prisma.schedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends schedulesUpdateArgs>(args: SelectSubset<T, schedulesUpdateArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {schedulesDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends schedulesDeleteManyArgs>(args?: SelectSubset<T, schedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends schedulesUpdateManyArgs>(args: SelectSubset<T, schedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {schedulesUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const schedulesWithIdOnly = await prisma.schedules.updateManyAndReturn({
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
    updateManyAndReturn<T extends schedulesUpdateManyAndReturnArgs>(args: SelectSubset<T, schedulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedules.
     * @param {schedulesUpsertArgs} args - Arguments to update or create a Schedules.
     * @example
     * // Update or create a Schedules
     * const schedules = await prisma.schedules.upsert({
     *   create: {
     *     // ... data to create a Schedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedules we want to update
     *   }
     * })
     */
    upsert<T extends schedulesUpsertArgs>(args: SelectSubset<T, schedulesUpsertArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedules.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends schedulesCountArgs>(
      args?: Subset<T, schedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulesAggregateArgs>(args: Subset<T, SchedulesAggregateArgs>): Prisma.PrismaPromise<GetSchedulesAggregateType<T>>

    /**
     * Group by Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesGroupByArgs} args - Group by arguments.
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
      T extends schedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schedulesGroupByArgs['orderBy'] }
        : { orderBy?: schedulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, schedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schedules model
   */
  readonly fields: schedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends schedules$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, schedules$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    centres<T extends centresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, centresDefaultArgs<ExtArgs>>): Prisma__centresClient<$Result.GetResult<Prisma.$centresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    crops<T extends cropsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cropsDefaultArgs<ExtArgs>>): Prisma__cropsClient<$Result.GetResult<Prisma.$cropsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the schedules model
   */
  interface schedulesFieldRefs {
    readonly id: FieldRef<"schedules", 'Int'>
    readonly centre_id: FieldRef<"schedules", 'Int'>
    readonly crop_id: FieldRef<"schedules", 'Int'>
    readonly schedule_date: FieldRef<"schedules", 'DateTime'>
    readonly start_time: FieldRef<"schedules", 'DateTime'>
    readonly end_time: FieldRef<"schedules", 'DateTime'>
    readonly slot_capacity: FieldRef<"schedules", 'Int'>
    readonly booked_slots: FieldRef<"schedules", 'Int'>
    readonly status: FieldRef<"schedules", 'String'>
    readonly created_at: FieldRef<"schedules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * schedules findUnique
   */
  export type schedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findUniqueOrThrow
   */
  export type schedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findFirst
   */
  export type schedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules findFirstOrThrow
   */
  export type schedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules findMany
   */
  export type schedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules create
   */
  export type schedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a schedules.
     */
    data: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
  }

  /**
   * schedules createMany
   */
  export type schedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: schedulesCreateManyInput | schedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedules createManyAndReturn
   */
  export type schedulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * The data used to create many schedules.
     */
    data: schedulesCreateManyInput | schedulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * schedules update
   */
  export type schedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a schedules.
     */
    data: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
    /**
     * Choose, which schedules to update.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules updateMany
   */
  export type schedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
  }

  /**
   * schedules updateManyAndReturn
   */
  export type schedulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * The data used to update schedules.
     */
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * schedules upsert
   */
  export type schedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the schedules to update in case it exists.
     */
    where: schedulesWhereUniqueInput
    /**
     * In case the schedules found by the `where` argument doesn't exist, create a new schedules with this data.
     */
    create: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
    /**
     * In case the schedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
  }

  /**
   * schedules delete
   */
  export type schedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter which schedules to delete.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules deleteMany
   */
  export type schedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to delete.
     */
    limit?: number
  }

  /**
   * schedules.bookings
   */
  export type schedules$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * schedules without action
   */
  export type schedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    password_hash: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    phone: string
    email: string | null
    password_hash: string
    role: string
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    farmers?: boolean | users$farmersArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "password_hash" | "role" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | users$farmersArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      farmers: Prisma.$farmersPayload<ExtArgs> | null
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      email: string | null
      password_hash: string
      role: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmers<T extends users$farmersArgs<ExtArgs> = {}>(args?: Subset<T, users$farmersArgs<ExtArgs>>): Prisma__farmersClient<$Result.GetResult<Prisma.$farmersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.farmers
   */
  export type users$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmers
     */
    select?: farmersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmers
     */
    omit?: farmersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmersInclude<ExtArgs> | null
    where?: farmersWhereInput
  }

  /**
   * users.notifications
   */
  export type users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const BookingsScalarFieldEnum: {
    id: 'id',
    farmer_id: 'farmer_id',
    schedule_id: 'schedule_id',
    token_number: 'token_number',
    booking_date: 'booking_date',
    status: 'status',
    estimated_wait_minutes: 'estimated_wait_minutes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const Centre_cropsScalarFieldEnum: {
    centre_id: 'centre_id',
    crop_id: 'crop_id'
  };

  export type Centre_cropsScalarFieldEnum = (typeof Centre_cropsScalarFieldEnum)[keyof typeof Centre_cropsScalarFieldEnum]


  export const CentresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    village: 'village',
    district: 'district',
    state: 'state',
    latitude: 'latitude',
    longitude: 'longitude',
    capacity: 'capacity',
    active_counters: 'active_counters',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CentresScalarFieldEnum = (typeof CentresScalarFieldEnum)[keyof typeof CentresScalarFieldEnum]


  export const CropsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type CropsScalarFieldEnum = (typeof CropsScalarFieldEnum)[keyof typeof CropsScalarFieldEnum]


  export const FarmersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    address: 'address',
    village: 'village',
    district: 'district',
    state: 'state',
    created_at: 'created_at'
  };

  export type FarmersScalarFieldEnum = (typeof FarmersScalarFieldEnum)[keyof typeof FarmersScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    message: 'message',
    type: 'type',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    procurement_id: 'procurement_id',
    amount: 'amount',
    payment_method: 'payment_method',
    transaction_reference: 'transaction_reference',
    status: 'status',
    paid_at: 'paid_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ProcurementsScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    quantity_kg: 'quantity_kg',
    procurement_price: 'procurement_price',
    total_amount: 'total_amount',
    status: 'status',
    procured_at: 'procured_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProcurementsScalarFieldEnum = (typeof ProcurementsScalarFieldEnum)[keyof typeof ProcurementsScalarFieldEnum]


  export const Queue_entriesScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    queue_position: 'queue_position',
    status: 'status',
    joined_at: 'joined_at',
    called_at: 'called_at',
    completed_at: 'completed_at'
  };

  export type Queue_entriesScalarFieldEnum = (typeof Queue_entriesScalarFieldEnum)[keyof typeof Queue_entriesScalarFieldEnum]


  export const SchedulesScalarFieldEnum: {
    id: 'id',
    centre_id: 'centre_id',
    crop_id: 'crop_id',
    schedule_date: 'schedule_date',
    start_time: 'start_time',
    end_time: 'end_time',
    slot_capacity: 'slot_capacity',
    booked_slots: 'booked_slots',
    status: 'status',
    created_at: 'created_at'
  };

  export type SchedulesScalarFieldEnum = (typeof SchedulesScalarFieldEnum)[keyof typeof SchedulesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: IntFilter<"bookings"> | number
    farmer_id?: IntFilter<"bookings"> | number
    schedule_id?: IntFilter<"bookings"> | number
    token_number?: IntFilter<"bookings"> | number
    booking_date?: DateTimeNullableFilter<"bookings"> | Date | string | null
    status?: StringFilter<"bookings"> | string
    estimated_wait_minutes?: IntNullableFilter<"bookings"> | number | null
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    farmers?: XOR<FarmersScalarRelationFilter, farmersWhereInput>
    schedules?: XOR<SchedulesScalarRelationFilter, schedulesWhereInput>
    procurements?: XOR<ProcurementsNullableScalarRelationFilter, procurementsWhereInput> | null
    queue_entries?: XOR<Queue_entriesNullableScalarRelationFilter, queue_entriesWhereInput> | null
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    farmer_id?: SortOrder
    schedule_id?: SortOrder
    token_number?: SortOrder
    booking_date?: SortOrderInput | SortOrder
    status?: SortOrder
    estimated_wait_minutes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    farmers?: farmersOrderByWithRelationInput
    schedules?: schedulesOrderByWithRelationInput
    procurements?: procurementsOrderByWithRelationInput
    queue_entries?: queue_entriesOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    farmer_id_schedule_id?: bookingsFarmer_idSchedule_idCompoundUniqueInput
    schedule_id_token_number?: bookingsSchedule_idToken_numberCompoundUniqueInput
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    farmer_id?: IntFilter<"bookings"> | number
    schedule_id?: IntFilter<"bookings"> | number
    token_number?: IntFilter<"bookings"> | number
    booking_date?: DateTimeNullableFilter<"bookings"> | Date | string | null
    status?: StringFilter<"bookings"> | string
    estimated_wait_minutes?: IntNullableFilter<"bookings"> | number | null
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    farmers?: XOR<FarmersScalarRelationFilter, farmersWhereInput>
    schedules?: XOR<SchedulesScalarRelationFilter, schedulesWhereInput>
    procurements?: XOR<ProcurementsNullableScalarRelationFilter, procurementsWhereInput> | null
    queue_entries?: XOR<Queue_entriesNullableScalarRelationFilter, queue_entriesWhereInput> | null
  }, "id" | "farmer_id_schedule_id" | "schedule_id_token_number">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    farmer_id?: SortOrder
    schedule_id?: SortOrder
    token_number?: SortOrder
    booking_date?: SortOrderInput | SortOrder
    status?: SortOrder
    estimated_wait_minutes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bookings"> | number
    farmer_id?: IntWithAggregatesFilter<"bookings"> | number
    schedule_id?: IntWithAggregatesFilter<"bookings"> | number
    token_number?: IntWithAggregatesFilter<"bookings"> | number
    booking_date?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
    status?: StringWithAggregatesFilter<"bookings"> | string
    estimated_wait_minutes?: IntNullableWithAggregatesFilter<"bookings"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
  }

  export type centre_cropsWhereInput = {
    AND?: centre_cropsWhereInput | centre_cropsWhereInput[]
    OR?: centre_cropsWhereInput[]
    NOT?: centre_cropsWhereInput | centre_cropsWhereInput[]
    centre_id?: IntFilter<"centre_crops"> | number
    crop_id?: IntFilter<"centre_crops"> | number
    centres?: XOR<CentresScalarRelationFilter, centresWhereInput>
    crops?: XOR<CropsScalarRelationFilter, cropsWhereInput>
  }

  export type centre_cropsOrderByWithRelationInput = {
    centre_id?: SortOrder
    crop_id?: SortOrder
    centres?: centresOrderByWithRelationInput
    crops?: cropsOrderByWithRelationInput
  }

  export type centre_cropsWhereUniqueInput = Prisma.AtLeast<{
    centre_id_crop_id?: centre_cropsCentre_idCrop_idCompoundUniqueInput
    AND?: centre_cropsWhereInput | centre_cropsWhereInput[]
    OR?: centre_cropsWhereInput[]
    NOT?: centre_cropsWhereInput | centre_cropsWhereInput[]
    centre_id?: IntFilter<"centre_crops"> | number
    crop_id?: IntFilter<"centre_crops"> | number
    centres?: XOR<CentresScalarRelationFilter, centresWhereInput>
    crops?: XOR<CropsScalarRelationFilter, cropsWhereInput>
  }, "centre_id_crop_id">

  export type centre_cropsOrderByWithAggregationInput = {
    centre_id?: SortOrder
    crop_id?: SortOrder
    _count?: centre_cropsCountOrderByAggregateInput
    _avg?: centre_cropsAvgOrderByAggregateInput
    _max?: centre_cropsMaxOrderByAggregateInput
    _min?: centre_cropsMinOrderByAggregateInput
    _sum?: centre_cropsSumOrderByAggregateInput
  }

  export type centre_cropsScalarWhereWithAggregatesInput = {
    AND?: centre_cropsScalarWhereWithAggregatesInput | centre_cropsScalarWhereWithAggregatesInput[]
    OR?: centre_cropsScalarWhereWithAggregatesInput[]
    NOT?: centre_cropsScalarWhereWithAggregatesInput | centre_cropsScalarWhereWithAggregatesInput[]
    centre_id?: IntWithAggregatesFilter<"centre_crops"> | number
    crop_id?: IntWithAggregatesFilter<"centre_crops"> | number
  }

  export type centresWhereInput = {
    AND?: centresWhereInput | centresWhereInput[]
    OR?: centresWhereInput[]
    NOT?: centresWhereInput | centresWhereInput[]
    id?: IntFilter<"centres"> | number
    name?: StringFilter<"centres"> | string
    address?: StringFilter<"centres"> | string
    village?: StringNullableFilter<"centres"> | string | null
    district?: StringNullableFilter<"centres"> | string | null
    state?: StringNullableFilter<"centres"> | string | null
    latitude?: DecimalNullableFilter<"centres"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"centres"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFilter<"centres"> | number
    active_counters?: IntFilter<"centres"> | number
    status?: StringFilter<"centres"> | string
    created_at?: DateTimeNullableFilter<"centres"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"centres"> | Date | string | null
    centre_crops?: Centre_cropsListRelationFilter
    schedules?: SchedulesListRelationFilter
  }

  export type centresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    village?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    capacity?: SortOrder
    active_counters?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    centre_crops?: centre_cropsOrderByRelationAggregateInput
    schedules?: schedulesOrderByRelationAggregateInput
  }

  export type centresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: centresWhereInput | centresWhereInput[]
    OR?: centresWhereInput[]
    NOT?: centresWhereInput | centresWhereInput[]
    name?: StringFilter<"centres"> | string
    address?: StringFilter<"centres"> | string
    village?: StringNullableFilter<"centres"> | string | null
    district?: StringNullableFilter<"centres"> | string | null
    state?: StringNullableFilter<"centres"> | string | null
    latitude?: DecimalNullableFilter<"centres"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"centres"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFilter<"centres"> | number
    active_counters?: IntFilter<"centres"> | number
    status?: StringFilter<"centres"> | string
    created_at?: DateTimeNullableFilter<"centres"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"centres"> | Date | string | null
    centre_crops?: Centre_cropsListRelationFilter
    schedules?: SchedulesListRelationFilter
  }, "id">

  export type centresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    village?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    capacity?: SortOrder
    active_counters?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: centresCountOrderByAggregateInput
    _avg?: centresAvgOrderByAggregateInput
    _max?: centresMaxOrderByAggregateInput
    _min?: centresMinOrderByAggregateInput
    _sum?: centresSumOrderByAggregateInput
  }

  export type centresScalarWhereWithAggregatesInput = {
    AND?: centresScalarWhereWithAggregatesInput | centresScalarWhereWithAggregatesInput[]
    OR?: centresScalarWhereWithAggregatesInput[]
    NOT?: centresScalarWhereWithAggregatesInput | centresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"centres"> | number
    name?: StringWithAggregatesFilter<"centres"> | string
    address?: StringWithAggregatesFilter<"centres"> | string
    village?: StringNullableWithAggregatesFilter<"centres"> | string | null
    district?: StringNullableWithAggregatesFilter<"centres"> | string | null
    state?: StringNullableWithAggregatesFilter<"centres"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"centres"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"centres"> | Decimal | DecimalJsLike | number | string | null
    capacity?: IntWithAggregatesFilter<"centres"> | number
    active_counters?: IntWithAggregatesFilter<"centres"> | number
    status?: StringWithAggregatesFilter<"centres"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"centres"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"centres"> | Date | string | null
  }

  export type cropsWhereInput = {
    AND?: cropsWhereInput | cropsWhereInput[]
    OR?: cropsWhereInput[]
    NOT?: cropsWhereInput | cropsWhereInput[]
    id?: IntFilter<"crops"> | number
    name?: StringFilter<"crops"> | string
    created_at?: DateTimeNullableFilter<"crops"> | Date | string | null
    centre_crops?: Centre_cropsListRelationFilter
    schedules?: SchedulesListRelationFilter
  }

  export type cropsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    centre_crops?: centre_cropsOrderByRelationAggregateInput
    schedules?: schedulesOrderByRelationAggregateInput
  }

  export type cropsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: cropsWhereInput | cropsWhereInput[]
    OR?: cropsWhereInput[]
    NOT?: cropsWhereInput | cropsWhereInput[]
    created_at?: DateTimeNullableFilter<"crops"> | Date | string | null
    centre_crops?: Centre_cropsListRelationFilter
    schedules?: SchedulesListRelationFilter
  }, "id" | "name">

  export type cropsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: cropsCountOrderByAggregateInput
    _avg?: cropsAvgOrderByAggregateInput
    _max?: cropsMaxOrderByAggregateInput
    _min?: cropsMinOrderByAggregateInput
    _sum?: cropsSumOrderByAggregateInput
  }

  export type cropsScalarWhereWithAggregatesInput = {
    AND?: cropsScalarWhereWithAggregatesInput | cropsScalarWhereWithAggregatesInput[]
    OR?: cropsScalarWhereWithAggregatesInput[]
    NOT?: cropsScalarWhereWithAggregatesInput | cropsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"crops"> | number
    name?: StringWithAggregatesFilter<"crops"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"crops"> | Date | string | null
  }

  export type farmersWhereInput = {
    AND?: farmersWhereInput | farmersWhereInput[]
    OR?: farmersWhereInput[]
    NOT?: farmersWhereInput | farmersWhereInput[]
    id?: IntFilter<"farmers"> | number
    user_id?: IntFilter<"farmers"> | number
    address?: StringNullableFilter<"farmers"> | string | null
    village?: StringNullableFilter<"farmers"> | string | null
    district?: StringNullableFilter<"farmers"> | string | null
    state?: StringNullableFilter<"farmers"> | string | null
    created_at?: DateTimeNullableFilter<"farmers"> | Date | string | null
    bookings?: BookingsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type farmersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    address?: SortOrderInput | SortOrder
    village?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type farmersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: farmersWhereInput | farmersWhereInput[]
    OR?: farmersWhereInput[]
    NOT?: farmersWhereInput | farmersWhereInput[]
    address?: StringNullableFilter<"farmers"> | string | null
    village?: StringNullableFilter<"farmers"> | string | null
    district?: StringNullableFilter<"farmers"> | string | null
    state?: StringNullableFilter<"farmers"> | string | null
    created_at?: DateTimeNullableFilter<"farmers"> | Date | string | null
    bookings?: BookingsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type farmersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    address?: SortOrderInput | SortOrder
    village?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: farmersCountOrderByAggregateInput
    _avg?: farmersAvgOrderByAggregateInput
    _max?: farmersMaxOrderByAggregateInput
    _min?: farmersMinOrderByAggregateInput
    _sum?: farmersSumOrderByAggregateInput
  }

  export type farmersScalarWhereWithAggregatesInput = {
    AND?: farmersScalarWhereWithAggregatesInput | farmersScalarWhereWithAggregatesInput[]
    OR?: farmersScalarWhereWithAggregatesInput[]
    NOT?: farmersScalarWhereWithAggregatesInput | farmersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"farmers"> | number
    user_id?: IntWithAggregatesFilter<"farmers"> | number
    address?: StringNullableWithAggregatesFilter<"farmers"> | string | null
    village?: StringNullableWithAggregatesFilter<"farmers"> | string | null
    district?: StringNullableWithAggregatesFilter<"farmers"> | string | null
    state?: StringNullableWithAggregatesFilter<"farmers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"farmers"> | Date | string | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntFilter<"notifications"> | number
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    type?: StringFilter<"notifications"> | string
    is_read?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    user_id?: IntFilter<"notifications"> | number
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    type?: StringFilter<"notifications"> | string
    is_read?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    user_id?: IntWithAggregatesFilter<"notifications"> | number
    title?: StringWithAggregatesFilter<"notifications"> | string
    message?: StringWithAggregatesFilter<"notifications"> | string
    type?: StringWithAggregatesFilter<"notifications"> | string
    is_read?: BoolWithAggregatesFilter<"notifications"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    procurement_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"payments"> | string | null
    transaction_reference?: StringNullableFilter<"payments"> | string | null
    status?: StringFilter<"payments"> | string
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    procurements?: XOR<ProcurementsScalarRelationFilter, procurementsWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    procurement_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    transaction_reference?: SortOrderInput | SortOrder
    status?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    procurements?: procurementsOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    procurement_id?: number
    transaction_reference?: string
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"payments"> | string | null
    status?: StringFilter<"payments"> | string
    paid_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    procurements?: XOR<ProcurementsScalarRelationFilter, procurementsWhereInput>
  }, "id" | "procurement_id" | "transaction_reference">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    procurement_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    transaction_reference?: SortOrderInput | SortOrder
    status?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    procurement_id?: IntWithAggregatesFilter<"payments"> | number
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableWithAggregatesFilter<"payments"> | string | null
    transaction_reference?: StringNullableWithAggregatesFilter<"payments"> | string | null
    status?: StringWithAggregatesFilter<"payments"> | string
    paid_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
  }

  export type procurementsWhereInput = {
    AND?: procurementsWhereInput | procurementsWhereInput[]
    OR?: procurementsWhereInput[]
    NOT?: procurementsWhereInput | procurementsWhereInput[]
    id?: IntFilter<"procurements"> | number
    booking_id?: IntFilter<"procurements"> | number
    quantity_kg?: DecimalFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"procurements"> | string
    procured_at?: DateTimeNullableFilter<"procurements"> | Date | string | null
    created_at?: DateTimeNullableFilter<"procurements"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"procurements"> | Date | string | null
    payments?: XOR<PaymentsNullableScalarRelationFilter, paymentsWhereInput> | null
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }

  export type procurementsOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    quantity_kg?: SortOrder
    procurement_price?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    procured_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    payments?: paymentsOrderByWithRelationInput
    bookings?: bookingsOrderByWithRelationInput
  }

  export type procurementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    booking_id?: number
    AND?: procurementsWhereInput | procurementsWhereInput[]
    OR?: procurementsWhereInput[]
    NOT?: procurementsWhereInput | procurementsWhereInput[]
    quantity_kg?: DecimalFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"procurements"> | string
    procured_at?: DateTimeNullableFilter<"procurements"> | Date | string | null
    created_at?: DateTimeNullableFilter<"procurements"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"procurements"> | Date | string | null
    payments?: XOR<PaymentsNullableScalarRelationFilter, paymentsWhereInput> | null
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }, "id" | "booking_id">

  export type procurementsOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    quantity_kg?: SortOrder
    procurement_price?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    procured_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: procurementsCountOrderByAggregateInput
    _avg?: procurementsAvgOrderByAggregateInput
    _max?: procurementsMaxOrderByAggregateInput
    _min?: procurementsMinOrderByAggregateInput
    _sum?: procurementsSumOrderByAggregateInput
  }

  export type procurementsScalarWhereWithAggregatesInput = {
    AND?: procurementsScalarWhereWithAggregatesInput | procurementsScalarWhereWithAggregatesInput[]
    OR?: procurementsScalarWhereWithAggregatesInput[]
    NOT?: procurementsScalarWhereWithAggregatesInput | procurementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"procurements"> | number
    booking_id?: IntWithAggregatesFilter<"procurements"> | number
    quantity_kg?: DecimalWithAggregatesFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalWithAggregatesFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalWithAggregatesFilter<"procurements"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"procurements"> | string
    procured_at?: DateTimeNullableWithAggregatesFilter<"procurements"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"procurements"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"procurements"> | Date | string | null
  }

  export type queue_entriesWhereInput = {
    AND?: queue_entriesWhereInput | queue_entriesWhereInput[]
    OR?: queue_entriesWhereInput[]
    NOT?: queue_entriesWhereInput | queue_entriesWhereInput[]
    id?: IntFilter<"queue_entries"> | number
    booking_id?: IntFilter<"queue_entries"> | number
    queue_position?: IntFilter<"queue_entries"> | number
    status?: StringFilter<"queue_entries"> | string
    joined_at?: DateTimeNullableFilter<"queue_entries"> | Date | string | null
    called_at?: DateTimeNullableFilter<"queue_entries"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"queue_entries"> | Date | string | null
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }

  export type queue_entriesOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    queue_position?: SortOrder
    status?: SortOrder
    joined_at?: SortOrderInput | SortOrder
    called_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByWithRelationInput
  }

  export type queue_entriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    booking_id?: number
    AND?: queue_entriesWhereInput | queue_entriesWhereInput[]
    OR?: queue_entriesWhereInput[]
    NOT?: queue_entriesWhereInput | queue_entriesWhereInput[]
    queue_position?: IntFilter<"queue_entries"> | number
    status?: StringFilter<"queue_entries"> | string
    joined_at?: DateTimeNullableFilter<"queue_entries"> | Date | string | null
    called_at?: DateTimeNullableFilter<"queue_entries"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"queue_entries"> | Date | string | null
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }, "id" | "booking_id">

  export type queue_entriesOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    queue_position?: SortOrder
    status?: SortOrder
    joined_at?: SortOrderInput | SortOrder
    called_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: queue_entriesCountOrderByAggregateInput
    _avg?: queue_entriesAvgOrderByAggregateInput
    _max?: queue_entriesMaxOrderByAggregateInput
    _min?: queue_entriesMinOrderByAggregateInput
    _sum?: queue_entriesSumOrderByAggregateInput
  }

  export type queue_entriesScalarWhereWithAggregatesInput = {
    AND?: queue_entriesScalarWhereWithAggregatesInput | queue_entriesScalarWhereWithAggregatesInput[]
    OR?: queue_entriesScalarWhereWithAggregatesInput[]
    NOT?: queue_entriesScalarWhereWithAggregatesInput | queue_entriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"queue_entries"> | number
    booking_id?: IntWithAggregatesFilter<"queue_entries"> | number
    queue_position?: IntWithAggregatesFilter<"queue_entries"> | number
    status?: StringWithAggregatesFilter<"queue_entries"> | string
    joined_at?: DateTimeNullableWithAggregatesFilter<"queue_entries"> | Date | string | null
    called_at?: DateTimeNullableWithAggregatesFilter<"queue_entries"> | Date | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"queue_entries"> | Date | string | null
  }

  export type schedulesWhereInput = {
    AND?: schedulesWhereInput | schedulesWhereInput[]
    OR?: schedulesWhereInput[]
    NOT?: schedulesWhereInput | schedulesWhereInput[]
    id?: IntFilter<"schedules"> | number
    centre_id?: IntFilter<"schedules"> | number
    crop_id?: IntFilter<"schedules"> | number
    schedule_date?: DateTimeFilter<"schedules"> | Date | string
    start_time?: DateTimeFilter<"schedules"> | Date | string
    end_time?: DateTimeFilter<"schedules"> | Date | string
    slot_capacity?: IntFilter<"schedules"> | number
    booked_slots?: IntFilter<"schedules"> | number
    status?: StringFilter<"schedules"> | string
    created_at?: DateTimeNullableFilter<"schedules"> | Date | string | null
    bookings?: BookingsListRelationFilter
    centres?: XOR<CentresScalarRelationFilter, centresWhereInput>
    crops?: XOR<CropsScalarRelationFilter, cropsWhereInput>
  }

  export type schedulesOrderByWithRelationInput = {
    id?: SortOrder
    centre_id?: SortOrder
    crop_id?: SortOrder
    schedule_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    slot_capacity?: SortOrder
    booked_slots?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    centres?: centresOrderByWithRelationInput
    crops?: cropsOrderByWithRelationInput
  }

  export type schedulesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: schedulesWhereInput | schedulesWhereInput[]
    OR?: schedulesWhereInput[]
    NOT?: schedulesWhereInput | schedulesWhereInput[]
    centre_id?: IntFilter<"schedules"> | number
    crop_id?: IntFilter<"schedules"> | number
    schedule_date?: DateTimeFilter<"schedules"> | Date | string
    start_time?: DateTimeFilter<"schedules"> | Date | string
    end_time?: DateTimeFilter<"schedules"> | Date | string
    slot_capacity?: IntFilter<"schedules"> | number
    booked_slots?: IntFilter<"schedules"> | number
    status?: StringFilter<"schedules"> | string
    created_at?: DateTimeNullableFilter<"schedules"> | Date | string | null
    bookings?: BookingsListRelationFilter
    centres?: XOR<CentresScalarRelationFilter, centresWhereInput>
    crops?: XOR<CropsScalarRelationFilter, cropsWhereInput>
  }, "id">

  export type schedulesOrderByWithAggregationInput = {
    id?: SortOrder
    centre_id?: SortOrder
    crop_id?: SortOrder
    schedule_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    slot_capacity?: SortOrder
    booked_slots?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: schedulesCountOrderByAggregateInput
    _avg?: schedulesAvgOrderByAggregateInput
    _max?: schedulesMaxOrderByAggregateInput
    _min?: schedulesMinOrderByAggregateInput
    _sum?: schedulesSumOrderByAggregateInput
  }

  export type schedulesScalarWhereWithAggregatesInput = {
    AND?: schedulesScalarWhereWithAggregatesInput | schedulesScalarWhereWithAggregatesInput[]
    OR?: schedulesScalarWhereWithAggregatesInput[]
    NOT?: schedulesScalarWhereWithAggregatesInput | schedulesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"schedules"> | number
    centre_id?: IntWithAggregatesFilter<"schedules"> | number
    crop_id?: IntWithAggregatesFilter<"schedules"> | number
    schedule_date?: DateTimeWithAggregatesFilter<"schedules"> | Date | string
    start_time?: DateTimeWithAggregatesFilter<"schedules"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"schedules"> | Date | string
    slot_capacity?: IntWithAggregatesFilter<"schedules"> | number
    booked_slots?: IntWithAggregatesFilter<"schedules"> | number
    status?: StringWithAggregatesFilter<"schedules"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"schedules"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    farmers?: XOR<FarmersNullableScalarRelationFilter, farmersWhereInput> | null
    notifications?: NotificationsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    farmers?: farmersOrderByWithRelationInput
    notifications?: notificationsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    farmers?: XOR<FarmersNullableScalarRelationFilter, farmersWhereInput> | null
    notifications?: NotificationsListRelationFilter
  }, "id" | "phone" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    phone?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type bookingsCreateInput = {
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    farmers: farmersCreateNestedOneWithoutBookingsInput
    schedules: schedulesCreateNestedOneWithoutBookingsInput
    procurements?: procurementsCreateNestedOneWithoutBookingsInput
    queue_entries?: queue_entriesCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: number
    farmer_id: number
    schedule_id: number
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    procurements?: procurementsUncheckedCreateNestedOneWithoutBookingsInput
    queue_entries?: queue_entriesUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUpdateInput = {
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmers?: farmersUpdateOneRequiredWithoutBookingsNestedInput
    schedules?: schedulesUpdateOneRequiredWithoutBookingsNestedInput
    procurements?: procurementsUpdateOneWithoutBookingsNestedInput
    queue_entries?: queue_entriesUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmer_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procurements?: procurementsUncheckedUpdateOneWithoutBookingsNestedInput
    queue_entries?: queue_entriesUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsCreateManyInput = {
    id?: number
    farmer_id: number
    schedule_id: number
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsUpdateManyMutationInput = {
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmer_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type centre_cropsCreateInput = {
    centres: centresCreateNestedOneWithoutCentre_cropsInput
    crops: cropsCreateNestedOneWithoutCentre_cropsInput
  }

  export type centre_cropsUncheckedCreateInput = {
    centre_id: number
    crop_id: number
  }

  export type centre_cropsUpdateInput = {
    centres?: centresUpdateOneRequiredWithoutCentre_cropsNestedInput
    crops?: cropsUpdateOneRequiredWithoutCentre_cropsNestedInput
  }

  export type centre_cropsUncheckedUpdateInput = {
    centre_id?: IntFieldUpdateOperationsInput | number
    crop_id?: IntFieldUpdateOperationsInput | number
  }

  export type centre_cropsCreateManyInput = {
    centre_id: number
    crop_id: number
  }

  export type centre_cropsUpdateManyMutationInput = {

  }

  export type centre_cropsUncheckedUpdateManyInput = {
    centre_id?: IntFieldUpdateOperationsInput | number
    crop_id?: IntFieldUpdateOperationsInput | number
  }

  export type centresCreateInput = {
    name: string
    address: string
    village?: string | null
    district?: string | null
    state?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    active_counters?: number
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    centre_crops?: centre_cropsCreateNestedManyWithoutCentresInput
    schedules?: schedulesCreateNestedManyWithoutCentresInput
  }

  export type centresUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    village?: string | null
    district?: string | null
    state?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    active_counters?: number
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    centre_crops?: centre_cropsUncheckedCreateNestedManyWithoutCentresInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutCentresInput
  }

  export type centresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    active_counters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centre_crops?: centre_cropsUpdateManyWithoutCentresNestedInput
    schedules?: schedulesUpdateManyWithoutCentresNestedInput
  }

  export type centresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    active_counters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centre_crops?: centre_cropsUncheckedUpdateManyWithoutCentresNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutCentresNestedInput
  }

  export type centresCreateManyInput = {
    id?: number
    name: string
    address: string
    village?: string | null
    district?: string | null
    state?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    active_counters?: number
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type centresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    active_counters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type centresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    active_counters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cropsCreateInput = {
    name: string
    created_at?: Date | string | null
    centre_crops?: centre_cropsCreateNestedManyWithoutCropsInput
    schedules?: schedulesCreateNestedManyWithoutCropsInput
  }

  export type cropsUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    centre_crops?: centre_cropsUncheckedCreateNestedManyWithoutCropsInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutCropsInput
  }

  export type cropsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centre_crops?: centre_cropsUpdateManyWithoutCropsNestedInput
    schedules?: schedulesUpdateManyWithoutCropsNestedInput
  }

  export type cropsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centre_crops?: centre_cropsUncheckedUpdateManyWithoutCropsNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutCropsNestedInput
  }

  export type cropsCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string | null
  }

  export type cropsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cropsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type farmersCreateInput = {
    address?: string | null
    village?: string | null
    district?: string | null
    state?: string | null
    created_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutFarmersInput
    users: usersCreateNestedOneWithoutFarmersInput
  }

  export type farmersUncheckedCreateInput = {
    id?: number
    user_id: number
    address?: string | null
    village?: string | null
    district?: string | null
    state?: string | null
    created_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutFarmersInput
  }

  export type farmersUpdateInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutFarmersNestedInput
    users?: usersUpdateOneRequiredWithoutFarmersNestedInput
  }

  export type farmersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutFarmersNestedInput
  }

  export type farmersCreateManyInput = {
    id?: number
    user_id: number
    address?: string | null
    village?: string | null
    district?: string | null
    state?: string | null
    created_at?: Date | string | null
  }

  export type farmersUpdateManyMutationInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type farmersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateInput = {
    title: string
    message: string
    type: string
    is_read?: boolean
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    message: string
    type: string
    is_read?: boolean
    created_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    id?: number
    user_id: number
    title: string
    message: string
    type: string
    is_read?: boolean
    created_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    transaction_reference?: string | null
    status?: string
    paid_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    procurements: procurementsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    procurement_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    transaction_reference?: string | null
    status?: string
    paid_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type paymentsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procurements?: procurementsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    procurement_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateManyInput = {
    id?: number
    procurement_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    transaction_reference?: string | null
    status?: string
    paid_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type paymentsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    procurement_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type procurementsCreateInput = {
    quantity_kg: Decimal | DecimalJsLike | number | string
    procurement_price: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    procured_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payments?: paymentsCreateNestedOneWithoutProcurementsInput
    bookings: bookingsCreateNestedOneWithoutProcurementsInput
  }

  export type procurementsUncheckedCreateInput = {
    id?: number
    booking_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    procurement_price: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    procured_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payments?: paymentsUncheckedCreateNestedOneWithoutProcurementsInput
  }

  export type procurementsUpdateInput = {
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    procured_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUpdateOneWithoutProcurementsNestedInput
    bookings?: bookingsUpdateOneRequiredWithoutProcurementsNestedInput
  }

  export type procurementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    procured_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUncheckedUpdateOneWithoutProcurementsNestedInput
  }

  export type procurementsCreateManyInput = {
    id?: number
    booking_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    procurement_price: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    procured_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type procurementsUpdateManyMutationInput = {
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    procured_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type procurementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    procured_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_entriesCreateInput = {
    queue_position: number
    status?: string
    joined_at?: Date | string | null
    called_at?: Date | string | null
    completed_at?: Date | string | null
    bookings: bookingsCreateNestedOneWithoutQueue_entriesInput
  }

  export type queue_entriesUncheckedCreateInput = {
    id?: number
    booking_id: number
    queue_position: number
    status?: string
    joined_at?: Date | string | null
    called_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type queue_entriesUpdateInput = {
    queue_position?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    called_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateOneRequiredWithoutQueue_entriesNestedInput
  }

  export type queue_entriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    queue_position?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    called_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_entriesCreateManyInput = {
    id?: number
    booking_id: number
    queue_position: number
    status?: string
    joined_at?: Date | string | null
    called_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type queue_entriesUpdateManyMutationInput = {
    queue_position?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    called_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_entriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    queue_position?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    called_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schedulesCreateInput = {
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutSchedulesInput
    centres: centresCreateNestedOneWithoutSchedulesInput
    crops: cropsCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateInput = {
    id?: number
    centre_id: number
    crop_id: number
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutSchedulesInput
  }

  export type schedulesUpdateInput = {
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutSchedulesNestedInput
    centres?: centresUpdateOneRequiredWithoutSchedulesNestedInput
    crops?: cropsUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    centre_id?: IntFieldUpdateOperationsInput | number
    crop_id?: IntFieldUpdateOperationsInput | number
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutSchedulesNestedInput
  }

  export type schedulesCreateManyInput = {
    id?: number
    centre_id: number
    crop_id: number
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
  }

  export type schedulesUpdateManyMutationInput = {
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schedulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    centre_id?: IntFieldUpdateOperationsInput | number
    crop_id?: IntFieldUpdateOperationsInput | number
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name: string
    phone: string
    email?: string | null
    password_hash: string
    role?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    farmers?: farmersCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    password_hash: string
    role?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    farmers?: farmersUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmers?: farmersUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmers?: farmersUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    password_hash: string
    role?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type FarmersScalarRelationFilter = {
    is?: farmersWhereInput
    isNot?: farmersWhereInput
  }

  export type SchedulesScalarRelationFilter = {
    is?: schedulesWhereInput
    isNot?: schedulesWhereInput
  }

  export type ProcurementsNullableScalarRelationFilter = {
    is?: procurementsWhereInput | null
    isNot?: procurementsWhereInput | null
  }

  export type Queue_entriesNullableScalarRelationFilter = {
    is?: queue_entriesWhereInput | null
    isNot?: queue_entriesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookingsFarmer_idSchedule_idCompoundUniqueInput = {
    farmer_id: number
    schedule_id: number
  }

  export type bookingsSchedule_idToken_numberCompoundUniqueInput = {
    schedule_id: number
    token_number: number
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    farmer_id?: SortOrder
    schedule_id?: SortOrder
    token_number?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
    estimated_wait_minutes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    id?: SortOrder
    farmer_id?: SortOrder
    schedule_id?: SortOrder
    token_number?: SortOrder
    estimated_wait_minutes?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    farmer_id?: SortOrder
    schedule_id?: SortOrder
    token_number?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
    estimated_wait_minutes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    farmer_id?: SortOrder
    schedule_id?: SortOrder
    token_number?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
    estimated_wait_minutes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    id?: SortOrder
    farmer_id?: SortOrder
    schedule_id?: SortOrder
    token_number?: SortOrder
    estimated_wait_minutes?: SortOrder
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

  export type CentresScalarRelationFilter = {
    is?: centresWhereInput
    isNot?: centresWhereInput
  }

  export type CropsScalarRelationFilter = {
    is?: cropsWhereInput
    isNot?: cropsWhereInput
  }

  export type centre_cropsCentre_idCrop_idCompoundUniqueInput = {
    centre_id: number
    crop_id: number
  }

  export type centre_cropsCountOrderByAggregateInput = {
    centre_id?: SortOrder
    crop_id?: SortOrder
  }

  export type centre_cropsAvgOrderByAggregateInput = {
    centre_id?: SortOrder
    crop_id?: SortOrder
  }

  export type centre_cropsMaxOrderByAggregateInput = {
    centre_id?: SortOrder
    crop_id?: SortOrder
  }

  export type centre_cropsMinOrderByAggregateInput = {
    centre_id?: SortOrder
    crop_id?: SortOrder
  }

  export type centre_cropsSumOrderByAggregateInput = {
    centre_id?: SortOrder
    crop_id?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Centre_cropsListRelationFilter = {
    every?: centre_cropsWhereInput
    some?: centre_cropsWhereInput
    none?: centre_cropsWhereInput
  }

  export type SchedulesListRelationFilter = {
    every?: schedulesWhereInput
    some?: schedulesWhereInput
    none?: schedulesWhereInput
  }

  export type centre_cropsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type schedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type centresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    village?: SortOrder
    district?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacity?: SortOrder
    active_counters?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type centresAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacity?: SortOrder
    active_counters?: SortOrder
  }

  export type centresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    village?: SortOrder
    district?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacity?: SortOrder
    active_counters?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type centresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    village?: SortOrder
    district?: SortOrder
    state?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacity?: SortOrder
    active_counters?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type centresSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    capacity?: SortOrder
    active_counters?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type cropsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type cropsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cropsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type cropsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type cropsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type farmersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    village?: SortOrder
    district?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
  }

  export type farmersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type farmersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    village?: SortOrder
    district?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
  }

  export type farmersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    village?: SortOrder
    district?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
  }

  export type farmersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProcurementsScalarRelationFilter = {
    is?: procurementsWhereInput
    isNot?: procurementsWhereInput
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    procurement_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    transaction_reference?: SortOrder
    status?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    procurement_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    procurement_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    transaction_reference?: SortOrder
    status?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    procurement_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    transaction_reference?: SortOrder
    status?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    procurement_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: paymentsWhereInput | null
    isNot?: paymentsWhereInput | null
  }

  export type BookingsScalarRelationFilter = {
    is?: bookingsWhereInput
    isNot?: bookingsWhereInput
  }

  export type procurementsCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    quantity_kg?: SortOrder
    procurement_price?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    procured_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type procurementsAvgOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    quantity_kg?: SortOrder
    procurement_price?: SortOrder
    total_amount?: SortOrder
  }

  export type procurementsMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    quantity_kg?: SortOrder
    procurement_price?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    procured_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type procurementsMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    quantity_kg?: SortOrder
    procurement_price?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    procured_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type procurementsSumOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    quantity_kg?: SortOrder
    procurement_price?: SortOrder
    total_amount?: SortOrder
  }

  export type queue_entriesCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    queue_position?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    called_at?: SortOrder
    completed_at?: SortOrder
  }

  export type queue_entriesAvgOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    queue_position?: SortOrder
  }

  export type queue_entriesMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    queue_position?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    called_at?: SortOrder
    completed_at?: SortOrder
  }

  export type queue_entriesMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    queue_position?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    called_at?: SortOrder
    completed_at?: SortOrder
  }

  export type queue_entriesSumOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    queue_position?: SortOrder
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

  export type schedulesCountOrderByAggregateInput = {
    id?: SortOrder
    centre_id?: SortOrder
    crop_id?: SortOrder
    schedule_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    slot_capacity?: SortOrder
    booked_slots?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type schedulesAvgOrderByAggregateInput = {
    id?: SortOrder
    centre_id?: SortOrder
    crop_id?: SortOrder
    slot_capacity?: SortOrder
    booked_slots?: SortOrder
  }

  export type schedulesMaxOrderByAggregateInput = {
    id?: SortOrder
    centre_id?: SortOrder
    crop_id?: SortOrder
    schedule_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    slot_capacity?: SortOrder
    booked_slots?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type schedulesMinOrderByAggregateInput = {
    id?: SortOrder
    centre_id?: SortOrder
    crop_id?: SortOrder
    schedule_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    slot_capacity?: SortOrder
    booked_slots?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type schedulesSumOrderByAggregateInput = {
    id?: SortOrder
    centre_id?: SortOrder
    crop_id?: SortOrder
    slot_capacity?: SortOrder
    booked_slots?: SortOrder
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

  export type FarmersNullableScalarRelationFilter = {
    is?: farmersWhereInput | null
    isNot?: farmersWhereInput | null
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type farmersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<farmersCreateWithoutBookingsInput, farmersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: farmersCreateOrConnectWithoutBookingsInput
    connect?: farmersWhereUniqueInput
  }

  export type schedulesCreateNestedOneWithoutBookingsInput = {
    create?: XOR<schedulesCreateWithoutBookingsInput, schedulesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: schedulesCreateOrConnectWithoutBookingsInput
    connect?: schedulesWhereUniqueInput
  }

  export type procurementsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<procurementsCreateWithoutBookingsInput, procurementsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: procurementsCreateOrConnectWithoutBookingsInput
    connect?: procurementsWhereUniqueInput
  }

  export type queue_entriesCreateNestedOneWithoutBookingsInput = {
    create?: XOR<queue_entriesCreateWithoutBookingsInput, queue_entriesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: queue_entriesCreateOrConnectWithoutBookingsInput
    connect?: queue_entriesWhereUniqueInput
  }

  export type procurementsUncheckedCreateNestedOneWithoutBookingsInput = {
    create?: XOR<procurementsCreateWithoutBookingsInput, procurementsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: procurementsCreateOrConnectWithoutBookingsInput
    connect?: procurementsWhereUniqueInput
  }

  export type queue_entriesUncheckedCreateNestedOneWithoutBookingsInput = {
    create?: XOR<queue_entriesCreateWithoutBookingsInput, queue_entriesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: queue_entriesCreateOrConnectWithoutBookingsInput
    connect?: queue_entriesWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type farmersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<farmersCreateWithoutBookingsInput, farmersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: farmersCreateOrConnectWithoutBookingsInput
    upsert?: farmersUpsertWithoutBookingsInput
    connect?: farmersWhereUniqueInput
    update?: XOR<XOR<farmersUpdateToOneWithWhereWithoutBookingsInput, farmersUpdateWithoutBookingsInput>, farmersUncheckedUpdateWithoutBookingsInput>
  }

  export type schedulesUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<schedulesCreateWithoutBookingsInput, schedulesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: schedulesCreateOrConnectWithoutBookingsInput
    upsert?: schedulesUpsertWithoutBookingsInput
    connect?: schedulesWhereUniqueInput
    update?: XOR<XOR<schedulesUpdateToOneWithWhereWithoutBookingsInput, schedulesUpdateWithoutBookingsInput>, schedulesUncheckedUpdateWithoutBookingsInput>
  }

  export type procurementsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<procurementsCreateWithoutBookingsInput, procurementsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: procurementsCreateOrConnectWithoutBookingsInput
    upsert?: procurementsUpsertWithoutBookingsInput
    disconnect?: procurementsWhereInput | boolean
    delete?: procurementsWhereInput | boolean
    connect?: procurementsWhereUniqueInput
    update?: XOR<XOR<procurementsUpdateToOneWithWhereWithoutBookingsInput, procurementsUpdateWithoutBookingsInput>, procurementsUncheckedUpdateWithoutBookingsInput>
  }

  export type queue_entriesUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<queue_entriesCreateWithoutBookingsInput, queue_entriesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: queue_entriesCreateOrConnectWithoutBookingsInput
    upsert?: queue_entriesUpsertWithoutBookingsInput
    disconnect?: queue_entriesWhereInput | boolean
    delete?: queue_entriesWhereInput | boolean
    connect?: queue_entriesWhereUniqueInput
    update?: XOR<XOR<queue_entriesUpdateToOneWithWhereWithoutBookingsInput, queue_entriesUpdateWithoutBookingsInput>, queue_entriesUncheckedUpdateWithoutBookingsInput>
  }

  export type procurementsUncheckedUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<procurementsCreateWithoutBookingsInput, procurementsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: procurementsCreateOrConnectWithoutBookingsInput
    upsert?: procurementsUpsertWithoutBookingsInput
    disconnect?: procurementsWhereInput | boolean
    delete?: procurementsWhereInput | boolean
    connect?: procurementsWhereUniqueInput
    update?: XOR<XOR<procurementsUpdateToOneWithWhereWithoutBookingsInput, procurementsUpdateWithoutBookingsInput>, procurementsUncheckedUpdateWithoutBookingsInput>
  }

  export type queue_entriesUncheckedUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<queue_entriesCreateWithoutBookingsInput, queue_entriesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: queue_entriesCreateOrConnectWithoutBookingsInput
    upsert?: queue_entriesUpsertWithoutBookingsInput
    disconnect?: queue_entriesWhereInput | boolean
    delete?: queue_entriesWhereInput | boolean
    connect?: queue_entriesWhereUniqueInput
    update?: XOR<XOR<queue_entriesUpdateToOneWithWhereWithoutBookingsInput, queue_entriesUpdateWithoutBookingsInput>, queue_entriesUncheckedUpdateWithoutBookingsInput>
  }

  export type centresCreateNestedOneWithoutCentre_cropsInput = {
    create?: XOR<centresCreateWithoutCentre_cropsInput, centresUncheckedCreateWithoutCentre_cropsInput>
    connectOrCreate?: centresCreateOrConnectWithoutCentre_cropsInput
    connect?: centresWhereUniqueInput
  }

  export type cropsCreateNestedOneWithoutCentre_cropsInput = {
    create?: XOR<cropsCreateWithoutCentre_cropsInput, cropsUncheckedCreateWithoutCentre_cropsInput>
    connectOrCreate?: cropsCreateOrConnectWithoutCentre_cropsInput
    connect?: cropsWhereUniqueInput
  }

  export type centresUpdateOneRequiredWithoutCentre_cropsNestedInput = {
    create?: XOR<centresCreateWithoutCentre_cropsInput, centresUncheckedCreateWithoutCentre_cropsInput>
    connectOrCreate?: centresCreateOrConnectWithoutCentre_cropsInput
    upsert?: centresUpsertWithoutCentre_cropsInput
    connect?: centresWhereUniqueInput
    update?: XOR<XOR<centresUpdateToOneWithWhereWithoutCentre_cropsInput, centresUpdateWithoutCentre_cropsInput>, centresUncheckedUpdateWithoutCentre_cropsInput>
  }

  export type cropsUpdateOneRequiredWithoutCentre_cropsNestedInput = {
    create?: XOR<cropsCreateWithoutCentre_cropsInput, cropsUncheckedCreateWithoutCentre_cropsInput>
    connectOrCreate?: cropsCreateOrConnectWithoutCentre_cropsInput
    upsert?: cropsUpsertWithoutCentre_cropsInput
    connect?: cropsWhereUniqueInput
    update?: XOR<XOR<cropsUpdateToOneWithWhereWithoutCentre_cropsInput, cropsUpdateWithoutCentre_cropsInput>, cropsUncheckedUpdateWithoutCentre_cropsInput>
  }

  export type centre_cropsCreateNestedManyWithoutCentresInput = {
    create?: XOR<centre_cropsCreateWithoutCentresInput, centre_cropsUncheckedCreateWithoutCentresInput> | centre_cropsCreateWithoutCentresInput[] | centre_cropsUncheckedCreateWithoutCentresInput[]
    connectOrCreate?: centre_cropsCreateOrConnectWithoutCentresInput | centre_cropsCreateOrConnectWithoutCentresInput[]
    createMany?: centre_cropsCreateManyCentresInputEnvelope
    connect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
  }

  export type schedulesCreateNestedManyWithoutCentresInput = {
    create?: XOR<schedulesCreateWithoutCentresInput, schedulesUncheckedCreateWithoutCentresInput> | schedulesCreateWithoutCentresInput[] | schedulesUncheckedCreateWithoutCentresInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCentresInput | schedulesCreateOrConnectWithoutCentresInput[]
    createMany?: schedulesCreateManyCentresInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type centre_cropsUncheckedCreateNestedManyWithoutCentresInput = {
    create?: XOR<centre_cropsCreateWithoutCentresInput, centre_cropsUncheckedCreateWithoutCentresInput> | centre_cropsCreateWithoutCentresInput[] | centre_cropsUncheckedCreateWithoutCentresInput[]
    connectOrCreate?: centre_cropsCreateOrConnectWithoutCentresInput | centre_cropsCreateOrConnectWithoutCentresInput[]
    createMany?: centre_cropsCreateManyCentresInputEnvelope
    connect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
  }

  export type schedulesUncheckedCreateNestedManyWithoutCentresInput = {
    create?: XOR<schedulesCreateWithoutCentresInput, schedulesUncheckedCreateWithoutCentresInput> | schedulesCreateWithoutCentresInput[] | schedulesUncheckedCreateWithoutCentresInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCentresInput | schedulesCreateOrConnectWithoutCentresInput[]
    createMany?: schedulesCreateManyCentresInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type centre_cropsUpdateManyWithoutCentresNestedInput = {
    create?: XOR<centre_cropsCreateWithoutCentresInput, centre_cropsUncheckedCreateWithoutCentresInput> | centre_cropsCreateWithoutCentresInput[] | centre_cropsUncheckedCreateWithoutCentresInput[]
    connectOrCreate?: centre_cropsCreateOrConnectWithoutCentresInput | centre_cropsCreateOrConnectWithoutCentresInput[]
    upsert?: centre_cropsUpsertWithWhereUniqueWithoutCentresInput | centre_cropsUpsertWithWhereUniqueWithoutCentresInput[]
    createMany?: centre_cropsCreateManyCentresInputEnvelope
    set?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    disconnect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    delete?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    connect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    update?: centre_cropsUpdateWithWhereUniqueWithoutCentresInput | centre_cropsUpdateWithWhereUniqueWithoutCentresInput[]
    updateMany?: centre_cropsUpdateManyWithWhereWithoutCentresInput | centre_cropsUpdateManyWithWhereWithoutCentresInput[]
    deleteMany?: centre_cropsScalarWhereInput | centre_cropsScalarWhereInput[]
  }

  export type schedulesUpdateManyWithoutCentresNestedInput = {
    create?: XOR<schedulesCreateWithoutCentresInput, schedulesUncheckedCreateWithoutCentresInput> | schedulesCreateWithoutCentresInput[] | schedulesUncheckedCreateWithoutCentresInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCentresInput | schedulesCreateOrConnectWithoutCentresInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutCentresInput | schedulesUpsertWithWhereUniqueWithoutCentresInput[]
    createMany?: schedulesCreateManyCentresInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutCentresInput | schedulesUpdateWithWhereUniqueWithoutCentresInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutCentresInput | schedulesUpdateManyWithWhereWithoutCentresInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type centre_cropsUncheckedUpdateManyWithoutCentresNestedInput = {
    create?: XOR<centre_cropsCreateWithoutCentresInput, centre_cropsUncheckedCreateWithoutCentresInput> | centre_cropsCreateWithoutCentresInput[] | centre_cropsUncheckedCreateWithoutCentresInput[]
    connectOrCreate?: centre_cropsCreateOrConnectWithoutCentresInput | centre_cropsCreateOrConnectWithoutCentresInput[]
    upsert?: centre_cropsUpsertWithWhereUniqueWithoutCentresInput | centre_cropsUpsertWithWhereUniqueWithoutCentresInput[]
    createMany?: centre_cropsCreateManyCentresInputEnvelope
    set?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    disconnect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    delete?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    connect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    update?: centre_cropsUpdateWithWhereUniqueWithoutCentresInput | centre_cropsUpdateWithWhereUniqueWithoutCentresInput[]
    updateMany?: centre_cropsUpdateManyWithWhereWithoutCentresInput | centre_cropsUpdateManyWithWhereWithoutCentresInput[]
    deleteMany?: centre_cropsScalarWhereInput | centre_cropsScalarWhereInput[]
  }

  export type schedulesUncheckedUpdateManyWithoutCentresNestedInput = {
    create?: XOR<schedulesCreateWithoutCentresInput, schedulesUncheckedCreateWithoutCentresInput> | schedulesCreateWithoutCentresInput[] | schedulesUncheckedCreateWithoutCentresInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCentresInput | schedulesCreateOrConnectWithoutCentresInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutCentresInput | schedulesUpsertWithWhereUniqueWithoutCentresInput[]
    createMany?: schedulesCreateManyCentresInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutCentresInput | schedulesUpdateWithWhereUniqueWithoutCentresInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutCentresInput | schedulesUpdateManyWithWhereWithoutCentresInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type centre_cropsCreateNestedManyWithoutCropsInput = {
    create?: XOR<centre_cropsCreateWithoutCropsInput, centre_cropsUncheckedCreateWithoutCropsInput> | centre_cropsCreateWithoutCropsInput[] | centre_cropsUncheckedCreateWithoutCropsInput[]
    connectOrCreate?: centre_cropsCreateOrConnectWithoutCropsInput | centre_cropsCreateOrConnectWithoutCropsInput[]
    createMany?: centre_cropsCreateManyCropsInputEnvelope
    connect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
  }

  export type schedulesCreateNestedManyWithoutCropsInput = {
    create?: XOR<schedulesCreateWithoutCropsInput, schedulesUncheckedCreateWithoutCropsInput> | schedulesCreateWithoutCropsInput[] | schedulesUncheckedCreateWithoutCropsInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCropsInput | schedulesCreateOrConnectWithoutCropsInput[]
    createMany?: schedulesCreateManyCropsInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type centre_cropsUncheckedCreateNestedManyWithoutCropsInput = {
    create?: XOR<centre_cropsCreateWithoutCropsInput, centre_cropsUncheckedCreateWithoutCropsInput> | centre_cropsCreateWithoutCropsInput[] | centre_cropsUncheckedCreateWithoutCropsInput[]
    connectOrCreate?: centre_cropsCreateOrConnectWithoutCropsInput | centre_cropsCreateOrConnectWithoutCropsInput[]
    createMany?: centre_cropsCreateManyCropsInputEnvelope
    connect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
  }

  export type schedulesUncheckedCreateNestedManyWithoutCropsInput = {
    create?: XOR<schedulesCreateWithoutCropsInput, schedulesUncheckedCreateWithoutCropsInput> | schedulesCreateWithoutCropsInput[] | schedulesUncheckedCreateWithoutCropsInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCropsInput | schedulesCreateOrConnectWithoutCropsInput[]
    createMany?: schedulesCreateManyCropsInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type centre_cropsUpdateManyWithoutCropsNestedInput = {
    create?: XOR<centre_cropsCreateWithoutCropsInput, centre_cropsUncheckedCreateWithoutCropsInput> | centre_cropsCreateWithoutCropsInput[] | centre_cropsUncheckedCreateWithoutCropsInput[]
    connectOrCreate?: centre_cropsCreateOrConnectWithoutCropsInput | centre_cropsCreateOrConnectWithoutCropsInput[]
    upsert?: centre_cropsUpsertWithWhereUniqueWithoutCropsInput | centre_cropsUpsertWithWhereUniqueWithoutCropsInput[]
    createMany?: centre_cropsCreateManyCropsInputEnvelope
    set?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    disconnect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    delete?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    connect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    update?: centre_cropsUpdateWithWhereUniqueWithoutCropsInput | centre_cropsUpdateWithWhereUniqueWithoutCropsInput[]
    updateMany?: centre_cropsUpdateManyWithWhereWithoutCropsInput | centre_cropsUpdateManyWithWhereWithoutCropsInput[]
    deleteMany?: centre_cropsScalarWhereInput | centre_cropsScalarWhereInput[]
  }

  export type schedulesUpdateManyWithoutCropsNestedInput = {
    create?: XOR<schedulesCreateWithoutCropsInput, schedulesUncheckedCreateWithoutCropsInput> | schedulesCreateWithoutCropsInput[] | schedulesUncheckedCreateWithoutCropsInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCropsInput | schedulesCreateOrConnectWithoutCropsInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutCropsInput | schedulesUpsertWithWhereUniqueWithoutCropsInput[]
    createMany?: schedulesCreateManyCropsInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutCropsInput | schedulesUpdateWithWhereUniqueWithoutCropsInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutCropsInput | schedulesUpdateManyWithWhereWithoutCropsInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type centre_cropsUncheckedUpdateManyWithoutCropsNestedInput = {
    create?: XOR<centre_cropsCreateWithoutCropsInput, centre_cropsUncheckedCreateWithoutCropsInput> | centre_cropsCreateWithoutCropsInput[] | centre_cropsUncheckedCreateWithoutCropsInput[]
    connectOrCreate?: centre_cropsCreateOrConnectWithoutCropsInput | centre_cropsCreateOrConnectWithoutCropsInput[]
    upsert?: centre_cropsUpsertWithWhereUniqueWithoutCropsInput | centre_cropsUpsertWithWhereUniqueWithoutCropsInput[]
    createMany?: centre_cropsCreateManyCropsInputEnvelope
    set?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    disconnect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    delete?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    connect?: centre_cropsWhereUniqueInput | centre_cropsWhereUniqueInput[]
    update?: centre_cropsUpdateWithWhereUniqueWithoutCropsInput | centre_cropsUpdateWithWhereUniqueWithoutCropsInput[]
    updateMany?: centre_cropsUpdateManyWithWhereWithoutCropsInput | centre_cropsUpdateManyWithWhereWithoutCropsInput[]
    deleteMany?: centre_cropsScalarWhereInput | centre_cropsScalarWhereInput[]
  }

  export type schedulesUncheckedUpdateManyWithoutCropsNestedInput = {
    create?: XOR<schedulesCreateWithoutCropsInput, schedulesUncheckedCreateWithoutCropsInput> | schedulesCreateWithoutCropsInput[] | schedulesUncheckedCreateWithoutCropsInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCropsInput | schedulesCreateOrConnectWithoutCropsInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutCropsInput | schedulesUpsertWithWhereUniqueWithoutCropsInput[]
    createMany?: schedulesCreateManyCropsInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutCropsInput | schedulesUpdateWithWhereUniqueWithoutCropsInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutCropsInput | schedulesUpdateManyWithWhereWithoutCropsInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type bookingsCreateNestedManyWithoutFarmersInput = {
    create?: XOR<bookingsCreateWithoutFarmersInput, bookingsUncheckedCreateWithoutFarmersInput> | bookingsCreateWithoutFarmersInput[] | bookingsUncheckedCreateWithoutFarmersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutFarmersInput | bookingsCreateOrConnectWithoutFarmersInput[]
    createMany?: bookingsCreateManyFarmersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutFarmersInput = {
    create?: XOR<usersCreateWithoutFarmersInput, usersUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFarmersInput
    connect?: usersWhereUniqueInput
  }

  export type bookingsUncheckedCreateNestedManyWithoutFarmersInput = {
    create?: XOR<bookingsCreateWithoutFarmersInput, bookingsUncheckedCreateWithoutFarmersInput> | bookingsCreateWithoutFarmersInput[] | bookingsUncheckedCreateWithoutFarmersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutFarmersInput | bookingsCreateOrConnectWithoutFarmersInput[]
    createMany?: bookingsCreateManyFarmersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUpdateManyWithoutFarmersNestedInput = {
    create?: XOR<bookingsCreateWithoutFarmersInput, bookingsUncheckedCreateWithoutFarmersInput> | bookingsCreateWithoutFarmersInput[] | bookingsUncheckedCreateWithoutFarmersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutFarmersInput | bookingsCreateOrConnectWithoutFarmersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutFarmersInput | bookingsUpsertWithWhereUniqueWithoutFarmersInput[]
    createMany?: bookingsCreateManyFarmersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutFarmersInput | bookingsUpdateWithWhereUniqueWithoutFarmersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutFarmersInput | bookingsUpdateManyWithWhereWithoutFarmersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<usersCreateWithoutFarmersInput, usersUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFarmersInput
    upsert?: usersUpsertWithoutFarmersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFarmersInput, usersUpdateWithoutFarmersInput>, usersUncheckedUpdateWithoutFarmersInput>
  }

  export type bookingsUncheckedUpdateManyWithoutFarmersNestedInput = {
    create?: XOR<bookingsCreateWithoutFarmersInput, bookingsUncheckedCreateWithoutFarmersInput> | bookingsCreateWithoutFarmersInput[] | bookingsUncheckedCreateWithoutFarmersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutFarmersInput | bookingsCreateOrConnectWithoutFarmersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutFarmersInput | bookingsUpsertWithWhereUniqueWithoutFarmersInput[]
    createMany?: bookingsCreateManyFarmersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutFarmersInput | bookingsUpdateWithWhereUniqueWithoutFarmersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutFarmersInput | bookingsUpdateManyWithWhereWithoutFarmersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    upsert?: usersUpsertWithoutNotificationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotificationsInput, usersUpdateWithoutNotificationsInput>, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type procurementsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<procurementsCreateWithoutPaymentsInput, procurementsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: procurementsCreateOrConnectWithoutPaymentsInput
    connect?: procurementsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type procurementsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<procurementsCreateWithoutPaymentsInput, procurementsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: procurementsCreateOrConnectWithoutPaymentsInput
    upsert?: procurementsUpsertWithoutPaymentsInput
    connect?: procurementsWhereUniqueInput
    update?: XOR<XOR<procurementsUpdateToOneWithWhereWithoutPaymentsInput, procurementsUpdateWithoutPaymentsInput>, procurementsUncheckedUpdateWithoutPaymentsInput>
  }

  export type paymentsCreateNestedOneWithoutProcurementsInput = {
    create?: XOR<paymentsCreateWithoutProcurementsInput, paymentsUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutProcurementsInput
    connect?: paymentsWhereUniqueInput
  }

  export type bookingsCreateNestedOneWithoutProcurementsInput = {
    create?: XOR<bookingsCreateWithoutProcurementsInput, bookingsUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutProcurementsInput
    connect?: bookingsWhereUniqueInput
  }

  export type paymentsUncheckedCreateNestedOneWithoutProcurementsInput = {
    create?: XOR<paymentsCreateWithoutProcurementsInput, paymentsUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutProcurementsInput
    connect?: paymentsWhereUniqueInput
  }

  export type paymentsUpdateOneWithoutProcurementsNestedInput = {
    create?: XOR<paymentsCreateWithoutProcurementsInput, paymentsUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutProcurementsInput
    upsert?: paymentsUpsertWithoutProcurementsInput
    disconnect?: paymentsWhereInput | boolean
    delete?: paymentsWhereInput | boolean
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutProcurementsInput, paymentsUpdateWithoutProcurementsInput>, paymentsUncheckedUpdateWithoutProcurementsInput>
  }

  export type bookingsUpdateOneRequiredWithoutProcurementsNestedInput = {
    create?: XOR<bookingsCreateWithoutProcurementsInput, bookingsUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutProcurementsInput
    upsert?: bookingsUpsertWithoutProcurementsInput
    connect?: bookingsWhereUniqueInput
    update?: XOR<XOR<bookingsUpdateToOneWithWhereWithoutProcurementsInput, bookingsUpdateWithoutProcurementsInput>, bookingsUncheckedUpdateWithoutProcurementsInput>
  }

  export type paymentsUncheckedUpdateOneWithoutProcurementsNestedInput = {
    create?: XOR<paymentsCreateWithoutProcurementsInput, paymentsUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutProcurementsInput
    upsert?: paymentsUpsertWithoutProcurementsInput
    disconnect?: paymentsWhereInput | boolean
    delete?: paymentsWhereInput | boolean
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutProcurementsInput, paymentsUpdateWithoutProcurementsInput>, paymentsUncheckedUpdateWithoutProcurementsInput>
  }

  export type bookingsCreateNestedOneWithoutQueue_entriesInput = {
    create?: XOR<bookingsCreateWithoutQueue_entriesInput, bookingsUncheckedCreateWithoutQueue_entriesInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutQueue_entriesInput
    connect?: bookingsWhereUniqueInput
  }

  export type bookingsUpdateOneRequiredWithoutQueue_entriesNestedInput = {
    create?: XOR<bookingsCreateWithoutQueue_entriesInput, bookingsUncheckedCreateWithoutQueue_entriesInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutQueue_entriesInput
    upsert?: bookingsUpsertWithoutQueue_entriesInput
    connect?: bookingsWhereUniqueInput
    update?: XOR<XOR<bookingsUpdateToOneWithWhereWithoutQueue_entriesInput, bookingsUpdateWithoutQueue_entriesInput>, bookingsUncheckedUpdateWithoutQueue_entriesInput>
  }

  export type bookingsCreateNestedManyWithoutSchedulesInput = {
    create?: XOR<bookingsCreateWithoutSchedulesInput, bookingsUncheckedCreateWithoutSchedulesInput> | bookingsCreateWithoutSchedulesInput[] | bookingsUncheckedCreateWithoutSchedulesInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSchedulesInput | bookingsCreateOrConnectWithoutSchedulesInput[]
    createMany?: bookingsCreateManySchedulesInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type centresCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<centresCreateWithoutSchedulesInput, centresUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: centresCreateOrConnectWithoutSchedulesInput
    connect?: centresWhereUniqueInput
  }

  export type cropsCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<cropsCreateWithoutSchedulesInput, cropsUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: cropsCreateOrConnectWithoutSchedulesInput
    connect?: cropsWhereUniqueInput
  }

  export type bookingsUncheckedCreateNestedManyWithoutSchedulesInput = {
    create?: XOR<bookingsCreateWithoutSchedulesInput, bookingsUncheckedCreateWithoutSchedulesInput> | bookingsCreateWithoutSchedulesInput[] | bookingsUncheckedCreateWithoutSchedulesInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSchedulesInput | bookingsCreateOrConnectWithoutSchedulesInput[]
    createMany?: bookingsCreateManySchedulesInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type bookingsUpdateManyWithoutSchedulesNestedInput = {
    create?: XOR<bookingsCreateWithoutSchedulesInput, bookingsUncheckedCreateWithoutSchedulesInput> | bookingsCreateWithoutSchedulesInput[] | bookingsUncheckedCreateWithoutSchedulesInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSchedulesInput | bookingsCreateOrConnectWithoutSchedulesInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutSchedulesInput | bookingsUpsertWithWhereUniqueWithoutSchedulesInput[]
    createMany?: bookingsCreateManySchedulesInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutSchedulesInput | bookingsUpdateWithWhereUniqueWithoutSchedulesInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutSchedulesInput | bookingsUpdateManyWithWhereWithoutSchedulesInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type centresUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<centresCreateWithoutSchedulesInput, centresUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: centresCreateOrConnectWithoutSchedulesInput
    upsert?: centresUpsertWithoutSchedulesInput
    connect?: centresWhereUniqueInput
    update?: XOR<XOR<centresUpdateToOneWithWhereWithoutSchedulesInput, centresUpdateWithoutSchedulesInput>, centresUncheckedUpdateWithoutSchedulesInput>
  }

  export type cropsUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<cropsCreateWithoutSchedulesInput, cropsUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: cropsCreateOrConnectWithoutSchedulesInput
    upsert?: cropsUpsertWithoutSchedulesInput
    connect?: cropsWhereUniqueInput
    update?: XOR<XOR<cropsUpdateToOneWithWhereWithoutSchedulesInput, cropsUpdateWithoutSchedulesInput>, cropsUncheckedUpdateWithoutSchedulesInput>
  }

  export type bookingsUncheckedUpdateManyWithoutSchedulesNestedInput = {
    create?: XOR<bookingsCreateWithoutSchedulesInput, bookingsUncheckedCreateWithoutSchedulesInput> | bookingsCreateWithoutSchedulesInput[] | bookingsUncheckedCreateWithoutSchedulesInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSchedulesInput | bookingsCreateOrConnectWithoutSchedulesInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutSchedulesInput | bookingsUpsertWithWhereUniqueWithoutSchedulesInput[]
    createMany?: bookingsCreateManySchedulesInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutSchedulesInput | bookingsUpdateWithWhereUniqueWithoutSchedulesInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutSchedulesInput | bookingsUpdateManyWithWhereWithoutSchedulesInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type farmersCreateNestedOneWithoutUsersInput = {
    create?: XOR<farmersCreateWithoutUsersInput, farmersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: farmersCreateOrConnectWithoutUsersInput
    connect?: farmersWhereUniqueInput
  }

  export type notificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type farmersUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<farmersCreateWithoutUsersInput, farmersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: farmersCreateOrConnectWithoutUsersInput
    connect?: farmersWhereUniqueInput
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type farmersUpdateOneWithoutUsersNestedInput = {
    create?: XOR<farmersCreateWithoutUsersInput, farmersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: farmersCreateOrConnectWithoutUsersInput
    upsert?: farmersUpsertWithoutUsersInput
    disconnect?: farmersWhereInput | boolean
    delete?: farmersWhereInput | boolean
    connect?: farmersWhereUniqueInput
    update?: XOR<XOR<farmersUpdateToOneWithWhereWithoutUsersInput, farmersUpdateWithoutUsersInput>, farmersUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsersInput | notificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsersInput | notificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsersInput | notificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type farmersUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<farmersCreateWithoutUsersInput, farmersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: farmersCreateOrConnectWithoutUsersInput
    upsert?: farmersUpsertWithoutUsersInput
    disconnect?: farmersWhereInput | boolean
    delete?: farmersWhereInput | boolean
    connect?: farmersWhereUniqueInput
    update?: XOR<XOR<farmersUpdateToOneWithWhereWithoutUsersInput, farmersUpdateWithoutUsersInput>, farmersUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsersInput | notificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsersInput | notificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsersInput | notificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type farmersCreateWithoutBookingsInput = {
    address?: string | null
    village?: string | null
    district?: string | null
    state?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutFarmersInput
  }

  export type farmersUncheckedCreateWithoutBookingsInput = {
    id?: number
    user_id: number
    address?: string | null
    village?: string | null
    district?: string | null
    state?: string | null
    created_at?: Date | string | null
  }

  export type farmersCreateOrConnectWithoutBookingsInput = {
    where: farmersWhereUniqueInput
    create: XOR<farmersCreateWithoutBookingsInput, farmersUncheckedCreateWithoutBookingsInput>
  }

  export type schedulesCreateWithoutBookingsInput = {
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
    centres: centresCreateNestedOneWithoutSchedulesInput
    crops: cropsCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateWithoutBookingsInput = {
    id?: number
    centre_id: number
    crop_id: number
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
  }

  export type schedulesCreateOrConnectWithoutBookingsInput = {
    where: schedulesWhereUniqueInput
    create: XOR<schedulesCreateWithoutBookingsInput, schedulesUncheckedCreateWithoutBookingsInput>
  }

  export type procurementsCreateWithoutBookingsInput = {
    quantity_kg: Decimal | DecimalJsLike | number | string
    procurement_price: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    procured_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payments?: paymentsCreateNestedOneWithoutProcurementsInput
  }

  export type procurementsUncheckedCreateWithoutBookingsInput = {
    id?: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    procurement_price: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    procured_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payments?: paymentsUncheckedCreateNestedOneWithoutProcurementsInput
  }

  export type procurementsCreateOrConnectWithoutBookingsInput = {
    where: procurementsWhereUniqueInput
    create: XOR<procurementsCreateWithoutBookingsInput, procurementsUncheckedCreateWithoutBookingsInput>
  }

  export type queue_entriesCreateWithoutBookingsInput = {
    queue_position: number
    status?: string
    joined_at?: Date | string | null
    called_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type queue_entriesUncheckedCreateWithoutBookingsInput = {
    id?: number
    queue_position: number
    status?: string
    joined_at?: Date | string | null
    called_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type queue_entriesCreateOrConnectWithoutBookingsInput = {
    where: queue_entriesWhereUniqueInput
    create: XOR<queue_entriesCreateWithoutBookingsInput, queue_entriesUncheckedCreateWithoutBookingsInput>
  }

  export type farmersUpsertWithoutBookingsInput = {
    update: XOR<farmersUpdateWithoutBookingsInput, farmersUncheckedUpdateWithoutBookingsInput>
    create: XOR<farmersCreateWithoutBookingsInput, farmersUncheckedCreateWithoutBookingsInput>
    where?: farmersWhereInput
  }

  export type farmersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: farmersWhereInput
    data: XOR<farmersUpdateWithoutBookingsInput, farmersUncheckedUpdateWithoutBookingsInput>
  }

  export type farmersUpdateWithoutBookingsInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutFarmersNestedInput
  }

  export type farmersUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schedulesUpsertWithoutBookingsInput = {
    update: XOR<schedulesUpdateWithoutBookingsInput, schedulesUncheckedUpdateWithoutBookingsInput>
    create: XOR<schedulesCreateWithoutBookingsInput, schedulesUncheckedCreateWithoutBookingsInput>
    where?: schedulesWhereInput
  }

  export type schedulesUpdateToOneWithWhereWithoutBookingsInput = {
    where?: schedulesWhereInput
    data: XOR<schedulesUpdateWithoutBookingsInput, schedulesUncheckedUpdateWithoutBookingsInput>
  }

  export type schedulesUpdateWithoutBookingsInput = {
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centres?: centresUpdateOneRequiredWithoutSchedulesNestedInput
    crops?: cropsUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    centre_id?: IntFieldUpdateOperationsInput | number
    crop_id?: IntFieldUpdateOperationsInput | number
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type procurementsUpsertWithoutBookingsInput = {
    update: XOR<procurementsUpdateWithoutBookingsInput, procurementsUncheckedUpdateWithoutBookingsInput>
    create: XOR<procurementsCreateWithoutBookingsInput, procurementsUncheckedCreateWithoutBookingsInput>
    where?: procurementsWhereInput
  }

  export type procurementsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: procurementsWhereInput
    data: XOR<procurementsUpdateWithoutBookingsInput, procurementsUncheckedUpdateWithoutBookingsInput>
  }

  export type procurementsUpdateWithoutBookingsInput = {
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    procured_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUpdateOneWithoutProcurementsNestedInput
  }

  export type procurementsUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    procured_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: paymentsUncheckedUpdateOneWithoutProcurementsNestedInput
  }

  export type queue_entriesUpsertWithoutBookingsInput = {
    update: XOR<queue_entriesUpdateWithoutBookingsInput, queue_entriesUncheckedUpdateWithoutBookingsInput>
    create: XOR<queue_entriesCreateWithoutBookingsInput, queue_entriesUncheckedCreateWithoutBookingsInput>
    where?: queue_entriesWhereInput
  }

  export type queue_entriesUpdateToOneWithWhereWithoutBookingsInput = {
    where?: queue_entriesWhereInput
    data: XOR<queue_entriesUpdateWithoutBookingsInput, queue_entriesUncheckedUpdateWithoutBookingsInput>
  }

  export type queue_entriesUpdateWithoutBookingsInput = {
    queue_position?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    called_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type queue_entriesUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    queue_position?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    called_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type centresCreateWithoutCentre_cropsInput = {
    name: string
    address: string
    village?: string | null
    district?: string | null
    state?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    active_counters?: number
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    schedules?: schedulesCreateNestedManyWithoutCentresInput
  }

  export type centresUncheckedCreateWithoutCentre_cropsInput = {
    id?: number
    name: string
    address: string
    village?: string | null
    district?: string | null
    state?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    active_counters?: number
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    schedules?: schedulesUncheckedCreateNestedManyWithoutCentresInput
  }

  export type centresCreateOrConnectWithoutCentre_cropsInput = {
    where: centresWhereUniqueInput
    create: XOR<centresCreateWithoutCentre_cropsInput, centresUncheckedCreateWithoutCentre_cropsInput>
  }

  export type cropsCreateWithoutCentre_cropsInput = {
    name: string
    created_at?: Date | string | null
    schedules?: schedulesCreateNestedManyWithoutCropsInput
  }

  export type cropsUncheckedCreateWithoutCentre_cropsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    schedules?: schedulesUncheckedCreateNestedManyWithoutCropsInput
  }

  export type cropsCreateOrConnectWithoutCentre_cropsInput = {
    where: cropsWhereUniqueInput
    create: XOR<cropsCreateWithoutCentre_cropsInput, cropsUncheckedCreateWithoutCentre_cropsInput>
  }

  export type centresUpsertWithoutCentre_cropsInput = {
    update: XOR<centresUpdateWithoutCentre_cropsInput, centresUncheckedUpdateWithoutCentre_cropsInput>
    create: XOR<centresCreateWithoutCentre_cropsInput, centresUncheckedCreateWithoutCentre_cropsInput>
    where?: centresWhereInput
  }

  export type centresUpdateToOneWithWhereWithoutCentre_cropsInput = {
    where?: centresWhereInput
    data: XOR<centresUpdateWithoutCentre_cropsInput, centresUncheckedUpdateWithoutCentre_cropsInput>
  }

  export type centresUpdateWithoutCentre_cropsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    active_counters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: schedulesUpdateManyWithoutCentresNestedInput
  }

  export type centresUncheckedUpdateWithoutCentre_cropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    active_counters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: schedulesUncheckedUpdateManyWithoutCentresNestedInput
  }

  export type cropsUpsertWithoutCentre_cropsInput = {
    update: XOR<cropsUpdateWithoutCentre_cropsInput, cropsUncheckedUpdateWithoutCentre_cropsInput>
    create: XOR<cropsCreateWithoutCentre_cropsInput, cropsUncheckedCreateWithoutCentre_cropsInput>
    where?: cropsWhereInput
  }

  export type cropsUpdateToOneWithWhereWithoutCentre_cropsInput = {
    where?: cropsWhereInput
    data: XOR<cropsUpdateWithoutCentre_cropsInput, cropsUncheckedUpdateWithoutCentre_cropsInput>
  }

  export type cropsUpdateWithoutCentre_cropsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: schedulesUpdateManyWithoutCropsNestedInput
  }

  export type cropsUncheckedUpdateWithoutCentre_cropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: schedulesUncheckedUpdateManyWithoutCropsNestedInput
  }

  export type centre_cropsCreateWithoutCentresInput = {
    crops: cropsCreateNestedOneWithoutCentre_cropsInput
  }

  export type centre_cropsUncheckedCreateWithoutCentresInput = {
    crop_id: number
  }

  export type centre_cropsCreateOrConnectWithoutCentresInput = {
    where: centre_cropsWhereUniqueInput
    create: XOR<centre_cropsCreateWithoutCentresInput, centre_cropsUncheckedCreateWithoutCentresInput>
  }

  export type centre_cropsCreateManyCentresInputEnvelope = {
    data: centre_cropsCreateManyCentresInput | centre_cropsCreateManyCentresInput[]
    skipDuplicates?: boolean
  }

  export type schedulesCreateWithoutCentresInput = {
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutSchedulesInput
    crops: cropsCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateWithoutCentresInput = {
    id?: number
    crop_id: number
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutSchedulesInput
  }

  export type schedulesCreateOrConnectWithoutCentresInput = {
    where: schedulesWhereUniqueInput
    create: XOR<schedulesCreateWithoutCentresInput, schedulesUncheckedCreateWithoutCentresInput>
  }

  export type schedulesCreateManyCentresInputEnvelope = {
    data: schedulesCreateManyCentresInput | schedulesCreateManyCentresInput[]
    skipDuplicates?: boolean
  }

  export type centre_cropsUpsertWithWhereUniqueWithoutCentresInput = {
    where: centre_cropsWhereUniqueInput
    update: XOR<centre_cropsUpdateWithoutCentresInput, centre_cropsUncheckedUpdateWithoutCentresInput>
    create: XOR<centre_cropsCreateWithoutCentresInput, centre_cropsUncheckedCreateWithoutCentresInput>
  }

  export type centre_cropsUpdateWithWhereUniqueWithoutCentresInput = {
    where: centre_cropsWhereUniqueInput
    data: XOR<centre_cropsUpdateWithoutCentresInput, centre_cropsUncheckedUpdateWithoutCentresInput>
  }

  export type centre_cropsUpdateManyWithWhereWithoutCentresInput = {
    where: centre_cropsScalarWhereInput
    data: XOR<centre_cropsUpdateManyMutationInput, centre_cropsUncheckedUpdateManyWithoutCentresInput>
  }

  export type centre_cropsScalarWhereInput = {
    AND?: centre_cropsScalarWhereInput | centre_cropsScalarWhereInput[]
    OR?: centre_cropsScalarWhereInput[]
    NOT?: centre_cropsScalarWhereInput | centre_cropsScalarWhereInput[]
    centre_id?: IntFilter<"centre_crops"> | number
    crop_id?: IntFilter<"centre_crops"> | number
  }

  export type schedulesUpsertWithWhereUniqueWithoutCentresInput = {
    where: schedulesWhereUniqueInput
    update: XOR<schedulesUpdateWithoutCentresInput, schedulesUncheckedUpdateWithoutCentresInput>
    create: XOR<schedulesCreateWithoutCentresInput, schedulesUncheckedCreateWithoutCentresInput>
  }

  export type schedulesUpdateWithWhereUniqueWithoutCentresInput = {
    where: schedulesWhereUniqueInput
    data: XOR<schedulesUpdateWithoutCentresInput, schedulesUncheckedUpdateWithoutCentresInput>
  }

  export type schedulesUpdateManyWithWhereWithoutCentresInput = {
    where: schedulesScalarWhereInput
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyWithoutCentresInput>
  }

  export type schedulesScalarWhereInput = {
    AND?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
    OR?: schedulesScalarWhereInput[]
    NOT?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
    id?: IntFilter<"schedules"> | number
    centre_id?: IntFilter<"schedules"> | number
    crop_id?: IntFilter<"schedules"> | number
    schedule_date?: DateTimeFilter<"schedules"> | Date | string
    start_time?: DateTimeFilter<"schedules"> | Date | string
    end_time?: DateTimeFilter<"schedules"> | Date | string
    slot_capacity?: IntFilter<"schedules"> | number
    booked_slots?: IntFilter<"schedules"> | number
    status?: StringFilter<"schedules"> | string
    created_at?: DateTimeNullableFilter<"schedules"> | Date | string | null
  }

  export type centre_cropsCreateWithoutCropsInput = {
    centres: centresCreateNestedOneWithoutCentre_cropsInput
  }

  export type centre_cropsUncheckedCreateWithoutCropsInput = {
    centre_id: number
  }

  export type centre_cropsCreateOrConnectWithoutCropsInput = {
    where: centre_cropsWhereUniqueInput
    create: XOR<centre_cropsCreateWithoutCropsInput, centre_cropsUncheckedCreateWithoutCropsInput>
  }

  export type centre_cropsCreateManyCropsInputEnvelope = {
    data: centre_cropsCreateManyCropsInput | centre_cropsCreateManyCropsInput[]
    skipDuplicates?: boolean
  }

  export type schedulesCreateWithoutCropsInput = {
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutSchedulesInput
    centres: centresCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateWithoutCropsInput = {
    id?: number
    centre_id: number
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutSchedulesInput
  }

  export type schedulesCreateOrConnectWithoutCropsInput = {
    where: schedulesWhereUniqueInput
    create: XOR<schedulesCreateWithoutCropsInput, schedulesUncheckedCreateWithoutCropsInput>
  }

  export type schedulesCreateManyCropsInputEnvelope = {
    data: schedulesCreateManyCropsInput | schedulesCreateManyCropsInput[]
    skipDuplicates?: boolean
  }

  export type centre_cropsUpsertWithWhereUniqueWithoutCropsInput = {
    where: centre_cropsWhereUniqueInput
    update: XOR<centre_cropsUpdateWithoutCropsInput, centre_cropsUncheckedUpdateWithoutCropsInput>
    create: XOR<centre_cropsCreateWithoutCropsInput, centre_cropsUncheckedCreateWithoutCropsInput>
  }

  export type centre_cropsUpdateWithWhereUniqueWithoutCropsInput = {
    where: centre_cropsWhereUniqueInput
    data: XOR<centre_cropsUpdateWithoutCropsInput, centre_cropsUncheckedUpdateWithoutCropsInput>
  }

  export type centre_cropsUpdateManyWithWhereWithoutCropsInput = {
    where: centre_cropsScalarWhereInput
    data: XOR<centre_cropsUpdateManyMutationInput, centre_cropsUncheckedUpdateManyWithoutCropsInput>
  }

  export type schedulesUpsertWithWhereUniqueWithoutCropsInput = {
    where: schedulesWhereUniqueInput
    update: XOR<schedulesUpdateWithoutCropsInput, schedulesUncheckedUpdateWithoutCropsInput>
    create: XOR<schedulesCreateWithoutCropsInput, schedulesUncheckedCreateWithoutCropsInput>
  }

  export type schedulesUpdateWithWhereUniqueWithoutCropsInput = {
    where: schedulesWhereUniqueInput
    data: XOR<schedulesUpdateWithoutCropsInput, schedulesUncheckedUpdateWithoutCropsInput>
  }

  export type schedulesUpdateManyWithWhereWithoutCropsInput = {
    where: schedulesScalarWhereInput
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyWithoutCropsInput>
  }

  export type bookingsCreateWithoutFarmersInput = {
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    schedules: schedulesCreateNestedOneWithoutBookingsInput
    procurements?: procurementsCreateNestedOneWithoutBookingsInput
    queue_entries?: queue_entriesCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutFarmersInput = {
    id?: number
    schedule_id: number
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    procurements?: procurementsUncheckedCreateNestedOneWithoutBookingsInput
    queue_entries?: queue_entriesUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutFarmersInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutFarmersInput, bookingsUncheckedCreateWithoutFarmersInput>
  }

  export type bookingsCreateManyFarmersInputEnvelope = {
    data: bookingsCreateManyFarmersInput | bookingsCreateManyFarmersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutFarmersInput = {
    name: string
    phone: string
    email?: string | null
    password_hash: string
    role?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notifications?: notificationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFarmersInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    password_hash: string
    role?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFarmersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFarmersInput, usersUncheckedCreateWithoutFarmersInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutFarmersInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutFarmersInput, bookingsUncheckedUpdateWithoutFarmersInput>
    create: XOR<bookingsCreateWithoutFarmersInput, bookingsUncheckedCreateWithoutFarmersInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutFarmersInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutFarmersInput, bookingsUncheckedUpdateWithoutFarmersInput>
  }

  export type bookingsUpdateManyWithWhereWithoutFarmersInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutFarmersInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: IntFilter<"bookings"> | number
    farmer_id?: IntFilter<"bookings"> | number
    schedule_id?: IntFilter<"bookings"> | number
    token_number?: IntFilter<"bookings"> | number
    booking_date?: DateTimeNullableFilter<"bookings"> | Date | string | null
    status?: StringFilter<"bookings"> | string
    estimated_wait_minutes?: IntNullableFilter<"bookings"> | number | null
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
  }

  export type usersUpsertWithoutFarmersInput = {
    update: XOR<usersUpdateWithoutFarmersInput, usersUncheckedUpdateWithoutFarmersInput>
    create: XOR<usersCreateWithoutFarmersInput, usersUncheckedCreateWithoutFarmersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFarmersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFarmersInput, usersUncheckedUpdateWithoutFarmersInput>
  }

  export type usersUpdateWithoutFarmersInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFarmersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutNotificationsInput = {
    name: string
    phone: string
    email?: string | null
    password_hash: string
    role?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    farmers?: farmersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    password_hash: string
    role?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    farmers?: farmersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
  }

  export type usersUpsertWithoutNotificationsInput = {
    update: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmers?: farmersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmers?: farmersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type procurementsCreateWithoutPaymentsInput = {
    quantity_kg: Decimal | DecimalJsLike | number | string
    procurement_price: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    procured_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bookings: bookingsCreateNestedOneWithoutProcurementsInput
  }

  export type procurementsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    booking_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    procurement_price: Decimal | DecimalJsLike | number | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    procured_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type procurementsCreateOrConnectWithoutPaymentsInput = {
    where: procurementsWhereUniqueInput
    create: XOR<procurementsCreateWithoutPaymentsInput, procurementsUncheckedCreateWithoutPaymentsInput>
  }

  export type procurementsUpsertWithoutPaymentsInput = {
    update: XOR<procurementsUpdateWithoutPaymentsInput, procurementsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<procurementsCreateWithoutPaymentsInput, procurementsUncheckedCreateWithoutPaymentsInput>
    where?: procurementsWhereInput
  }

  export type procurementsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: procurementsWhereInput
    data: XOR<procurementsUpdateWithoutPaymentsInput, procurementsUncheckedUpdateWithoutPaymentsInput>
  }

  export type procurementsUpdateWithoutPaymentsInput = {
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    procured_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateOneRequiredWithoutProcurementsNestedInput
  }

  export type procurementsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    procurement_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    procured_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateWithoutProcurementsInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    transaction_reference?: string | null
    status?: string
    paid_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type paymentsUncheckedCreateWithoutProcurementsInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    transaction_reference?: string | null
    status?: string
    paid_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type paymentsCreateOrConnectWithoutProcurementsInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutProcurementsInput, paymentsUncheckedCreateWithoutProcurementsInput>
  }

  export type bookingsCreateWithoutProcurementsInput = {
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    farmers: farmersCreateNestedOneWithoutBookingsInput
    schedules: schedulesCreateNestedOneWithoutBookingsInput
    queue_entries?: queue_entriesCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutProcurementsInput = {
    id?: number
    farmer_id: number
    schedule_id: number
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    queue_entries?: queue_entriesUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutProcurementsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutProcurementsInput, bookingsUncheckedCreateWithoutProcurementsInput>
  }

  export type paymentsUpsertWithoutProcurementsInput = {
    update: XOR<paymentsUpdateWithoutProcurementsInput, paymentsUncheckedUpdateWithoutProcurementsInput>
    create: XOR<paymentsCreateWithoutProcurementsInput, paymentsUncheckedCreateWithoutProcurementsInput>
    where?: paymentsWhereInput
  }

  export type paymentsUpdateToOneWithWhereWithoutProcurementsInput = {
    where?: paymentsWhereInput
    data: XOR<paymentsUpdateWithoutProcurementsInput, paymentsUncheckedUpdateWithoutProcurementsInput>
  }

  export type paymentsUpdateWithoutProcurementsInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateWithoutProcurementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUpsertWithoutProcurementsInput = {
    update: XOR<bookingsUpdateWithoutProcurementsInput, bookingsUncheckedUpdateWithoutProcurementsInput>
    create: XOR<bookingsCreateWithoutProcurementsInput, bookingsUncheckedCreateWithoutProcurementsInput>
    where?: bookingsWhereInput
  }

  export type bookingsUpdateToOneWithWhereWithoutProcurementsInput = {
    where?: bookingsWhereInput
    data: XOR<bookingsUpdateWithoutProcurementsInput, bookingsUncheckedUpdateWithoutProcurementsInput>
  }

  export type bookingsUpdateWithoutProcurementsInput = {
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmers?: farmersUpdateOneRequiredWithoutBookingsNestedInput
    schedules?: schedulesUpdateOneRequiredWithoutBookingsNestedInput
    queue_entries?: queue_entriesUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutProcurementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmer_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    queue_entries?: queue_entriesUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsCreateWithoutQueue_entriesInput = {
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    farmers: farmersCreateNestedOneWithoutBookingsInput
    schedules: schedulesCreateNestedOneWithoutBookingsInput
    procurements?: procurementsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutQueue_entriesInput = {
    id?: number
    farmer_id: number
    schedule_id: number
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    procurements?: procurementsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutQueue_entriesInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutQueue_entriesInput, bookingsUncheckedCreateWithoutQueue_entriesInput>
  }

  export type bookingsUpsertWithoutQueue_entriesInput = {
    update: XOR<bookingsUpdateWithoutQueue_entriesInput, bookingsUncheckedUpdateWithoutQueue_entriesInput>
    create: XOR<bookingsCreateWithoutQueue_entriesInput, bookingsUncheckedCreateWithoutQueue_entriesInput>
    where?: bookingsWhereInput
  }

  export type bookingsUpdateToOneWithWhereWithoutQueue_entriesInput = {
    where?: bookingsWhereInput
    data: XOR<bookingsUpdateWithoutQueue_entriesInput, bookingsUncheckedUpdateWithoutQueue_entriesInput>
  }

  export type bookingsUpdateWithoutQueue_entriesInput = {
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmers?: farmersUpdateOneRequiredWithoutBookingsNestedInput
    schedules?: schedulesUpdateOneRequiredWithoutBookingsNestedInput
    procurements?: procurementsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutQueue_entriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmer_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procurements?: procurementsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsCreateWithoutSchedulesInput = {
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    farmers: farmersCreateNestedOneWithoutBookingsInput
    procurements?: procurementsCreateNestedOneWithoutBookingsInput
    queue_entries?: queue_entriesCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutSchedulesInput = {
    id?: number
    farmer_id: number
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    procurements?: procurementsUncheckedCreateNestedOneWithoutBookingsInput
    queue_entries?: queue_entriesUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutSchedulesInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutSchedulesInput, bookingsUncheckedCreateWithoutSchedulesInput>
  }

  export type bookingsCreateManySchedulesInputEnvelope = {
    data: bookingsCreateManySchedulesInput | bookingsCreateManySchedulesInput[]
    skipDuplicates?: boolean
  }

  export type centresCreateWithoutSchedulesInput = {
    name: string
    address: string
    village?: string | null
    district?: string | null
    state?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    active_counters?: number
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    centre_crops?: centre_cropsCreateNestedManyWithoutCentresInput
  }

  export type centresUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    address: string
    village?: string | null
    district?: string | null
    state?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    capacity?: number
    active_counters?: number
    status?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    centre_crops?: centre_cropsUncheckedCreateNestedManyWithoutCentresInput
  }

  export type centresCreateOrConnectWithoutSchedulesInput = {
    where: centresWhereUniqueInput
    create: XOR<centresCreateWithoutSchedulesInput, centresUncheckedCreateWithoutSchedulesInput>
  }

  export type cropsCreateWithoutSchedulesInput = {
    name: string
    created_at?: Date | string | null
    centre_crops?: centre_cropsCreateNestedManyWithoutCropsInput
  }

  export type cropsUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    centre_crops?: centre_cropsUncheckedCreateNestedManyWithoutCropsInput
  }

  export type cropsCreateOrConnectWithoutSchedulesInput = {
    where: cropsWhereUniqueInput
    create: XOR<cropsCreateWithoutSchedulesInput, cropsUncheckedCreateWithoutSchedulesInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutSchedulesInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutSchedulesInput, bookingsUncheckedUpdateWithoutSchedulesInput>
    create: XOR<bookingsCreateWithoutSchedulesInput, bookingsUncheckedCreateWithoutSchedulesInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutSchedulesInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutSchedulesInput, bookingsUncheckedUpdateWithoutSchedulesInput>
  }

  export type bookingsUpdateManyWithWhereWithoutSchedulesInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutSchedulesInput>
  }

  export type centresUpsertWithoutSchedulesInput = {
    update: XOR<centresUpdateWithoutSchedulesInput, centresUncheckedUpdateWithoutSchedulesInput>
    create: XOR<centresCreateWithoutSchedulesInput, centresUncheckedCreateWithoutSchedulesInput>
    where?: centresWhereInput
  }

  export type centresUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: centresWhereInput
    data: XOR<centresUpdateWithoutSchedulesInput, centresUncheckedUpdateWithoutSchedulesInput>
  }

  export type centresUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    active_counters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centre_crops?: centre_cropsUpdateManyWithoutCentresNestedInput
  }

  export type centresUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    active_counters?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centre_crops?: centre_cropsUncheckedUpdateManyWithoutCentresNestedInput
  }

  export type cropsUpsertWithoutSchedulesInput = {
    update: XOR<cropsUpdateWithoutSchedulesInput, cropsUncheckedUpdateWithoutSchedulesInput>
    create: XOR<cropsCreateWithoutSchedulesInput, cropsUncheckedCreateWithoutSchedulesInput>
    where?: cropsWhereInput
  }

  export type cropsUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: cropsWhereInput
    data: XOR<cropsUpdateWithoutSchedulesInput, cropsUncheckedUpdateWithoutSchedulesInput>
  }

  export type cropsUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centre_crops?: centre_cropsUpdateManyWithoutCropsNestedInput
  }

  export type cropsUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    centre_crops?: centre_cropsUncheckedUpdateManyWithoutCropsNestedInput
  }

  export type farmersCreateWithoutUsersInput = {
    address?: string | null
    village?: string | null
    district?: string | null
    state?: string | null
    created_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutFarmersInput
  }

  export type farmersUncheckedCreateWithoutUsersInput = {
    id?: number
    address?: string | null
    village?: string | null
    district?: string | null
    state?: string | null
    created_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutFarmersInput
  }

  export type farmersCreateOrConnectWithoutUsersInput = {
    where: farmersWhereUniqueInput
    create: XOR<farmersCreateWithoutUsersInput, farmersUncheckedCreateWithoutUsersInput>
  }

  export type notificationsCreateWithoutUsersInput = {
    title: string
    message: string
    type: string
    is_read?: boolean
    created_at?: Date | string | null
  }

  export type notificationsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    message: string
    type: string
    is_read?: boolean
    created_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsCreateManyUsersInputEnvelope = {
    data: notificationsCreateManyUsersInput | notificationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type farmersUpsertWithoutUsersInput = {
    update: XOR<farmersUpdateWithoutUsersInput, farmersUncheckedUpdateWithoutUsersInput>
    create: XOR<farmersCreateWithoutUsersInput, farmersUncheckedCreateWithoutUsersInput>
    where?: farmersWhereInput
  }

  export type farmersUpdateToOneWithWhereWithoutUsersInput = {
    where?: farmersWhereInput
    data: XOR<farmersUpdateWithoutUsersInput, farmersUncheckedUpdateWithoutUsersInput>
  }

  export type farmersUpdateWithoutUsersInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutFarmersNestedInput
  }

  export type farmersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutFarmersNestedInput
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntFilter<"notifications"> | number
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    type?: StringFilter<"notifications"> | string
    is_read?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type centre_cropsCreateManyCentresInput = {
    crop_id: number
  }

  export type schedulesCreateManyCentresInput = {
    id?: number
    crop_id: number
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
  }

  export type centre_cropsUpdateWithoutCentresInput = {
    crops?: cropsUpdateOneRequiredWithoutCentre_cropsNestedInput
  }

  export type centre_cropsUncheckedUpdateWithoutCentresInput = {
    crop_id?: IntFieldUpdateOperationsInput | number
  }

  export type centre_cropsUncheckedUpdateManyWithoutCentresInput = {
    crop_id?: IntFieldUpdateOperationsInput | number
  }

  export type schedulesUpdateWithoutCentresInput = {
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutSchedulesNestedInput
    crops?: cropsUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateWithoutCentresInput = {
    id?: IntFieldUpdateOperationsInput | number
    crop_id?: IntFieldUpdateOperationsInput | number
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateManyWithoutCentresInput = {
    id?: IntFieldUpdateOperationsInput | number
    crop_id?: IntFieldUpdateOperationsInput | number
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type centre_cropsCreateManyCropsInput = {
    centre_id: number
  }

  export type schedulesCreateManyCropsInput = {
    id?: number
    centre_id: number
    schedule_date: Date | string
    start_time: Date | string
    end_time: Date | string
    slot_capacity: number
    booked_slots?: number
    status?: string
    created_at?: Date | string | null
  }

  export type centre_cropsUpdateWithoutCropsInput = {
    centres?: centresUpdateOneRequiredWithoutCentre_cropsNestedInput
  }

  export type centre_cropsUncheckedUpdateWithoutCropsInput = {
    centre_id?: IntFieldUpdateOperationsInput | number
  }

  export type centre_cropsUncheckedUpdateManyWithoutCropsInput = {
    centre_id?: IntFieldUpdateOperationsInput | number
  }

  export type schedulesUpdateWithoutCropsInput = {
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutSchedulesNestedInput
    centres?: centresUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateWithoutCropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    centre_id?: IntFieldUpdateOperationsInput | number
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateManyWithoutCropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    centre_id?: IntFieldUpdateOperationsInput | number
    schedule_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    slot_capacity?: IntFieldUpdateOperationsInput | number
    booked_slots?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsCreateManyFarmersInput = {
    id?: number
    schedule_id: number
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsUpdateWithoutFarmersInput = {
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: schedulesUpdateOneRequiredWithoutBookingsNestedInput
    procurements?: procurementsUpdateOneWithoutBookingsNestedInput
    queue_entries?: queue_entriesUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutFarmersInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procurements?: procurementsUncheckedUpdateOneWithoutBookingsNestedInput
    queue_entries?: queue_entriesUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutFarmersInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsCreateManySchedulesInput = {
    id?: number
    farmer_id: number
    token_number: number
    booking_date?: Date | string | null
    status?: string
    estimated_wait_minutes?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type bookingsUpdateWithoutSchedulesInput = {
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmers?: farmersUpdateOneRequiredWithoutBookingsNestedInput
    procurements?: procurementsUpdateOneWithoutBookingsNestedInput
    queue_entries?: queue_entriesUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmer_id?: IntFieldUpdateOperationsInput | number
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    procurements?: procurementsUncheckedUpdateOneWithoutBookingsNestedInput
    queue_entries?: queue_entriesUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmer_id?: IntFieldUpdateOperationsInput | number
    token_number?: IntFieldUpdateOperationsInput | number
    booking_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    estimated_wait_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyUsersInput = {
    id?: number
    title: string
    message: string
    type: string
    is_read?: boolean
    created_at?: Date | string | null
  }

  export type notificationsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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