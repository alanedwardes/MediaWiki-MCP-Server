/* eslint-disable n/no-missing-import */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
/* eslint-enable n/no-missing-import */

const server = new McpServer( {
	name: 'MediaWiki MCP Server',
	version: '0.0.0'
}, {
	capabilities: {
		logging: {
			level: 'debug' // For development purposes
		}
	}
} );

const transport = new StdioServerTransport();
await server.connect( transport );

server.server.sendLoggingMessage( {
	level: 'debug',
	data: 'Server started successfully'
} );
