const priceFormater = price => 
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    })
      .format(price)
      .replace('Rp', 'Rp. ');

export default priceFormater;
