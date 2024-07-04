import { HttpDestination } from '@sap-cloud-sdk/connectivity';
import nock from 'nock';
import { BaseLlmParameters, CustomRequestConfig, EndpointOptions } from '../src/core/http-client.js';
export declare function mockInference<D extends BaseLlmParameters>(request: {
    data: D;
    requestConfig?: CustomRequestConfig;
}, response: {
    data: any;
    status?: number;
    headers?: Record<string, string>;
}, destination: HttpDestination, endpoint?: EndpointOptions): nock.Scope;
//# sourceMappingURL=mock-http.d.ts.map