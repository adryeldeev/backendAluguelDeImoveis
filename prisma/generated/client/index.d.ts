
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
 * Model Imobi
 * 
 */
export type Imobi = $Result.DefaultSelection<Prisma.$ImobiPayload>
/**
 * Model Messagens
 * 
 */
export type Messagens = $Result.DefaultSelection<Prisma.$MessagensPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.imobi`: Exposes CRUD operations for the **Imobi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imobis
    * const imobis = await prisma.imobi.findMany()
    * ```
    */
  get imobi(): Prisma.ImobiDelegate<ExtArgs>;

  /**
   * `prisma.messagens`: Exposes CRUD operations for the **Messagens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messagens
    * const messagens = await prisma.messagens.findMany()
    * ```
    */
  get messagens(): Prisma.MessagensDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Imobi: 'Imobi',
    Messagens: 'Messagens'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'imobi' | 'messagens'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Imobi: {
        payload: Prisma.$ImobiPayload<ExtArgs>
        fields: Prisma.ImobiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImobiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImobiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload>
          }
          findFirst: {
            args: Prisma.ImobiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImobiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload>
          }
          findMany: {
            args: Prisma.ImobiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload>[]
          }
          create: {
            args: Prisma.ImobiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload>
          }
          createMany: {
            args: Prisma.ImobiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImobiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload>
          }
          update: {
            args: Prisma.ImobiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload>
          }
          deleteMany: {
            args: Prisma.ImobiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImobiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImobiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImobiPayload>
          }
          aggregate: {
            args: Prisma.ImobiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImobi>
          }
          groupBy: {
            args: Prisma.ImobiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImobiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImobiCountArgs<ExtArgs>,
            result: $Utils.Optional<ImobiCountAggregateOutputType> | number
          }
        }
      }
      Messagens: {
        payload: Prisma.$MessagensPayload<ExtArgs>
        fields: Prisma.MessagensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagensFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagensFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload>
          }
          findFirst: {
            args: Prisma.MessagensFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagensFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload>
          }
          findMany: {
            args: Prisma.MessagensFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload>[]
          }
          create: {
            args: Prisma.MessagensCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload>
          }
          createMany: {
            args: Prisma.MessagensCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessagensDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload>
          }
          update: {
            args: Prisma.MessagensUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload>
          }
          deleteMany: {
            args: Prisma.MessagensDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessagensUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessagensUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagensPayload>
          }
          aggregate: {
            args: Prisma.MessagensAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessagens>
          }
          groupBy: {
            args: Prisma.MessagensGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessagensGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagensCountArgs<ExtArgs>,
            result: $Utils.Optional<MessagensCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Imboi: number
    Messagens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Imboi?: boolean | UserCountOutputTypeCountImboiArgs
    Messagens?: boolean | UserCountOutputTypeCountMessagensArgs
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
  export type UserCountOutputTypeCountImboiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImobiWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagensWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    Imboi?: boolean | User$ImboiArgs<ExtArgs>
    Messagens?: boolean | User$MessagensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Imboi?: boolean | User$ImboiArgs<ExtArgs>
    Messagens?: boolean | User$MessagensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Imboi: Prisma.$ImobiPayload<ExtArgs>[]
      Messagens: Prisma.$MessagensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Imboi<T extends User$ImboiArgs<ExtArgs> = {}>(args?: Subset<T, User$ImboiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'findMany'> | Null>;

    Messagens<T extends User$MessagensArgs<ExtArgs> = {}>(args?: Subset<T, User$MessagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.Imboi
   */
  export type User$ImboiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    where?: ImobiWhereInput
    orderBy?: ImobiOrderByWithRelationInput | ImobiOrderByWithRelationInput[]
    cursor?: ImobiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImobiScalarFieldEnum | ImobiScalarFieldEnum[]
  }


  /**
   * User.Messagens
   */
  export type User$MessagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    where?: MessagensWhereInput
    orderBy?: MessagensOrderByWithRelationInput | MessagensOrderByWithRelationInput[]
    cursor?: MessagensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagensScalarFieldEnum | MessagensScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Imobi
   */

  export type AggregateImobi = {
    _count: ImobiCountAggregateOutputType | null
    _avg: ImobiAvgAggregateOutputType | null
    _sum: ImobiSumAggregateOutputType | null
    _min: ImobiMinAggregateOutputType | null
    _max: ImobiMaxAggregateOutputType | null
  }

  export type ImobiAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImobiSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImobiMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    thumb: string | null
    endereco: string | null
    cidade: string | null
    uf: string | null
    valor: string | null
    descricao: string | null
    name: string | null
    email: string | null
    telefone: string | null
    slug: string | null
    userId: number | null
    created_at: Date | null
  }

  export type ImobiMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    thumb: string | null
    endereco: string | null
    cidade: string | null
    uf: string | null
    valor: string | null
    descricao: string | null
    name: string | null
    email: string | null
    telefone: string | null
    slug: string | null
    userId: number | null
    created_at: Date | null
  }

  export type ImobiCountAggregateOutputType = {
    id: number
    tipo: number
    thumb: number
    endereco: number
    cidade: number
    uf: number
    valor: number
    descricao: number
    name: number
    email: number
    telefone: number
    slug: number
    userId: number
    created_at: number
    _all: number
  }


  export type ImobiAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImobiSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImobiMinAggregateInputType = {
    id?: true
    tipo?: true
    thumb?: true
    endereco?: true
    cidade?: true
    uf?: true
    valor?: true
    descricao?: true
    name?: true
    email?: true
    telefone?: true
    slug?: true
    userId?: true
    created_at?: true
  }

  export type ImobiMaxAggregateInputType = {
    id?: true
    tipo?: true
    thumb?: true
    endereco?: true
    cidade?: true
    uf?: true
    valor?: true
    descricao?: true
    name?: true
    email?: true
    telefone?: true
    slug?: true
    userId?: true
    created_at?: true
  }

  export type ImobiCountAggregateInputType = {
    id?: true
    tipo?: true
    thumb?: true
    endereco?: true
    cidade?: true
    uf?: true
    valor?: true
    descricao?: true
    name?: true
    email?: true
    telefone?: true
    slug?: true
    userId?: true
    created_at?: true
    _all?: true
  }

  export type ImobiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imobi to aggregate.
     */
    where?: ImobiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imobis to fetch.
     */
    orderBy?: ImobiOrderByWithRelationInput | ImobiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImobiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imobis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imobis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imobis
    **/
    _count?: true | ImobiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImobiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImobiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImobiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImobiMaxAggregateInputType
  }

  export type GetImobiAggregateType<T extends ImobiAggregateArgs> = {
        [P in keyof T & keyof AggregateImobi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImobi[P]>
      : GetScalarType<T[P], AggregateImobi[P]>
  }




  export type ImobiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImobiWhereInput
    orderBy?: ImobiOrderByWithAggregationInput | ImobiOrderByWithAggregationInput[]
    by: ImobiScalarFieldEnum[] | ImobiScalarFieldEnum
    having?: ImobiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImobiCountAggregateInputType | true
    _avg?: ImobiAvgAggregateInputType
    _sum?: ImobiSumAggregateInputType
    _min?: ImobiMinAggregateInputType
    _max?: ImobiMaxAggregateInputType
  }

  export type ImobiGroupByOutputType = {
    id: number
    tipo: string | null
    thumb: string | null
    endereco: string | null
    cidade: string | null
    uf: string | null
    valor: string | null
    descricao: string | null
    name: string
    email: string
    telefone: string
    slug: string
    userId: number
    created_at: Date | null
    _count: ImobiCountAggregateOutputType | null
    _avg: ImobiAvgAggregateOutputType | null
    _sum: ImobiSumAggregateOutputType | null
    _min: ImobiMinAggregateOutputType | null
    _max: ImobiMaxAggregateOutputType | null
  }

  type GetImobiGroupByPayload<T extends ImobiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImobiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImobiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImobiGroupByOutputType[P]>
            : GetScalarType<T[P], ImobiGroupByOutputType[P]>
        }
      >
    >


  export type ImobiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    thumb?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
    valor?: boolean
    descricao?: boolean
    name?: boolean
    email?: boolean
    telefone?: boolean
    slug?: boolean
    userId?: boolean
    created_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imobi"]>

  export type ImobiSelectScalar = {
    id?: boolean
    tipo?: boolean
    thumb?: boolean
    endereco?: boolean
    cidade?: boolean
    uf?: boolean
    valor?: boolean
    descricao?: boolean
    name?: boolean
    email?: boolean
    telefone?: boolean
    slug?: boolean
    userId?: boolean
    created_at?: boolean
  }

  export type ImobiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ImobiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imobi"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string | null
      thumb: string | null
      endereco: string | null
      cidade: string | null
      uf: string | null
      valor: string | null
      descricao: string | null
      name: string
      email: string
      telefone: string
      slug: string
      userId: number
      created_at: Date | null
    }, ExtArgs["result"]["imobi"]>
    composites: {}
  }


  type ImobiGetPayload<S extends boolean | null | undefined | ImobiDefaultArgs> = $Result.GetResult<Prisma.$ImobiPayload, S>

  type ImobiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImobiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImobiCountAggregateInputType | true
    }

  export interface ImobiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imobi'], meta: { name: 'Imobi' } }
    /**
     * Find zero or one Imobi that matches the filter.
     * @param {ImobiFindUniqueArgs} args - Arguments to find a Imobi
     * @example
     * // Get one Imobi
     * const imobi = await prisma.imobi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImobiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImobiFindUniqueArgs<ExtArgs>>
    ): Prisma__ImobiClient<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Imobi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImobiFindUniqueOrThrowArgs} args - Arguments to find a Imobi
     * @example
     * // Get one Imobi
     * const imobi = await prisma.imobi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImobiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImobiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImobiClient<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Imobi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImobiFindFirstArgs} args - Arguments to find a Imobi
     * @example
     * // Get one Imobi
     * const imobi = await prisma.imobi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImobiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImobiFindFirstArgs<ExtArgs>>
    ): Prisma__ImobiClient<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Imobi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImobiFindFirstOrThrowArgs} args - Arguments to find a Imobi
     * @example
     * // Get one Imobi
     * const imobi = await prisma.imobi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImobiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImobiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImobiClient<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Imobis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImobiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imobis
     * const imobis = await prisma.imobi.findMany()
     * 
     * // Get first 10 Imobis
     * const imobis = await prisma.imobi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imobiWithIdOnly = await prisma.imobi.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImobiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImobiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Imobi.
     * @param {ImobiCreateArgs} args - Arguments to create a Imobi.
     * @example
     * // Create one Imobi
     * const Imobi = await prisma.imobi.create({
     *   data: {
     *     // ... data to create a Imobi
     *   }
     * })
     * 
    **/
    create<T extends ImobiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImobiCreateArgs<ExtArgs>>
    ): Prisma__ImobiClient<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Imobis.
     *     @param {ImobiCreateManyArgs} args - Arguments to create many Imobis.
     *     @example
     *     // Create many Imobis
     *     const imobi = await prisma.imobi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImobiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImobiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Imobi.
     * @param {ImobiDeleteArgs} args - Arguments to delete one Imobi.
     * @example
     * // Delete one Imobi
     * const Imobi = await prisma.imobi.delete({
     *   where: {
     *     // ... filter to delete one Imobi
     *   }
     * })
     * 
    **/
    delete<T extends ImobiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImobiDeleteArgs<ExtArgs>>
    ): Prisma__ImobiClient<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Imobi.
     * @param {ImobiUpdateArgs} args - Arguments to update one Imobi.
     * @example
     * // Update one Imobi
     * const imobi = await prisma.imobi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImobiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImobiUpdateArgs<ExtArgs>>
    ): Prisma__ImobiClient<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Imobis.
     * @param {ImobiDeleteManyArgs} args - Arguments to filter Imobis to delete.
     * @example
     * // Delete a few Imobis
     * const { count } = await prisma.imobi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImobiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImobiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imobis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImobiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imobis
     * const imobi = await prisma.imobi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImobiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImobiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Imobi.
     * @param {ImobiUpsertArgs} args - Arguments to update or create a Imobi.
     * @example
     * // Update or create a Imobi
     * const imobi = await prisma.imobi.upsert({
     *   create: {
     *     // ... data to create a Imobi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imobi we want to update
     *   }
     * })
    **/
    upsert<T extends ImobiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImobiUpsertArgs<ExtArgs>>
    ): Prisma__ImobiClient<$Result.GetResult<Prisma.$ImobiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Imobis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImobiCountArgs} args - Arguments to filter Imobis to count.
     * @example
     * // Count the number of Imobis
     * const count = await prisma.imobi.count({
     *   where: {
     *     // ... the filter for the Imobis we want to count
     *   }
     * })
    **/
    count<T extends ImobiCountArgs>(
      args?: Subset<T, ImobiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImobiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imobi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImobiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImobiAggregateArgs>(args: Subset<T, ImobiAggregateArgs>): Prisma.PrismaPromise<GetImobiAggregateType<T>>

    /**
     * Group by Imobi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImobiGroupByArgs} args - Group by arguments.
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
      T extends ImobiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImobiGroupByArgs['orderBy'] }
        : { orderBy?: ImobiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImobiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImobiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imobi model
   */
  readonly fields: ImobiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imobi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImobiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Imobi model
   */ 
  interface ImobiFieldRefs {
    readonly id: FieldRef<"Imobi", 'Int'>
    readonly tipo: FieldRef<"Imobi", 'String'>
    readonly thumb: FieldRef<"Imobi", 'String'>
    readonly endereco: FieldRef<"Imobi", 'String'>
    readonly cidade: FieldRef<"Imobi", 'String'>
    readonly uf: FieldRef<"Imobi", 'String'>
    readonly valor: FieldRef<"Imobi", 'String'>
    readonly descricao: FieldRef<"Imobi", 'String'>
    readonly name: FieldRef<"Imobi", 'String'>
    readonly email: FieldRef<"Imobi", 'String'>
    readonly telefone: FieldRef<"Imobi", 'String'>
    readonly slug: FieldRef<"Imobi", 'String'>
    readonly userId: FieldRef<"Imobi", 'Int'>
    readonly created_at: FieldRef<"Imobi", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Imobi findUnique
   */
  export type ImobiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * Filter, which Imobi to fetch.
     */
    where: ImobiWhereUniqueInput
  }


  /**
   * Imobi findUniqueOrThrow
   */
  export type ImobiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * Filter, which Imobi to fetch.
     */
    where: ImobiWhereUniqueInput
  }


  /**
   * Imobi findFirst
   */
  export type ImobiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * Filter, which Imobi to fetch.
     */
    where?: ImobiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imobis to fetch.
     */
    orderBy?: ImobiOrderByWithRelationInput | ImobiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imobis.
     */
    cursor?: ImobiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imobis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imobis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imobis.
     */
    distinct?: ImobiScalarFieldEnum | ImobiScalarFieldEnum[]
  }


  /**
   * Imobi findFirstOrThrow
   */
  export type ImobiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * Filter, which Imobi to fetch.
     */
    where?: ImobiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imobis to fetch.
     */
    orderBy?: ImobiOrderByWithRelationInput | ImobiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imobis.
     */
    cursor?: ImobiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imobis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imobis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imobis.
     */
    distinct?: ImobiScalarFieldEnum | ImobiScalarFieldEnum[]
  }


  /**
   * Imobi findMany
   */
  export type ImobiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * Filter, which Imobis to fetch.
     */
    where?: ImobiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imobis to fetch.
     */
    orderBy?: ImobiOrderByWithRelationInput | ImobiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imobis.
     */
    cursor?: ImobiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imobis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imobis.
     */
    skip?: number
    distinct?: ImobiScalarFieldEnum | ImobiScalarFieldEnum[]
  }


  /**
   * Imobi create
   */
  export type ImobiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * The data needed to create a Imobi.
     */
    data: XOR<ImobiCreateInput, ImobiUncheckedCreateInput>
  }


  /**
   * Imobi createMany
   */
  export type ImobiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imobis.
     */
    data: ImobiCreateManyInput | ImobiCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Imobi update
   */
  export type ImobiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * The data needed to update a Imobi.
     */
    data: XOR<ImobiUpdateInput, ImobiUncheckedUpdateInput>
    /**
     * Choose, which Imobi to update.
     */
    where: ImobiWhereUniqueInput
  }


  /**
   * Imobi updateMany
   */
  export type ImobiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imobis.
     */
    data: XOR<ImobiUpdateManyMutationInput, ImobiUncheckedUpdateManyInput>
    /**
     * Filter which Imobis to update
     */
    where?: ImobiWhereInput
  }


  /**
   * Imobi upsert
   */
  export type ImobiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * The filter to search for the Imobi to update in case it exists.
     */
    where: ImobiWhereUniqueInput
    /**
     * In case the Imobi found by the `where` argument doesn't exist, create a new Imobi with this data.
     */
    create: XOR<ImobiCreateInput, ImobiUncheckedCreateInput>
    /**
     * In case the Imobi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImobiUpdateInput, ImobiUncheckedUpdateInput>
  }


  /**
   * Imobi delete
   */
  export type ImobiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
    /**
     * Filter which Imobi to delete.
     */
    where: ImobiWhereUniqueInput
  }


  /**
   * Imobi deleteMany
   */
  export type ImobiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imobis to delete
     */
    where?: ImobiWhereInput
  }


  /**
   * Imobi without action
   */
  export type ImobiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imobi
     */
    select?: ImobiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImobiInclude<ExtArgs> | null
  }



  /**
   * Model Messagens
   */

  export type AggregateMessagens = {
    _count: MessagensCountAggregateOutputType | null
    _avg: MessagensAvgAggregateOutputType | null
    _sum: MessagensSumAggregateOutputType | null
    _min: MessagensMinAggregateOutputType | null
    _max: MessagensMaxAggregateOutputType | null
  }

  export type MessagensAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MessagensSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MessagensMinAggregateOutputType = {
    id: number | null
    client_name: string | null
    client_email: string | null
    client_mensagem: string | null
    userId: number | null
  }

  export type MessagensMaxAggregateOutputType = {
    id: number | null
    client_name: string | null
    client_email: string | null
    client_mensagem: string | null
    userId: number | null
  }

  export type MessagensCountAggregateOutputType = {
    id: number
    client_name: number
    client_email: number
    client_mensagem: number
    userId: number
    _all: number
  }


  export type MessagensAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MessagensSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MessagensMinAggregateInputType = {
    id?: true
    client_name?: true
    client_email?: true
    client_mensagem?: true
    userId?: true
  }

  export type MessagensMaxAggregateInputType = {
    id?: true
    client_name?: true
    client_email?: true
    client_mensagem?: true
    userId?: true
  }

  export type MessagensCountAggregateInputType = {
    id?: true
    client_name?: true
    client_email?: true
    client_mensagem?: true
    userId?: true
    _all?: true
  }

  export type MessagensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messagens to aggregate.
     */
    where?: MessagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messagens to fetch.
     */
    orderBy?: MessagensOrderByWithRelationInput | MessagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messagens
    **/
    _count?: true | MessagensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagensMaxAggregateInputType
  }

  export type GetMessagensAggregateType<T extends MessagensAggregateArgs> = {
        [P in keyof T & keyof AggregateMessagens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessagens[P]>
      : GetScalarType<T[P], AggregateMessagens[P]>
  }




  export type MessagensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagensWhereInput
    orderBy?: MessagensOrderByWithAggregationInput | MessagensOrderByWithAggregationInput[]
    by: MessagensScalarFieldEnum[] | MessagensScalarFieldEnum
    having?: MessagensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagensCountAggregateInputType | true
    _avg?: MessagensAvgAggregateInputType
    _sum?: MessagensSumAggregateInputType
    _min?: MessagensMinAggregateInputType
    _max?: MessagensMaxAggregateInputType
  }

  export type MessagensGroupByOutputType = {
    id: number
    client_name: string
    client_email: string
    client_mensagem: string
    userId: number
    _count: MessagensCountAggregateOutputType | null
    _avg: MessagensAvgAggregateOutputType | null
    _sum: MessagensSumAggregateOutputType | null
    _min: MessagensMinAggregateOutputType | null
    _max: MessagensMaxAggregateOutputType | null
  }

  type GetMessagensGroupByPayload<T extends MessagensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagensGroupByOutputType[P]>
            : GetScalarType<T[P], MessagensGroupByOutputType[P]>
        }
      >
    >


  export type MessagensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_name?: boolean
    client_email?: boolean
    client_mensagem?: boolean
    userId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messagens"]>

  export type MessagensSelectScalar = {
    id?: boolean
    client_name?: boolean
    client_email?: boolean
    client_mensagem?: boolean
    userId?: boolean
  }

  export type MessagensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MessagensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messagens"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_name: string
      client_email: string
      client_mensagem: string
      userId: number
    }, ExtArgs["result"]["messagens"]>
    composites: {}
  }


  type MessagensGetPayload<S extends boolean | null | undefined | MessagensDefaultArgs> = $Result.GetResult<Prisma.$MessagensPayload, S>

  type MessagensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessagensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessagensCountAggregateInputType | true
    }

  export interface MessagensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messagens'], meta: { name: 'Messagens' } }
    /**
     * Find zero or one Messagens that matches the filter.
     * @param {MessagensFindUniqueArgs} args - Arguments to find a Messagens
     * @example
     * // Get one Messagens
     * const messagens = await prisma.messagens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessagensFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessagensFindUniqueArgs<ExtArgs>>
    ): Prisma__MessagensClient<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Messagens that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessagensFindUniqueOrThrowArgs} args - Arguments to find a Messagens
     * @example
     * // Get one Messagens
     * const messagens = await prisma.messagens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessagensFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessagensFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessagensClient<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Messagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagensFindFirstArgs} args - Arguments to find a Messagens
     * @example
     * // Get one Messagens
     * const messagens = await prisma.messagens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessagensFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessagensFindFirstArgs<ExtArgs>>
    ): Prisma__MessagensClient<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Messagens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagensFindFirstOrThrowArgs} args - Arguments to find a Messagens
     * @example
     * // Get one Messagens
     * const messagens = await prisma.messagens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessagensFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessagensFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessagensClient<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messagens
     * const messagens = await prisma.messagens.findMany()
     * 
     * // Get first 10 Messagens
     * const messagens = await prisma.messagens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagensWithIdOnly = await prisma.messagens.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessagensFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessagensFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Messagens.
     * @param {MessagensCreateArgs} args - Arguments to create a Messagens.
     * @example
     * // Create one Messagens
     * const Messagens = await prisma.messagens.create({
     *   data: {
     *     // ... data to create a Messagens
     *   }
     * })
     * 
    **/
    create<T extends MessagensCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessagensCreateArgs<ExtArgs>>
    ): Prisma__MessagensClient<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messagens.
     *     @param {MessagensCreateManyArgs} args - Arguments to create many Messagens.
     *     @example
     *     // Create many Messagens
     *     const messagens = await prisma.messagens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessagensCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessagensCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Messagens.
     * @param {MessagensDeleteArgs} args - Arguments to delete one Messagens.
     * @example
     * // Delete one Messagens
     * const Messagens = await prisma.messagens.delete({
     *   where: {
     *     // ... filter to delete one Messagens
     *   }
     * })
     * 
    **/
    delete<T extends MessagensDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessagensDeleteArgs<ExtArgs>>
    ): Prisma__MessagensClient<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Messagens.
     * @param {MessagensUpdateArgs} args - Arguments to update one Messagens.
     * @example
     * // Update one Messagens
     * const messagens = await prisma.messagens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessagensUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessagensUpdateArgs<ExtArgs>>
    ): Prisma__MessagensClient<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messagens.
     * @param {MessagensDeleteManyArgs} args - Arguments to filter Messagens to delete.
     * @example
     * // Delete a few Messagens
     * const { count } = await prisma.messagens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessagensDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessagensDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messagens
     * const messagens = await prisma.messagens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessagensUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessagensUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Messagens.
     * @param {MessagensUpsertArgs} args - Arguments to update or create a Messagens.
     * @example
     * // Update or create a Messagens
     * const messagens = await prisma.messagens.upsert({
     *   create: {
     *     // ... data to create a Messagens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messagens we want to update
     *   }
     * })
    **/
    upsert<T extends MessagensUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessagensUpsertArgs<ExtArgs>>
    ): Prisma__MessagensClient<$Result.GetResult<Prisma.$MessagensPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagensCountArgs} args - Arguments to filter Messagens to count.
     * @example
     * // Count the number of Messagens
     * const count = await prisma.messagens.count({
     *   where: {
     *     // ... the filter for the Messagens we want to count
     *   }
     * })
    **/
    count<T extends MessagensCountArgs>(
      args?: Subset<T, MessagensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagensAggregateArgs>(args: Subset<T, MessagensAggregateArgs>): Prisma.PrismaPromise<GetMessagensAggregateType<T>>

    /**
     * Group by Messagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagensGroupByArgs} args - Group by arguments.
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
      T extends MessagensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagensGroupByArgs['orderBy'] }
        : { orderBy?: MessagensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessagensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messagens model
   */
  readonly fields: MessagensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messagens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Messagens model
   */ 
  interface MessagensFieldRefs {
    readonly id: FieldRef<"Messagens", 'Int'>
    readonly client_name: FieldRef<"Messagens", 'String'>
    readonly client_email: FieldRef<"Messagens", 'String'>
    readonly client_mensagem: FieldRef<"Messagens", 'String'>
    readonly userId: FieldRef<"Messagens", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Messagens findUnique
   */
  export type MessagensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * Filter, which Messagens to fetch.
     */
    where: MessagensWhereUniqueInput
  }


  /**
   * Messagens findUniqueOrThrow
   */
  export type MessagensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * Filter, which Messagens to fetch.
     */
    where: MessagensWhereUniqueInput
  }


  /**
   * Messagens findFirst
   */
  export type MessagensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * Filter, which Messagens to fetch.
     */
    where?: MessagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messagens to fetch.
     */
    orderBy?: MessagensOrderByWithRelationInput | MessagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messagens.
     */
    cursor?: MessagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messagens.
     */
    distinct?: MessagensScalarFieldEnum | MessagensScalarFieldEnum[]
  }


  /**
   * Messagens findFirstOrThrow
   */
  export type MessagensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * Filter, which Messagens to fetch.
     */
    where?: MessagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messagens to fetch.
     */
    orderBy?: MessagensOrderByWithRelationInput | MessagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messagens.
     */
    cursor?: MessagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messagens.
     */
    distinct?: MessagensScalarFieldEnum | MessagensScalarFieldEnum[]
  }


  /**
   * Messagens findMany
   */
  export type MessagensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * Filter, which Messagens to fetch.
     */
    where?: MessagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messagens to fetch.
     */
    orderBy?: MessagensOrderByWithRelationInput | MessagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messagens.
     */
    cursor?: MessagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messagens.
     */
    skip?: number
    distinct?: MessagensScalarFieldEnum | MessagensScalarFieldEnum[]
  }


  /**
   * Messagens create
   */
  export type MessagensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * The data needed to create a Messagens.
     */
    data: XOR<MessagensCreateInput, MessagensUncheckedCreateInput>
  }


  /**
   * Messagens createMany
   */
  export type MessagensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messagens.
     */
    data: MessagensCreateManyInput | MessagensCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Messagens update
   */
  export type MessagensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * The data needed to update a Messagens.
     */
    data: XOR<MessagensUpdateInput, MessagensUncheckedUpdateInput>
    /**
     * Choose, which Messagens to update.
     */
    where: MessagensWhereUniqueInput
  }


  /**
   * Messagens updateMany
   */
  export type MessagensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messagens.
     */
    data: XOR<MessagensUpdateManyMutationInput, MessagensUncheckedUpdateManyInput>
    /**
     * Filter which Messagens to update
     */
    where?: MessagensWhereInput
  }


  /**
   * Messagens upsert
   */
  export type MessagensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * The filter to search for the Messagens to update in case it exists.
     */
    where: MessagensWhereUniqueInput
    /**
     * In case the Messagens found by the `where` argument doesn't exist, create a new Messagens with this data.
     */
    create: XOR<MessagensCreateInput, MessagensUncheckedCreateInput>
    /**
     * In case the Messagens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagensUpdateInput, MessagensUncheckedUpdateInput>
  }


  /**
   * Messagens delete
   */
  export type MessagensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
    /**
     * Filter which Messagens to delete.
     */
    where: MessagensWhereUniqueInput
  }


  /**
   * Messagens deleteMany
   */
  export type MessagensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messagens to delete
     */
    where?: MessagensWhereInput
  }


  /**
   * Messagens without action
   */
  export type MessagensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messagens
     */
    select?: MessagensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessagensInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ImobiScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    thumb: 'thumb',
    endereco: 'endereco',
    cidade: 'cidade',
    uf: 'uf',
    valor: 'valor',
    descricao: 'descricao',
    name: 'name',
    email: 'email',
    telefone: 'telefone',
    slug: 'slug',
    userId: 'userId',
    created_at: 'created_at'
  };

  export type ImobiScalarFieldEnum = (typeof ImobiScalarFieldEnum)[keyof typeof ImobiScalarFieldEnum]


  export const MessagensScalarFieldEnum: {
    id: 'id',
    client_name: 'client_name',
    client_email: 'client_email',
    client_mensagem: 'client_mensagem',
    userId: 'userId'
  };

  export type MessagensScalarFieldEnum = (typeof MessagensScalarFieldEnum)[keyof typeof MessagensScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Imboi?: ImobiListRelationFilter
    Messagens?: MessagensListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    Imboi?: ImobiOrderByRelationAggregateInput
    Messagens?: MessagensOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Imboi?: ImobiListRelationFilter
    Messagens?: MessagensListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ImobiWhereInput = {
    AND?: ImobiWhereInput | ImobiWhereInput[]
    OR?: ImobiWhereInput[]
    NOT?: ImobiWhereInput | ImobiWhereInput[]
    id?: IntFilter<"Imobi"> | number
    tipo?: StringNullableFilter<"Imobi"> | string | null
    thumb?: StringNullableFilter<"Imobi"> | string | null
    endereco?: StringNullableFilter<"Imobi"> | string | null
    cidade?: StringNullableFilter<"Imobi"> | string | null
    uf?: StringNullableFilter<"Imobi"> | string | null
    valor?: StringNullableFilter<"Imobi"> | string | null
    descricao?: StringNullableFilter<"Imobi"> | string | null
    name?: StringFilter<"Imobi"> | string
    email?: StringFilter<"Imobi"> | string
    telefone?: StringFilter<"Imobi"> | string
    slug?: StringFilter<"Imobi"> | string
    userId?: IntFilter<"Imobi"> | number
    created_at?: DateTimeNullableFilter<"Imobi"> | Date | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ImobiOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrderInput | SortOrder
    thumb?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    slug?: SortOrder
    userId?: SortOrder
    created_at?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type ImobiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImobiWhereInput | ImobiWhereInput[]
    OR?: ImobiWhereInput[]
    NOT?: ImobiWhereInput | ImobiWhereInput[]
    tipo?: StringNullableFilter<"Imobi"> | string | null
    thumb?: StringNullableFilter<"Imobi"> | string | null
    endereco?: StringNullableFilter<"Imobi"> | string | null
    cidade?: StringNullableFilter<"Imobi"> | string | null
    uf?: StringNullableFilter<"Imobi"> | string | null
    valor?: StringNullableFilter<"Imobi"> | string | null
    descricao?: StringNullableFilter<"Imobi"> | string | null
    name?: StringFilter<"Imobi"> | string
    email?: StringFilter<"Imobi"> | string
    telefone?: StringFilter<"Imobi"> | string
    slug?: StringFilter<"Imobi"> | string
    userId?: IntFilter<"Imobi"> | number
    created_at?: DateTimeNullableFilter<"Imobi"> | Date | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ImobiOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrderInput | SortOrder
    thumb?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    slug?: SortOrder
    userId?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: ImobiCountOrderByAggregateInput
    _avg?: ImobiAvgOrderByAggregateInput
    _max?: ImobiMaxOrderByAggregateInput
    _min?: ImobiMinOrderByAggregateInput
    _sum?: ImobiSumOrderByAggregateInput
  }

  export type ImobiScalarWhereWithAggregatesInput = {
    AND?: ImobiScalarWhereWithAggregatesInput | ImobiScalarWhereWithAggregatesInput[]
    OR?: ImobiScalarWhereWithAggregatesInput[]
    NOT?: ImobiScalarWhereWithAggregatesInput | ImobiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Imobi"> | number
    tipo?: StringNullableWithAggregatesFilter<"Imobi"> | string | null
    thumb?: StringNullableWithAggregatesFilter<"Imobi"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Imobi"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Imobi"> | string | null
    uf?: StringNullableWithAggregatesFilter<"Imobi"> | string | null
    valor?: StringNullableWithAggregatesFilter<"Imobi"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Imobi"> | string | null
    name?: StringWithAggregatesFilter<"Imobi"> | string
    email?: StringWithAggregatesFilter<"Imobi"> | string
    telefone?: StringWithAggregatesFilter<"Imobi"> | string
    slug?: StringWithAggregatesFilter<"Imobi"> | string
    userId?: IntWithAggregatesFilter<"Imobi"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Imobi"> | Date | string | null
  }

  export type MessagensWhereInput = {
    AND?: MessagensWhereInput | MessagensWhereInput[]
    OR?: MessagensWhereInput[]
    NOT?: MessagensWhereInput | MessagensWhereInput[]
    id?: IntFilter<"Messagens"> | number
    client_name?: StringFilter<"Messagens"> | string
    client_email?: StringFilter<"Messagens"> | string
    client_mensagem?: StringFilter<"Messagens"> | string
    userId?: IntFilter<"Messagens"> | number
    author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessagensOrderByWithRelationInput = {
    id?: SortOrder
    client_name?: SortOrder
    client_email?: SortOrder
    client_mensagem?: SortOrder
    userId?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type MessagensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessagensWhereInput | MessagensWhereInput[]
    OR?: MessagensWhereInput[]
    NOT?: MessagensWhereInput | MessagensWhereInput[]
    client_name?: StringFilter<"Messagens"> | string
    client_email?: StringFilter<"Messagens"> | string
    client_mensagem?: StringFilter<"Messagens"> | string
    userId?: IntFilter<"Messagens"> | number
    author?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MessagensOrderByWithAggregationInput = {
    id?: SortOrder
    client_name?: SortOrder
    client_email?: SortOrder
    client_mensagem?: SortOrder
    userId?: SortOrder
    _count?: MessagensCountOrderByAggregateInput
    _avg?: MessagensAvgOrderByAggregateInput
    _max?: MessagensMaxOrderByAggregateInput
    _min?: MessagensMinOrderByAggregateInput
    _sum?: MessagensSumOrderByAggregateInput
  }

  export type MessagensScalarWhereWithAggregatesInput = {
    AND?: MessagensScalarWhereWithAggregatesInput | MessagensScalarWhereWithAggregatesInput[]
    OR?: MessagensScalarWhereWithAggregatesInput[]
    NOT?: MessagensScalarWhereWithAggregatesInput | MessagensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Messagens"> | number
    client_name?: StringWithAggregatesFilter<"Messagens"> | string
    client_email?: StringWithAggregatesFilter<"Messagens"> | string
    client_mensagem?: StringWithAggregatesFilter<"Messagens"> | string
    userId?: IntWithAggregatesFilter<"Messagens"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    Imboi?: ImobiCreateNestedManyWithoutAuthorInput
    Messagens?: MessagensCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    Imboi?: ImobiUncheckedCreateNestedManyWithoutAuthorInput
    Messagens?: MessagensUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Imboi?: ImobiUpdateManyWithoutAuthorNestedInput
    Messagens?: MessagensUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Imboi?: ImobiUncheckedUpdateManyWithoutAuthorNestedInput
    Messagens?: MessagensUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ImobiCreateInput = {
    tipo?: string | null
    thumb?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    valor?: string | null
    descricao?: string | null
    name: string
    email: string
    telefone: string
    slug: string
    created_at?: Date | string | null
    author: UserCreateNestedOneWithoutImboiInput
  }

  export type ImobiUncheckedCreateInput = {
    id?: number
    tipo?: string | null
    thumb?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    valor?: string | null
    descricao?: string | null
    name: string
    email: string
    telefone: string
    slug: string
    userId: number
    created_at?: Date | string | null
  }

  export type ImobiUpdateInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    thumb?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutImboiNestedInput
  }

  export type ImobiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    thumb?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImobiCreateManyInput = {
    id?: number
    tipo?: string | null
    thumb?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    valor?: string | null
    descricao?: string | null
    name: string
    email: string
    telefone: string
    slug: string
    userId: number
    created_at?: Date | string | null
  }

  export type ImobiUpdateManyMutationInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    thumb?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImobiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    thumb?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessagensCreateInput = {
    client_name: string
    client_email: string
    client_mensagem: string
    author: UserCreateNestedOneWithoutMessagensInput
  }

  export type MessagensUncheckedCreateInput = {
    id?: number
    client_name: string
    client_email: string
    client_mensagem: string
    userId: number
  }

  export type MessagensUpdateInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    client_email?: StringFieldUpdateOperationsInput | string
    client_mensagem?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutMessagensNestedInput
  }

  export type MessagensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    client_email?: StringFieldUpdateOperationsInput | string
    client_mensagem?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MessagensCreateManyInput = {
    id?: number
    client_name: string
    client_email: string
    client_mensagem: string
    userId: number
  }

  export type MessagensUpdateManyMutationInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    client_email?: StringFieldUpdateOperationsInput | string
    client_mensagem?: StringFieldUpdateOperationsInput | string
  }

  export type MessagensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    client_email?: StringFieldUpdateOperationsInput | string
    client_mensagem?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ImobiListRelationFilter = {
    every?: ImobiWhereInput
    some?: ImobiWhereInput
    none?: ImobiWhereInput
  }

  export type MessagensListRelationFilter = {
    every?: MessagensWhereInput
    some?: MessagensWhereInput
    none?: MessagensWhereInput
  }

  export type ImobiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImobiCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    thumb?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    name?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    slug?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type ImobiAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ImobiMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    thumb?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    name?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    slug?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type ImobiMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    thumb?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    name?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    slug?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type ImobiSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MessagensCountOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    client_email?: SortOrder
    client_mensagem?: SortOrder
    userId?: SortOrder
  }

  export type MessagensAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MessagensMaxOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    client_email?: SortOrder
    client_mensagem?: SortOrder
    userId?: SortOrder
  }

  export type MessagensMinOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    client_email?: SortOrder
    client_mensagem?: SortOrder
    userId?: SortOrder
  }

  export type MessagensSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ImobiCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ImobiCreateWithoutAuthorInput, ImobiUncheckedCreateWithoutAuthorInput> | ImobiCreateWithoutAuthorInput[] | ImobiUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ImobiCreateOrConnectWithoutAuthorInput | ImobiCreateOrConnectWithoutAuthorInput[]
    createMany?: ImobiCreateManyAuthorInputEnvelope
    connect?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
  }

  export type MessagensCreateNestedManyWithoutAuthorInput = {
    create?: XOR<MessagensCreateWithoutAuthorInput, MessagensUncheckedCreateWithoutAuthorInput> | MessagensCreateWithoutAuthorInput[] | MessagensUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MessagensCreateOrConnectWithoutAuthorInput | MessagensCreateOrConnectWithoutAuthorInput[]
    createMany?: MessagensCreateManyAuthorInputEnvelope
    connect?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
  }

  export type ImobiUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ImobiCreateWithoutAuthorInput, ImobiUncheckedCreateWithoutAuthorInput> | ImobiCreateWithoutAuthorInput[] | ImobiUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ImobiCreateOrConnectWithoutAuthorInput | ImobiCreateOrConnectWithoutAuthorInput[]
    createMany?: ImobiCreateManyAuthorInputEnvelope
    connect?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
  }

  export type MessagensUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<MessagensCreateWithoutAuthorInput, MessagensUncheckedCreateWithoutAuthorInput> | MessagensCreateWithoutAuthorInput[] | MessagensUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MessagensCreateOrConnectWithoutAuthorInput | MessagensCreateOrConnectWithoutAuthorInput[]
    createMany?: MessagensCreateManyAuthorInputEnvelope
    connect?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ImobiUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ImobiCreateWithoutAuthorInput, ImobiUncheckedCreateWithoutAuthorInput> | ImobiCreateWithoutAuthorInput[] | ImobiUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ImobiCreateOrConnectWithoutAuthorInput | ImobiCreateOrConnectWithoutAuthorInput[]
    upsert?: ImobiUpsertWithWhereUniqueWithoutAuthorInput | ImobiUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ImobiCreateManyAuthorInputEnvelope
    set?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
    disconnect?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
    delete?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
    connect?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
    update?: ImobiUpdateWithWhereUniqueWithoutAuthorInput | ImobiUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ImobiUpdateManyWithWhereWithoutAuthorInput | ImobiUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ImobiScalarWhereInput | ImobiScalarWhereInput[]
  }

  export type MessagensUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<MessagensCreateWithoutAuthorInput, MessagensUncheckedCreateWithoutAuthorInput> | MessagensCreateWithoutAuthorInput[] | MessagensUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MessagensCreateOrConnectWithoutAuthorInput | MessagensCreateOrConnectWithoutAuthorInput[]
    upsert?: MessagensUpsertWithWhereUniqueWithoutAuthorInput | MessagensUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MessagensCreateManyAuthorInputEnvelope
    set?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
    disconnect?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
    delete?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
    connect?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
    update?: MessagensUpdateWithWhereUniqueWithoutAuthorInput | MessagensUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: MessagensUpdateManyWithWhereWithoutAuthorInput | MessagensUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MessagensScalarWhereInput | MessagensScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImobiUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ImobiCreateWithoutAuthorInput, ImobiUncheckedCreateWithoutAuthorInput> | ImobiCreateWithoutAuthorInput[] | ImobiUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ImobiCreateOrConnectWithoutAuthorInput | ImobiCreateOrConnectWithoutAuthorInput[]
    upsert?: ImobiUpsertWithWhereUniqueWithoutAuthorInput | ImobiUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ImobiCreateManyAuthorInputEnvelope
    set?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
    disconnect?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
    delete?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
    connect?: ImobiWhereUniqueInput | ImobiWhereUniqueInput[]
    update?: ImobiUpdateWithWhereUniqueWithoutAuthorInput | ImobiUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ImobiUpdateManyWithWhereWithoutAuthorInput | ImobiUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ImobiScalarWhereInput | ImobiScalarWhereInput[]
  }

  export type MessagensUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<MessagensCreateWithoutAuthorInput, MessagensUncheckedCreateWithoutAuthorInput> | MessagensCreateWithoutAuthorInput[] | MessagensUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MessagensCreateOrConnectWithoutAuthorInput | MessagensCreateOrConnectWithoutAuthorInput[]
    upsert?: MessagensUpsertWithWhereUniqueWithoutAuthorInput | MessagensUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MessagensCreateManyAuthorInputEnvelope
    set?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
    disconnect?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
    delete?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
    connect?: MessagensWhereUniqueInput | MessagensWhereUniqueInput[]
    update?: MessagensUpdateWithWhereUniqueWithoutAuthorInput | MessagensUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: MessagensUpdateManyWithWhereWithoutAuthorInput | MessagensUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MessagensScalarWhereInput | MessagensScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutImboiInput = {
    create?: XOR<UserCreateWithoutImboiInput, UserUncheckedCreateWithoutImboiInput>
    connectOrCreate?: UserCreateOrConnectWithoutImboiInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutImboiNestedInput = {
    create?: XOR<UserCreateWithoutImboiInput, UserUncheckedCreateWithoutImboiInput>
    connectOrCreate?: UserCreateOrConnectWithoutImboiInput
    upsert?: UserUpsertWithoutImboiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImboiInput, UserUpdateWithoutImboiInput>, UserUncheckedUpdateWithoutImboiInput>
  }

  export type UserCreateNestedOneWithoutMessagensInput = {
    create?: XOR<UserCreateWithoutMessagensInput, UserUncheckedCreateWithoutMessagensInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagensNestedInput = {
    create?: XOR<UserCreateWithoutMessagensInput, UserUncheckedCreateWithoutMessagensInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagensInput
    upsert?: UserUpsertWithoutMessagensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagensInput, UserUpdateWithoutMessagensInput>, UserUncheckedUpdateWithoutMessagensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ImobiCreateWithoutAuthorInput = {
    tipo?: string | null
    thumb?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    valor?: string | null
    descricao?: string | null
    name: string
    email: string
    telefone: string
    slug: string
    created_at?: Date | string | null
  }

  export type ImobiUncheckedCreateWithoutAuthorInput = {
    id?: number
    tipo?: string | null
    thumb?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    valor?: string | null
    descricao?: string | null
    name: string
    email: string
    telefone: string
    slug: string
    created_at?: Date | string | null
  }

  export type ImobiCreateOrConnectWithoutAuthorInput = {
    where: ImobiWhereUniqueInput
    create: XOR<ImobiCreateWithoutAuthorInput, ImobiUncheckedCreateWithoutAuthorInput>
  }

  export type ImobiCreateManyAuthorInputEnvelope = {
    data: ImobiCreateManyAuthorInput | ImobiCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type MessagensCreateWithoutAuthorInput = {
    client_name: string
    client_email: string
    client_mensagem: string
  }

  export type MessagensUncheckedCreateWithoutAuthorInput = {
    id?: number
    client_name: string
    client_email: string
    client_mensagem: string
  }

  export type MessagensCreateOrConnectWithoutAuthorInput = {
    where: MessagensWhereUniqueInput
    create: XOR<MessagensCreateWithoutAuthorInput, MessagensUncheckedCreateWithoutAuthorInput>
  }

  export type MessagensCreateManyAuthorInputEnvelope = {
    data: MessagensCreateManyAuthorInput | MessagensCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ImobiUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ImobiWhereUniqueInput
    update: XOR<ImobiUpdateWithoutAuthorInput, ImobiUncheckedUpdateWithoutAuthorInput>
    create: XOR<ImobiCreateWithoutAuthorInput, ImobiUncheckedCreateWithoutAuthorInput>
  }

  export type ImobiUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ImobiWhereUniqueInput
    data: XOR<ImobiUpdateWithoutAuthorInput, ImobiUncheckedUpdateWithoutAuthorInput>
  }

  export type ImobiUpdateManyWithWhereWithoutAuthorInput = {
    where: ImobiScalarWhereInput
    data: XOR<ImobiUpdateManyMutationInput, ImobiUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ImobiScalarWhereInput = {
    AND?: ImobiScalarWhereInput | ImobiScalarWhereInput[]
    OR?: ImobiScalarWhereInput[]
    NOT?: ImobiScalarWhereInput | ImobiScalarWhereInput[]
    id?: IntFilter<"Imobi"> | number
    tipo?: StringNullableFilter<"Imobi"> | string | null
    thumb?: StringNullableFilter<"Imobi"> | string | null
    endereco?: StringNullableFilter<"Imobi"> | string | null
    cidade?: StringNullableFilter<"Imobi"> | string | null
    uf?: StringNullableFilter<"Imobi"> | string | null
    valor?: StringNullableFilter<"Imobi"> | string | null
    descricao?: StringNullableFilter<"Imobi"> | string | null
    name?: StringFilter<"Imobi"> | string
    email?: StringFilter<"Imobi"> | string
    telefone?: StringFilter<"Imobi"> | string
    slug?: StringFilter<"Imobi"> | string
    userId?: IntFilter<"Imobi"> | number
    created_at?: DateTimeNullableFilter<"Imobi"> | Date | string | null
  }

  export type MessagensUpsertWithWhereUniqueWithoutAuthorInput = {
    where: MessagensWhereUniqueInput
    update: XOR<MessagensUpdateWithoutAuthorInput, MessagensUncheckedUpdateWithoutAuthorInput>
    create: XOR<MessagensCreateWithoutAuthorInput, MessagensUncheckedCreateWithoutAuthorInput>
  }

  export type MessagensUpdateWithWhereUniqueWithoutAuthorInput = {
    where: MessagensWhereUniqueInput
    data: XOR<MessagensUpdateWithoutAuthorInput, MessagensUncheckedUpdateWithoutAuthorInput>
  }

  export type MessagensUpdateManyWithWhereWithoutAuthorInput = {
    where: MessagensScalarWhereInput
    data: XOR<MessagensUpdateManyMutationInput, MessagensUncheckedUpdateManyWithoutAuthorInput>
  }

  export type MessagensScalarWhereInput = {
    AND?: MessagensScalarWhereInput | MessagensScalarWhereInput[]
    OR?: MessagensScalarWhereInput[]
    NOT?: MessagensScalarWhereInput | MessagensScalarWhereInput[]
    id?: IntFilter<"Messagens"> | number
    client_name?: StringFilter<"Messagens"> | string
    client_email?: StringFilter<"Messagens"> | string
    client_mensagem?: StringFilter<"Messagens"> | string
    userId?: IntFilter<"Messagens"> | number
  }

  export type UserCreateWithoutImboiInput = {
    name: string
    email: string
    password: string
    Messagens?: MessagensCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutImboiInput = {
    id?: number
    name: string
    email: string
    password: string
    Messagens?: MessagensUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutImboiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImboiInput, UserUncheckedCreateWithoutImboiInput>
  }

  export type UserUpsertWithoutImboiInput = {
    update: XOR<UserUpdateWithoutImboiInput, UserUncheckedUpdateWithoutImboiInput>
    create: XOR<UserCreateWithoutImboiInput, UserUncheckedCreateWithoutImboiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImboiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImboiInput, UserUncheckedUpdateWithoutImboiInput>
  }

  export type UserUpdateWithoutImboiInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Messagens?: MessagensUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutImboiInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Messagens?: MessagensUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutMessagensInput = {
    name: string
    email: string
    password: string
    Imboi?: ImobiCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutMessagensInput = {
    id?: number
    name: string
    email: string
    password: string
    Imboi?: ImobiUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutMessagensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagensInput, UserUncheckedCreateWithoutMessagensInput>
  }

  export type UserUpsertWithoutMessagensInput = {
    update: XOR<UserUpdateWithoutMessagensInput, UserUncheckedUpdateWithoutMessagensInput>
    create: XOR<UserCreateWithoutMessagensInput, UserUncheckedCreateWithoutMessagensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagensInput, UserUncheckedUpdateWithoutMessagensInput>
  }

  export type UserUpdateWithoutMessagensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Imboi?: ImobiUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Imboi?: ImobiUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ImobiCreateManyAuthorInput = {
    id?: number
    tipo?: string | null
    thumb?: string | null
    endereco?: string | null
    cidade?: string | null
    uf?: string | null
    valor?: string | null
    descricao?: string | null
    name: string
    email: string
    telefone: string
    slug: string
    created_at?: Date | string | null
  }

  export type MessagensCreateManyAuthorInput = {
    id?: number
    client_name: string
    client_email: string
    client_mensagem: string
  }

  export type ImobiUpdateWithoutAuthorInput = {
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    thumb?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImobiUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    thumb?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImobiUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    thumb?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessagensUpdateWithoutAuthorInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    client_email?: StringFieldUpdateOperationsInput | string
    client_mensagem?: StringFieldUpdateOperationsInput | string
  }

  export type MessagensUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    client_email?: StringFieldUpdateOperationsInput | string
    client_mensagem?: StringFieldUpdateOperationsInput | string
  }

  export type MessagensUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    client_email?: StringFieldUpdateOperationsInput | string
    client_mensagem?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImobiDefaultArgs instead
     */
    export type ImobiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImobiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessagensDefaultArgs instead
     */
    export type MessagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessagensDefaultArgs<ExtArgs>

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