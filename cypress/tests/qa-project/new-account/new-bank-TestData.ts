type TestBankVar = { value: string; isValid: boolean; message?: string };

const validBankName: TestBankVar = { value: "Real Bank", isValid: true };
const invalidBankName: TestBankVar = {
  value: "BCR",
  isValid: false,
  message: "Must contain at least 5 characters",
};

const validRoutingNumber: TestBankVar = { value: "123456789", isValid: true };
const ToShortRoutingNumber: TestBankVar = {
  value: "12345678",
  isValid: false,
  message: "Must contain a valid routing number",
};
const ToLongRoutingNumber: TestBankVar = {
  value: "1234567890",
  isValid: false,
  message: "Must contain a valid routing number",
};
const NotNumericRoutingNumber: TestBankVar = {
  value: "Text",
  isValid: false,
  message: "Must contain a valid routing number",
};

const validAccountNumber: TestBankVar = { value: "123456789", isValid: true };
const ToShortAccountNumber: TestBankVar = {
  value: "12345678",
  isValid: false,
  message: "Must contain at least 9 digits",
};
const ToLongAccountNumber: TestBankVar = {
  value: "1234567890123",
  isValid: false,
  message: "Must contain no more than 12 digits",
};
const NotNumericAccountNumber: TestBankVar = {
  value: "Text",
  isValid: false,
  message: "Must contain at least 9 digits",
};

const bankNames = [validBankName, invalidBankName];

const routingNumbers = [
  validRoutingNumber,
  ToShortRoutingNumber,
  ToLongRoutingNumber,
  NotNumericRoutingNumber,
];
const accountNumbers = [
  validAccountNumber,
  ToShortAccountNumber,
  ToLongAccountNumber,
  NotNumericAccountNumber,
];

interface BankTestData {
  bankName: TestBankVar;
  routingNumber: TestBankVar;
  accountNumber: TestBankVar;
}

const bankData: BankTestData[] = [];

for (const bankName of bankNames) {
  for (const routingNumber of routingNumbers) {
    for (const accountNumber of accountNumbers) {
      bankData.push({
        bankName,
        routingNumber,
        accountNumber,
      });
    }
  }
}

export { bankData, TestBankVar, BankTestData };
