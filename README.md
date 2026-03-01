Instead of switching blindly:

* Create new MySQL branch
* Migrate one model at a time
* Replace queries gradually
* Test endpoints
* Then remove Mongo completely
* Do NOT try to rewrite everything at once.


CREATE TABLE addresses (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    zip_code VARCHAR(20),
    is_default TINYINT(1) DEFAULT 0,
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_address_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);
CREATE TABLE brands (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    slug VARCHAR(255) UNIQUE,
    image_data LONGBLOB,
    image_content_type VARCHAR(100),
    description TEXT,
    is_active TINYINT(1) DEFAULT 1,
    merchant_id BIGINT UNSIGNED NULL,
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_brand_merchant
        FOREIGN KEY (merchant_id) REFERENCES merchants(id)
        ON DELETE SET NULL
);
CREATE TABLE categories (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    slug VARCHAR(255) UNIQUE,
    image_data LONGBLOB,
    image_content_type VARCHAR(100),
    description TEXT,
    is_active TINYINT(1) DEFAULT 1,
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE category_products (
    category_id BIGINT UNSIGNED NOT NULL,
    product_id BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (category_id, product_id),

    FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE CASCADE,

    FOREIGN KEY (product_id) REFERENCES products(id)
        ON DELETE CASCADE
);

//instead of Cart → embedded products[] .

//carts
//cart_items
CREATE TABLE carts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_cart_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);
CREATE TABLE cart_items (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cart_id BIGINT UNSIGNED NOT NULL,
    product_id BIGINT UNSIGNED NOT NULL,
    quantity INT DEFAULT 1,
    purchase_price DECIMAL(10,2) DEFAULT 0,
    total_price DECIMAL(10,2) DEFAULT 0,
    price_with_tax DECIMAL(10,2) DEFAULT 0,
    total_tax DECIMAL(10,2) DEFAULT 0,
    status ENUM(
        'Not_processed',
        'Processing',
        'Shipped',
        'Delivered',
        'Cancelled'
    ) DEFAULT 'Not_processed',

    FOREIGN KEY (cart_id) REFERENCES carts(id)
        ON DELETE CASCADE,

    FOREIGN KEY (product_id) REFERENCES products(id)
        ON DELETE CASCADE
);
CREATE TABLE contacts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    message TEXT,
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP
);

//indexing
CREATE INDEX idx_brand_slug ON brands(slug);
CREATE INDEX idx_category_slug ON categories(slug);
CREATE INDEX idx_cart_user ON carts(user_id);
CREATE INDEX idx_cart_items_product ON cart_items(product_id);


CREATE TABLE merchants (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(50),
    brand_name VARCHAR(255),
    business VARCHAR(255),
    is_active TINYINT(1) DEFAULT 0,
    brand_id BIGINT UNSIGNED NULL,
    status ENUM(
        'Waiting_Approval',
        'Rejected',
        'Approved'
    ) DEFAULT 'Waiting_Approval',
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_merchant_brand
        FOREIGN KEY (brand_id) REFERENCES brands(id)
        ON DELETE SET NULL
);

CREATE TABLE orders (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cart_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    total DECIMAL(10,2) DEFAULT 0,
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_order_cart
        FOREIGN KEY (cart_id) REFERENCES carts(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_order_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE products (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    sku VARCHAR(100),
    name VARCHAR(255),
    slug VARCHAR(255) UNIQUE,
    image_url VARCHAR(500),
    image_key VARCHAR(255),
    description TEXT,
    quantity INT DEFAULT 0,
    price DECIMAL(10,2) DEFAULT 0,
    taxable TINYINT(1) DEFAULT 0,
    is_active TINYINT(1) DEFAULT 1,
    brand_id BIGINT UNSIGNED NULL,
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_product_brand
        FOREIGN KEY (brand_id) REFERENCES brands(id)
        ON DELETE SET NULL
);

CREATE TABLE reviews (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT UNSIGNED NULL,
    user_id BIGINT UNSIGNED NULL,
    title VARCHAR(255),
    rating INT DEFAULT 0,
    review TEXT,
    is_recommended TINYINT(1) DEFAULT 1,
    status ENUM(
        'Waiting_Approval',
        'Rejected',
        'Approved'
    ) DEFAULT 'Waiting_Approval',
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_review_product
        FOREIGN KEY (product_id) REFERENCES products(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_review_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE SET NULL
);

CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    phone_number VARCHAR(50),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(255),
    merchant_id BIGINT UNSIGNED NULL,
    provider ENUM('Email', 'Google', 'Facebook') DEFAULT 'Email',
    google_id VARCHAR(255),
    facebook_id VARCHAR(255),
    avatar VARCHAR(500),
    role ENUM('Admin', 'Member', 'Merchant') DEFAULT 'Member',
    reset_password_token VARCHAR(255),
    reset_password_expires DATETIME NULL,
    updated DATETIME NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_user_merchant
        FOREIGN KEY (merchant_id) REFERENCES merchants(id)
        ON DELETE SET NULL
);

ALTER TABLE users ADD UNIQUE (email);

CREATE TABLE wishlists (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT UNSIGNED NULL,
    user_id BIGINT UNSIGNED NULL,
    is_liked TINYINT(1) DEFAULT 0,
    updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_wishlist_product
        FOREIGN KEY (product_id) REFERENCES products(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_wishlist_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE,

    UNIQUE KEY unique_user_product (user_id, product_id)
);