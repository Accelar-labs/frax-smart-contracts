export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'get_eth_brl_exchange' : IDL.Func([], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
