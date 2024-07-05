export const idlFactory = ({ IDL }) => {
  const SignatureReply = IDL.Record({ 'signature_hex' : IDL.Text });
  return IDL.Service({
    'get_eth_brl_exchange' : IDL.Func([], [IDL.Text], []),
    'public_key' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({ 'public_key_hex' : IDL.Text }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
    'signa' : IDL.Func(
        [IDL.Text],
        [IDL.Variant({ 'Ok' : SignatureReply, 'Err' : IDL.Text })],
        [],
      ),
    'verify' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({ 'is_signature_valid' : IDL.Bool }),
            'Err' : IDL.Text,
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
