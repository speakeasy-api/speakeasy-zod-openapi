import {
  extendZodWithOpenApi,
  ZodOpenApiOperationObject,
  createDocument,
} from "zod-openapi";
import * as yaml from "yaml";
import { z } from "zod";

extendZodWithOpenApi(z);

const BurgerIdSchema = z
  .number()
  .min(1)
  .openapi({
    ref: "BurgerId",
    description: "The unique identifier of the burger.",
    example: 1,
    param: {
      in: "path",
      name: "id",
    },
  });

const burgerSchema = z
  .object({
    id: BurgerIdSchema,
    name: z.string().min(1).max(50).openapi({
      description: "The name of the burger.",
      example: "Veggie Burger",
    }),
    description: z.string().max(255).optional().openapi({
      description: "The description of the burger.",
      example: "A delicious bean burger with avocado.",
    }),
  })
  .openapi({
    ref: "Burger",
    description: "A burger served at the restaurant.",
  });

const burgerCreateSchema = burgerSchema.omit({ id: true }).openapi({
  ref: "BurgerCreate",
  description: "A burger to create.",
});

const burgerUpdateSchema = burgerSchema.partial().omit({ id: true }).openapi({
  ref: "BurgerUpdate",
  description: "A burger to update.",
});

const OrderIdSchema = z
  .number()
  .min(1)
  .openapi({
    ref: "OrderId",
    description: "The unique identifier of the order.",
    example: 1,
    param: {
      in: "path",
      name: "id",
    },
  });

const orderStatusEnum = z.enum([
  "pending",
  "in_progress",
  "ready",
  "delivered",
]);

const orderSchema = z.object({
  id: OrderIdSchema,
  burger_ids: z
    .array(BurgerIdSchema)
    .nonempty()
    .openapi({
      description: "The burgers in the order.",
      example: [1, 2],
    }),
  time: z.string().datetime().openapi({
    description: "The time the order was placed.",
    example: "2021-01-01T00:00:00.000Z",
  }),
  table: z.number().min(1).openapi({
    description: "The table the order is for.",
    example: 1,
  }),
  status: orderStatusEnum.openapi({
    description: "The status of the order.",
    example: "pending",
  }),
  note: z.string().optional().openapi({
    description: "A note for the order.",
    example: "No onions.",
  }),
});

const orderCreateSchema = orderSchema.omit({ id: true }).openapi({
  ref: "OrderCreate",
  description: "An order to create.",
});

const orderUpdateSchema = orderSchema.partial().omit({ id: true }).openapi({
  ref: "OrderUpdate",
  description: "An order to update.",
});

const createBurger: ZodOpenApiOperationObject = {
  operationId: "createBurger",
  summary: "Create a new burger",
  description: "Creates a new burger in the database.",
  tags: ["burgers"],
  requestBody: {
    description: "The burger to create.",
    content: {
      "application/json": {
        schema: burgerCreateSchema,
      },
    },
  },
  responses: {
    "201": {
      description: "The burger was created successfully.",
      content: {
        "application/json": {
          schema: burgerSchema,
        },
      },
    },
  },
};

const getBurger: ZodOpenApiOperationObject = {
  operationId: "getBurger",
  summary: "Get a burger",
  tags: ["burgers"],
  description: "Gets a burger from the database.",
  requestParams: {
    path: z.object({ id: BurgerIdSchema }),
  },
  responses: {
    "200": {
      description: "The burger was retrieved successfully.",
      content: {
        "application/json": {
          schema: burgerSchema,
        },
      },
    },
  },
  "x-speakeasy-retries": {
    strategy: "backoff",
    backoff: {
      initialInterval: 500,
      maxInterval: 60000,
      maxElapsedTime: 3600000,
      exponent: 1.5,
    },
    statusCodes: ["5XX"],
    retryConnectionErrors: true,
  },
};

