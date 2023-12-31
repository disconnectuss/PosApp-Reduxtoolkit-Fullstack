import { Button, Modal } from "antd";

const PrintInvoice = ({ isModalOpen, setIsModalOpen }) => {
  //
  return (
    <div>
      <Modal
        title="Invoice"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
        width={800}
      >
        <section className="py-10">
          <div className="bg-gray-800 h-10"></div>
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-800">LOGO</h2>
              </div>
              <div className="bill-details">
                <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Details:</p>
                    <p>Unwrapped</p>
                    <p> Fake Street 123</p>
                    <p> San Javier </p>
                    <p> CA 1234</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Invoice:</p>
                    The Boring Company
                    <p> Tesla Street 007</p>
                    <p> Frisco </p>
                    <p> CA 0000</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">Invoice No:</p>
                      <p>00041</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">Date:</p>
                      <p>2022-11-21</p>
                    </div>
                  </div>
                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">Terms:</p>
                      <p>10 days</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">Due:</p>
                      <p>2023-11-21</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bill-table-area mt-4">
                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        image
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        {" "}
                        title
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        price
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        number
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 ">
                        <img
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4">
                        <span className="font-medium">Şalgam</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>5₺</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>1</span>
                      </td>
                      <td className="py-4 text-end">
                        <span>5.00₺</span>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 ">
                        <img
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4">
                        <span className="font-medium">Şalgam</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>5₺</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>1</span>
                      </td>
                      <td className="py-4 text-end">
                        <span>5.00₺</span>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 ">
                        <img
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4">
                        <span className="font-medium">Şalgam</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>5₺</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>1</span>
                      </td>
                      <td className="py-4 text-end">
                        <span>5.00₺</span>
                      </td>
                    </tr>{" "}
                   
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-right pt-6" colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">
                          total
                        </span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">61₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-right pt-4" colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">KDV</span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-red-600">+4.88₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-right pt-4" colSpan="4" scope="row">
                        <span className="font-normal text-slate-700">
                          bill Total
                        </span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">
                          65.88₺
                        </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div className="py-5">
                  <div className="border-t pt-5 border-slate-200">
                    <p className="text-sm font-light text-slate-700">
                      Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                      Ödenmesi Yasası 0000'e göre, serbest çalışanların bu
                      süreden sonra borçların ödenmemesi durumunda 00.00 gecikme
                      ücreti talep etme hakkına sahip olduklarını ve bu noktada
                      bu ücrete ek olarak yeni bir fatura sunulacağını lütfen
                      unutmayın. Revize faturanın 14 gün içinde ödenmemesi
                      durumunda, vadesi geçmiş hesaba ek faiz ve %8 yasal oran
                      artı %0,5 Bank of England tabanı olmak üzere toplam %8,5
                      uygulanacaktır. Taraflar Kanun hükümleri dışında sözleşme
                      yapamazlar.// personally can be changed
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="bg-gray-800 h-10"></div>
        </section>
        <div className="flex justify-end mt-1">
          <Button className="printBtn" type="primary" size="large">
            Print
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default PrintInvoice;
