/* eslint-disable @typescript-eslint/no-explicit-any */

export default interface RequestParameters {
  /**
   * The value of the query string portion of the URL, or null if no query string is specified
   */
  queryString: string;
  /**
   * An object of key/value pairs that correspond to the request parameters.
   * Only the first value is returned for parameters that have multiple values.
   */
  parameter: any;
  /**
   * An object similar to e.parameter, but with an array of values for each key
   */
  parameters: { [key: string]: any[] };
  /**
   * The length of the request body for POST requests, or -1 for GET requests
   */
  contextLength: number;
  postData: {
    /**
     * The length of the request body for POST requests, or -1 for GET requests
     */
    length: number;
    /**
     * The MIME type of the POST body
     */
    type: string;
    contents: string;
    name: 'postData';
  };
}

/* eslint-enable @typescript-eslint/no-explicit-any */