const createBurgerWebhook: ZodOpenApiOperationObject = {
  operationId: "createBurgerWebhook",
  summary: "New burger webhook",
  tags: ["burgers"],
  description: "A webhook that is called when a new burger is created.",
  requestBody: {
    description: "The burger that was created.",
    content: {
      "application/json": {
        schema: burgerSchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The webhook was processed successfully.",
    },
  },
};

const listBurgers: ZodOpenApiOperationObject = {
  operationId: "listBurgers",
  summary: "List burgers",
  tags: ["burgers"],
  description: "Lists all burgers in the database.",
  responses: {
    "200": {
      description: "The burgers were retrieved successfully.",
      content: {
        "application/json": {
          schema: z.array(burgerSchema),
        },
      },
    },
  },
};

const deleteBurger: ZodOpenApiOperationObject = {
  operationId: "deleteBurger",
  summary: "Delete a burger",
  tags: ["burgers"],
  description: "Deletes a burger from the database.",
  requestParams: {
    path: z.object({ id: BurgerIdSchema }),
  },
  responses: {
    "204": {
      description: "The burger was deleted successfully.",
    },
  },
};

const updateBurger: ZodOpenApiOperationObject = {
  operationId: "updateBurger",
  summary: "Update a burger",
  tags: ["burgers"],
  description: "Updates a burger in the database.",
  requestParams: {
    path: z.object({ id: BurgerIdSchema }),
  },
  requestBody: {
    description: "The burger to update.",
    content: {
      "application/json": {
        schema: burgerUpdateSchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The burger was updated successfully.",
      content: {
        "application/json": {
          schema: burgerSchema,
        },
      },
    },
  },
};

const createOrder: ZodOpenApiOperationObject = {
  operationId: "createOrder",
  summary: "Create a new order",
  description: "Creates a new order in the database.",
  tags: ["orders"],
  requestBody: {
    description: "The order to create.",
    content: {
      "application/json": {
        schema: orderCreateSchema,
      },
    },
  },
  responses: {
    "201": {
      description: "The order was created successfully.",
      content: {
        "application/json": {
          schema: orderSchema,
        },
      },
    },
  },
};

const getOrder: ZodOpenApiOperationObject = {
  operationId: "getOrder",
  summary: "Get an order",
  tags: ["orders"],
  description: "Gets an order from the database.",
  requestParams: {
    path: z.object({ id: OrderIdSchema }),
  },
  responses: {
    "200": {
      description: "The order was retrieved successfully.",
      content: {
        "application/json": {
          schema: orderSchema,
        },
      },
    },
  },
};

const listOrders: ZodOpenApiOperationObject = {
  operationId: "listOrders",
  summary: "List orders",
  tags: ["orders"],
  description: "Lists all orders in the database.",
  responses: {
    "200": {
      description: "The orders were retrieved successfully.",
      content: {
        "application/json": {
          schema: z.array(orderSchema),
        },
      },
    },
  },
};

const deleteOrder: ZodOpenApiOperationObject = {
  operationId: "deleteOrder",
  summary: "Delete an order",
  tags: ["orders"],
  description: "Deletes an order from the database.",
  requestParams: {
    path: z.object({ id: OrderIdSchema }),
  },
  responses: {
    "204": {
      description: "The order was deleted successfully.",
    },
  },
};

const updateOrder: ZodOpenApiOperationObject = {
  operationId: "updateOrder",
  summary: "Update an order",
  tags: ["orders"],
  description: "Updates an order in the database.",
  requestParams: {
    path: z.object({ id: OrderIdSchema }),
  },
  requestBody: {
    description: "The order to update.",
    content: {
      "application/json": {
        schema: orderUpdateSchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The order was updated successfully.",
      content: {
        "application/json": {
          schema: orderSchema,
        },
      },
    },
  },
};

const createOrderWebhook: ZodOpenApiOperationObject = {
  operationId: "createOrderWebhook",
  summary: "New order webhook",
  tags: ["orders"],
  description: "A webhook that is called when a new order is created.",
  requestBody: {
    description: "The order that was created.",
    content: {
      "application/json": {
        schema: orderSchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The webhook was processed successfully.",
    },
  },
};

const orderStatusChangeWebhook: ZodOpenApiOperationObject = {
  operationId: "orderStatusChangeWebhook",
  summary: "Order status change webhook",
  tags: ["orders"],
  description: "A webhook that is called when an order's status changes.",
  requestBody: {
    description: "The order that was updated.",
    content: {
      "application/json": {
        schema: orderSchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The webhook was processed successfully.",
    },
  },
};

const document = createDocument({
  openapi: "3.1.0",
  info: {
    title: "Burger Restaurant API",
    description: "An API for managing burgers at a restaurant.",
    version: "1.0.0",
  },
  paths: {
    "/burgers": {
      post: createBurger,
      get: listBurgers,
    },
    "/burgers/{id}": {
      get: getBurger,
      patch: updateBurger,
      delete: deleteBurger,
    },
    "/orders": {
      post: createOrder,
      get: listOrders,
    },
    "/orders/{id}": {
      get: getOrder,
      patch: updateOrder,
      delete: deleteOrder,
    },
  },
  webhooks: {
    "/burgers": {
      post: createBurgerWebhook,
    },
    "/orders": {
      post: createOrderWebhook,
    },
    "/orders/{id}": {
      patch: orderStatusChangeWebhook,
    },
  },
  servers: [
    {
      url: "https://example.com",
      description: "The production server.",
    },
  ],
  tags: [
    {
      name: "burgers",
      description: "Operations for managing burgers.",
    },
    {
      name: "orders",
      description: "Operations for managing orders.",
    },
  ],
  "x-speakeasy-retries": {
    strategy: "backoff",
    backoff: {
      initialInterval: 500,
      maxInterval: 60000,
      maxElapsedTime: 3600000,
      exponent: 1.5,
    },
    statusCodes: ["5XX"],
    retryConnectionErrors: true,
  },
});

console.log(yaml.stringify(document));
