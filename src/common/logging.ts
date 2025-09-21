export function logToolUsage(
	toolName: string,
	args: Record<string, unknown>,
	startTime: number
): void {
	const duration = Date.now() - startTime;
	const argsString = Object.entries(args)
		.map(([key, value]) => {
			if (typeof value === 'string' && value.length > 100) {
				return `${key}: "${value.substring(0, 100)}..."`;
			}
			return `${key}: ${JSON.stringify(value)}`;
		})
		.join(', ');
	
	console.log(`[TOOL] ${toolName}(${argsString}) - ${duration}ms`);
}

export function withLogging<T extends Record<string, unknown>>(
	toolName: string,
	handler: (args: T) => Promise<unknown>
) {
	return async (args: T, extra?: unknown): Promise<unknown> => {
		const startTime = Date.now();
		logToolUsage(toolName, args, startTime);
		
		try {
			const result = await handler(args);
			return result;
		} catch (error) {
			console.error(`[TOOL ERROR] ${toolName}:`, error);
			throw error;
		}
	};
}
