Checklist
 Re‑read the project specification and capture functional requirements

 Identify entities (Product, CartItem, Order, OrderItem) and their fields

 Review the ERD diagram (see attachment)

 Define the initial file structure

 Decide on data fetching (React Query) and state management (Zustand)

 Note bootstrap commands to run in your terminal

 Create an initial project log with design notes

Project Log (initial entries)
11 Aug 2025: Read the full specification and summarised core features. Decided to use the recommended tools (Next.js 15, React Query, Zustand, Zod, Fuse.js, Tailwind, clsx, Suspense & Error boundaries). Determined that products will be served from a static JSON file using a fetch helper. Cart state will live in a Zustand store and will not persist to a database initially.

11 Aug 2025: Drafted the ERD diagram (see attached file) capturing relationships among Product, CartItem, Order, OrderItem, and CheckoutForm. This diagram will guide type definitions and API responses.

11 Aug 2025: Planned file structure aligning with Next.js App Router conventions. Identified key components and pages to be created.


                 +-----------+            +-----------+            +-----------+
                 |  Product  |            | CartItem  |            |   Order   |
                 |-----------|            |-----------|            |-----------|
                 | id (PK)   | 1       *  | productId |  *     1   | id (PK)   |
                 | name      |------------| quantity  |------------| customerName |
                 | description|            +-----------+            | email     |
                 | price     |                                  | shippingAddress |
                 | imageUrl  |                                  | total     |
                 +-----------+                                  +-----------+
                       |                                        |
                       |                                        |
                       | 1..*                               1..* |
                       v                                        v
                 +-----------+                                +---------------+
                 | OrderItem |                                | CheckoutForm |
                 |-----------|                                |---------------|
                 | id (PK)   |                                | name          |
                 | orderId   | (FK -> Order.id)               | email         |
                 | productId | (FK -> Product.id)             | shippingAddr |
                 | quantity  |                                +---------------+
                 | unitPrice |  
                 +-----------+


Notes:

Product represents solar equipment with an auto-incrementing id, name, description, price, and imageUrl fields.

CartItem is a transient state object (handled in Zustand) that stores a productId reference and a quantity. It models items currently in the user's cart.

Order represents a completed purchase after checkout, containing customer details (customerName, email, shippingAddress) and the final total cost. Each order contains multiple OrderItem entries.

OrderItem links products to an order with specific quantities and unit prices. It uses foreign keys to both Order and Product.

CheckoutForm is a conceptual representation of the fields collected during checkout; it is validated by Zod and sent via React Query. It can map directly into the Order table.