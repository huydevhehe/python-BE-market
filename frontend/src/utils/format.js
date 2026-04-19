/**
 * Định dạng tiền tệ theo phong cách Luxury:
 * - Có dấu phẩy ngăn cách hàng nghìn.
 * - Không hiện số thập phân .00 nếu là số chẵn.
 * - Hiện tối đa 2 chữ số thập phân nếu cần.
 */
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };
