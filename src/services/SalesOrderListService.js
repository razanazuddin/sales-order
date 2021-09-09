const getAll = async () => {
  const response = await fetch('/list_sales_order')
  .then(response => response.json())
  .catch(error => {
    console.error(error);
  })
  return response;
};

const SalesOrderListService = {
  getAll
};

export default SalesOrderListService;