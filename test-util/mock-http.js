import nock from 'nock';
const mockEndpoint = {
    url: 'mock-endpoint',
    apiVersion: 'mock-api-version'
};
export function mockInference(request, response, destination, endpoint = mockEndpoint) {
    const { deploymentConfiguration, ...body } = request.data;
    const { url, apiVersion } = endpoint;
    return nock(destination.url, {
        reqheaders: {
            'ai-resource-group': 'default',
            authorization: `Bearer ${destination.authTokens?.[0].value}`
        }
    })
        .post(`/v2/inference/deployments/${deploymentConfiguration.deploymentId}/${url}`, body)
        .query({ 'api-version': apiVersion })
        .reply(response.status, response.data);
}
//# sourceMappingURL=mock-http.js.map