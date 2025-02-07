const { z } = require("zod");

const nubmerSchema = z.object({
  number: z.coerce.number({ invalid_type_error: "Only numbers are allowed!" }),
});

module.exports = nubmerSchema;
