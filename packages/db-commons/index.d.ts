export * from './index.cjs';

export type RunQuery<T extends Record<string, unknown>> = (
	queryString: string,
	database: T
) => Promise<QueryResult>;

export type EvidenceColumnType = number | boolean | string | Date;

export type GetRunner<T extends Record<string, unknown>> = (
	opts: T,
	directory: string
) => (queryContent: string, queryPath: string) => Promise<QueryResult>;