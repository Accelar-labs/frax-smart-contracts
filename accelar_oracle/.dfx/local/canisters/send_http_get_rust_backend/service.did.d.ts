import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface SignatureReply { 'signature_hex' : string }
export interface _SERVICE {
  'get_eth_brl_exchange' : ActorMethod<[], string>,
  'public_key' : ActorMethod<
    [],
    { 'Ok' : { 'public_key_hex' : string } } |
      { 'Err' : string }
  >,
  'signa' : ActorMethod<
    [string],
    { 'Ok' : SignatureReply } |
      { 'Err' : string }
  >,
  'verify' : ActorMethod<
    [string, string, string],
    { 'Ok' : { 'is_signature_valid' : boolean } } |
      { 'Err' : string }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
