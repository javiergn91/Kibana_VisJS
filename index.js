export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'network',
    uiExports: {
      visTypes: ['plugins/network/network']
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
