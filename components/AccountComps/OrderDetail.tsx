import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  Clock,
  CreditCard,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import Image from "next/image";

const orderData = {
  id: "ORD-2024-001234",
  date: "March 15, 2024",
  status: "shipped",
  total: 299.97,
  subtotal: 249.97,
  shipping: 15.0,
  tax: 35.0,
  estimatedDelivery: "March 18, 2024",
  trackingNumber: "1Z999AA1234567890",
  shippingAddress: {
    name: "John Doe",
    street: "123 Main Street",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    country: "United States",
  },
  paymentMethod: {
    type: "Credit Card",
    last4: "4242",
    brand: "Visa",
  },
  items: [
    {
      id: 1,
      name: "Green Premium Leather Jacket",
      description: "Green Premium Leather Jacket",
      price: 199.99,
      quantity: 1,
      image: "/product.jpg",
    },
    {
      id: 1,
      name: "Green Premium Leather Jacket",
      description: "Green Premium Leather Jacket",
      price: 199.99,
      quantity: 1,
      image: "/product2.jpg",
    },
  ],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "processing":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "shipped":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "delivered":
      return "bg-green-100 text-green-800 border-green-200";
    case "cancelled":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "processing":
      return <Clock className="h-4 w-4" />;
    case "shipped":
      return <Truck className="h-4 w-4" />;
    case "delivered":
      return <Package className="h-4 w-4" />;
    default:
      return <Package className="h-4 w-4" />;
  }
};

const OrderDetail = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/account/orders"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Orders
          </Link>
        </div>

        {/* Order Summary */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-templateBrown text-balance">
                  Order {orderData.id}
                </CardTitle>
                <p className="text-muted-foreground mt-1">
                  Placed on {orderData.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(orderData.status)}
                <Badge
                  className={`${getStatusColor(orderData.status)} capitalize`}
                >
                  {orderData.status}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Estimated Delivery
                  </p>
                  <p className="font-semibold text-templateBrown">
                    {orderData.estimatedDelivery}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Tracking Number
                  </p>
                  <p className="font-semibold text-templateBrown">
                    {orderData.trackingNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="font-semibold text-xl text-templateBrown">
                    ${orderData.total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Order Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderData.items.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex gap-4">
                      <Image
                        height={200}
                        width={200}
                        src={item.image || "/placeholder.webp"}
                        alt={item.name}
                        className="w-20 h-28 object-cover rounded-lg border"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-balance">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 text-pretty">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-muted-foreground">
                            Qty: {item.quantity}
                          </span>
                          <span className="font-semibold">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    {index < orderData.items.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Details Sidebar */}
          <div className="space-y-6">
            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-semibold">
                    {orderData.shippingAddress.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {orderData.shippingAddress.street}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {orderData.shippingAddress.city},{" "}
                    {orderData.shippingAddress.state}{" "}
                    {orderData.shippingAddress.zip}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {orderData.shippingAddress.country}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {orderData.paymentMethod.brand} ••••{" "}
                      {orderData.paymentMethod.last4}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {orderData.paymentMethod.type}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${orderData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${orderData.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${orderData.tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${orderData.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button className="flex-1 sm:flex-none bg-templateBrown">
            <Truck className="h-4 w-4 mr-2" />
            Track Order
          </Button>
          <Button
            variant="outline"
            className="flex-1 sm:flex-none bg-transparent"
          >
            Return Items
          </Button>
          <Button
            variant="outline"
            className="flex-1 sm:flex-none bg-transparent"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
