var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _channelProperties = require("./channelProperties");
var _customer_details = require("./customer_details");
var _customer_details_transaction = require("./customer_details_transaction");
var _directus_activity = require("./directus_activity");
var _directus_collections = require("./directus_collections");
var _directus_dashboards = require("./directus_dashboards");
var _directus_fields = require("./directus_fields");
var _directus_files = require("./directus_files");
var _directus_flows = require("./directus_flows");
var _directus_folders = require("./directus_folders");
var _directus_migrations = require("./directus_migrations");
var _directus_notifications = require("./directus_notifications");
var _directus_operations = require("./directus_operations");
var _directus_panels = require("./directus_panels");
var _directus_permissions = require("./directus_permissions");
var _directus_presets = require("./directus_presets");
var _directus_relations = require("./directus_relations");
var _directus_revisions = require("./directus_revisions");
var _directus_roles = require("./directus_roles");
var _directus_sessions = require("./directus_sessions");
var _directus_settings = require("./directus_settings");
var _directus_shares = require("./directus_shares");
var _directus_users = require("./directus_users");
var _directus_webhooks = require("./directus_webhooks");
var _discount = require("./discount");
var _ingredient = require("./ingredient");
var _ingredient_category = require("./ingredient_category");
var _inventory = require("./inventory");
var _order = require("./order");
var _order_details = require("./order_details");
var _payment = require("./payment");
var _payment_category = require("./payment_category");
var _product = require("./product");
var _product_category = require("./product_category");
var _products = require("./products");
var _recipes = require("./recipes");
var _tiket = require("./tiket");
var _transaction = require("./transaction");
var _transaction_details = require("./transaction_details");
var _xendit_ewallet = require("./xendit_ewallet");
var _xendit_qr = require("./xendit_qr");
var _xendit_va = require("./xendit_va");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var channelProperties = _channelProperties(sequelize, DataTypes);
  var customer_details = _customer_details(sequelize, DataTypes);
  var customer_details_transaction = _customer_details_transaction(sequelize, DataTypes);
  var directus_activity = _directus_activity(sequelize, DataTypes);
  var directus_collections = _directus_collections(sequelize, DataTypes);
  var directus_dashboards = _directus_dashboards(sequelize, DataTypes);
  var directus_fields = _directus_fields(sequelize, DataTypes);
  var directus_files = _directus_files(sequelize, DataTypes);
  var directus_flows = _directus_flows(sequelize, DataTypes);
  var directus_folders = _directus_folders(sequelize, DataTypes);
  var directus_migrations = _directus_migrations(sequelize, DataTypes);
  var directus_notifications = _directus_notifications(sequelize, DataTypes);
  var directus_operations = _directus_operations(sequelize, DataTypes);
  var directus_panels = _directus_panels(sequelize, DataTypes);
  var directus_permissions = _directus_permissions(sequelize, DataTypes);
  var directus_presets = _directus_presets(sequelize, DataTypes);
  var directus_relations = _directus_relations(sequelize, DataTypes);
  var directus_revisions = _directus_revisions(sequelize, DataTypes);
  var directus_roles = _directus_roles(sequelize, DataTypes);
  var directus_sessions = _directus_sessions(sequelize, DataTypes);
  var directus_settings = _directus_settings(sequelize, DataTypes);
  var directus_shares = _directus_shares(sequelize, DataTypes);
  var directus_users = _directus_users(sequelize, DataTypes);
  var directus_webhooks = _directus_webhooks(sequelize, DataTypes);
  var discount = _discount(sequelize, DataTypes);
  var ingredient = _ingredient(sequelize, DataTypes);
  var ingredient_category = _ingredient_category(sequelize, DataTypes);
  var inventory = _inventory(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var order_details = _order_details(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var payment_category = _payment_category(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_category = _product_category(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var recipes = _recipes(sequelize, DataTypes);
  var tiket = _tiket(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);
  var transaction_details = _transaction_details(sequelize, DataTypes);
  var xendit_ewallet = _xendit_ewallet(sequelize, DataTypes);
  var xendit_qr = _xendit_qr(sequelize, DataTypes);
  var xendit_va = _xendit_va(sequelize, DataTypes);

  product_category.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(product_category, { as: "product_categories", foreignKey: "category_id"});
  xendit_ewallet.belongsTo(channelProperties, { as: "channelProperties_channelProperty", foreignKey: "channelProperties"});
  channelProperties.hasOne(xendit_ewallet, { as: "xendit_ewallet", foreignKey: "channelProperties"});
  customer_details_transaction.belongsTo(customer_details, { as: "customer_detail", foreignKey: "customer_details_id"});
  customer_details.hasMany(customer_details_transaction, { as: "customer_details_customer_details_transactions", foreignKey: "customer_details_id"});
  order.belongsTo(customer_details, { as: "customer_customer_detail", foreignKey: "customer"});
  customer_details.hasOne(order, { as: "order", foreignKey: "customer"});
  transaction.belongsTo(customer_details, { as: "customer_details_customer_detail", foreignKey: "customer_details"});
  customer_details.hasMany(transaction, { as: "transactions", foreignKey: "customer_details"});
  xendit_ewallet.belongsTo(customer_details, { as: "customer_details_customer_detail", foreignKey: "customer_details"});
  customer_details.hasOne(xendit_ewallet, { as: "xendit_ewallet", foreignKey: "customer_details"});
  xendit_va.belongsTo(customer_details, { as: "customer_details_customer_detail", foreignKey: "customer_details"});
  customer_details.hasOne(xendit_va, { as: "xendit_va", foreignKey: "customer_details"});
  directus_revisions.belongsTo(directus_activity, { as: "activity_directus_activity", foreignKey: "activity"});
  directus_activity.hasMany(directus_revisions, { as: "directus_revisions", foreignKey: "activity"});
  directus_collections.belongsTo(directus_collections, { as: "group_directus_collection", foreignKey: "group"});
  directus_collections.hasMany(directus_collections, { as: "directus_collections", foreignKey: "group"});
  directus_shares.belongsTo(directus_collections, { as: "collection_directus_collection", foreignKey: "collection"});
  directus_collections.hasMany(directus_shares, { as: "directus_shares", foreignKey: "collection"});
  directus_panels.belongsTo(directus_dashboards, { as: "dashboard_directus_dashboard", foreignKey: "dashboard"});
  directus_dashboards.hasMany(directus_panels, { as: "directus_panels", foreignKey: "dashboard"});
  directus_settings.belongsTo(directus_files, { as: "project_logo_directus_file", foreignKey: "project_logo"});
  directus_files.hasMany(directus_settings, { as: "directus_settings", foreignKey: "project_logo"});
  directus_settings.belongsTo(directus_files, { as: "public_background_directus_file", foreignKey: "public_background"});
  directus_files.hasMany(directus_settings, { as: "public_background_directus_settings", foreignKey: "public_background"});
  directus_settings.belongsTo(directus_files, { as: "public_foreground_directus_file", foreignKey: "public_foreground"});
  directus_files.hasMany(directus_settings, { as: "public_foreground_directus_settings", foreignKey: "public_foreground"});
  product.belongsTo(directus_files, { as: "product_image_directus_file", foreignKey: "product_image"});
  directus_files.hasMany(product, { as: "products", foreignKey: "product_image"});
  directus_operations.belongsTo(directus_flows, { as: "flow_directus_flow", foreignKey: "flow"});
  directus_flows.hasMany(directus_operations, { as: "directus_operations", foreignKey: "flow"});
  directus_files.belongsTo(directus_folders, { as: "folder_directus_folder", foreignKey: "folder"});
  directus_folders.hasMany(directus_files, { as: "directus_files", foreignKey: "folder"});
  directus_folders.belongsTo(directus_folders, { as: "parent_directus_folder", foreignKey: "parent"});
  directus_folders.hasMany(directus_folders, { as: "directus_folders", foreignKey: "parent"});
  directus_settings.belongsTo(directus_folders, { as: "storage_default_folder_directus_folder", foreignKey: "storage_default_folder"});
  directus_folders.hasMany(directus_settings, { as: "directus_settings", foreignKey: "storage_default_folder"});
  directus_operations.belongsTo(directus_operations, { as: "reject_directus_operation", foreignKey: "reject"});
  directus_operations.hasOne(directus_operations, { as: "directus_operation", foreignKey: "reject"});
  directus_operations.belongsTo(directus_operations, { as: "resolve_directus_operation", foreignKey: "resolve"});
  directus_operations.hasOne(directus_operations, { as: "resolve_directus_operation", foreignKey: "resolve"});
  directus_revisions.belongsTo(directus_revisions, { as: "parent_directus_revision", foreignKey: "parent"});
  directus_revisions.hasMany(directus_revisions, { as: "directus_revisions", foreignKey: "parent"});
  directus_permissions.belongsTo(directus_roles, { as: "role_directus_role", foreignKey: "role"});
  directus_roles.hasMany(directus_permissions, { as: "directus_permissions", foreignKey: "role"});
  directus_presets.belongsTo(directus_roles, { as: "role_directus_role", foreignKey: "role"});
  directus_roles.hasMany(directus_presets, { as: "directus_presets", foreignKey: "role"});
  directus_shares.belongsTo(directus_roles, { as: "role_directus_role", foreignKey: "role"});
  directus_roles.hasMany(directus_shares, { as: "directus_shares", foreignKey: "role"});
  directus_users.belongsTo(directus_roles, { as: "role_directus_role", foreignKey: "role"});
  directus_roles.hasMany(directus_users, { as: "directus_users", foreignKey: "role"});
  directus_sessions.belongsTo(directus_shares, { as: "share_directus_share", foreignKey: "share"});
  directus_shares.hasMany(directus_sessions, { as: "directus_sessions", foreignKey: "share"});
  category.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(category, { as: "categories", foreignKey: "user_created"});
  category.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(category, { as: "user_updated_categories", foreignKey: "user_updated"});
  customer_details.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(customer_details, { as: "customer_details", foreignKey: "user_created"});
  customer_details.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(customer_details, { as: "user_updated_customer_details", foreignKey: "user_updated"});
  directus_dashboards.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(directus_dashboards, { as: "directus_dashboards", foreignKey: "user_created"});
  directus_files.belongsTo(directus_users, { as: "modified_by_directus_user", foreignKey: "modified_by"});
  directus_users.hasMany(directus_files, { as: "directus_files", foreignKey: "modified_by"});
  directus_files.belongsTo(directus_users, { as: "uploaded_by_directus_user", foreignKey: "uploaded_by"});
  directus_users.hasMany(directus_files, { as: "uploaded_by_directus_files", foreignKey: "uploaded_by"});
  directus_flows.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(directus_flows, { as: "directus_flows", foreignKey: "user_created"});
  directus_notifications.belongsTo(directus_users, { as: "recipient_directus_user", foreignKey: "recipient"});
  directus_users.hasMany(directus_notifications, { as: "directus_notifications", foreignKey: "recipient"});
  directus_notifications.belongsTo(directus_users, { as: "sender_directus_user", foreignKey: "sender"});
  directus_users.hasMany(directus_notifications, { as: "sender_directus_notifications", foreignKey: "sender"});
  directus_operations.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(directus_operations, { as: "directus_operations", foreignKey: "user_created"});
  directus_panels.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(directus_panels, { as: "directus_panels", foreignKey: "user_created"});
  directus_presets.belongsTo(directus_users, { as: "user_directus_user", foreignKey: "user"});
  directus_users.hasMany(directus_presets, { as: "directus_presets", foreignKey: "user"});
  directus_sessions.belongsTo(directus_users, { as: "user_directus_user", foreignKey: "user"});
  directus_users.hasMany(directus_sessions, { as: "directus_sessions", foreignKey: "user"});
  directus_shares.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(directus_shares, { as: "directus_shares", foreignKey: "user_created"});
  ingredient.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(ingredient, { as: "ingredients", foreignKey: "user_created"});
  ingredient.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(ingredient, { as: "user_updated_ingredients", foreignKey: "user_updated"});
  ingredient_category.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(ingredient_category, { as: "ingredient_categories", foreignKey: "user_created"});
  ingredient_category.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(ingredient_category, { as: "user_updated_ingredient_categories", foreignKey: "user_updated"});
  inventory.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(inventory, { as: "inventories", foreignKey: "user_created"});
  inventory.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(inventory, { as: "user_updated_inventories", foreignKey: "user_updated"});
  order.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(order, { as: "orders", foreignKey: "user_created"});
  order.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(order, { as: "user_updated_orders", foreignKey: "user_updated"});
  order_details.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(order_details, { as: "order_details", foreignKey: "user_created"});
  order_details.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(order_details, { as: "user_updated_order_details", foreignKey: "user_updated"});
  payment.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(payment, { as: "payments", foreignKey: "user_created"});
  payment.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(payment, { as: "user_updated_payments", foreignKey: "user_updated"});
  payment_category.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(payment_category, { as: "payment_categories", foreignKey: "user_created"});
  payment_category.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(payment_category, { as: "user_updated_payment_categories", foreignKey: "user_updated"});
  product.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(product, { as: "products", foreignKey: "user_created"});
  product.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(product, { as: "user_updated_products", foreignKey: "user_updated"});
  recipes.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(recipes, { as: "recipes", foreignKey: "user_created"});
  recipes.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(recipes, { as: "user_updated_recipes", foreignKey: "user_updated"});
  transaction.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(transaction, { as: "transactions", foreignKey: "user_created"});
  transaction.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(transaction, { as: "user_updated_transactions", foreignKey: "user_updated"});
  transaction_details.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(transaction_details, { as: "transaction_details", foreignKey: "user_created"});
  transaction_details.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(transaction_details, { as: "user_updated_transaction_details", foreignKey: "user_updated"});
  xendit_ewallet.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(xendit_ewallet, { as: "xendit_ewallets", foreignKey: "user_created"});
  xendit_ewallet.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(xendit_ewallet, { as: "user_updated_xendit_ewallets", foreignKey: "user_updated"});
  xendit_qr.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(xendit_qr, { as: "xendit_qrs", foreignKey: "user_created"});
  xendit_qr.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(xendit_qr, { as: "user_updated_xendit_qrs", foreignKey: "user_updated"});
  xendit_va.belongsTo(directus_users, { as: "user_created_directus_user", foreignKey: "user_created"});
  directus_users.hasMany(xendit_va, { as: "xendit_vas", foreignKey: "user_created"});
  xendit_va.belongsTo(directus_users, { as: "user_updated_directus_user", foreignKey: "user_updated"});
  directus_users.hasMany(xendit_va, { as: "user_updated_xendit_vas", foreignKey: "user_updated"});
  order_details.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(order_details, { as: "order_details", foreignKey: "order_id"});
  payment.belongsTo(order_details, { as: "order_product_details_order_detail", foreignKey: "order_product_details"});
  order_details.hasMany(payment, { as: "payments", foreignKey: "order_product_details"});
  product.belongsTo(order_details, { as: "order_details_order_detail", foreignKey: "order_details_id"});
  order_details.hasMany(product, { as: "order_details_products", foreignKey: "order_details_id"});
  order.belongsTo(payment, { as: "payment_payment", foreignKey: "payment"});
  payment.hasOne(order, { as: "order", foreignKey: "payment"});
  payment.belongsTo(payment_category, { as: "payment_category_payment_category", foreignKey: "payment_category"});
  payment_category.hasMany(payment, { as: "payments", foreignKey: "payment_category"});
  inventory.belongsTo(product, { as: "in_stock_product", foreignKey: "in_stock"});
  product.hasMany(inventory, { as: "inventories", foreignKey: "in_stock"});
  order_details.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order_details, { as: "order_details", foreignKey: "product_id"});
  product_category.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_category, { as: "product_categories", foreignKey: "product_id"});
  recipes.belongsTo(product, { as: "recipe_product_product", foreignKey: "recipe_product"});
  product.hasOne(recipes, { as: "recipe", foreignKey: "recipe_product"});
  ingredient.belongsTo(recipes, { as: "ingredient_recipe_recipe", foreignKey: "ingredient_recipe"});
  recipes.hasMany(ingredient, { as: "ingredients", foreignKey: "ingredient_recipe"});
  customer_details.belongsTo(transaction, { as: "customer_details_transaction", foreignKey: "customer_details"});
  transaction.hasMany(customer_details, { as: "customer_details", foreignKey: "customer_details"});
  customer_details_transaction.belongsTo(transaction, { as: "transaction", foreignKey: "transaction_id"});
  transaction.hasMany(customer_details_transaction, { as: "customer_details_transactions", foreignKey: "transaction_id"});
  product.belongsTo(transaction, { as: "product_transaction_transaction", foreignKey: "product_transaction"});
  transaction.hasMany(product, { as: "products", foreignKey: "product_transaction"});
  transaction.belongsTo(transaction_details, { as: "transaction_details_transaction_detail", foreignKey: "transaction_details"});
  transaction_details.hasOne(transaction, { as: "transaction", foreignKey: "transaction_details"});
  product.belongsTo(xendit_ewallet, { as: "product_xendit_ewallet", foreignKey: "product_xendit_ewallet_id"});
  xendit_ewallet.hasMany(product, { as: "products", foreignKey: "product_xendit_ewallet_id"});
  product.belongsTo(xendit_va, { as: "product_xendit_va", foreignKey: "product_xendit_va_id"});
  xendit_va.hasMany(product, { as: "products", foreignKey: "product_xendit_va_id"});

  return {
    category,
    channelProperties,
    customer_details,
    customer_details_transaction,
    directus_activity,
    directus_collections,
    directus_dashboards,
    directus_fields,
    directus_files,
    directus_flows,
    directus_folders,
    directus_migrations,
    directus_notifications,
    directus_operations,
    directus_panels,
    directus_permissions,
    directus_presets,
    directus_relations,
    directus_revisions,
    directus_roles,
    directus_sessions,
    directus_settings,
    directus_shares,
    directus_users,
    directus_webhooks,
    discount,
    ingredient,
    ingredient_category,
    inventory,
    order,
    order_details,
    payment,
    payment_category,
    product,
    product_category,
    products,
    recipes,
    tiket,
    transaction,
    transaction_details,
    xendit_ewallet,
    xendit_qr,
    xendit_va,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
