import {
  ChecksumConstructor,
  HashConstructor,
  HttpRequest,
} from "@aws-sdk/types";
export declare const getPayloadHash: (
  { headers, body }: HttpRequest,
  hashConstructor: ChecksumConstructor | HashConstructor
) => Promise<string>;
