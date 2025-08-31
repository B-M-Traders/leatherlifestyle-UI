import Showconfetti from "@/components/layout/HeaderFooter/Showconfetti";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, MapPin } from "lucide-react";

export default function Page() {
  // Dummy order data
  const order = {
    id: "order_12345",
    display_id: "100012",
    created_at: "2025-08-15T10:20:30Z",
    currency_code: "USD",
    subtotal: 20000,
    discount_total: 2000,
    shipping_total: 500,
    tax_total: 1800,
    total: 20300,
    email: "john.doe@example.com",
    payment_status: "paid",
    shipping_address: {
      first_name: "John",
      last_name: "Doe",
      company: "Acme Inc.",
      address_1: "123 Main St",
      address_2: "Apt 4B",
      city: "New York",
      province: "NY",
      postal_code: "10001",
      country_code: "US",
      phone: "+1 555-123-4567",
    },
    billing_address: {
      first_name: "John",
      last_name: "Doe",
      company: "Acme Inc.",
      address_1: "123 Main St",
      address_2: "Apt 4B",
      city: "New York",
      province: "NY",
      postal_code: "10001",
      country_code: "US",
      phone: "+1 555-123-4567",
    },
    items: [
      {
        id: "item_1",
        title: "Leather Wallet",
        variant_sku: "WALLET-001",
        variant_barcode: "123456789",
        thumbnail: "/dummy/wallet.png",
        product_handle: "leather-wallet",
        product_type: "Accessories",
        unit_price: 10000,
        quantity: 1,
      },
      {
        id: "item_2",
        title: "Handmade Belt",
        variant_sku: "BELT-001",
        variant_barcode: "987654321",
        thumbnail: "/dummy/belt.png",
        product_handle: "handmade-belt",
        product_type: "Accessories",
        unit_price: 10000,
        quantity: 1,
      },
    ],
  };

  const order_id = order.display_id;
  const formattedDate = new Date(order.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="py-12 sm:py-16 lg:py-20 space-y-8 bg-background">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
            <h1 className="text-lg font-semibold text-foreground">
              Payment Successful
            </h1>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Thanks for your order!
            </p>
            <p className="mt-4 text-base text-foreground-muted">
              Order #{order_id} has been placed successfully on {formattedDate}.
            </p>
            <p className="mt-2 text-base text-foreground-muted">
              We appreciate your order. We're currently processing it and will
              send you a confirmation email soon.
            </p>
          </div>

          {/* Order Items */}
          <div className="bg-background-elevated rounded-lg p-6 border border-border">
            <h2 className="text-lg font-semibold text-foreground">
              Order Items
            </h2>
            <ul role="list" className="divide-y divide-border">
              {order.items.map((item) => (
                <div>dd</div>
                //   <OrderLineitem
                //     key={item.id}
                //     item={item}
                //     currencyCode={order.currency_code}
                //     className="py-4"
                //   />
              ))}
            </ul>
          </div>

          {/* Order Summary */}
          <div className="bg-background-elevated rounded-lg p-6 border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm text-foreground-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-foreground">
                  {/* {convertToLocale({
                  amount: order.subtotal,
                  currency_code: order.currency_code,
                })} */}
                  $100
                </span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-foreground">
                  - $100
                  {/* {convertToLocale({
                  amount: order.discount_total,
                  currency_code: order.currency_code,
                })} */}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-foreground">
                  $100
                  {/* {convertToLocale({
                  amount: order.shipping_total,
                  currency_code: order.currency_code,
                })} */}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span className="text-foreground">
                  $100
                  {/* {convertToLocale({
                  amount: order.tax_total,
                  currency_code: order.currency_code,
                })} */}
                </span>
              </div>
              <div className="flex justify-between font-semibold text-foreground border-t border-border pt-3">
                <span>Total</span>
                <span>
                  $100
                  {/* {convertToLocale({
                  amount: order.total,
                  currency_code: order.currency_code,
                })} */}
                </span>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shipping Address */}
            <div className="bg-background-elevated rounded-lg p-6 border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Shipping Address
              </h2>
              <div className="text-sm text-foreground-muted space-y-1">
                <p>
                  {order.shipping_address.first_name}{" "}
                  {order.shipping_address.last_name}
                </p>
                <p>{order.shipping_address.company}</p>
                <p>
                  {order.shipping_address.address_1}
                  {order.shipping_address.address_2
                    ? `, ${order.shipping_address.address_2}`
                    : ""}
                </p>
                <p>
                  {order.shipping_address.city},{" "}
                  {order.shipping_address.province}{" "}
                  {order.shipping_address.postal_code}
                </p>
                <p className="uppercase">
                  {order.shipping_address.country_code}
                </p>
                <p className="text-foreground-disabled">
                  {order.shipping_address.phone}
                </p>
              </div>
            </div>

            {/* Billing Address */}
            <div className="bg-background-elevated rounded-lg p-6 border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Billing Address
              </h2>
              <div className="text-sm text-foreground-muted space-y-1">
                <p>
                  {order.billing_address.first_name}{" "}
                  {order.billing_address.last_name}
                </p>
                <p>{order.billing_address.company}</p>
                <p>
                  {order.billing_address.address_1}
                  {order.billing_address.address_2
                    ? `, ${order.billing_address.address_2}`
                    : ""}
                </p>
                <p>
                  {order.billing_address.city}, {order.billing_address.province}{" "}
                  {order.billing_address.postal_code}
                </p>
                <p className="uppercase">
                  {order.billing_address.country_code}
                </p>
                <p className="text-foreground-disabled">
                  {order.billing_address.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-background-elevated rounded-lg p-6 border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-accent" /> Payment Information
            </h2>
            <div className="text-sm text-foreground-muted space-y-1">
              <p>Email: {order.email}</p>
              <p>Method: Card (via Stripe)</p>
              <p>
                Status:{" "}
                {order.payment_status.charAt(0).toUpperCase() +
                  order.payment_status.slice(1)}
              </p>
              <p>
                Amount: $100
                {/* {convertToLocale({
                amount: order.total,
                currency_code: order.currency_code,
              })} */}
              </p>
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="text-center border-t border-border pt-6">
            <Button className="">Continue Shopping &rarr;</Button>
          </div>
        </div>
      </div>
      <Showconfetti />
    </>
  );
}
