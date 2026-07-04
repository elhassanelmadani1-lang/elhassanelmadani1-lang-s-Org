/**
 * Helper utility to generate standardized Moroccan DXN WhatsApp order messages.
 */

export interface OrderProduct {
  name: string;
  desc: string;
  qty: number;
  price: number;
  total: number;
}

export interface OrderDetails {
  customerName: string;
  customerCity: string;
  customerAddress: string;
  customerPhone: string;
  products: OrderProduct[];
  customerMessage: string;
  grandTotal?: number;
}

export function generateOrderMessage(details: OrderDetails) {
  // 1. Order date & time in Africa/Casablanca timezone
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Africa/Casablanca',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  const formatter = new Intl.DateTimeFormat('fr-FR', options);
  const parts = formatter.formatToParts(new Date());
  const day = parts.find(p => p.type === 'day')?.value || '04';
  const month = parts.find(p => p.type === 'month')?.value || '07';
  const year = parts.find(p => p.type === 'year')?.value || '2026';
  const hour = parts.find(p => p.type === 'hour')?.value || '11';
  const minute = parts.find(p => p.type === 'minute')?.value || '45';

  const yyyymmdd = `${year}${month}${day}`;
  const orderDate = `${day}/${month}/${year} - ${hour}:${minute}`;

  // 2. Auto-generated unique Order Number (#SN-YYYYMMDD-XXXX)
  const randomSuffix = Math.floor(1000 + Math.random() * 9000).toString();
  const orderNo = `#SN-${yyyymmdd}-${randomSuffix}`;

  // 3. Auto-calculate metrics
  const productTypesCount = details.products.length;
  const totalItemsCount = details.products.reduce((acc, p) => acc + p.qty, 0);
  const totalAmount = details.grandTotal !== undefined ? details.grandTotal : details.products.reduce((acc, p) => acc + p.total, 0);

  // 4. Formatting products list
  let productsListStr = '';
  if (productTypesCount === 1) {
    const p = details.products[0];
    productsListStr = `• الاسم: ${p.name}
• الوصف: ${p.desc}
• الكمية: ${p.qty}
• سعر الوحدة: ${p.price} DH
• المجموع: ${p.total} DH`;
  } else {
    productsListStr = details.products.map((p, index) => {
      return `المنتج ${index + 1}
• الاسم: ${p.name}
• الوصف: ${p.desc}
• الكمية: ${p.qty}
• سعر الوحدة: ${p.price} DH
• المجموع: ${p.total} DH`;
    }).join('\n\n');
  }

  // 5. Final Arabic formatted WhatsApp message template
  const msg = `👑 طلب شراء جديد - مكملات DXN الفاخرة 👑

🆔 رقم الطلب: ${orderNo}
📅 تاريخ الطلب: ${orderDate}

━━━━━━━━━━━━━━━━━━━━━━

👤 معلومات الزبون

• الاسم الكامل: ${details.customerName}
• المدينة: ${details.customerCity}
• عنوان التوصيل: ${details.customerAddress}
• رقم الهاتف / واتساب: ${details.customerPhone}

━━━━━━━━━━━━━━━━━━━━━━

📦 المنتجات المطلوبة

${productsListStr}

━━━━━━━━━━━━━━━━━━━━━━

💰 ملخص الطلب

• عدد أنواع المنتجات: ${productTypesCount}
• إجمالي عدد القطع: ${totalItemsCount}
• المبلغ الإجمالي: ${totalAmount} DH
• طريقة الدفع: الدفع عند الاستلام (COD)

━━━━━━━━━━━━━━━━━━━━━━

🎁 المزايا

• شحن سريع وآمن
• منتج أصلي 100%
• متابعة مجانية

━━━━━━━━━━━━━━━━━━━━━━

📝 رسالة العميل

${details.customerMessage}`;

  return {
    orderNo,
    orderDate,
    message: msg
  };
}
