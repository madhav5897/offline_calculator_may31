import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HospitalcashService {
    
    hospitalcash:any= [
        {
            "id": "1620",
            "age": "80",
            "sumInsured": "5000",
            "premium": "107918",
            "gender": "0"
        },
        {
            "id": "1619",
            "age": "80",
            "sumInsured": "4500",
            "premium": "97126.4",
            "gender": "0"
        },
        {
            "id": "1618",
            "age": "80",
            "sumInsured": "4000",
            "premium": "86334.5",
            "gender": "0"
        },
        {
            "id": "1617",
            "age": "80",
            "sumInsured": "3500",
            "premium": "75542.7",
            "gender": "0"
        },
        {
            "id": "1616",
            "age": "80",
            "sumInsured": "3000",
            "premium": "64750.9",
            "gender": "0"
        },
        {
            "id": "1615",
            "age": "80",
            "sumInsured": "2500",
            "premium": "53959.1",
            "gender": "0"
        },
        {
            "id": "1614",
            "age": "80",
            "sumInsured": "2000",
            "premium": "43167.3",
            "gender": "0"
        },
        {
            "id": "1613",
            "age": "80",
            "sumInsured": "1500",
            "premium": "32375.5",
            "gender": "0"
        },
        {
            "id": "1612",
            "age": "80",
            "sumInsured": "1000",
            "premium": "21583.6",
            "gender": "0"
        },
        {
            "id": "1611",
            "age": "80",
            "sumInsured": "500",
            "premium": "10791.8",
            "gender": "0"
        },
        {
            "id": "1610",
            "age": "79",
            "sumInsured": "5000",
            "premium": "96786.8",
            "gender": "0"
        },
        {
            "id": "1609",
            "age": "79",
            "sumInsured": "4500",
            "premium": "87108.2",
            "gender": "0"
        },
        {
            "id": "1608",
            "age": "79",
            "sumInsured": "4000",
            "premium": "77429.5",
            "gender": "0"
        },
        {
            "id": "1607",
            "age": "79",
            "sumInsured": "3500",
            "premium": "67750.8",
            "gender": "0"
        },
        {
            "id": "1606",
            "age": "79",
            "sumInsured": "3000",
            "premium": "58072.1",
            "gender": "0"
        },
        {
            "id": "1605",
            "age": "79",
            "sumInsured": "2500",
            "premium": "48393.4",
            "gender": "0"
        },
        {
            "id": "1604",
            "age": "79",
            "sumInsured": "2000",
            "premium": "38714.7",
            "gender": "0"
        },
        {
            "id": "1603",
            "age": "79",
            "sumInsured": "1500",
            "premium": "29036.1",
            "gender": "0"
        },
        {
            "id": "1602",
            "age": "79",
            "sumInsured": "1000",
            "premium": "19357.4",
            "gender": "0"
        },
        {
            "id": "1601",
            "age": "79",
            "sumInsured": "500",
            "premium": "9678.68",
            "gender": "0"
        },
        {
            "id": "1600",
            "age": "78",
            "sumInsured": "5000",
            "premium": "86525",
            "gender": "0"
        },
        {
            "id": "1599",
            "age": "78",
            "sumInsured": "4500",
            "premium": "77872.5",
            "gender": "0"
        },
        {
            "id": "1598",
            "age": "78",
            "sumInsured": "4000",
            "premium": "69220",
            "gender": "0"
        },
        {
            "id": "1597",
            "age": "78",
            "sumInsured": "3500",
            "premium": "60567.5",
            "gender": "0"
        },
        {
            "id": "1596",
            "age": "78",
            "sumInsured": "3000",
            "premium": "51915",
            "gender": "0"
        },
        {
            "id": "1595",
            "age": "78",
            "sumInsured": "2500",
            "premium": "43262.5",
            "gender": "0"
        },
        {
            "id": "1594",
            "age": "78",
            "sumInsured": "2000",
            "premium": "34610",
            "gender": "0"
        },
        {
            "id": "1593",
            "age": "78",
            "sumInsured": "1500",
            "premium": "25957.5",
            "gender": "0"
        },
        {
            "id": "1592",
            "age": "78",
            "sumInsured": "1000",
            "premium": "17305",
            "gender": "0"
        },
        {
            "id": "1591",
            "age": "78",
            "sumInsured": "500",
            "premium": "8652.5",
            "gender": "0"
        },
        {
            "id": "1590",
            "age": "77",
            "sumInsured": "5000",
            "premium": "77934",
            "gender": "0"
        },
        {
            "id": "1589",
            "age": "77",
            "sumInsured": "4500",
            "premium": "70140.6",
            "gender": "0"
        },
        {
            "id": "1588",
            "age": "77",
            "sumInsured": "4000",
            "premium": "62347.2",
            "gender": "0"
        },
        {
            "id": "1587",
            "age": "77",
            "sumInsured": "3500",
            "premium": "54553.8",
            "gender": "0"
        },
        {
            "id": "1586",
            "age": "77",
            "sumInsured": "3000",
            "premium": "46760.4",
            "gender": "0"
        },
        {
            "id": "1585",
            "age": "77",
            "sumInsured": "2500",
            "premium": "38967",
            "gender": "0"
        },
        {
            "id": "1584",
            "age": "77",
            "sumInsured": "2000",
            "premium": "31173.6",
            "gender": "0"
        },
        {
            "id": "1583",
            "age": "77",
            "sumInsured": "1500",
            "premium": "23380.2",
            "gender": "0"
        },
        {
            "id": "1582",
            "age": "77",
            "sumInsured": "1000",
            "premium": "15586.8",
            "gender": "0"
        },
        {
            "id": "1581",
            "age": "77",
            "sumInsured": "500",
            "premium": "7793.4",
            "gender": "0"
        },
        {
            "id": "1580",
            "age": "76",
            "sumInsured": "5000",
            "premium": "70009.4",
            "gender": "0"
        },
        {
            "id": "1579",
            "age": "76",
            "sumInsured": "4500",
            "premium": "63008.4",
            "gender": "0"
        },
        {
            "id": "1578",
            "age": "76",
            "sumInsured": "4000",
            "premium": "56007.5",
            "gender": "0"
        },
        {
            "id": "1577",
            "age": "76",
            "sumInsured": "3500",
            "premium": "49006.6",
            "gender": "0"
        },
        {
            "id": "1576",
            "age": "76",
            "sumInsured": "3000",
            "premium": "42005.6",
            "gender": "0"
        },
        {
            "id": "1575",
            "age": "76",
            "sumInsured": "2500",
            "premium": "35004.7",
            "gender": "0"
        },
        {
            "id": "1574",
            "age": "76",
            "sumInsured": "2000",
            "premium": "28003.8",
            "gender": "0"
        },
        {
            "id": "1573",
            "age": "76",
            "sumInsured": "1500",
            "premium": "21002.8",
            "gender": "0"
        },
        {
            "id": "1572",
            "age": "76",
            "sumInsured": "1000",
            "premium": "14001.9",
            "gender": "0"
        },
        {
            "id": "1571",
            "age": "76",
            "sumInsured": "500",
            "premium": "7000.94",
            "gender": "0"
        },
        {
            "id": "1570",
            "age": "75",
            "sumInsured": "5000",
            "premium": "58116.3",
            "gender": "0"
        },
        {
            "id": "1569",
            "age": "75",
            "sumInsured": "4500",
            "premium": "52304.7",
            "gender": "0"
        },
        {
            "id": "1568",
            "age": "75",
            "sumInsured": "4000",
            "premium": "46493.1",
            "gender": "0"
        },
        {
            "id": "1567",
            "age": "75",
            "sumInsured": "3500",
            "premium": "40681.4",
            "gender": "0"
        },
        {
            "id": "1566",
            "age": "75",
            "sumInsured": "3000",
            "premium": "34869.8",
            "gender": "0"
        },
        {
            "id": "1565",
            "age": "75",
            "sumInsured": "2500",
            "premium": "29058.2",
            "gender": "0"
        },
        {
            "id": "1564",
            "age": "75",
            "sumInsured": "2000",
            "premium": "23246.5",
            "gender": "0"
        },
        {
            "id": "1563",
            "age": "75",
            "sumInsured": "1500",
            "premium": "17434.9",
            "gender": "0"
        },
        {
            "id": "1562",
            "age": "75",
            "sumInsured": "1000",
            "premium": "11623.3",
            "gender": "0"
        },
        {
            "id": "1561",
            "age": "75",
            "sumInsured": "500",
            "premium": "5811.63",
            "gender": "0"
        },
        {
            "id": "1560",
            "age": "74",
            "sumInsured": "5000",
            "premium": "54121.2",
            "gender": "0"
        },
        {
            "id": "1559",
            "age": "74",
            "sumInsured": "4500",
            "premium": "48709.1",
            "gender": "0"
        },
        {
            "id": "1558",
            "age": "74",
            "sumInsured": "4000",
            "premium": "43297",
            "gender": "0"
        },
        {
            "id": "1557",
            "age": "74",
            "sumInsured": "3500",
            "premium": "37884.8",
            "gender": "0"
        },
        {
            "id": "1556",
            "age": "74",
            "sumInsured": "3000",
            "premium": "32472.7",
            "gender": "0"
        },
        {
            "id": "1555",
            "age": "74",
            "sumInsured": "2500",
            "premium": "27060.6",
            "gender": "0"
        },
        {
            "id": "1554",
            "age": "74",
            "sumInsured": "2000",
            "premium": "21648.5",
            "gender": "0"
        },
        {
            "id": "1553",
            "age": "74",
            "sumInsured": "1500",
            "premium": "16236.4",
            "gender": "0"
        },
        {
            "id": "1552",
            "age": "74",
            "sumInsured": "1000",
            "premium": "10824.2",
            "gender": "0"
        },
        {
            "id": "1551",
            "age": "74",
            "sumInsured": "500",
            "premium": "5412.12",
            "gender": "0"
        },
        {
            "id": "1550",
            "age": "73",
            "sumInsured": "5000",
            "premium": "50211.7",
            "gender": "0"
        },
        {
            "id": "1549",
            "age": "73",
            "sumInsured": "4500",
            "premium": "45190.6",
            "gender": "0"
        },
        {
            "id": "1548",
            "age": "73",
            "sumInsured": "4000",
            "premium": "40169.4",
            "gender": "0"
        },
        {
            "id": "1547",
            "age": "73",
            "sumInsured": "3500",
            "premium": "35148.2",
            "gender": "0"
        },
        {
            "id": "1546",
            "age": "73",
            "sumInsured": "3000",
            "premium": "30127",
            "gender": "0"
        },
        {
            "id": "1545",
            "age": "73",
            "sumInsured": "2500",
            "premium": "25105.9",
            "gender": "0"
        },
        {
            "id": "1544",
            "age": "73",
            "sumInsured": "2000",
            "premium": "20084.7",
            "gender": "0"
        },
        {
            "id": "1543",
            "age": "73",
            "sumInsured": "1500",
            "premium": "15063.5",
            "gender": "0"
        },
        {
            "id": "1542",
            "age": "73",
            "sumInsured": "1000",
            "premium": "10042.3",
            "gender": "0"
        },
        {
            "id": "1541",
            "age": "73",
            "sumInsured": "500",
            "premium": "5021.17",
            "gender": "0"
        },
        {
            "id": "1540",
            "age": "72",
            "sumInsured": "5000",
            "premium": "47095.8",
            "gender": "0"
        },
        {
            "id": "1539",
            "age": "72",
            "sumInsured": "4500",
            "premium": "42386.2",
            "gender": "0"
        },
        {
            "id": "1538",
            "age": "72",
            "sumInsured": "4000",
            "premium": "37676.6",
            "gender": "0"
        },
        {
            "id": "1537",
            "age": "72",
            "sumInsured": "3500",
            "premium": "32967",
            "gender": "0"
        },
        {
            "id": "1536",
            "age": "72",
            "sumInsured": "3000",
            "premium": "28257.5",
            "gender": "0"
        },
        {
            "id": "1535",
            "age": "72",
            "sumInsured": "2500",
            "premium": "23547.9",
            "gender": "0"
        },
        {
            "id": "1534",
            "age": "72",
            "sumInsured": "2000",
            "premium": "18838.3",
            "gender": "0"
        },
        {
            "id": "1533",
            "age": "72",
            "sumInsured": "1500",
            "premium": "14128.7",
            "gender": "0"
        },
        {
            "id": "1532",
            "age": "72",
            "sumInsured": "1000",
            "premium": "9419.15",
            "gender": "0"
        },
        {
            "id": "1531",
            "age": "72",
            "sumInsured": "500",
            "premium": "4709.58",
            "gender": "0"
        },
        {
            "id": "1530",
            "age": "71",
            "sumInsured": "5000",
            "premium": "44046.3",
            "gender": "0"
        },
        {
            "id": "1529",
            "age": "71",
            "sumInsured": "4500",
            "premium": "39641.7",
            "gender": "0"
        },
        {
            "id": "1528",
            "age": "71",
            "sumInsured": "4000",
            "premium": "35237.1",
            "gender": "0"
        },
        {
            "id": "1527",
            "age": "71",
            "sumInsured": "3500",
            "premium": "30832.4",
            "gender": "0"
        },
        {
            "id": "1526",
            "age": "71",
            "sumInsured": "3000",
            "premium": "26427.8",
            "gender": "0"
        },
        {
            "id": "1525",
            "age": "71",
            "sumInsured": "2500",
            "premium": "22023.2",
            "gender": "0"
        },
        {
            "id": "1524",
            "age": "71",
            "sumInsured": "2000",
            "premium": "17618.5",
            "gender": "0"
        },
        {
            "id": "1523",
            "age": "71",
            "sumInsured": "1500",
            "premium": "13213.9",
            "gender": "0"
        },
        {
            "id": "1522",
            "age": "71",
            "sumInsured": "1000",
            "premium": "8809.26",
            "gender": "0"
        },
        {
            "id": "1521",
            "age": "71",
            "sumInsured": "500",
            "premium": "4404.63",
            "gender": "0"
        },
        {
            "id": "1520",
            "age": "70",
            "sumInsured": "5000",
            "premium": "38017.8",
            "gender": "0"
        },
        {
            "id": "1519",
            "age": "70",
            "sumInsured": "4500",
            "premium": "34216",
            "gender": "0"
        },
        {
            "id": "1518",
            "age": "70",
            "sumInsured": "4000",
            "premium": "30414.2",
            "gender": "0"
        },
        {
            "id": "1517",
            "age": "70",
            "sumInsured": "3500",
            "premium": "26612.4",
            "gender": "0"
        },
        {
            "id": "1516",
            "age": "70",
            "sumInsured": "3000",
            "premium": "22810.7",
            "gender": "0"
        },
        {
            "id": "1515",
            "age": "70",
            "sumInsured": "2500",
            "premium": "19008.9",
            "gender": "0"
        },
        {
            "id": "1514",
            "age": "70",
            "sumInsured": "2000",
            "premium": "15207.1",
            "gender": "0"
        },
        {
            "id": "1513",
            "age": "70",
            "sumInsured": "1500",
            "premium": "11405.3",
            "gender": "0"
        },
        {
            "id": "1512",
            "age": "70",
            "sumInsured": "1000",
            "premium": "7603.56",
            "gender": "0"
        },
        {
            "id": "1511",
            "age": "70",
            "sumInsured": "500",
            "premium": "3801.78",
            "gender": "0"
        },
        {
            "id": "1510",
            "age": "69",
            "sumInsured": "5000",
            "premium": "33939.7",
            "gender": "0"
        },
        {
            "id": "1509",
            "age": "69",
            "sumInsured": "4500",
            "premium": "30545.7",
            "gender": "0"
        },
        {
            "id": "1508",
            "age": "69",
            "sumInsured": "4000",
            "premium": "27151.7",
            "gender": "0"
        },
        {
            "id": "1507",
            "age": "69",
            "sumInsured": "3500",
            "premium": "23757.8",
            "gender": "0"
        },
        {
            "id": "1506",
            "age": "69",
            "sumInsured": "3000",
            "premium": "20363.8",
            "gender": "0"
        },
        {
            "id": "1505",
            "age": "69",
            "sumInsured": "2500",
            "premium": "16969.8",
            "gender": "0"
        },
        {
            "id": "1504",
            "age": "69",
            "sumInsured": "2000",
            "premium": "13575.9",
            "gender": "0"
        },
        {
            "id": "1503",
            "age": "69",
            "sumInsured": "1500",
            "premium": "10181.9",
            "gender": "0"
        },
        {
            "id": "1502",
            "age": "69",
            "sumInsured": "1000",
            "premium": "6787.93",
            "gender": "0"
        },
        {
            "id": "1501",
            "age": "69",
            "sumInsured": "500",
            "premium": "3393.97",
            "gender": "0"
        },
        {
            "id": "1500",
            "age": "68",
            "sumInsured": "5000",
            "premium": "30172.8",
            "gender": "0"
        },
        {
            "id": "1499",
            "age": "68",
            "sumInsured": "4500",
            "premium": "27155.5",
            "gender": "0"
        },
        {
            "id": "1498",
            "age": "68",
            "sumInsured": "4000",
            "premium": "24138.3",
            "gender": "0"
        },
        {
            "id": "1497",
            "age": "68",
            "sumInsured": "3500",
            "premium": "21121",
            "gender": "0"
        },
        {
            "id": "1496",
            "age": "68",
            "sumInsured": "3000",
            "premium": "18103.7",
            "gender": "0"
        },
        {
            "id": "1495",
            "age": "68",
            "sumInsured": "2500",
            "premium": "15086.4",
            "gender": "0"
        },
        {
            "id": "1494",
            "age": "68",
            "sumInsured": "2000",
            "premium": "12069.1",
            "gender": "0"
        },
        {
            "id": "1493",
            "age": "68",
            "sumInsured": "1500",
            "premium": "9051.85",
            "gender": "0"
        },
        {
            "id": "1492",
            "age": "68",
            "sumInsured": "1000",
            "premium": "6034.57",
            "gender": "0"
        },
        {
            "id": "1491",
            "age": "68",
            "sumInsured": "500",
            "premium": "3017.28",
            "gender": "0"
        },
        {
            "id": "1490",
            "age": "67",
            "sumInsured": "5000",
            "premium": "27091.9",
            "gender": "0"
        },
        {
            "id": "1489",
            "age": "67",
            "sumInsured": "4500",
            "premium": "24382.7",
            "gender": "0"
        },
        {
            "id": "1488",
            "age": "67",
            "sumInsured": "4000",
            "premium": "21673.5",
            "gender": "0"
        },
        {
            "id": "1487",
            "age": "67",
            "sumInsured": "3500",
            "premium": "18964.3",
            "gender": "0"
        },
        {
            "id": "1486",
            "age": "67",
            "sumInsured": "3000",
            "premium": "16255.1",
            "gender": "0"
        },
        {
            "id": "1485",
            "age": "67",
            "sumInsured": "2500",
            "premium": "13546",
            "gender": "0"
        },
        {
            "id": "1484",
            "age": "67",
            "sumInsured": "2000",
            "premium": "10836.8",
            "gender": "0"
        },
        {
            "id": "1483",
            "age": "67",
            "sumInsured": "1500",
            "premium": "8127.57",
            "gender": "0"
        },
        {
            "id": "1482",
            "age": "67",
            "sumInsured": "1000",
            "premium": "5418.38",
            "gender": "0"
        },
        {
            "id": "1481",
            "age": "67",
            "sumInsured": "500",
            "premium": "2709.19",
            "gender": "0"
        },
        {
            "id": "1480",
            "age": "66",
            "sumInsured": "5000",
            "premium": "24242.3",
            "gender": "0"
        },
        {
            "id": "1479",
            "age": "66",
            "sumInsured": "4500",
            "premium": "21818.1",
            "gender": "0"
        },
        {
            "id": "1478",
            "age": "66",
            "sumInsured": "4000",
            "premium": "19393.8",
            "gender": "0"
        },
        {
            "id": "1477",
            "age": "66",
            "sumInsured": "3500",
            "premium": "16969.6",
            "gender": "0"
        },
        {
            "id": "1476",
            "age": "66",
            "sumInsured": "3000",
            "premium": "14545.4",
            "gender": "0"
        },
        {
            "id": "1475",
            "age": "66",
            "sumInsured": "2500",
            "premium": "12121.1",
            "gender": "0"
        },
        {
            "id": "1474",
            "age": "66",
            "sumInsured": "2000",
            "premium": "9696.91",
            "gender": "0"
        },
        {
            "id": "1473",
            "age": "66",
            "sumInsured": "1500",
            "premium": "7272.68",
            "gender": "0"
        },
        {
            "id": "1472",
            "age": "66",
            "sumInsured": "1000",
            "premium": "4848.46",
            "gender": "0"
        },
        {
            "id": "1471",
            "age": "66",
            "sumInsured": "500",
            "premium": "2424.23",
            "gender": "0"
        },
        {
            "id": "1470",
            "age": "65",
            "sumInsured": "5000",
            "premium": "21890.4",
            "gender": "0"
        },
        {
            "id": "1469",
            "age": "65",
            "sumInsured": "4500",
            "premium": "19701.4",
            "gender": "0"
        },
        {
            "id": "1468",
            "age": "65",
            "sumInsured": "4000",
            "premium": "17512.3",
            "gender": "0"
        },
        {
            "id": "1467",
            "age": "65",
            "sumInsured": "3500",
            "premium": "15323.3",
            "gender": "0"
        },
        {
            "id": "1466",
            "age": "65",
            "sumInsured": "3000",
            "premium": "13134.2",
            "gender": "0"
        },
        {
            "id": "1465",
            "age": "65",
            "sumInsured": "2500",
            "premium": "10945.2",
            "gender": "0"
        },
        {
            "id": "1464",
            "age": "65",
            "sumInsured": "2000",
            "premium": "8756.16",
            "gender": "0"
        },
        {
            "id": "1463",
            "age": "65",
            "sumInsured": "1500",
            "premium": "6567.12",
            "gender": "0"
        },
        {
            "id": "1462",
            "age": "65",
            "sumInsured": "1000",
            "premium": "4378.08",
            "gender": "0"
        },
        {
            "id": "1461",
            "age": "65",
            "sumInsured": "500",
            "premium": "2189.04",
            "gender": "0"
        },
        {
            "id": "1460",
            "age": "64",
            "sumInsured": "5000",
            "premium": "19891.3",
            "gender": "0"
        },
        {
            "id": "1459",
            "age": "64",
            "sumInsured": "4500",
            "premium": "17902.1",
            "gender": "0"
        },
        {
            "id": "1458",
            "age": "64",
            "sumInsured": "4000",
            "premium": "15913",
            "gender": "0"
        },
        {
            "id": "1457",
            "age": "64",
            "sumInsured": "3500",
            "premium": "13923.9",
            "gender": "0"
        },
        {
            "id": "1456",
            "age": "64",
            "sumInsured": "3000",
            "premium": "11934.8",
            "gender": "0"
        },
        {
            "id": "1455",
            "age": "64",
            "sumInsured": "2500",
            "premium": "9945.63",
            "gender": "0"
        },
        {
            "id": "1454",
            "age": "64",
            "sumInsured": "2000",
            "premium": "7956.5",
            "gender": "0"
        },
        {
            "id": "1453",
            "age": "64",
            "sumInsured": "1500",
            "premium": "5967.38",
            "gender": "0"
        },
        {
            "id": "1452",
            "age": "64",
            "sumInsured": "1000",
            "premium": "3978.25",
            "gender": "0"
        },
        {
            "id": "1451",
            "age": "64",
            "sumInsured": "500",
            "premium": "1989.13",
            "gender": "0"
        },
        {
            "id": "1450",
            "age": "63",
            "sumInsured": "5000",
            "premium": "17985.6",
            "gender": "0"
        },
        {
            "id": "1449",
            "age": "63",
            "sumInsured": "4500",
            "premium": "16187.1",
            "gender": "0"
        },
        {
            "id": "1448",
            "age": "63",
            "sumInsured": "4000",
            "premium": "14388.5",
            "gender": "0"
        },
        {
            "id": "1447",
            "age": "63",
            "sumInsured": "3500",
            "premium": "12589.9",
            "gender": "0"
        },
        {
            "id": "1446",
            "age": "63",
            "sumInsured": "3000",
            "premium": "10791.4",
            "gender": "0"
        },
        {
            "id": "1445",
            "age": "63",
            "sumInsured": "2500",
            "premium": "8992.82",
            "gender": "0"
        },
        {
            "id": "1444",
            "age": "63",
            "sumInsured": "2000",
            "premium": "7194.25",
            "gender": "0"
        },
        {
            "id": "1443",
            "age": "63",
            "sumInsured": "1500",
            "premium": "5395.69",
            "gender": "0"
        },
        {
            "id": "1442",
            "age": "63",
            "sumInsured": "1000",
            "premium": "3597.13",
            "gender": "0"
        },
        {
            "id": "1441",
            "age": "63",
            "sumInsured": "500",
            "premium": "1798.56",
            "gender": "0"
        },
        {
            "id": "1440",
            "age": "62",
            "sumInsured": "5000",
            "premium": "16476.1",
            "gender": "0"
        },
        {
            "id": "1439",
            "age": "62",
            "sumInsured": "4500",
            "premium": "14828.5",
            "gender": "0"
        },
        {
            "id": "1438",
            "age": "62",
            "sumInsured": "4000",
            "premium": "13180.9",
            "gender": "0"
        },
        {
            "id": "1437",
            "age": "62",
            "sumInsured": "3500",
            "premium": "11533.3",
            "gender": "0"
        },
        {
            "id": "1436",
            "age": "62",
            "sumInsured": "3000",
            "premium": "9885.65",
            "gender": "0"
        },
        {
            "id": "1435",
            "age": "62",
            "sumInsured": "2500",
            "premium": "8238.04",
            "gender": "0"
        },
        {
            "id": "1434",
            "age": "62",
            "sumInsured": "2000",
            "premium": "6590.43",
            "gender": "0"
        },
        {
            "id": "1433",
            "age": "62",
            "sumInsured": "1500",
            "premium": "4942.82",
            "gender": "0"
        },
        {
            "id": "1432",
            "age": "62",
            "sumInsured": "1000",
            "premium": "3295.22",
            "gender": "0"
        },
        {
            "id": "1431",
            "age": "62",
            "sumInsured": "500",
            "premium": "1647.61",
            "gender": "0"
        },
        {
            "id": "1430",
            "age": "61",
            "sumInsured": "5000",
            "premium": "15035.9",
            "gender": "0"
        },
        {
            "id": "1429",
            "age": "61",
            "sumInsured": "4500",
            "premium": "13532.3",
            "gender": "0"
        },
        {
            "id": "1428",
            "age": "61",
            "sumInsured": "4000",
            "premium": "12028.7",
            "gender": "0"
        },
        {
            "id": "1427",
            "age": "61",
            "sumInsured": "3500",
            "premium": "10525.1",
            "gender": "0"
        },
        {
            "id": "1426",
            "age": "61",
            "sumInsured": "3000",
            "premium": "9021.53",
            "gender": "0"
        },
        {
            "id": "1425",
            "age": "61",
            "sumInsured": "2500",
            "premium": "7517.94",
            "gender": "0"
        },
        {
            "id": "1424",
            "age": "61",
            "sumInsured": "2000",
            "premium": "6014.36",
            "gender": "0"
        },
        {
            "id": "1423",
            "age": "61",
            "sumInsured": "1500",
            "premium": "4510.77",
            "gender": "0"
        },
        {
            "id": "1422",
            "age": "61",
            "sumInsured": "1000",
            "premium": "3007.18",
            "gender": "0"
        },
        {
            "id": "1421",
            "age": "61",
            "sumInsured": "500",
            "premium": "1503.59",
            "gender": "0"
        },
        {
            "id": "1420",
            "age": "60",
            "sumInsured": "5000",
            "premium": "12623.8",
            "gender": "0"
        },
        {
            "id": "1419",
            "age": "60",
            "sumInsured": "4500",
            "premium": "11361.4",
            "gender": "0"
        },
        {
            "id": "1418",
            "age": "60",
            "sumInsured": "4000",
            "premium": "10099",
            "gender": "0"
        },
        {
            "id": "1417",
            "age": "60",
            "sumInsured": "3500",
            "premium": "8836.67",
            "gender": "0"
        },
        {
            "id": "1416",
            "age": "60",
            "sumInsured": "3000",
            "premium": "7574.29",
            "gender": "0"
        },
        {
            "id": "1415",
            "age": "60",
            "sumInsured": "2500",
            "premium": "6311.9",
            "gender": "0"
        },
        {
            "id": "1414",
            "age": "60",
            "sumInsured": "2000",
            "premium": "5049.52",
            "gender": "0"
        },
        {
            "id": "1413",
            "age": "60",
            "sumInsured": "1500",
            "premium": "3787.14",
            "gender": "0"
        },
        {
            "id": "1412",
            "age": "60",
            "sumInsured": "1000",
            "premium": "2524.76",
            "gender": "0"
        },
        {
            "id": "1411",
            "age": "60",
            "sumInsured": "500",
            "premium": "1262.38",
            "gender": "0"
        },
        {
            "id": "1410",
            "age": "59",
            "sumInsured": "5000",
            "premium": "11179.7",
            "gender": "0"
        },
        {
            "id": "1409",
            "age": "59",
            "sumInsured": "4500",
            "premium": "10061.8",
            "gender": "0"
        },
        {
            "id": "1408",
            "age": "59",
            "sumInsured": "4000",
            "premium": "8943.79",
            "gender": "0"
        },
        {
            "id": "1407",
            "age": "59",
            "sumInsured": "3500",
            "premium": "7825.82",
            "gender": "0"
        },
        {
            "id": "1406",
            "age": "59",
            "sumInsured": "3000",
            "premium": "6707.85",
            "gender": "0"
        },
        {
            "id": "1405",
            "age": "59",
            "sumInsured": "2500",
            "premium": "5589.87",
            "gender": "0"
        },
        {
            "id": "1404",
            "age": "59",
            "sumInsured": "2000",
            "premium": "4471.9",
            "gender": "0"
        },
        {
            "id": "1403",
            "age": "59",
            "sumInsured": "1500",
            "premium": "3353.92",
            "gender": "0"
        },
        {
            "id": "1402",
            "age": "59",
            "sumInsured": "1000",
            "premium": "2235.95",
            "gender": "0"
        },
        {
            "id": "1401",
            "age": "59",
            "sumInsured": "500",
            "premium": "1117.97",
            "gender": "0"
        },
        {
            "id": "1400",
            "age": "58",
            "sumInsured": "5000",
            "premium": "9848.45",
            "gender": "0"
        },
        {
            "id": "1399",
            "age": "58",
            "sumInsured": "4500",
            "premium": "8863.6",
            "gender": "0"
        },
        {
            "id": "1398",
            "age": "58",
            "sumInsured": "4000",
            "premium": "7878.76",
            "gender": "0"
        },
        {
            "id": "1397",
            "age": "58",
            "sumInsured": "3500",
            "premium": "6893.91",
            "gender": "0"
        },
        {
            "id": "1396",
            "age": "58",
            "sumInsured": "3000",
            "premium": "5909.07",
            "gender": "0"
        },
        {
            "id": "1395",
            "age": "58",
            "sumInsured": "2500",
            "premium": "4924.22",
            "gender": "0"
        },
        {
            "id": "1394",
            "age": "58",
            "sumInsured": "2000",
            "premium": "3939.38",
            "gender": "0"
        },
        {
            "id": "1393",
            "age": "58",
            "sumInsured": "1500",
            "premium": "2954.53",
            "gender": "0"
        },
        {
            "id": "1392",
            "age": "58",
            "sumInsured": "1000",
            "premium": "1969.69",
            "gender": "0"
        },
        {
            "id": "1391",
            "age": "58",
            "sumInsured": "500",
            "premium": "984.845",
            "gender": "0"
        },
        {
            "id": "1390",
            "age": "57",
            "sumInsured": "5000",
            "premium": "8837.22",
            "gender": "0"
        },
        {
            "id": "1389",
            "age": "57",
            "sumInsured": "4500",
            "premium": "7953.5",
            "gender": "0"
        },
        {
            "id": "1388",
            "age": "57",
            "sumInsured": "4000",
            "premium": "7069.78",
            "gender": "0"
        },
        {
            "id": "1387",
            "age": "57",
            "sumInsured": "3500",
            "premium": "6186.05",
            "gender": "0"
        },
        {
            "id": "1386",
            "age": "57",
            "sumInsured": "3000",
            "premium": "5302.33",
            "gender": "0"
        },
        {
            "id": "1385",
            "age": "57",
            "sumInsured": "2500",
            "premium": "4418.61",
            "gender": "0"
        },
        {
            "id": "1384",
            "age": "57",
            "sumInsured": "2000",
            "premium": "3534.89",
            "gender": "0"
        },
        {
            "id": "1383",
            "age": "57",
            "sumInsured": "1500",
            "premium": "2651.17",
            "gender": "0"
        },
        {
            "id": "1382",
            "age": "57",
            "sumInsured": "1000",
            "premium": "1767.44",
            "gender": "0"
        },
        {
            "id": "1381",
            "age": "57",
            "sumInsured": "500",
            "premium": "883.722",
            "gender": "0"
        },
        {
            "id": "1380",
            "age": "56",
            "sumInsured": "5000",
            "premium": "7901.8",
            "gender": "0"
        },
        {
            "id": "1379",
            "age": "56",
            "sumInsured": "4500",
            "premium": "7111.62",
            "gender": "0"
        },
        {
            "id": "1378",
            "age": "56",
            "sumInsured": "4000",
            "premium": "6321.44",
            "gender": "0"
        },
        {
            "id": "1377",
            "age": "56",
            "sumInsured": "3500",
            "premium": "5531.26",
            "gender": "0"
        },
        {
            "id": "1376",
            "age": "56",
            "sumInsured": "3000",
            "premium": "4741.08",
            "gender": "0"
        },
        {
            "id": "1375",
            "age": "56",
            "sumInsured": "2500",
            "premium": "3950.9",
            "gender": "0"
        },
        {
            "id": "1374",
            "age": "56",
            "sumInsured": "2000",
            "premium": "3160.72",
            "gender": "0"
        },
        {
            "id": "1373",
            "age": "56",
            "sumInsured": "1500",
            "premium": "2370.54",
            "gender": "0"
        },
        {
            "id": "1372",
            "age": "56",
            "sumInsured": "1000",
            "premium": "1580.36",
            "gender": "0"
        },
        {
            "id": "1371",
            "age": "56",
            "sumInsured": "500",
            "premium": "790.18",
            "gender": "0"
        },
        {
            "id": "1370",
            "age": "55",
            "sumInsured": "5000",
            "premium": "7123.99",
            "gender": "0"
        },
        {
            "id": "1369",
            "age": "55",
            "sumInsured": "4500",
            "premium": "6411.59",
            "gender": "0"
        },
        {
            "id": "1368",
            "age": "55",
            "sumInsured": "4000",
            "premium": "5699.19",
            "gender": "0"
        },
        {
            "id": "1367",
            "age": "55",
            "sumInsured": "3500",
            "premium": "4986.79",
            "gender": "0"
        },
        {
            "id": "1366",
            "age": "55",
            "sumInsured": "3000",
            "premium": "4274.4",
            "gender": "0"
        },
        {
            "id": "1365",
            "age": "55",
            "sumInsured": "2500",
            "premium": "3562",
            "gender": "0"
        },
        {
            "id": "1364",
            "age": "55",
            "sumInsured": "2000",
            "premium": "2849.6",
            "gender": "0"
        },
        {
            "id": "1363",
            "age": "55",
            "sumInsured": "1500",
            "premium": "2137.2",
            "gender": "0"
        },
        {
            "id": "1362",
            "age": "55",
            "sumInsured": "1000",
            "premium": "1424.8",
            "gender": "0"
        },
        {
            "id": "1361",
            "age": "55",
            "sumInsured": "500",
            "premium": "712.399",
            "gender": "0"
        },
        {
            "id": "1360",
            "age": "54",
            "sumInsured": "5000",
            "premium": "6356.87",
            "gender": "0"
        },
        {
            "id": "1359",
            "age": "54",
            "sumInsured": "4500",
            "premium": "5721.18",
            "gender": "0"
        },
        {
            "id": "1358",
            "age": "54",
            "sumInsured": "4000",
            "premium": "5085.49",
            "gender": "0"
        },
        {
            "id": "1357",
            "age": "54",
            "sumInsured": "3500",
            "premium": "4449.81",
            "gender": "0"
        },
        {
            "id": "1356",
            "age": "54",
            "sumInsured": "3000",
            "premium": "3814.12",
            "gender": "0"
        },
        {
            "id": "1355",
            "age": "54",
            "sumInsured": "2500",
            "premium": "3178.43",
            "gender": "0"
        },
        {
            "id": "1354",
            "age": "54",
            "sumInsured": "2000",
            "premium": "2542.75",
            "gender": "0"
        },
        {
            "id": "1353",
            "age": "54",
            "sumInsured": "1500",
            "premium": "1907.06",
            "gender": "0"
        },
        {
            "id": "1352",
            "age": "54",
            "sumInsured": "1000",
            "premium": "1271.37",
            "gender": "0"
        },
        {
            "id": "1351",
            "age": "54",
            "sumInsured": "500",
            "premium": "635.687",
            "gender": "0"
        },
        {
            "id": "1350",
            "age": "53",
            "sumInsured": "5000",
            "premium": "5643.38",
            "gender": "0"
        },
        {
            "id": "1349",
            "age": "53",
            "sumInsured": "4500",
            "premium": "5079.04",
            "gender": "0"
        },
        {
            "id": "1348",
            "age": "53",
            "sumInsured": "4000",
            "premium": "4514.71",
            "gender": "0"
        },
        {
            "id": "1347",
            "age": "53",
            "sumInsured": "3500",
            "premium": "3950.37",
            "gender": "0"
        },
        {
            "id": "1346",
            "age": "53",
            "sumInsured": "3000",
            "premium": "3386.03",
            "gender": "0"
        },
        {
            "id": "1345",
            "age": "53",
            "sumInsured": "2500",
            "premium": "2821.69",
            "gender": "0"
        },
        {
            "id": "1344",
            "age": "53",
            "sumInsured": "2000",
            "premium": "2257.35",
            "gender": "0"
        },
        {
            "id": "1343",
            "age": "53",
            "sumInsured": "1500",
            "premium": "1693.01",
            "gender": "0"
        },
        {
            "id": "1342",
            "age": "53",
            "sumInsured": "1000",
            "premium": "1128.68",
            "gender": "0"
        },
        {
            "id": "1341",
            "age": "53",
            "sumInsured": "500",
            "premium": "564.338",
            "gender": "0"
        },
        {
            "id": "1340",
            "age": "52",
            "sumInsured": "5000",
            "premium": "5098.91",
            "gender": "0"
        },
        {
            "id": "1339",
            "age": "52",
            "sumInsured": "4500",
            "premium": "4589.02",
            "gender": "0"
        },
        {
            "id": "1338",
            "age": "52",
            "sumInsured": "4000",
            "premium": "4079.13",
            "gender": "0"
        },
        {
            "id": "1337",
            "age": "52",
            "sumInsured": "3500",
            "premium": "3569.23",
            "gender": "0"
        },
        {
            "id": "1336",
            "age": "52",
            "sumInsured": "3000",
            "premium": "3059.34",
            "gender": "0"
        },
        {
            "id": "1335",
            "age": "52",
            "sumInsured": "2500",
            "premium": "2549.45",
            "gender": "0"
        },
        {
            "id": "1334",
            "age": "52",
            "sumInsured": "2000",
            "premium": "2039.56",
            "gender": "0"
        },
        {
            "id": "1333",
            "age": "52",
            "sumInsured": "1500",
            "premium": "1529.67",
            "gender": "0"
        },
        {
            "id": "1332",
            "age": "52",
            "sumInsured": "1000",
            "premium": "1019.78",
            "gender": "0"
        },
        {
            "id": "1331",
            "age": "52",
            "sumInsured": "500",
            "premium": "509.891",
            "gender": "0"
        },
        {
            "id": "1330",
            "age": "51",
            "sumInsured": "5000",
            "premium": "4591.81",
            "gender": "0"
        },
        {
            "id": "1329",
            "age": "51",
            "sumInsured": "4500",
            "premium": "4132.63",
            "gender": "0"
        },
        {
            "id": "1328",
            "age": "51",
            "sumInsured": "4000",
            "premium": "3673.45",
            "gender": "0"
        },
        {
            "id": "1327",
            "age": "51",
            "sumInsured": "3500",
            "premium": "3214.27",
            "gender": "0"
        },
        {
            "id": "1326",
            "age": "51",
            "sumInsured": "3000",
            "premium": "2755.09",
            "gender": "0"
        },
        {
            "id": "1325",
            "age": "51",
            "sumInsured": "2500",
            "premium": "2295.91",
            "gender": "0"
        },
        {
            "id": "1324",
            "age": "51",
            "sumInsured": "2000",
            "premium": "1836.73",
            "gender": "0"
        },
        {
            "id": "1323",
            "age": "51",
            "sumInsured": "1500",
            "premium": "1377.54",
            "gender": "0"
        },
        {
            "id": "1322",
            "age": "51",
            "sumInsured": "1000",
            "premium": "918.363",
            "gender": "0"
        },
        {
            "id": "1321",
            "age": "51",
            "sumInsured": "500",
            "premium": "459.181",
            "gender": "0"
        },
        {
            "id": "1320",
            "age": "50",
            "sumInsured": "5000",
            "premium": "4099.83",
            "gender": "0"
        },
        {
            "id": "1319",
            "age": "50",
            "sumInsured": "4500",
            "premium": "3689.85",
            "gender": "0"
        },
        {
            "id": "1318",
            "age": "50",
            "sumInsured": "4000",
            "premium": "3279.87",
            "gender": "0"
        },
        {
            "id": "1317",
            "age": "50",
            "sumInsured": "3500",
            "premium": "2869.88",
            "gender": "0"
        },
        {
            "id": "1316",
            "age": "50",
            "sumInsured": "3000",
            "premium": "2459.9",
            "gender": "0"
        },
        {
            "id": "1315",
            "age": "50",
            "sumInsured": "2500",
            "premium": "2049.92",
            "gender": "0"
        },
        {
            "id": "1314",
            "age": "50",
            "sumInsured": "2000",
            "premium": "1639.93",
            "gender": "0"
        },
        {
            "id": "1313",
            "age": "50",
            "sumInsured": "1500",
            "premium": "1229.95",
            "gender": "0"
        },
        {
            "id": "1312",
            "age": "50",
            "sumInsured": "1000",
            "premium": "819.967",
            "gender": "0"
        },
        {
            "id": "1311",
            "age": "50",
            "sumInsured": "500",
            "premium": "409.983",
            "gender": "0"
        },
        {
            "id": "1310",
            "age": "49",
            "sumInsured": "5000",
            "premium": "3729.8",
            "gender": "0"
        },
        {
            "id": "1309",
            "age": "49",
            "sumInsured": "4500",
            "premium": "3356.82",
            "gender": "0"
        },
        {
            "id": "1308",
            "age": "49",
            "sumInsured": "4000",
            "premium": "2983.84",
            "gender": "0"
        },
        {
            "id": "1307",
            "age": "49",
            "sumInsured": "3500",
            "premium": "2610.86",
            "gender": "0"
        },
        {
            "id": "1306",
            "age": "49",
            "sumInsured": "3000",
            "premium": "2237.88",
            "gender": "0"
        },
        {
            "id": "1305",
            "age": "49",
            "sumInsured": "2500",
            "premium": "1864.9",
            "gender": "0"
        },
        {
            "id": "1304",
            "age": "49",
            "sumInsured": "2000",
            "premium": "1491.92",
            "gender": "0"
        },
        {
            "id": "1303",
            "age": "49",
            "sumInsured": "1500",
            "premium": "1118.94",
            "gender": "0"
        },
        {
            "id": "1302",
            "age": "49",
            "sumInsured": "1000",
            "premium": "745.96",
            "gender": "0"
        },
        {
            "id": "1301",
            "age": "49",
            "sumInsured": "500",
            "premium": "372.98",
            "gender": "0"
        },
        {
            "id": "1300",
            "age": "48",
            "sumInsured": "5000",
            "premium": "3376.48",
            "gender": "0"
        },
        {
            "id": "1299",
            "age": "48",
            "sumInsured": "4500",
            "premium": "3038.84",
            "gender": "0"
        },
        {
            "id": "1298",
            "age": "48",
            "sumInsured": "4000",
            "premium": "2701.19",
            "gender": "0"
        },
        {
            "id": "1297",
            "age": "48",
            "sumInsured": "3500",
            "premium": "2363.54",
            "gender": "0"
        },
        {
            "id": "1296",
            "age": "48",
            "sumInsured": "3000",
            "premium": "2025.89",
            "gender": "0"
        },
        {
            "id": "1295",
            "age": "48",
            "sumInsured": "2500",
            "premium": "1688.24",
            "gender": "0"
        },
        {
            "id": "1294",
            "age": "48",
            "sumInsured": "2000",
            "premium": "1350.59",
            "gender": "0"
        },
        {
            "id": "1293",
            "age": "48",
            "sumInsured": "1500",
            "premium": "1012.95",
            "gender": "0"
        },
        {
            "id": "1292",
            "age": "48",
            "sumInsured": "1000",
            "premium": "675.297",
            "gender": "0"
        },
        {
            "id": "1291",
            "age": "48",
            "sumInsured": "500",
            "premium": "337.648",
            "gender": "0"
        },
        {
            "id": "1290",
            "age": "47",
            "sumInsured": "5000",
            "premium": "3178.4",
            "gender": "0"
        },
        {
            "id": "1289",
            "age": "47",
            "sumInsured": "4500",
            "premium": "2860.56",
            "gender": "0"
        },
        {
            "id": "1288",
            "age": "47",
            "sumInsured": "4000",
            "premium": "2542.72",
            "gender": "0"
        },
        {
            "id": "1287",
            "age": "47",
            "sumInsured": "3500",
            "premium": "2224.88",
            "gender": "0"
        },
        {
            "id": "1286",
            "age": "47",
            "sumInsured": "3000",
            "premium": "1907.04",
            "gender": "0"
        },
        {
            "id": "1285",
            "age": "47",
            "sumInsured": "2500",
            "premium": "1589.2",
            "gender": "0"
        },
        {
            "id": "1284",
            "age": "47",
            "sumInsured": "2000",
            "premium": "1271.36",
            "gender": "0"
        },
        {
            "id": "1283",
            "age": "47",
            "sumInsured": "1500",
            "premium": "953.521",
            "gender": "0"
        },
        {
            "id": "1282",
            "age": "47",
            "sumInsured": "1000",
            "premium": "635.681",
            "gender": "0"
        },
        {
            "id": "1281",
            "age": "47",
            "sumInsured": "500",
            "premium": "317.84",
            "gender": "0"
        },
        {
            "id": "1280",
            "age": "46",
            "sumInsured": "5000",
            "premium": "2988.82",
            "gender": "0"
        },
        {
            "id": "1279",
            "age": "46",
            "sumInsured": "4500",
            "premium": "2689.93",
            "gender": "0"
        },
        {
            "id": "1278",
            "age": "46",
            "sumInsured": "4000",
            "premium": "2391.05",
            "gender": "0"
        },
        {
            "id": "1277",
            "age": "46",
            "sumInsured": "3500",
            "premium": "2092.17",
            "gender": "0"
        },
        {
            "id": "1276",
            "age": "46",
            "sumInsured": "3000",
            "premium": "1793.29",
            "gender": "0"
        },
        {
            "id": "1275",
            "age": "46",
            "sumInsured": "2500",
            "premium": "1494.41",
            "gender": "0"
        },
        {
            "id": "1274",
            "age": "46",
            "sumInsured": "2000",
            "premium": "1195.53",
            "gender": "0"
        },
        {
            "id": "1273",
            "age": "46",
            "sumInsured": "1500",
            "premium": "896.645",
            "gender": "0"
        },
        {
            "id": "1272",
            "age": "46",
            "sumInsured": "1000",
            "premium": "597.763",
            "gender": "0"
        },
        {
            "id": "1271",
            "age": "46",
            "sumInsured": "500",
            "premium": "298.882",
            "gender": "0"
        },
        {
            "id": "1270",
            "age": "45",
            "sumInsured": "5000",
            "premium": "3099.67",
            "gender": "0"
        },
        {
            "id": "1269",
            "age": "45",
            "sumInsured": "4500",
            "premium": "2789.7",
            "gender": "0"
        },
        {
            "id": "1268",
            "age": "45",
            "sumInsured": "4000",
            "premium": "2479.74",
            "gender": "0"
        },
        {
            "id": "1267",
            "age": "45",
            "sumInsured": "3500",
            "premium": "2169.77",
            "gender": "0"
        },
        {
            "id": "1266",
            "age": "45",
            "sumInsured": "3000",
            "premium": "1859.8",
            "gender": "0"
        },
        {
            "id": "1265",
            "age": "45",
            "sumInsured": "2500",
            "premium": "1549.84",
            "gender": "0"
        },
        {
            "id": "1264",
            "age": "45",
            "sumInsured": "2000",
            "premium": "1239.87",
            "gender": "0"
        },
        {
            "id": "1263",
            "age": "45",
            "sumInsured": "1500",
            "premium": "929.902",
            "gender": "0"
        },
        {
            "id": "1262",
            "age": "45",
            "sumInsured": "1000",
            "premium": "619.934",
            "gender": "0"
        },
        {
            "id": "1261",
            "age": "45",
            "sumInsured": "500",
            "premium": "309.967",
            "gender": "0"
        },
        {
            "id": "1260",
            "age": "44",
            "sumInsured": "5000",
            "premium": "2909.02",
            "gender": "0"
        },
        {
            "id": "1259",
            "age": "44",
            "sumInsured": "4500",
            "premium": "2618.12",
            "gender": "0"
        },
        {
            "id": "1258",
            "age": "44",
            "sumInsured": "4000",
            "premium": "2327.22",
            "gender": "0"
        },
        {
            "id": "1257",
            "age": "44",
            "sumInsured": "3500",
            "premium": "2036.31",
            "gender": "0"
        },
        {
            "id": "1256",
            "age": "44",
            "sumInsured": "3000",
            "premium": "1745.41",
            "gender": "0"
        },
        {
            "id": "1255",
            "age": "44",
            "sumInsured": "2500",
            "premium": "1454.51",
            "gender": "0"
        },
        {
            "id": "1254",
            "age": "44",
            "sumInsured": "2000",
            "premium": "1163.61",
            "gender": "0"
        },
        {
            "id": "1253",
            "age": "44",
            "sumInsured": "1500",
            "premium": "872.706",
            "gender": "0"
        },
        {
            "id": "1252",
            "age": "44",
            "sumInsured": "1000",
            "premium": "581.804",
            "gender": "0"
        },
        {
            "id": "1251",
            "age": "44",
            "sumInsured": "500",
            "premium": "290.902",
            "gender": "0"
        },
        {
            "id": "1250",
            "age": "43",
            "sumInsured": "5000",
            "premium": "2726.63",
            "gender": "0"
        },
        {
            "id": "1249",
            "age": "43",
            "sumInsured": "4500",
            "premium": "2453.97",
            "gender": "0"
        },
        {
            "id": "1248",
            "age": "43",
            "sumInsured": "4000",
            "premium": "2181.31",
            "gender": "0"
        },
        {
            "id": "1247",
            "age": "43",
            "sumInsured": "3500",
            "premium": "1908.64",
            "gender": "0"
        },
        {
            "id": "1246",
            "age": "43",
            "sumInsured": "3000",
            "premium": "1635.98",
            "gender": "0"
        },
        {
            "id": "1245",
            "age": "43",
            "sumInsured": "2500",
            "premium": "1363.32",
            "gender": "0"
        },
        {
            "id": "1244",
            "age": "43",
            "sumInsured": "2000",
            "premium": "1090.65",
            "gender": "0"
        },
        {
            "id": "1243",
            "age": "43",
            "sumInsured": "1500",
            "premium": "817.99",
            "gender": "0"
        },
        {
            "id": "1242",
            "age": "43",
            "sumInsured": "1000",
            "premium": "545.327",
            "gender": "0"
        },
        {
            "id": "1241",
            "age": "43",
            "sumInsured": "500",
            "premium": "272.663",
            "gender": "0"
        },
        {
            "id": "1240",
            "age": "42",
            "sumInsured": "5000",
            "premium": "2621.83",
            "gender": "0"
        },
        {
            "id": "1239",
            "age": "42",
            "sumInsured": "4500",
            "premium": "2359.65",
            "gender": "0"
        },
        {
            "id": "1238",
            "age": "42",
            "sumInsured": "4000",
            "premium": "2097.46",
            "gender": "0"
        },
        {
            "id": "1237",
            "age": "42",
            "sumInsured": "3500",
            "premium": "1835.28",
            "gender": "0"
        },
        {
            "id": "1236",
            "age": "42",
            "sumInsured": "3000",
            "premium": "1573.1",
            "gender": "0"
        },
        {
            "id": "1235",
            "age": "42",
            "sumInsured": "2500",
            "premium": "1310.91",
            "gender": "0"
        },
        {
            "id": "1234",
            "age": "42",
            "sumInsured": "2000",
            "premium": "1048.73",
            "gender": "0"
        },
        {
            "id": "1233",
            "age": "42",
            "sumInsured": "1500",
            "premium": "786.549",
            "gender": "0"
        },
        {
            "id": "1232",
            "age": "42",
            "sumInsured": "1000",
            "premium": "524.366",
            "gender": "0"
        },
        {
            "id": "1231",
            "age": "42",
            "sumInsured": "500",
            "premium": "262.183",
            "gender": "0"
        },
        {
            "id": "1230",
            "age": "41",
            "sumInsured": "5000",
            "premium": "2520.51",
            "gender": "0"
        },
        {
            "id": "1229",
            "age": "41",
            "sumInsured": "4500",
            "premium": "2268.46",
            "gender": "0"
        },
        {
            "id": "1228",
            "age": "41",
            "sumInsured": "4000",
            "premium": "2016.41",
            "gender": "0"
        },
        {
            "id": "1227",
            "age": "41",
            "sumInsured": "3500",
            "premium": "1764.36",
            "gender": "0"
        },
        {
            "id": "1226",
            "age": "41",
            "sumInsured": "3000",
            "premium": "1512.31",
            "gender": "0"
        },
        {
            "id": "1225",
            "age": "41",
            "sumInsured": "2500",
            "premium": "1260.26",
            "gender": "0"
        },
        {
            "id": "1224",
            "age": "41",
            "sumInsured": "2000",
            "premium": "1008.21",
            "gender": "0"
        },
        {
            "id": "1223",
            "age": "41",
            "sumInsured": "1500",
            "premium": "756.154",
            "gender": "0"
        },
        {
            "id": "1222",
            "age": "41",
            "sumInsured": "1000",
            "premium": "504.103",
            "gender": "0"
        },
        {
            "id": "1221",
            "age": "41",
            "sumInsured": "500",
            "premium": "252.051",
            "gender": "0"
        },
        {
            "id": "1220",
            "age": "40",
            "sumInsured": "5000",
            "premium": "2282.01",
            "gender": "0"
        },
        {
            "id": "1219",
            "age": "40",
            "sumInsured": "4500",
            "premium": "2053.81",
            "gender": "0"
        },
        {
            "id": "1218",
            "age": "40",
            "sumInsured": "4000",
            "premium": "1825.61",
            "gender": "0"
        },
        {
            "id": "1217",
            "age": "40",
            "sumInsured": "3500",
            "premium": "1597.41",
            "gender": "0"
        },
        {
            "id": "1216",
            "age": "40",
            "sumInsured": "3000",
            "premium": "1369.2",
            "gender": "0"
        },
        {
            "id": "1215",
            "age": "40",
            "sumInsured": "2500",
            "premium": "1141",
            "gender": "0"
        },
        {
            "id": "1214",
            "age": "40",
            "sumInsured": "2000",
            "premium": "912.803",
            "gender": "0"
        },
        {
            "id": "1213",
            "age": "40",
            "sumInsured": "1500",
            "premium": "684.602",
            "gender": "0"
        },
        {
            "id": "1212",
            "age": "40",
            "sumInsured": "1000",
            "premium": "456.402",
            "gender": "0"
        },
        {
            "id": "1211",
            "age": "40",
            "sumInsured": "500",
            "premium": "228.201",
            "gender": "0"
        },
        {
            "id": "1210",
            "age": "39",
            "sumInsured": "5000",
            "premium": "2243.25",
            "gender": "0"
        },
        {
            "id": "1209",
            "age": "39",
            "sumInsured": "4500",
            "premium": "2018.92",
            "gender": "0"
        },
        {
            "id": "1208",
            "age": "39",
            "sumInsured": "4000",
            "premium": "1794.6",
            "gender": "0"
        },
        {
            "id": "1207",
            "age": "39",
            "sumInsured": "3500",
            "premium": "1570.27",
            "gender": "0"
        },
        {
            "id": "1206",
            "age": "39",
            "sumInsured": "3000",
            "premium": "1345.95",
            "gender": "0"
        },
        {
            "id": "1205",
            "age": "39",
            "sumInsured": "2500",
            "premium": "1121.62",
            "gender": "0"
        },
        {
            "id": "1204",
            "age": "39",
            "sumInsured": "2000",
            "premium": "897.3",
            "gender": "0"
        },
        {
            "id": "1203",
            "age": "39",
            "sumInsured": "1500",
            "premium": "672.975",
            "gender": "0"
        },
        {
            "id": "1202",
            "age": "39",
            "sumInsured": "1000",
            "premium": "448.65",
            "gender": "0"
        },
        {
            "id": "1201",
            "age": "39",
            "sumInsured": "500",
            "premium": "224.325",
            "gender": "0"
        },
        {
            "id": "1200",
            "age": "38",
            "sumInsured": "5000",
            "premium": "2182.87",
            "gender": "0"
        },
        {
            "id": "1199",
            "age": "38",
            "sumInsured": "4500",
            "premium": "1964.59",
            "gender": "0"
        },
        {
            "id": "1198",
            "age": "38",
            "sumInsured": "4000",
            "premium": "1746.3",
            "gender": "0"
        },
        {
            "id": "1197",
            "age": "38",
            "sumInsured": "3500",
            "premium": "1528.01",
            "gender": "0"
        },
        {
            "id": "1196",
            "age": "38",
            "sumInsured": "3000",
            "premium": "1309.72",
            "gender": "0"
        },
        {
            "id": "1195",
            "age": "38",
            "sumInsured": "2500",
            "premium": "1091.44",
            "gender": "0"
        },
        {
            "id": "1194",
            "age": "38",
            "sumInsured": "2000",
            "premium": "873.149",
            "gender": "0"
        },
        {
            "id": "1193",
            "age": "38",
            "sumInsured": "1500",
            "premium": "654.862",
            "gender": "0"
        },
        {
            "id": "1192",
            "age": "38",
            "sumInsured": "1000",
            "premium": "436.575",
            "gender": "0"
        },
        {
            "id": "1191",
            "age": "38",
            "sumInsured": "500",
            "premium": "218.287",
            "gender": "0"
        },
        {
            "id": "1190",
            "age": "37",
            "sumInsured": "5000",
            "premium": "2144.84",
            "gender": "0"
        },
        {
            "id": "1189",
            "age": "37",
            "sumInsured": "4500",
            "premium": "1930.35",
            "gender": "0"
        },
        {
            "id": "1188",
            "age": "37",
            "sumInsured": "4000",
            "premium": "1715.87",
            "gender": "0"
        },
        {
            "id": "1187",
            "age": "37",
            "sumInsured": "3500",
            "premium": "1501.39",
            "gender": "0"
        },
        {
            "id": "1186",
            "age": "37",
            "sumInsured": "3000",
            "premium": "1286.9",
            "gender": "0"
        },
        {
            "id": "1185",
            "age": "37",
            "sumInsured": "2500",
            "premium": "1072.42",
            "gender": "0"
        },
        {
            "id": "1184",
            "age": "37",
            "sumInsured": "2000",
            "premium": "857.935",
            "gender": "0"
        },
        {
            "id": "1183",
            "age": "37",
            "sumInsured": "1500",
            "premium": "643.451",
            "gender": "0"
        },
        {
            "id": "1182",
            "age": "37",
            "sumInsured": "1000",
            "premium": "428.967",
            "gender": "0"
        },
        {
            "id": "1181",
            "age": "37",
            "sumInsured": "500",
            "premium": "214.484",
            "gender": "0"
        },
        {
            "id": "1180",
            "age": "36",
            "sumInsured": "5000",
            "premium": "2107.92",
            "gender": "0"
        },
        {
            "id": "1179",
            "age": "36",
            "sumInsured": "4500",
            "premium": "1897.13",
            "gender": "0"
        },
        {
            "id": "1178",
            "age": "36",
            "sumInsured": "4000",
            "premium": "1686.33",
            "gender": "0"
        },
        {
            "id": "1177",
            "age": "36",
            "sumInsured": "3500",
            "premium": "1475.54",
            "gender": "0"
        },
        {
            "id": "1176",
            "age": "36",
            "sumInsured": "3000",
            "premium": "1264.75",
            "gender": "0"
        },
        {
            "id": "1175",
            "age": "36",
            "sumInsured": "2500",
            "premium": "1053.96",
            "gender": "0"
        },
        {
            "id": "1174",
            "age": "36",
            "sumInsured": "2000",
            "premium": "843.167",
            "gender": "0"
        },
        {
            "id": "1173",
            "age": "36",
            "sumInsured": "1500",
            "premium": "632.375",
            "gender": "0"
        },
        {
            "id": "1172",
            "age": "36",
            "sumInsured": "1000",
            "premium": "421.584",
            "gender": "0"
        },
        {
            "id": "1171",
            "age": "36",
            "sumInsured": "500",
            "premium": "210.792",
            "gender": "0"
        },
        {
            "id": "1170",
            "age": "35",
            "sumInsured": "5000",
            "premium": "2226.74",
            "gender": "0"
        },
        {
            "id": "1169",
            "age": "35",
            "sumInsured": "4500",
            "premium": "2004.07",
            "gender": "0"
        },
        {
            "id": "1168",
            "age": "35",
            "sumInsured": "4000",
            "premium": "1781.39",
            "gender": "0"
        },
        {
            "id": "1167",
            "age": "35",
            "sumInsured": "3500",
            "premium": "1558.72",
            "gender": "0"
        },
        {
            "id": "1166",
            "age": "35",
            "sumInsured": "3000",
            "premium": "1336.05",
            "gender": "0"
        },
        {
            "id": "1165",
            "age": "35",
            "sumInsured": "2500",
            "premium": "1113.37",
            "gender": "0"
        },
        {
            "id": "1164",
            "age": "35",
            "sumInsured": "2000",
            "premium": "890.697",
            "gender": "0"
        },
        {
            "id": "1163",
            "age": "35",
            "sumInsured": "1500",
            "premium": "668.023",
            "gender": "0"
        },
        {
            "id": "1162",
            "age": "35",
            "sumInsured": "1000",
            "premium": "445.348",
            "gender": "0"
        },
        {
            "id": "1161",
            "age": "35",
            "sumInsured": "500",
            "premium": "222.674",
            "gender": "0"
        },
        {
            "id": "1160",
            "age": "34",
            "sumInsured": "5000",
            "premium": "2240.08",
            "gender": "0"
        },
        {
            "id": "1159",
            "age": "34",
            "sumInsured": "4500",
            "premium": "2016.07",
            "gender": "0"
        },
        {
            "id": "1158",
            "age": "34",
            "sumInsured": "4000",
            "premium": "1792.06",
            "gender": "0"
        },
        {
            "id": "1157",
            "age": "34",
            "sumInsured": "3500",
            "premium": "1568.05",
            "gender": "0"
        },
        {
            "id": "1156",
            "age": "34",
            "sumInsured": "3000",
            "premium": "1344.05",
            "gender": "0"
        },
        {
            "id": "1155",
            "age": "34",
            "sumInsured": "2500",
            "premium": "1120.04",
            "gender": "0"
        },
        {
            "id": "1154",
            "age": "34",
            "sumInsured": "2000",
            "premium": "896.031",
            "gender": "0"
        },
        {
            "id": "1153",
            "age": "34",
            "sumInsured": "1500",
            "premium": "672.023",
            "gender": "0"
        },
        {
            "id": "1152",
            "age": "34",
            "sumInsured": "1000",
            "premium": "448.015",
            "gender": "0"
        },
        {
            "id": "1151",
            "age": "34",
            "sumInsured": "500",
            "premium": "224.008",
            "gender": "0"
        },
        {
            "id": "1150",
            "age": "33",
            "sumInsured": "5000",
            "premium": "2253.49",
            "gender": "0"
        },
        {
            "id": "1149",
            "age": "33",
            "sumInsured": "4500",
            "premium": "2028.14",
            "gender": "0"
        },
        {
            "id": "1148",
            "age": "33",
            "sumInsured": "4000",
            "premium": "1802.79",
            "gender": "0"
        },
        {
            "id": "1147",
            "age": "33",
            "sumInsured": "3500",
            "premium": "1577.44",
            "gender": "0"
        },
        {
            "id": "1146",
            "age": "33",
            "sumInsured": "3000",
            "premium": "1352.09",
            "gender": "0"
        },
        {
            "id": "1145",
            "age": "33",
            "sumInsured": "2500",
            "premium": "1126.74",
            "gender": "0"
        },
        {
            "id": "1144",
            "age": "33",
            "sumInsured": "2000",
            "premium": "901.395",
            "gender": "0"
        },
        {
            "id": "1143",
            "age": "33",
            "sumInsured": "1500",
            "premium": "676.046",
            "gender": "0"
        },
        {
            "id": "1142",
            "age": "33",
            "sumInsured": "1000",
            "premium": "450.698",
            "gender": "0"
        },
        {
            "id": "1141",
            "age": "33",
            "sumInsured": "500",
            "premium": "225.349",
            "gender": "0"
        },
        {
            "id": "1140",
            "age": "32",
            "sumInsured": "5000",
            "premium": "2258.04",
            "gender": "0"
        },
        {
            "id": "1139",
            "age": "32",
            "sumInsured": "4500",
            "premium": "2032.24",
            "gender": "0"
        },
        {
            "id": "1138",
            "age": "32",
            "sumInsured": "4000",
            "premium": "1806.43",
            "gender": "0"
        },
        {
            "id": "1137",
            "age": "32",
            "sumInsured": "3500",
            "premium": "1580.63",
            "gender": "0"
        },
        {
            "id": "1136",
            "age": "32",
            "sumInsured": "3000",
            "premium": "1354.83",
            "gender": "0"
        },
        {
            "id": "1135",
            "age": "32",
            "sumInsured": "2500",
            "premium": "1129.02",
            "gender": "0"
        },
        {
            "id": "1134",
            "age": "32",
            "sumInsured": "2000",
            "premium": "903.217",
            "gender": "0"
        },
        {
            "id": "1133",
            "age": "32",
            "sumInsured": "1500",
            "premium": "677.413",
            "gender": "0"
        },
        {
            "id": "1132",
            "age": "32",
            "sumInsured": "1000",
            "premium": "451.608",
            "gender": "0"
        },
        {
            "id": "1131",
            "age": "32",
            "sumInsured": "500",
            "premium": "225.804",
            "gender": "0"
        },
        {
            "id": "1130",
            "age": "31",
            "sumInsured": "5000",
            "premium": "2262.54",
            "gender": "0"
        },
        {
            "id": "1129",
            "age": "31",
            "sumInsured": "4500",
            "premium": "2036.29",
            "gender": "0"
        },
        {
            "id": "1128",
            "age": "31",
            "sumInsured": "4000",
            "premium": "1810.03",
            "gender": "0"
        },
        {
            "id": "1127",
            "age": "31",
            "sumInsured": "3500",
            "premium": "1583.78",
            "gender": "0"
        },
        {
            "id": "1126",
            "age": "31",
            "sumInsured": "3000",
            "premium": "1357.53",
            "gender": "0"
        },
        {
            "id": "1125",
            "age": "31",
            "sumInsured": "2500",
            "premium": "1131.27",
            "gender": "0"
        },
        {
            "id": "1124",
            "age": "31",
            "sumInsured": "2000",
            "premium": "905.017",
            "gender": "0"
        },
        {
            "id": "1123",
            "age": "31",
            "sumInsured": "1500",
            "premium": "678.763",
            "gender": "0"
        },
        {
            "id": "1122",
            "age": "31",
            "sumInsured": "1000",
            "premium": "452.509",
            "gender": "0"
        },
        {
            "id": "1121",
            "age": "31",
            "sumInsured": "500",
            "premium": "226.254",
            "gender": "0"
        },
        {
            "id": "1120",
            "age": "30",
            "sumInsured": "5000",
            "premium": "2241.58",
            "gender": "0"
        },
        {
            "id": "1119",
            "age": "30",
            "sumInsured": "4500",
            "premium": "2017.42",
            "gender": "0"
        },
        {
            "id": "1118",
            "age": "30",
            "sumInsured": "4000",
            "premium": "1793.26",
            "gender": "0"
        },
        {
            "id": "1117",
            "age": "30",
            "sumInsured": "3500",
            "premium": "1569.1",
            "gender": "0"
        },
        {
            "id": "1116",
            "age": "30",
            "sumInsured": "3000",
            "premium": "1344.95",
            "gender": "0"
        },
        {
            "id": "1115",
            "age": "30",
            "sumInsured": "2500",
            "premium": "1120.79",
            "gender": "0"
        },
        {
            "id": "1114",
            "age": "30",
            "sumInsured": "2000",
            "premium": "896.631",
            "gender": "0"
        },
        {
            "id": "1113",
            "age": "30",
            "sumInsured": "1500",
            "premium": "672.473",
            "gender": "0"
        },
        {
            "id": "1112",
            "age": "30",
            "sumInsured": "1000",
            "premium": "448.315",
            "gender": "0"
        },
        {
            "id": "1111",
            "age": "30",
            "sumInsured": "500",
            "premium": "224.158",
            "gender": "0"
        },
        {
            "id": "1110",
            "age": "29",
            "sumInsured": "5000",
            "premium": "2237.9",
            "gender": "0"
        },
        {
            "id": "1109",
            "age": "29",
            "sumInsured": "4500",
            "premium": "2014.11",
            "gender": "0"
        },
        {
            "id": "1108",
            "age": "29",
            "sumInsured": "4000",
            "premium": "1790.32",
            "gender": "0"
        },
        {
            "id": "1107",
            "age": "29",
            "sumInsured": "3500",
            "premium": "1566.53",
            "gender": "0"
        },
        {
            "id": "1106",
            "age": "29",
            "sumInsured": "3000",
            "premium": "1342.74",
            "gender": "0"
        },
        {
            "id": "1105",
            "age": "29",
            "sumInsured": "2500",
            "premium": "1118.95",
            "gender": "0"
        },
        {
            "id": "1104",
            "age": "29",
            "sumInsured": "2000",
            "premium": "895.162",
            "gender": "0"
        },
        {
            "id": "1103",
            "age": "29",
            "sumInsured": "1500",
            "premium": "671.371",
            "gender": "0"
        },
        {
            "id": "1102",
            "age": "29",
            "sumInsured": "1000",
            "premium": "447.581",
            "gender": "0"
        },
        {
            "id": "1101",
            "age": "29",
            "sumInsured": "500",
            "premium": "223.79",
            "gender": "0"
        },
        {
            "id": "1100",
            "age": "28",
            "sumInsured": "5000",
            "premium": "2234.17",
            "gender": "0"
        },
        {
            "id": "1099",
            "age": "28",
            "sumInsured": "4500",
            "premium": "2010.76",
            "gender": "0"
        },
        {
            "id": "1098",
            "age": "28",
            "sumInsured": "4000",
            "premium": "1787.34",
            "gender": "0"
        },
        {
            "id": "1097",
            "age": "28",
            "sumInsured": "3500",
            "premium": "1563.92",
            "gender": "0"
        },
        {
            "id": "1096",
            "age": "28",
            "sumInsured": "3000",
            "premium": "1340.5",
            "gender": "0"
        },
        {
            "id": "1095",
            "age": "28",
            "sumInsured": "2500",
            "premium": "1117.09",
            "gender": "0"
        },
        {
            "id": "1094",
            "age": "28",
            "sumInsured": "2000",
            "premium": "893.669",
            "gender": "0"
        },
        {
            "id": "1093",
            "age": "28",
            "sumInsured": "1500",
            "premium": "670.252",
            "gender": "0"
        },
        {
            "id": "1092",
            "age": "28",
            "sumInsured": "1000",
            "premium": "446.835",
            "gender": "0"
        },
        {
            "id": "1091",
            "age": "28",
            "sumInsured": "500",
            "premium": "223.417",
            "gender": "0"
        },
        {
            "id": "1090",
            "age": "27",
            "sumInsured": "5000",
            "premium": "2183.06",
            "gender": "0"
        },
        {
            "id": "1089",
            "age": "27",
            "sumInsured": "4500",
            "premium": "1964.75",
            "gender": "0"
        },
        {
            "id": "1088",
            "age": "27",
            "sumInsured": "4000",
            "premium": "1746.45",
            "gender": "0"
        },
        {
            "id": "1087",
            "age": "27",
            "sumInsured": "3500",
            "premium": "1528.14",
            "gender": "0"
        },
        {
            "id": "1086",
            "age": "27",
            "sumInsured": "3000",
            "premium": "1309.83",
            "gender": "0"
        },
        {
            "id": "1085",
            "age": "27",
            "sumInsured": "2500",
            "premium": "1091.53",
            "gender": "0"
        },
        {
            "id": "1084",
            "age": "27",
            "sumInsured": "2000",
            "premium": "873.223",
            "gender": "0"
        },
        {
            "id": "1083",
            "age": "27",
            "sumInsured": "1500",
            "premium": "654.917",
            "gender": "0"
        },
        {
            "id": "1082",
            "age": "27",
            "sumInsured": "1000",
            "premium": "436.612",
            "gender": "0"
        },
        {
            "id": "1081",
            "age": "27",
            "sumInsured": "500",
            "premium": "218.306",
            "gender": "0"
        },
        {
            "id": "1080",
            "age": "26",
            "sumInsured": "5000",
            "premium": "2131.03",
            "gender": "0"
        },
        {
            "id": "1079",
            "age": "26",
            "sumInsured": "4500",
            "premium": "1917.92",
            "gender": "0"
        },
        {
            "id": "1078",
            "age": "26",
            "sumInsured": "4000",
            "premium": "1704.82",
            "gender": "0"
        },
        {
            "id": "1077",
            "age": "26",
            "sumInsured": "3500",
            "premium": "1491.72",
            "gender": "0"
        },
        {
            "id": "1076",
            "age": "26",
            "sumInsured": "3000",
            "premium": "1278.62",
            "gender": "0"
        },
        {
            "id": "1075",
            "age": "26",
            "sumInsured": "2500",
            "premium": "1065.51",
            "gender": "0"
        },
        {
            "id": "1074",
            "age": "26",
            "sumInsured": "2000",
            "premium": "852.411",
            "gender": "0"
        },
        {
            "id": "1073",
            "age": "26",
            "sumInsured": "1500",
            "premium": "639.308",
            "gender": "0"
        },
        {
            "id": "1072",
            "age": "26",
            "sumInsured": "1000",
            "premium": "426.205",
            "gender": "0"
        },
        {
            "id": "1071",
            "age": "26",
            "sumInsured": "500",
            "premium": "213.103",
            "gender": "0"
        },
        {
            "id": "1070",
            "age": "25",
            "sumInsured": "5000",
            "premium": "2028.75",
            "gender": "0"
        },
        {
            "id": "1069",
            "age": "25",
            "sumInsured": "4500",
            "premium": "1825.88",
            "gender": "0"
        },
        {
            "id": "1068",
            "age": "25",
            "sumInsured": "4000",
            "premium": "1623",
            "gender": "0"
        },
        {
            "id": "1067",
            "age": "25",
            "sumInsured": "3500",
            "premium": "1420.13",
            "gender": "0"
        },
        {
            "id": "1066",
            "age": "25",
            "sumInsured": "3000",
            "premium": "1217.25",
            "gender": "0"
        },
        {
            "id": "1065",
            "age": "25",
            "sumInsured": "2500",
            "premium": "1014.38",
            "gender": "0"
        },
        {
            "id": "1064",
            "age": "25",
            "sumInsured": "2000",
            "premium": "811.501",
            "gender": "0"
        },
        {
            "id": "1063",
            "age": "25",
            "sumInsured": "1500",
            "premium": "608.626",
            "gender": "0"
        },
        {
            "id": "1062",
            "age": "25",
            "sumInsured": "1000",
            "premium": "405.751",
            "gender": "0"
        },
        {
            "id": "1061",
            "age": "25",
            "sumInsured": "500",
            "premium": "202.875",
            "gender": "0"
        },
        {
            "id": "1060",
            "age": "24",
            "sumInsured": "5000",
            "premium": "1933.98",
            "gender": "0"
        },
        {
            "id": "1059",
            "age": "24",
            "sumInsured": "4500",
            "premium": "1740.58",
            "gender": "0"
        },
        {
            "id": "1058",
            "age": "24",
            "sumInsured": "4000",
            "premium": "1547.18",
            "gender": "0"
        },
        {
            "id": "1057",
            "age": "24",
            "sumInsured": "3500",
            "premium": "1353.79",
            "gender": "0"
        },
        {
            "id": "1056",
            "age": "24",
            "sumInsured": "3000",
            "premium": "1160.39",
            "gender": "0"
        },
        {
            "id": "1055",
            "age": "24",
            "sumInsured": "2500",
            "premium": "966.99",
            "gender": "0"
        },
        {
            "id": "1054",
            "age": "24",
            "sumInsured": "2000",
            "premium": "773.592",
            "gender": "0"
        },
        {
            "id": "1053",
            "age": "24",
            "sumInsured": "1500",
            "premium": "580.194",
            "gender": "0"
        },
        {
            "id": "1052",
            "age": "24",
            "sumInsured": "1000",
            "premium": "386.796",
            "gender": "0"
        },
        {
            "id": "1051",
            "age": "24",
            "sumInsured": "500",
            "premium": "193.398",
            "gender": "0"
        },
        {
            "id": "1050",
            "age": "23",
            "sumInsured": "5000",
            "premium": "1841.98",
            "gender": "0"
        },
        {
            "id": "1049",
            "age": "23",
            "sumInsured": "4500",
            "premium": "1657.79",
            "gender": "0"
        },
        {
            "id": "1048",
            "age": "23",
            "sumInsured": "4000",
            "premium": "1473.59",
            "gender": "0"
        },
        {
            "id": "1047",
            "age": "23",
            "sumInsured": "3500",
            "premium": "1289.39",
            "gender": "0"
        },
        {
            "id": "1046",
            "age": "23",
            "sumInsured": "3000",
            "premium": "1105.19",
            "gender": "0"
        },
        {
            "id": "1045",
            "age": "23",
            "sumInsured": "2500",
            "premium": "920.992",
            "gender": "0"
        },
        {
            "id": "1044",
            "age": "23",
            "sumInsured": "2000",
            "premium": "736.794",
            "gender": "0"
        },
        {
            "id": "1043",
            "age": "23",
            "sumInsured": "1500",
            "premium": "552.595",
            "gender": "0"
        },
        {
            "id": "1042",
            "age": "23",
            "sumInsured": "1000",
            "premium": "368.397",
            "gender": "0"
        },
        {
            "id": "1041",
            "age": "23",
            "sumInsured": "500",
            "premium": "184.198",
            "gender": "0"
        },
        {
            "id": "1040",
            "age": "22",
            "sumInsured": "5000",
            "premium": "1745.21",
            "gender": "0"
        },
        {
            "id": "1039",
            "age": "22",
            "sumInsured": "4500",
            "premium": "1570.68",
            "gender": "0"
        },
        {
            "id": "1038",
            "age": "22",
            "sumInsured": "4000",
            "premium": "1396.16",
            "gender": "0"
        },
        {
            "id": "1037",
            "age": "22",
            "sumInsured": "3500",
            "premium": "1221.64",
            "gender": "0"
        },
        {
            "id": "1036",
            "age": "22",
            "sumInsured": "3000",
            "premium": "1047.12",
            "gender": "0"
        },
        {
            "id": "1035",
            "age": "22",
            "sumInsured": "2500",
            "premium": "872.603",
            "gender": "0"
        },
        {
            "id": "1034",
            "age": "22",
            "sumInsured": "2000",
            "premium": "698.082",
            "gender": "0"
        },
        {
            "id": "1033",
            "age": "22",
            "sumInsured": "1500",
            "premium": "523.562",
            "gender": "0"
        },
        {
            "id": "1032",
            "age": "22",
            "sumInsured": "1000",
            "premium": "349.041",
            "gender": "0"
        },
        {
            "id": "1031",
            "age": "22",
            "sumInsured": "500",
            "premium": "174.521",
            "gender": "0"
        },
        {
            "id": "1030",
            "age": "21",
            "sumInsured": "5000",
            "premium": "1650.88",
            "gender": "0"
        },
        {
            "id": "1029",
            "age": "21",
            "sumInsured": "4500",
            "premium": "1485.79",
            "gender": "0"
        },
        {
            "id": "1028",
            "age": "21",
            "sumInsured": "4000",
            "premium": "1320.7",
            "gender": "0"
        },
        {
            "id": "1027",
            "age": "21",
            "sumInsured": "3500",
            "premium": "1155.62",
            "gender": "0"
        },
        {
            "id": "1026",
            "age": "21",
            "sumInsured": "3000",
            "premium": "990.528",
            "gender": "0"
        },
        {
            "id": "1025",
            "age": "21",
            "sumInsured": "2500",
            "premium": "825.44",
            "gender": "0"
        },
        {
            "id": "1024",
            "age": "21",
            "sumInsured": "2000",
            "premium": "660.352",
            "gender": "0"
        },
        {
            "id": "1023",
            "age": "21",
            "sumInsured": "1500",
            "premium": "495.264",
            "gender": "0"
        },
        {
            "id": "1022",
            "age": "21",
            "sumInsured": "1000",
            "premium": "330.176",
            "gender": "0"
        },
        {
            "id": "1021",
            "age": "21",
            "sumInsured": "500",
            "premium": "165.088",
            "gender": "0"
        },
        {
            "id": "1020",
            "age": "20",
            "sumInsured": "5000",
            "premium": "1604",
            "gender": "0"
        },
        {
            "id": "1019",
            "age": "20",
            "sumInsured": "4500",
            "premium": "1443.6",
            "gender": "0"
        },
        {
            "id": "1018",
            "age": "20",
            "sumInsured": "4000",
            "premium": "1283.2",
            "gender": "0"
        },
        {
            "id": "1017",
            "age": "20",
            "sumInsured": "3500",
            "premium": "1122.8",
            "gender": "0"
        },
        {
            "id": "1016",
            "age": "20",
            "sumInsured": "3000",
            "premium": "962.401",
            "gender": "0"
        },
        {
            "id": "1015",
            "age": "20",
            "sumInsured": "2500",
            "premium": "802.001",
            "gender": "0"
        },
        {
            "id": "1014",
            "age": "20",
            "sumInsured": "2000",
            "premium": "641.601",
            "gender": "0"
        },
        {
            "id": "1013",
            "age": "20",
            "sumInsured": "1500",
            "premium": "481.2",
            "gender": "0"
        },
        {
            "id": "1012",
            "age": "20",
            "sumInsured": "1000",
            "premium": "320.8",
            "gender": "0"
        },
        {
            "id": "1011",
            "age": "20",
            "sumInsured": "500",
            "premium": "160.4",
            "gender": "0"
        },
        {
            "id": "1010",
            "age": "19",
            "sumInsured": "5000",
            "premium": "1460.39",
            "gender": "0"
        },
        {
            "id": "1009",
            "age": "19",
            "sumInsured": "4500",
            "premium": "1314.35",
            "gender": "0"
        },
        {
            "id": "1008",
            "age": "19",
            "sumInsured": "4000",
            "premium": "1168.31",
            "gender": "0"
        },
        {
            "id": "1007",
            "age": "19",
            "sumInsured": "3500",
            "premium": "1022.27",
            "gender": "0"
        },
        {
            "id": "1006",
            "age": "19",
            "sumInsured": "3000",
            "premium": "876.235",
            "gender": "0"
        },
        {
            "id": "1005",
            "age": "19",
            "sumInsured": "2500",
            "premium": "730.196",
            "gender": "0"
        },
        {
            "id": "1004",
            "age": "19",
            "sumInsured": "2000",
            "premium": "584.157",
            "gender": "0"
        },
        {
            "id": "1003",
            "age": "19",
            "sumInsured": "1500",
            "premium": "438.118",
            "gender": "0"
        },
        {
            "id": "1002",
            "age": "19",
            "sumInsured": "1000",
            "premium": "292.078",
            "gender": "0"
        },
        {
            "id": "1001",
            "age": "19",
            "sumInsured": "500",
            "premium": "146.039",
            "gender": "0"
        },
        {
            "id": "1000",
            "age": "18",
            "sumInsured": "5000",
            "premium": "1327.02",
            "gender": "0"
        },
        {
            "id": "999",
            "age": "18",
            "sumInsured": "4500",
            "premium": "1194.32",
            "gender": "0"
        },
        {
            "id": "998",
            "age": "18",
            "sumInsured": "4000",
            "premium": "1061.62",
            "gender": "0"
        },
        {
            "id": "997",
            "age": "18",
            "sumInsured": "3500",
            "premium": "928.916",
            "gender": "0"
        },
        {
            "id": "996",
            "age": "18",
            "sumInsured": "3000",
            "premium": "796.214",
            "gender": "0"
        },
        {
            "id": "995",
            "age": "18",
            "sumInsured": "2500",
            "premium": "663.512",
            "gender": "0"
        },
        {
            "id": "994",
            "age": "18",
            "sumInsured": "2000",
            "premium": "530.809",
            "gender": "0"
        },
        {
            "id": "993",
            "age": "18",
            "sumInsured": "1500",
            "premium": "398.107",
            "gender": "0"
        },
        {
            "id": "992",
            "age": "18",
            "sumInsured": "1000",
            "premium": "265.405",
            "gender": "0"
        },
        {
            "id": "991",
            "age": "18",
            "sumInsured": "500",
            "premium": "132.702",
            "gender": "0"
        },
        {
            "id": "990",
            "age": "17",
            "sumInsured": "5000",
            "premium": "1215.09",
            "gender": "0"
        },
        {
            "id": "989",
            "age": "17",
            "sumInsured": "4500",
            "premium": "1093.58",
            "gender": "0"
        },
        {
            "id": "988",
            "age": "17",
            "sumInsured": "4000",
            "premium": "972.071",
            "gender": "0"
        },
        {
            "id": "987",
            "age": "17",
            "sumInsured": "3500",
            "premium": "850.562",
            "gender": "0"
        },
        {
            "id": "986",
            "age": "17",
            "sumInsured": "3000",
            "premium": "729.053",
            "gender": "0"
        },
        {
            "id": "985",
            "age": "17",
            "sumInsured": "2500",
            "premium": "607.544",
            "gender": "0"
        },
        {
            "id": "984",
            "age": "17",
            "sumInsured": "2000",
            "premium": "486.036",
            "gender": "0"
        },
        {
            "id": "983",
            "age": "17",
            "sumInsured": "1500",
            "premium": "364.527",
            "gender": "0"
        },
        {
            "id": "982",
            "age": "17",
            "sumInsured": "1000",
            "premium": "243.018",
            "gender": "0"
        },
        {
            "id": "981",
            "age": "17",
            "sumInsured": "500",
            "premium": "121.509",
            "gender": "0"
        },
        {
            "id": "980",
            "age": "16",
            "sumInsured": "5000",
            "premium": "1110.88",
            "gender": "0"
        },
        {
            "id": "979",
            "age": "16",
            "sumInsured": "4500",
            "premium": "999.788",
            "gender": "0"
        },
        {
            "id": "978",
            "age": "16",
            "sumInsured": "4000",
            "premium": "888.7",
            "gender": "0"
        },
        {
            "id": "977",
            "age": "16",
            "sumInsured": "3500",
            "premium": "777.613",
            "gender": "0"
        },
        {
            "id": "976",
            "age": "16",
            "sumInsured": "3000",
            "premium": "666.525",
            "gender": "0"
        },
        {
            "id": "975",
            "age": "16",
            "sumInsured": "2500",
            "premium": "555.438",
            "gender": "0"
        },
        {
            "id": "974",
            "age": "16",
            "sumInsured": "2000",
            "premium": "444.35",
            "gender": "0"
        },
        {
            "id": "973",
            "age": "16",
            "sumInsured": "1500",
            "premium": "333.263",
            "gender": "0"
        },
        {
            "id": "972",
            "age": "16",
            "sumInsured": "1000",
            "premium": "222.175",
            "gender": "0"
        },
        {
            "id": "971",
            "age": "16",
            "sumInsured": "500",
            "premium": "111.088",
            "gender": "0"
        },
        {
            "id": "970",
            "age": "15",
            "sumInsured": "5000",
            "premium": "1034.51",
            "gender": "0"
        },
        {
            "id": "969",
            "age": "15",
            "sumInsured": "4500",
            "premium": "931.055",
            "gender": "0"
        },
        {
            "id": "968",
            "age": "15",
            "sumInsured": "4000",
            "premium": "827.604",
            "gender": "0"
        },
        {
            "id": "967",
            "age": "15",
            "sumInsured": "3500",
            "premium": "724.154",
            "gender": "0"
        },
        {
            "id": "966",
            "age": "15",
            "sumInsured": "3000",
            "premium": "620.703",
            "gender": "0"
        },
        {
            "id": "965",
            "age": "15",
            "sumInsured": "2500",
            "premium": "517.253",
            "gender": "0"
        },
        {
            "id": "964",
            "age": "15",
            "sumInsured": "2000",
            "premium": "413.802",
            "gender": "0"
        },
        {
            "id": "963",
            "age": "15",
            "sumInsured": "1500",
            "premium": "310.352",
            "gender": "0"
        },
        {
            "id": "962",
            "age": "15",
            "sumInsured": "1000",
            "premium": "206.901",
            "gender": "0"
        },
        {
            "id": "961",
            "age": "15",
            "sumInsured": "500",
            "premium": "103.451",
            "gender": "0"
        },
        {
            "id": "960",
            "age": "14",
            "sumInsured": "5000",
            "premium": "965.633",
            "gender": "0"
        },
        {
            "id": "959",
            "age": "14",
            "sumInsured": "4500",
            "premium": "869.07",
            "gender": "0"
        },
        {
            "id": "958",
            "age": "14",
            "sumInsured": "4000",
            "premium": "772.506",
            "gender": "0"
        },
        {
            "id": "957",
            "age": "14",
            "sumInsured": "3500",
            "premium": "675.943",
            "gender": "0"
        },
        {
            "id": "956",
            "age": "14",
            "sumInsured": "3000",
            "premium": "579.38",
            "gender": "0"
        },
        {
            "id": "955",
            "age": "14",
            "sumInsured": "2500",
            "premium": "482.816",
            "gender": "0"
        },
        {
            "id": "954",
            "age": "14",
            "sumInsured": "2000",
            "premium": "386.253",
            "gender": "0"
        },
        {
            "id": "953",
            "age": "14",
            "sumInsured": "1500",
            "premium": "289.69",
            "gender": "0"
        },
        {
            "id": "952",
            "age": "14",
            "sumInsured": "1000",
            "premium": "193.127",
            "gender": "0"
        },
        {
            "id": "951",
            "age": "14",
            "sumInsured": "500",
            "premium": "96.5633",
            "gender": "0"
        },
        {
            "id": "950",
            "age": "13",
            "sumInsured": "5000",
            "premium": "899.958",
            "gender": "0"
        },
        {
            "id": "949",
            "age": "13",
            "sumInsured": "4500",
            "premium": "809.962",
            "gender": "0"
        },
        {
            "id": "948",
            "age": "13",
            "sumInsured": "4000",
            "premium": "719.967",
            "gender": "0"
        },
        {
            "id": "947",
            "age": "13",
            "sumInsured": "3500",
            "premium": "629.971",
            "gender": "0"
        },
        {
            "id": "946",
            "age": "13",
            "sumInsured": "3000",
            "premium": "539.975",
            "gender": "0"
        },
        {
            "id": "945",
            "age": "13",
            "sumInsured": "2500",
            "premium": "449.979",
            "gender": "0"
        },
        {
            "id": "944",
            "age": "13",
            "sumInsured": "2000",
            "premium": "359.983",
            "gender": "0"
        },
        {
            "id": "943",
            "age": "13",
            "sumInsured": "1500",
            "premium": "269.987",
            "gender": "0"
        },
        {
            "id": "942",
            "age": "13",
            "sumInsured": "1000",
            "premium": "179.992",
            "gender": "0"
        },
        {
            "id": "941",
            "age": "13",
            "sumInsured": "500",
            "premium": "89.9958",
            "gender": "0"
        },
        {
            "id": "940",
            "age": "12",
            "sumInsured": "5000",
            "premium": "876.298",
            "gender": "0"
        },
        {
            "id": "939",
            "age": "12",
            "sumInsured": "4500",
            "premium": "788.669",
            "gender": "0"
        },
        {
            "id": "938",
            "age": "12",
            "sumInsured": "4000",
            "premium": "701.039",
            "gender": "0"
        },
        {
            "id": "937",
            "age": "12",
            "sumInsured": "3500",
            "premium": "613.409",
            "gender": "0"
        },
        {
            "id": "936",
            "age": "12",
            "sumInsured": "3000",
            "premium": "525.779",
            "gender": "0"
        },
        {
            "id": "935",
            "age": "12",
            "sumInsured": "2500",
            "premium": "438.149",
            "gender": "0"
        },
        {
            "id": "934",
            "age": "12",
            "sumInsured": "2000",
            "premium": "350.519",
            "gender": "0"
        },
        {
            "id": "933",
            "age": "12",
            "sumInsured": "1500",
            "premium": "262.89",
            "gender": "0"
        },
        {
            "id": "932",
            "age": "12",
            "sumInsured": "1000",
            "premium": "175.26",
            "gender": "0"
        },
        {
            "id": "931",
            "age": "12",
            "sumInsured": "500",
            "premium": "87.6298",
            "gender": "0"
        },
        {
            "id": "930",
            "age": "11",
            "sumInsured": "5000",
            "premium": "853.249",
            "gender": "0"
        },
        {
            "id": "929",
            "age": "11",
            "sumInsured": "4500",
            "premium": "767.924",
            "gender": "0"
        },
        {
            "id": "928",
            "age": "11",
            "sumInsured": "4000",
            "premium": "682.599",
            "gender": "0"
        },
        {
            "id": "927",
            "age": "11",
            "sumInsured": "3500",
            "premium": "597.274",
            "gender": "0"
        },
        {
            "id": "926",
            "age": "11",
            "sumInsured": "3000",
            "premium": "511.949",
            "gender": "0"
        },
        {
            "id": "925",
            "age": "11",
            "sumInsured": "2500",
            "premium": "426.624",
            "gender": "0"
        },
        {
            "id": "924",
            "age": "11",
            "sumInsured": "2000",
            "premium": "341.299",
            "gender": "0"
        },
        {
            "id": "923",
            "age": "11",
            "sumInsured": "1500",
            "premium": "255.975",
            "gender": "0"
        },
        {
            "id": "922",
            "age": "11",
            "sumInsured": "1000",
            "premium": "170.65",
            "gender": "0"
        },
        {
            "id": "921",
            "age": "11",
            "sumInsured": "500",
            "premium": "85.3249",
            "gender": "0"
        },
        {
            "id": "920",
            "age": "10",
            "sumInsured": "5000",
            "premium": "767.276",
            "gender": "0"
        },
        {
            "id": "919",
            "age": "10",
            "sumInsured": "4500",
            "premium": "690.549",
            "gender": "0"
        },
        {
            "id": "918",
            "age": "10",
            "sumInsured": "4000",
            "premium": "613.821",
            "gender": "0"
        },
        {
            "id": "917",
            "age": "10",
            "sumInsured": "3500",
            "premium": "537.093",
            "gender": "0"
        },
        {
            "id": "916",
            "age": "10",
            "sumInsured": "3000",
            "premium": "460.366",
            "gender": "0"
        },
        {
            "id": "915",
            "age": "10",
            "sumInsured": "2500",
            "premium": "383.638",
            "gender": "0"
        },
        {
            "id": "914",
            "age": "10",
            "sumInsured": "2000",
            "premium": "306.911",
            "gender": "0"
        },
        {
            "id": "913",
            "age": "10",
            "sumInsured": "1500",
            "premium": "230.183",
            "gender": "0"
        },
        {
            "id": "912",
            "age": "10",
            "sumInsured": "1000",
            "premium": "153.455",
            "gender": "0"
        },
        {
            "id": "911",
            "age": "10",
            "sumInsured": "500",
            "premium": "76.7276",
            "gender": "0"
        },
        {
            "id": "910",
            "age": "9",
            "sumInsured": "5000",
            "premium": "859.725",
            "gender": "0"
        },
        {
            "id": "909",
            "age": "9",
            "sumInsured": "4500",
            "premium": "773.753",
            "gender": "0"
        },
        {
            "id": "908",
            "age": "9",
            "sumInsured": "4000",
            "premium": "687.78",
            "gender": "0"
        },
        {
            "id": "907",
            "age": "9",
            "sumInsured": "3500",
            "premium": "601.808",
            "gender": "0"
        },
        {
            "id": "906",
            "age": "9",
            "sumInsured": "3000",
            "premium": "515.835",
            "gender": "0"
        },
        {
            "id": "905",
            "age": "9",
            "sumInsured": "2500",
            "premium": "429.863",
            "gender": "0"
        },
        {
            "id": "904",
            "age": "9",
            "sumInsured": "2000",
            "premium": "343.89",
            "gender": "0"
        },
        {
            "id": "903",
            "age": "9",
            "sumInsured": "1500",
            "premium": "257.918",
            "gender": "0"
        },
        {
            "id": "902",
            "age": "9",
            "sumInsured": "1000",
            "premium": "171.945",
            "gender": "0"
        },
        {
            "id": "901",
            "age": "9",
            "sumInsured": "500",
            "premium": "85.9725",
            "gender": "0"
        },
        {
            "id": "900",
            "age": "8",
            "sumInsured": "5000",
            "premium": "962.942",
            "gender": "0"
        },
        {
            "id": "899",
            "age": "8",
            "sumInsured": "4500",
            "premium": "866.648",
            "gender": "0"
        },
        {
            "id": "898",
            "age": "8",
            "sumInsured": "4000",
            "premium": "770.354",
            "gender": "0"
        },
        {
            "id": "897",
            "age": "8",
            "sumInsured": "3500",
            "premium": "674.059",
            "gender": "0"
        },
        {
            "id": "896",
            "age": "8",
            "sumInsured": "3000",
            "premium": "577.765",
            "gender": "0"
        },
        {
            "id": "895",
            "age": "8",
            "sumInsured": "2500",
            "premium": "481.471",
            "gender": "0"
        },
        {
            "id": "894",
            "age": "8",
            "sumInsured": "2000",
            "premium": "385.177",
            "gender": "0"
        },
        {
            "id": "893",
            "age": "8",
            "sumInsured": "1500",
            "premium": "288.883",
            "gender": "0"
        },
        {
            "id": "892",
            "age": "8",
            "sumInsured": "1000",
            "premium": "192.588",
            "gender": "0"
        },
        {
            "id": "891",
            "age": "8",
            "sumInsured": "500",
            "premium": "96.2942",
            "gender": "0"
        },
        {
            "id": "890",
            "age": "7",
            "sumInsured": "5000",
            "premium": "1331.61",
            "gender": "0"
        },
        {
            "id": "889",
            "age": "7",
            "sumInsured": "4500",
            "premium": "1198.45",
            "gender": "0"
        },
        {
            "id": "888",
            "age": "7",
            "sumInsured": "4000",
            "premium": "1065.29",
            "gender": "0"
        },
        {
            "id": "887",
            "age": "7",
            "sumInsured": "3500",
            "premium": "932.126",
            "gender": "0"
        },
        {
            "id": "886",
            "age": "7",
            "sumInsured": "3000",
            "premium": "798.965",
            "gender": "0"
        },
        {
            "id": "885",
            "age": "7",
            "sumInsured": "2500",
            "premium": "665.804",
            "gender": "0"
        },
        {
            "id": "884",
            "age": "7",
            "sumInsured": "2000",
            "premium": "532.643",
            "gender": "0"
        },
        {
            "id": "883",
            "age": "7",
            "sumInsured": "1500",
            "premium": "399.482",
            "gender": "0"
        },
        {
            "id": "882",
            "age": "7",
            "sumInsured": "1000",
            "premium": "266.322",
            "gender": "0"
        },
        {
            "id": "881",
            "age": "7",
            "sumInsured": "500",
            "premium": "133.161",
            "gender": "0"
        },
        {
            "id": "880",
            "age": "6",
            "sumInsured": "5000",
            "premium": "1773.01",
            "gender": "0"
        },
        {
            "id": "879",
            "age": "6",
            "sumInsured": "4500",
            "premium": "1595.71",
            "gender": "0"
        },
        {
            "id": "878",
            "age": "6",
            "sumInsured": "4000",
            "premium": "1418.41",
            "gender": "0"
        },
        {
            "id": "877",
            "age": "6",
            "sumInsured": "3500",
            "premium": "1241.11",
            "gender": "0"
        },
        {
            "id": "876",
            "age": "6",
            "sumInsured": "3000",
            "premium": "1063.81",
            "gender": "0"
        },
        {
            "id": "875",
            "age": "6",
            "sumInsured": "2500",
            "premium": "886.505",
            "gender": "0"
        },
        {
            "id": "874",
            "age": "6",
            "sumInsured": "2000",
            "premium": "709.204",
            "gender": "0"
        },
        {
            "id": "873",
            "age": "6",
            "sumInsured": "1500",
            "premium": "531.903",
            "gender": "0"
        },
        {
            "id": "872",
            "age": "6",
            "sumInsured": "1000",
            "premium": "354.602",
            "gender": "0"
        },
        {
            "id": "871",
            "age": "6",
            "sumInsured": "500",
            "premium": "177.301",
            "gender": "0"
        },
        {
            "id": "870",
            "age": "5",
            "sumInsured": "5000",
            "premium": "2192.09",
            "gender": "0"
        },
        {
            "id": "869",
            "age": "5",
            "sumInsured": "4500",
            "premium": "1972.88",
            "gender": "0"
        },
        {
            "id": "868",
            "age": "5",
            "sumInsured": "4000",
            "premium": "1753.67",
            "gender": "0"
        },
        {
            "id": "867",
            "age": "5",
            "sumInsured": "3500",
            "premium": "1534.46",
            "gender": "0"
        },
        {
            "id": "866",
            "age": "5",
            "sumInsured": "3000",
            "premium": "1315.25",
            "gender": "0"
        },
        {
            "id": "865",
            "age": "5",
            "sumInsured": "2500",
            "premium": "1096.04",
            "gender": "0"
        },
        {
            "id": "864",
            "age": "5",
            "sumInsured": "2000",
            "premium": "876.836",
            "gender": "0"
        },
        {
            "id": "863",
            "age": "5",
            "sumInsured": "1500",
            "premium": "657.627",
            "gender": "0"
        },
        {
            "id": "862",
            "age": "5",
            "sumInsured": "1000",
            "premium": "438.418",
            "gender": "0"
        },
        {
            "id": "861",
            "age": "5",
            "sumInsured": "500",
            "premium": "219.209",
            "gender": "0"
        },
        {
            "id": "860",
            "age": "4",
            "sumInsured": "5000",
            "premium": "2661.36",
            "gender": "0"
        },
        {
            "id": "859",
            "age": "4",
            "sumInsured": "4500",
            "premium": "2395.22",
            "gender": "0"
        },
        {
            "id": "858",
            "age": "4",
            "sumInsured": "4000",
            "premium": "2129.09",
            "gender": "0"
        },
        {
            "id": "857",
            "age": "4",
            "sumInsured": "3500",
            "premium": "1862.95",
            "gender": "0"
        },
        {
            "id": "856",
            "age": "4",
            "sumInsured": "3000",
            "premium": "1596.82",
            "gender": "0"
        },
        {
            "id": "855",
            "age": "4",
            "sumInsured": "2500",
            "premium": "1330.68",
            "gender": "0"
        },
        {
            "id": "854",
            "age": "4",
            "sumInsured": "2000",
            "premium": "1064.54",
            "gender": "0"
        },
        {
            "id": "853",
            "age": "4",
            "sumInsured": "1500",
            "premium": "798.408",
            "gender": "0"
        },
        {
            "id": "852",
            "age": "4",
            "sumInsured": "1000",
            "premium": "532.272",
            "gender": "0"
        },
        {
            "id": "851",
            "age": "4",
            "sumInsured": "500",
            "premium": "266.136",
            "gender": "0"
        },
        {
            "id": "850",
            "age": "3",
            "sumInsured": "5000",
            "premium": "3182.89",
            "gender": "0"
        },
        {
            "id": "849",
            "age": "3",
            "sumInsured": "4500",
            "premium": "2864.6",
            "gender": "0"
        },
        {
            "id": "848",
            "age": "3",
            "sumInsured": "4000",
            "premium": "2546.31",
            "gender": "0"
        },
        {
            "id": "847",
            "age": "3",
            "sumInsured": "3500",
            "premium": "2228.03",
            "gender": "0"
        },
        {
            "id": "846",
            "age": "3",
            "sumInsured": "3000",
            "premium": "1909.74",
            "gender": "0"
        },
        {
            "id": "845",
            "age": "3",
            "sumInsured": "2500",
            "premium": "1591.45",
            "gender": "0"
        },
        {
            "id": "844",
            "age": "3",
            "sumInsured": "2000",
            "premium": "1273.16",
            "gender": "0"
        },
        {
            "id": "843",
            "age": "3",
            "sumInsured": "1500",
            "premium": "954.868",
            "gender": "0"
        },
        {
            "id": "842",
            "age": "3",
            "sumInsured": "1000",
            "premium": "636.579",
            "gender": "0"
        },
        {
            "id": "841",
            "age": "3",
            "sumInsured": "500",
            "premium": "318.289",
            "gender": "0"
        },
        {
            "id": "840",
            "age": "2",
            "sumInsured": "5000",
            "premium": "3392.33",
            "gender": "0"
        },
        {
            "id": "839",
            "age": "2",
            "sumInsured": "4500",
            "premium": "3053.1",
            "gender": "0"
        },
        {
            "id": "838",
            "age": "2",
            "sumInsured": "4000",
            "premium": "2713.87",
            "gender": "0"
        },
        {
            "id": "837",
            "age": "2",
            "sumInsured": "3500",
            "premium": "2374.63",
            "gender": "0"
        },
        {
            "id": "836",
            "age": "2",
            "sumInsured": "3000",
            "premium": "2035.4",
            "gender": "0"
        },
        {
            "id": "835",
            "age": "2",
            "sumInsured": "2500",
            "premium": "1696.17",
            "gender": "0"
        },
        {
            "id": "834",
            "age": "2",
            "sumInsured": "2000",
            "premium": "1356.93",
            "gender": "0"
        },
        {
            "id": "833",
            "age": "2",
            "sumInsured": "1500",
            "premium": "1017.7",
            "gender": "0"
        },
        {
            "id": "832",
            "age": "2",
            "sumInsured": "1000",
            "premium": "678.467",
            "gender": "0"
        },
        {
            "id": "831",
            "age": "2",
            "sumInsured": "500",
            "premium": "339.233",
            "gender": "0"
        },
        {
            "id": "830",
            "age": "1",
            "sumInsured": "5000",
            "premium": "3615.56",
            "gender": "0"
        },
        {
            "id": "829",
            "age": "1",
            "sumInsured": "4500",
            "premium": "3254",
            "gender": "0"
        },
        {
            "id": "828",
            "age": "1",
            "sumInsured": "4000",
            "premium": "2892.45",
            "gender": "0"
        },
        {
            "id": "827",
            "age": "1",
            "sumInsured": "3500",
            "premium": "2530.89",
            "gender": "0"
        },
        {
            "id": "826",
            "age": "1",
            "sumInsured": "3000",
            "premium": "2169.33",
            "gender": "0"
        },
        {
            "id": "825",
            "age": "1",
            "sumInsured": "2500",
            "premium": "1807.78",
            "gender": "0"
        },
        {
            "id": "824",
            "age": "1",
            "sumInsured": "2000",
            "premium": "1446.22",
            "gender": "0"
        },
        {
            "id": "823",
            "age": "1",
            "sumInsured": "1500",
            "premium": "1084.67",
            "gender": "0"
        },
        {
            "id": "822",
            "age": "1",
            "sumInsured": "1000",
            "premium": "723.111",
            "gender": "0"
        },
        {
            "id": "821",
            "age": "1",
            "sumInsured": "500",
            "premium": "361.556",
            "gender": "0"
        },
        {
            "id": "820",
            "age": "0",
            "sumInsured": "5000",
            "premium": "3853.47",
            "gender": "0"
        },
        {
            "id": "819",
            "age": "0",
            "sumInsured": "4500",
            "premium": "3468.12",
            "gender": "0"
        },
        {
            "id": "818",
            "age": "0",
            "sumInsured": "4000",
            "premium": "3082.77",
            "gender": "0"
        },
        {
            "id": "817",
            "age": "0",
            "sumInsured": "3500",
            "premium": "2697.43",
            "gender": "0"
        },
        {
            "id": "816",
            "age": "0",
            "sumInsured": "3000",
            "premium": "2312.08",
            "gender": "0"
        },
        {
            "id": "815",
            "age": "0",
            "sumInsured": "2500",
            "premium": "1926.73",
            "gender": "0"
        },
        {
            "id": "814",
            "age": "0",
            "sumInsured": "2000",
            "premium": "1541.39",
            "gender": "0"
        },
        {
            "id": "813",
            "age": "0",
            "sumInsured": "1500",
            "premium": "1156.04",
            "gender": "0"
        },
        {
            "id": "812",
            "age": "0",
            "sumInsured": "1000",
            "premium": "770.694",
            "gender": "0"
        },
        {
            "id": "811",
            "age": "0",
            "sumInsured": "500",
            "premium": "385.347",
            "gender": "0"
        },
        {
            "id": "810",
            "age": "80",
            "sumInsured": "5000",
            "premium": "150000",
            "gender": "1"
        },
        {
            "id": "809",
            "age": "80",
            "sumInsured": "4500",
            "premium": "135000",
            "gender": "1"
        },
        {
            "id": "808",
            "age": "80",
            "sumInsured": "4000",
            "premium": "120000",
            "gender": "1"
        },
        {
            "id": "807",
            "age": "80",
            "sumInsured": "3500",
            "premium": "105000",
            "gender": "1"
        },
        {
            "id": "806",
            "age": "80",
            "sumInsured": "3000",
            "premium": "90000",
            "gender": "1"
        },
        {
            "id": "805",
            "age": "80",
            "sumInsured": "2500",
            "premium": "75000",
            "gender": "1"
        },
        {
            "id": "804",
            "age": "80",
            "sumInsured": "2000",
            "premium": "60000",
            "gender": "1"
        },
        {
            "id": "803",
            "age": "80",
            "sumInsured": "1500",
            "premium": "45000",
            "gender": "1"
        },
        {
            "id": "802",
            "age": "80",
            "sumInsured": "1000",
            "premium": "30000",
            "gender": "1"
        },
        {
            "id": "801",
            "age": "80",
            "sumInsured": "500",
            "premium": "15000",
            "gender": "1"
        },
        {
            "id": "800",
            "age": "79",
            "sumInsured": "5000",
            "premium": "150000",
            "gender": "1"
        },
        {
            "id": "799",
            "age": "79",
            "sumInsured": "4500",
            "premium": "135000",
            "gender": "1"
        },
        {
            "id": "798",
            "age": "79",
            "sumInsured": "4000",
            "premium": "120000",
            "gender": "1"
        },
        {
            "id": "797",
            "age": "79",
            "sumInsured": "3500",
            "premium": "105000",
            "gender": "1"
        },
        {
            "id": "796",
            "age": "79",
            "sumInsured": "3000",
            "premium": "90000",
            "gender": "1"
        },
        {
            "id": "795",
            "age": "79",
            "sumInsured": "2500",
            "premium": "75000",
            "gender": "1"
        },
        {
            "id": "794",
            "age": "79",
            "sumInsured": "2000",
            "premium": "60000",
            "gender": "1"
        },
        {
            "id": "793",
            "age": "79",
            "sumInsured": "1500",
            "premium": "45000",
            "gender": "1"
        },
        {
            "id": "792",
            "age": "79",
            "sumInsured": "1000",
            "premium": "30000",
            "gender": "1"
        },
        {
            "id": "791",
            "age": "79",
            "sumInsured": "500",
            "premium": "15000",
            "gender": "1"
        },
        {
            "id": "790",
            "age": "78",
            "sumInsured": "5000",
            "premium": "150000",
            "gender": "1"
        },
        {
            "id": "789",
            "age": "78",
            "sumInsured": "4500",
            "premium": "135000",
            "gender": "1"
        },
        {
            "id": "788",
            "age": "78",
            "sumInsured": "4000",
            "premium": "120000",
            "gender": "1"
        },
        {
            "id": "787",
            "age": "78",
            "sumInsured": "3500",
            "premium": "105000",
            "gender": "1"
        },
        {
            "id": "786",
            "age": "78",
            "sumInsured": "3000",
            "premium": "90000",
            "gender": "1"
        },
        {
            "id": "785",
            "age": "78",
            "sumInsured": "2500",
            "premium": "75000",
            "gender": "1"
        },
        {
            "id": "784",
            "age": "78",
            "sumInsured": "2000",
            "premium": "60000",
            "gender": "1"
        },
        {
            "id": "783",
            "age": "78",
            "sumInsured": "1500",
            "premium": "45000",
            "gender": "1"
        },
        {
            "id": "782",
            "age": "78",
            "sumInsured": "1000",
            "premium": "30000",
            "gender": "1"
        },
        {
            "id": "781",
            "age": "78",
            "sumInsured": "500",
            "premium": "15000",
            "gender": "1"
        },
        {
            "id": "780",
            "age": "77",
            "sumInsured": "5000",
            "premium": "143832",
            "gender": "1"
        },
        {
            "id": "779",
            "age": "77",
            "sumInsured": "4500",
            "premium": "129449",
            "gender": "1"
        },
        {
            "id": "778",
            "age": "77",
            "sumInsured": "4000",
            "premium": "115066",
            "gender": "1"
        },
        {
            "id": "777",
            "age": "77",
            "sumInsured": "3500",
            "premium": "100682",
            "gender": "1"
        },
        {
            "id": "776",
            "age": "77",
            "sumInsured": "3000",
            "premium": "86299.2",
            "gender": "1"
        },
        {
            "id": "775",
            "age": "77",
            "sumInsured": "2500",
            "premium": "71916",
            "gender": "1"
        },
        {
            "id": "774",
            "age": "77",
            "sumInsured": "2000",
            "premium": "57532.8",
            "gender": "1"
        },
        {
            "id": "773",
            "age": "77",
            "sumInsured": "1500",
            "premium": "43149.6",
            "gender": "1"
        },
        {
            "id": "772",
            "age": "77",
            "sumInsured": "1000",
            "premium": "28766.4",
            "gender": "1"
        },
        {
            "id": "771",
            "age": "77",
            "sumInsured": "500",
            "premium": "14383.2",
            "gender": "1"
        },
        {
            "id": "770",
            "age": "76",
            "sumInsured": "5000",
            "premium": "130375",
            "gender": "1"
        },
        {
            "id": "769",
            "age": "76",
            "sumInsured": "4500",
            "premium": "117338",
            "gender": "1"
        },
        {
            "id": "768",
            "age": "76",
            "sumInsured": "4000",
            "premium": "104300",
            "gender": "1"
        },
        {
            "id": "767",
            "age": "76",
            "sumInsured": "3500",
            "premium": "91262.8",
            "gender": "1"
        },
        {
            "id": "766",
            "age": "76",
            "sumInsured": "3000",
            "premium": "78225.2",
            "gender": "1"
        },
        {
            "id": "765",
            "age": "76",
            "sumInsured": "2500",
            "premium": "65187.7",
            "gender": "1"
        },
        {
            "id": "764",
            "age": "76",
            "sumInsured": "2000",
            "premium": "52150.2",
            "gender": "1"
        },
        {
            "id": "763",
            "age": "76",
            "sumInsured": "1500",
            "premium": "39112.6",
            "gender": "1"
        },
        {
            "id": "762",
            "age": "76",
            "sumInsured": "1000",
            "premium": "26075.1",
            "gender": "1"
        },
        {
            "id": "761",
            "age": "76",
            "sumInsured": "500",
            "premium": "13037.5",
            "gender": "1"
        },
        {
            "id": "760",
            "age": "75",
            "sumInsured": "5000",
            "premium": "102699",
            "gender": "1"
        },
        {
            "id": "759",
            "age": "75",
            "sumInsured": "4500",
            "premium": "92428.9",
            "gender": "1"
        },
        {
            "id": "758",
            "age": "75",
            "sumInsured": "4000",
            "premium": "82159",
            "gender": "1"
        },
        {
            "id": "757",
            "age": "75",
            "sumInsured": "3500",
            "premium": "71889.2",
            "gender": "1"
        },
        {
            "id": "756",
            "age": "75",
            "sumInsured": "3000",
            "premium": "61619.3",
            "gender": "1"
        },
        {
            "id": "755",
            "age": "75",
            "sumInsured": "2500",
            "premium": "51349.4",
            "gender": "1"
        },
        {
            "id": "754",
            "age": "75",
            "sumInsured": "2000",
            "premium": "41079.5",
            "gender": "1"
        },
        {
            "id": "753",
            "age": "75",
            "sumInsured": "1500",
            "premium": "30809.6",
            "gender": "1"
        },
        {
            "id": "752",
            "age": "75",
            "sumInsured": "1000",
            "premium": "20539.8",
            "gender": "1"
        },
        {
            "id": "751",
            "age": "75",
            "sumInsured": "500",
            "premium": "10269.9",
            "gender": "1"
        },
        {
            "id": "750",
            "age": "74",
            "sumInsured": "5000",
            "premium": "93027.4",
            "gender": "1"
        },
        {
            "id": "749",
            "age": "74",
            "sumInsured": "4500",
            "premium": "83724.7",
            "gender": "1"
        },
        {
            "id": "748",
            "age": "74",
            "sumInsured": "4000",
            "premium": "74421.9",
            "gender": "1"
        },
        {
            "id": "747",
            "age": "74",
            "sumInsured": "3500",
            "premium": "65119.2",
            "gender": "1"
        },
        {
            "id": "746",
            "age": "74",
            "sumInsured": "3000",
            "premium": "55816.5",
            "gender": "1"
        },
        {
            "id": "745",
            "age": "74",
            "sumInsured": "2500",
            "premium": "46513.7",
            "gender": "1"
        },
        {
            "id": "744",
            "age": "74",
            "sumInsured": "2000",
            "premium": "37211",
            "gender": "1"
        },
        {
            "id": "743",
            "age": "74",
            "sumInsured": "1500",
            "premium": "27908.2",
            "gender": "1"
        },
        {
            "id": "742",
            "age": "74",
            "sumInsured": "1000",
            "premium": "18605.5",
            "gender": "1"
        },
        {
            "id": "741",
            "age": "74",
            "sumInsured": "500",
            "premium": "9302.74",
            "gender": "1"
        },
        {
            "id": "740",
            "age": "73",
            "sumInsured": "5000",
            "premium": "83955.8",
            "gender": "1"
        },
        {
            "id": "739",
            "age": "73",
            "sumInsured": "4500",
            "premium": "75560.2",
            "gender": "1"
        },
        {
            "id": "738",
            "age": "73",
            "sumInsured": "4000",
            "premium": "67164.6",
            "gender": "1"
        },
        {
            "id": "737",
            "age": "73",
            "sumInsured": "3500",
            "premium": "58769.1",
            "gender": "1"
        },
        {
            "id": "736",
            "age": "73",
            "sumInsured": "3000",
            "premium": "50373.5",
            "gender": "1"
        },
        {
            "id": "735",
            "age": "73",
            "sumInsured": "2500",
            "premium": "41977.9",
            "gender": "1"
        },
        {
            "id": "734",
            "age": "73",
            "sumInsured": "2000",
            "premium": "33582.3",
            "gender": "1"
        },
        {
            "id": "733",
            "age": "73",
            "sumInsured": "1500",
            "premium": "25186.7",
            "gender": "1"
        },
        {
            "id": "732",
            "age": "73",
            "sumInsured": "1000",
            "premium": "16791.2",
            "gender": "1"
        },
        {
            "id": "731",
            "age": "73",
            "sumInsured": "500",
            "premium": "8395.58",
            "gender": "1"
        },
        {
            "id": "730",
            "age": "72",
            "sumInsured": "5000",
            "premium": "76597.6",
            "gender": "1"
        },
        {
            "id": "729",
            "age": "72",
            "sumInsured": "4500",
            "premium": "68937.8",
            "gender": "1"
        },
        {
            "id": "728",
            "age": "72",
            "sumInsured": "4000",
            "premium": "61278.1",
            "gender": "1"
        },
        {
            "id": "727",
            "age": "72",
            "sumInsured": "3500",
            "premium": "53618.3",
            "gender": "1"
        },
        {
            "id": "726",
            "age": "72",
            "sumInsured": "3000",
            "premium": "45958.5",
            "gender": "1"
        },
        {
            "id": "725",
            "age": "72",
            "sumInsured": "2500",
            "premium": "38298.8",
            "gender": "1"
        },
        {
            "id": "724",
            "age": "72",
            "sumInsured": "2000",
            "premium": "30639",
            "gender": "1"
        },
        {
            "id": "723",
            "age": "72",
            "sumInsured": "1500",
            "premium": "22979.3",
            "gender": "1"
        },
        {
            "id": "722",
            "age": "72",
            "sumInsured": "1000",
            "premium": "15319.5",
            "gender": "1"
        },
        {
            "id": "721",
            "age": "72",
            "sumInsured": "500",
            "premium": "7659.76",
            "gender": "1"
        },
        {
            "id": "720",
            "age": "71",
            "sumInsured": "5000",
            "premium": "69685.7",
            "gender": "1"
        },
        {
            "id": "719",
            "age": "71",
            "sumInsured": "4500",
            "premium": "62717.1",
            "gender": "1"
        },
        {
            "id": "718",
            "age": "71",
            "sumInsured": "4000",
            "premium": "55748.6",
            "gender": "1"
        },
        {
            "id": "717",
            "age": "71",
            "sumInsured": "3500",
            "premium": "48780",
            "gender": "1"
        },
        {
            "id": "716",
            "age": "71",
            "sumInsured": "3000",
            "premium": "41811.4",
            "gender": "1"
        },
        {
            "id": "715",
            "age": "71",
            "sumInsured": "2500",
            "premium": "34842.9",
            "gender": "1"
        },
        {
            "id": "714",
            "age": "71",
            "sumInsured": "2000",
            "premium": "27874.3",
            "gender": "1"
        },
        {
            "id": "713",
            "age": "71",
            "sumInsured": "1500",
            "premium": "20905.7",
            "gender": "1"
        },
        {
            "id": "712",
            "age": "71",
            "sumInsured": "1000",
            "premium": "13937.1",
            "gender": "1"
        },
        {
            "id": "711",
            "age": "71",
            "sumInsured": "500",
            "premium": "6968.57",
            "gender": "1"
        },
        {
            "id": "710",
            "age": "70",
            "sumInsured": "5000",
            "premium": "54563.8",
            "gender": "1"
        },
        {
            "id": "709",
            "age": "70",
            "sumInsured": "4500",
            "premium": "49107.4",
            "gender": "1"
        },
        {
            "id": "708",
            "age": "70",
            "sumInsured": "4000",
            "premium": "43651",
            "gender": "1"
        },
        {
            "id": "707",
            "age": "70",
            "sumInsured": "3500",
            "premium": "38194.7",
            "gender": "1"
        },
        {
            "id": "706",
            "age": "70",
            "sumInsured": "3000",
            "premium": "32738.3",
            "gender": "1"
        },
        {
            "id": "705",
            "age": "70",
            "sumInsured": "2500",
            "premium": "27281.9",
            "gender": "1"
        },
        {
            "id": "704",
            "age": "70",
            "sumInsured": "2000",
            "premium": "21825.5",
            "gender": "1"
        },
        {
            "id": "703",
            "age": "70",
            "sumInsured": "1500",
            "premium": "16369.1",
            "gender": "1"
        },
        {
            "id": "702",
            "age": "70",
            "sumInsured": "1000",
            "premium": "10912.8",
            "gender": "1"
        },
        {
            "id": "701",
            "age": "70",
            "sumInsured": "500",
            "premium": "5456.38",
            "gender": "1"
        },
        {
            "id": "700",
            "age": "69",
            "sumInsured": "5000",
            "premium": "48301.3",
            "gender": "1"
        },
        {
            "id": "699",
            "age": "69",
            "sumInsured": "4500",
            "premium": "43471.2",
            "gender": "1"
        },
        {
            "id": "698",
            "age": "69",
            "sumInsured": "4000",
            "premium": "38641.1",
            "gender": "1"
        },
        {
            "id": "697",
            "age": "69",
            "sumInsured": "3500",
            "premium": "33810.9",
            "gender": "1"
        },
        {
            "id": "696",
            "age": "69",
            "sumInsured": "3000",
            "premium": "28980.8",
            "gender": "1"
        },
        {
            "id": "695",
            "age": "69",
            "sumInsured": "2500",
            "premium": "24150.7",
            "gender": "1"
        },
        {
            "id": "694",
            "age": "69",
            "sumInsured": "2000",
            "premium": "19320.5",
            "gender": "1"
        },
        {
            "id": "693",
            "age": "69",
            "sumInsured": "1500",
            "premium": "14490.4",
            "gender": "1"
        },
        {
            "id": "692",
            "age": "69",
            "sumInsured": "1000",
            "premium": "9660.26",
            "gender": "1"
        },
        {
            "id": "691",
            "age": "69",
            "sumInsured": "500",
            "premium": "4830.13",
            "gender": "1"
        },
        {
            "id": "690",
            "age": "68",
            "sumInsured": "5000",
            "premium": "42584.6",
            "gender": "1"
        },
        {
            "id": "689",
            "age": "68",
            "sumInsured": "4500",
            "premium": "38326.1",
            "gender": "1"
        },
        {
            "id": "688",
            "age": "68",
            "sumInsured": "4000",
            "premium": "34067.7",
            "gender": "1"
        },
        {
            "id": "687",
            "age": "68",
            "sumInsured": "3500",
            "premium": "29809.2",
            "gender": "1"
        },
        {
            "id": "686",
            "age": "68",
            "sumInsured": "3000",
            "premium": "25550.7",
            "gender": "1"
        },
        {
            "id": "685",
            "age": "68",
            "sumInsured": "2500",
            "premium": "21292.3",
            "gender": "1"
        },
        {
            "id": "684",
            "age": "68",
            "sumInsured": "2000",
            "premium": "17033.8",
            "gender": "1"
        },
        {
            "id": "683",
            "age": "68",
            "sumInsured": "1500",
            "premium": "12775.4",
            "gender": "1"
        },
        {
            "id": "682",
            "age": "68",
            "sumInsured": "1000",
            "premium": "8516.91",
            "gender": "1"
        },
        {
            "id": "681",
            "age": "68",
            "sumInsured": "500",
            "premium": "4258.46",
            "gender": "1"
        },
        {
            "id": "680",
            "age": "67",
            "sumInsured": "5000",
            "premium": "37914.6",
            "gender": "1"
        },
        {
            "id": "679",
            "age": "67",
            "sumInsured": "4500",
            "premium": "34123.1",
            "gender": "1"
        },
        {
            "id": "678",
            "age": "67",
            "sumInsured": "4000",
            "premium": "30331.7",
            "gender": "1"
        },
        {
            "id": "677",
            "age": "67",
            "sumInsured": "3500",
            "premium": "26540.2",
            "gender": "1"
        },
        {
            "id": "676",
            "age": "67",
            "sumInsured": "3000",
            "premium": "22748.7",
            "gender": "1"
        },
        {
            "id": "675",
            "age": "67",
            "sumInsured": "2500",
            "premium": "18957.3",
            "gender": "1"
        },
        {
            "id": "674",
            "age": "67",
            "sumInsured": "2000",
            "premium": "15165.8",
            "gender": "1"
        },
        {
            "id": "673",
            "age": "67",
            "sumInsured": "1500",
            "premium": "11374.4",
            "gender": "1"
        },
        {
            "id": "672",
            "age": "67",
            "sumInsured": "1000",
            "premium": "7582.91",
            "gender": "1"
        },
        {
            "id": "671",
            "age": "67",
            "sumInsured": "500",
            "premium": "3791.46",
            "gender": "1"
        },
        {
            "id": "670",
            "age": "66",
            "sumInsured": "5000",
            "premium": "33643.9",
            "gender": "1"
        },
        {
            "id": "669",
            "age": "66",
            "sumInsured": "4500",
            "premium": "30279.5",
            "gender": "1"
        },
        {
            "id": "668",
            "age": "66",
            "sumInsured": "4000",
            "premium": "26915.1",
            "gender": "1"
        },
        {
            "id": "667",
            "age": "66",
            "sumInsured": "3500",
            "premium": "23550.7",
            "gender": "1"
        },
        {
            "id": "666",
            "age": "66",
            "sumInsured": "3000",
            "premium": "20186.3",
            "gender": "1"
        },
        {
            "id": "665",
            "age": "66",
            "sumInsured": "2500",
            "premium": "16821.9",
            "gender": "1"
        },
        {
            "id": "664",
            "age": "66",
            "sumInsured": "2000",
            "premium": "13457.6",
            "gender": "1"
        },
        {
            "id": "663",
            "age": "66",
            "sumInsured": "1500",
            "premium": "10093.2",
            "gender": "1"
        },
        {
            "id": "662",
            "age": "66",
            "sumInsured": "1000",
            "premium": "6728.78",
            "gender": "1"
        },
        {
            "id": "661",
            "age": "66",
            "sumInsured": "500",
            "premium": "3364.39",
            "gender": "1"
        },
        {
            "id": "660",
            "age": "65",
            "sumInsured": "5000",
            "premium": "25506.7",
            "gender": "1"
        },
        {
            "id": "659",
            "age": "65",
            "sumInsured": "4500",
            "premium": "22956.1",
            "gender": "1"
        },
        {
            "id": "658",
            "age": "65",
            "sumInsured": "4000",
            "premium": "20405.4",
            "gender": "1"
        },
        {
            "id": "657",
            "age": "65",
            "sumInsured": "3500",
            "premium": "17854.7",
            "gender": "1"
        },
        {
            "id": "656",
            "age": "65",
            "sumInsured": "3000",
            "premium": "15304",
            "gender": "1"
        },
        {
            "id": "655",
            "age": "65",
            "sumInsured": "2500",
            "premium": "12753.4",
            "gender": "1"
        },
        {
            "id": "654",
            "age": "65",
            "sumInsured": "2000",
            "premium": "10202.7",
            "gender": "1"
        },
        {
            "id": "653",
            "age": "65",
            "sumInsured": "1500",
            "premium": "7652.02",
            "gender": "1"
        },
        {
            "id": "652",
            "age": "65",
            "sumInsured": "1000",
            "premium": "5101.35",
            "gender": "1"
        },
        {
            "id": "651",
            "age": "65",
            "sumInsured": "500",
            "premium": "2550.67",
            "gender": "1"
        },
        {
            "id": "650",
            "age": "64",
            "sumInsured": "5000",
            "premium": "22635.7",
            "gender": "1"
        },
        {
            "id": "649",
            "age": "64",
            "sumInsured": "4500",
            "premium": "20372.1",
            "gender": "1"
        },
        {
            "id": "648",
            "age": "64",
            "sumInsured": "4000",
            "premium": "18108.5",
            "gender": "1"
        },
        {
            "id": "647",
            "age": "64",
            "sumInsured": "3500",
            "premium": "15845",
            "gender": "1"
        },
        {
            "id": "646",
            "age": "64",
            "sumInsured": "3000",
            "premium": "13581.4",
            "gender": "1"
        },
        {
            "id": "645",
            "age": "64",
            "sumInsured": "2500",
            "premium": "11317.8",
            "gender": "1"
        },
        {
            "id": "644",
            "age": "64",
            "sumInsured": "2000",
            "premium": "9054.27",
            "gender": "1"
        },
        {
            "id": "643",
            "age": "64",
            "sumInsured": "1500",
            "premium": "6790.7",
            "gender": "1"
        },
        {
            "id": "642",
            "age": "64",
            "sumInsured": "1000",
            "premium": "4527.14",
            "gender": "1"
        },
        {
            "id": "641",
            "age": "64",
            "sumInsured": "500",
            "premium": "2263.57",
            "gender": "1"
        },
        {
            "id": "640",
            "age": "63",
            "sumInsured": "5000",
            "premium": "19989.3",
            "gender": "1"
        },
        {
            "id": "639",
            "age": "63",
            "sumInsured": "4500",
            "premium": "17990.4",
            "gender": "1"
        },
        {
            "id": "638",
            "age": "63",
            "sumInsured": "4000",
            "premium": "15991.5",
            "gender": "1"
        },
        {
            "id": "637",
            "age": "63",
            "sumInsured": "3500",
            "premium": "13992.5",
            "gender": "1"
        },
        {
            "id": "636",
            "age": "63",
            "sumInsured": "3000",
            "premium": "11993.6",
            "gender": "1"
        },
        {
            "id": "635",
            "age": "63",
            "sumInsured": "2500",
            "premium": "9994.67",
            "gender": "1"
        },
        {
            "id": "634",
            "age": "63",
            "sumInsured": "2000",
            "premium": "7995.74",
            "gender": "1"
        },
        {
            "id": "633",
            "age": "63",
            "sumInsured": "1500",
            "premium": "5996.8",
            "gender": "1"
        },
        {
            "id": "632",
            "age": "63",
            "sumInsured": "1000",
            "premium": "3997.87",
            "gender": "1"
        },
        {
            "id": "631",
            "age": "63",
            "sumInsured": "500",
            "premium": "1998.93",
            "gender": "1"
        },
        {
            "id": "630",
            "age": "62",
            "sumInsured": "5000",
            "premium": "17883.6",
            "gender": "1"
        },
        {
            "id": "629",
            "age": "62",
            "sumInsured": "4500",
            "premium": "16095.2",
            "gender": "1"
        },
        {
            "id": "628",
            "age": "62",
            "sumInsured": "4000",
            "premium": "14306.8",
            "gender": "1"
        },
        {
            "id": "627",
            "age": "62",
            "sumInsured": "3500",
            "premium": "12518.5",
            "gender": "1"
        },
        {
            "id": "626",
            "age": "62",
            "sumInsured": "3000",
            "premium": "10730.1",
            "gender": "1"
        },
        {
            "id": "625",
            "age": "62",
            "sumInsured": "2500",
            "premium": "8941.78",
            "gender": "1"
        },
        {
            "id": "624",
            "age": "62",
            "sumInsured": "2000",
            "premium": "7153.42",
            "gender": "1"
        },
        {
            "id": "623",
            "age": "62",
            "sumInsured": "1500",
            "premium": "5365.07",
            "gender": "1"
        },
        {
            "id": "622",
            "age": "62",
            "sumInsured": "1000",
            "premium": "3576.71",
            "gender": "1"
        },
        {
            "id": "621",
            "age": "62",
            "sumInsured": "500",
            "premium": "1788.36",
            "gender": "1"
        },
        {
            "id": "620",
            "age": "61",
            "sumInsured": "5000",
            "premium": "15940.6",
            "gender": "1"
        },
        {
            "id": "619",
            "age": "61",
            "sumInsured": "4500",
            "premium": "14346.6",
            "gender": "1"
        },
        {
            "id": "618",
            "age": "61",
            "sumInsured": "4000",
            "premium": "12752.5",
            "gender": "1"
        },
        {
            "id": "617",
            "age": "61",
            "sumInsured": "3500",
            "premium": "11158.4",
            "gender": "1"
        },
        {
            "id": "616",
            "age": "61",
            "sumInsured": "3000",
            "premium": "9564.37",
            "gender": "1"
        },
        {
            "id": "615",
            "age": "61",
            "sumInsured": "2500",
            "premium": "7970.31",
            "gender": "1"
        },
        {
            "id": "614",
            "age": "61",
            "sumInsured": "2000",
            "premium": "6376.24",
            "gender": "1"
        },
        {
            "id": "613",
            "age": "61",
            "sumInsured": "1500",
            "premium": "4782.18",
            "gender": "1"
        },
        {
            "id": "612",
            "age": "61",
            "sumInsured": "1000",
            "premium": "3188.12",
            "gender": "1"
        },
        {
            "id": "611",
            "age": "61",
            "sumInsured": "500",
            "premium": "1594.06",
            "gender": "1"
        },
        {
            "id": "610",
            "age": "60",
            "sumInsured": "5000",
            "premium": "13192.8",
            "gender": "1"
        },
        {
            "id": "609",
            "age": "60",
            "sumInsured": "4500",
            "premium": "11873.5",
            "gender": "1"
        },
        {
            "id": "608",
            "age": "60",
            "sumInsured": "4000",
            "premium": "10554.2",
            "gender": "1"
        },
        {
            "id": "607",
            "age": "60",
            "sumInsured": "3500",
            "premium": "9234.95",
            "gender": "1"
        },
        {
            "id": "606",
            "age": "60",
            "sumInsured": "3000",
            "premium": "7915.67",
            "gender": "1"
        },
        {
            "id": "605",
            "age": "60",
            "sumInsured": "2500",
            "premium": "6596.39",
            "gender": "1"
        },
        {
            "id": "604",
            "age": "60",
            "sumInsured": "2000",
            "premium": "5277.11",
            "gender": "1"
        },
        {
            "id": "603",
            "age": "60",
            "sumInsured": "1500",
            "premium": "3957.83",
            "gender": "1"
        },
        {
            "id": "602",
            "age": "60",
            "sumInsured": "1000",
            "premium": "2638.56",
            "gender": "1"
        },
        {
            "id": "601",
            "age": "60",
            "sumInsured": "500",
            "premium": "1319.28",
            "gender": "1"
        },
        {
            "id": "600",
            "age": "59",
            "sumInsured": "5000",
            "premium": "11776",
            "gender": "1"
        },
        {
            "id": "599",
            "age": "59",
            "sumInsured": "4500",
            "premium": "10598.4",
            "gender": "1"
        },
        {
            "id": "598",
            "age": "59",
            "sumInsured": "4000",
            "premium": "9420.79",
            "gender": "1"
        },
        {
            "id": "597",
            "age": "59",
            "sumInsured": "3500",
            "premium": "8243.19",
            "gender": "1"
        },
        {
            "id": "596",
            "age": "59",
            "sumInsured": "3000",
            "premium": "7065.59",
            "gender": "1"
        },
        {
            "id": "595",
            "age": "59",
            "sumInsured": "2500",
            "premium": "5887.99",
            "gender": "1"
        },
        {
            "id": "594",
            "age": "59",
            "sumInsured": "2000",
            "premium": "4710.39",
            "gender": "1"
        },
        {
            "id": "593",
            "age": "59",
            "sumInsured": "1500",
            "premium": "3532.79",
            "gender": "1"
        },
        {
            "id": "592",
            "age": "59",
            "sumInsured": "1000",
            "premium": "2355.2",
            "gender": "1"
        },
        {
            "id": "591",
            "age": "59",
            "sumInsured": "500",
            "premium": "1177.6",
            "gender": "1"
        },
        {
            "id": "590",
            "age": "58",
            "sumInsured": "5000",
            "premium": "10453.8",
            "gender": "1"
        },
        {
            "id": "589",
            "age": "58",
            "sumInsured": "4500",
            "premium": "9408.44",
            "gender": "1"
        },
        {
            "id": "588",
            "age": "58",
            "sumInsured": "4000",
            "premium": "8363.05",
            "gender": "1"
        },
        {
            "id": "587",
            "age": "58",
            "sumInsured": "3500",
            "premium": "7317.67",
            "gender": "1"
        },
        {
            "id": "586",
            "age": "58",
            "sumInsured": "3000",
            "premium": "6272.29",
            "gender": "1"
        },
        {
            "id": "585",
            "age": "58",
            "sumInsured": "2500",
            "premium": "5226.91",
            "gender": "1"
        },
        {
            "id": "584",
            "age": "58",
            "sumInsured": "2000",
            "premium": "4181.53",
            "gender": "1"
        },
        {
            "id": "583",
            "age": "58",
            "sumInsured": "1500",
            "premium": "3136.15",
            "gender": "1"
        },
        {
            "id": "582",
            "age": "58",
            "sumInsured": "1000",
            "premium": "2090.76",
            "gender": "1"
        },
        {
            "id": "581",
            "age": "58",
            "sumInsured": "500",
            "premium": "1045.38",
            "gender": "1"
        },
        {
            "id": "580",
            "age": "57",
            "sumInsured": "5000",
            "premium": "9436.8",
            "gender": "1"
        },
        {
            "id": "579",
            "age": "57",
            "sumInsured": "4500",
            "premium": "8493.12",
            "gender": "1"
        },
        {
            "id": "578",
            "age": "57",
            "sumInsured": "4000",
            "premium": "7549.44",
            "gender": "1"
        },
        {
            "id": "577",
            "age": "57",
            "sumInsured": "3500",
            "premium": "6605.76",
            "gender": "1"
        },
        {
            "id": "576",
            "age": "57",
            "sumInsured": "3000",
            "premium": "5662.08",
            "gender": "1"
        },
        {
            "id": "575",
            "age": "57",
            "sumInsured": "2500",
            "premium": "4718.4",
            "gender": "1"
        },
        {
            "id": "574",
            "age": "57",
            "sumInsured": "2000",
            "premium": "3774.72",
            "gender": "1"
        },
        {
            "id": "573",
            "age": "57",
            "sumInsured": "1500",
            "premium": "2831.04",
            "gender": "1"
        },
        {
            "id": "572",
            "age": "57",
            "sumInsured": "1000",
            "premium": "1887.36",
            "gender": "1"
        },
        {
            "id": "571",
            "age": "57",
            "sumInsured": "500",
            "premium": "943.68",
            "gender": "1"
        },
        {
            "id": "570",
            "age": "56",
            "sumInsured": "5000",
            "premium": "8487.32",
            "gender": "1"
        },
        {
            "id": "569",
            "age": "56",
            "sumInsured": "4500",
            "premium": "7638.59",
            "gender": "1"
        },
        {
            "id": "568",
            "age": "56",
            "sumInsured": "4000",
            "premium": "6789.86",
            "gender": "1"
        },
        {
            "id": "567",
            "age": "56",
            "sumInsured": "3500",
            "premium": "5941.12",
            "gender": "1"
        },
        {
            "id": "566",
            "age": "56",
            "sumInsured": "3000",
            "premium": "5092.39",
            "gender": "1"
        },
        {
            "id": "565",
            "age": "56",
            "sumInsured": "2500",
            "premium": "4243.66",
            "gender": "1"
        },
        {
            "id": "564",
            "age": "56",
            "sumInsured": "2000",
            "premium": "3394.93",
            "gender": "1"
        },
        {
            "id": "563",
            "age": "56",
            "sumInsured": "1500",
            "premium": "2546.2",
            "gender": "1"
        },
        {
            "id": "562",
            "age": "56",
            "sumInsured": "1000",
            "premium": "1697.46",
            "gender": "1"
        },
        {
            "id": "561",
            "age": "56",
            "sumInsured": "500",
            "premium": "848.732",
            "gender": "1"
        },
        {
            "id": "560",
            "age": "55",
            "sumInsured": "5000",
            "premium": "8207.8",
            "gender": "1"
        },
        {
            "id": "559",
            "age": "55",
            "sumInsured": "4500",
            "premium": "7387.02",
            "gender": "1"
        },
        {
            "id": "558",
            "age": "55",
            "sumInsured": "4000",
            "premium": "6566.24",
            "gender": "1"
        },
        {
            "id": "557",
            "age": "55",
            "sumInsured": "3500",
            "premium": "5745.46",
            "gender": "1"
        },
        {
            "id": "556",
            "age": "55",
            "sumInsured": "3000",
            "premium": "4924.68",
            "gender": "1"
        },
        {
            "id": "555",
            "age": "55",
            "sumInsured": "2500",
            "premium": "4103.9",
            "gender": "1"
        },
        {
            "id": "554",
            "age": "55",
            "sumInsured": "2000",
            "premium": "3283.12",
            "gender": "1"
        },
        {
            "id": "553",
            "age": "55",
            "sumInsured": "1500",
            "premium": "2462.34",
            "gender": "1"
        },
        {
            "id": "552",
            "age": "55",
            "sumInsured": "1000",
            "premium": "1641.56",
            "gender": "1"
        },
        {
            "id": "551",
            "age": "55",
            "sumInsured": "500",
            "premium": "820.78",
            "gender": "1"
        },
        {
            "id": "550",
            "age": "54",
            "sumInsured": "5000",
            "premium": "7464.35",
            "gender": "1"
        },
        {
            "id": "549",
            "age": "54",
            "sumInsured": "4500",
            "premium": "6717.91",
            "gender": "1"
        },
        {
            "id": "548",
            "age": "54",
            "sumInsured": "4000",
            "premium": "5971.48",
            "gender": "1"
        },
        {
            "id": "547",
            "age": "54",
            "sumInsured": "3500",
            "premium": "5225.04",
            "gender": "1"
        },
        {
            "id": "546",
            "age": "54",
            "sumInsured": "3000",
            "premium": "4478.61",
            "gender": "1"
        },
        {
            "id": "545",
            "age": "54",
            "sumInsured": "2500",
            "premium": "3732.17",
            "gender": "1"
        },
        {
            "id": "544",
            "age": "54",
            "sumInsured": "2000",
            "premium": "2985.74",
            "gender": "1"
        },
        {
            "id": "543",
            "age": "54",
            "sumInsured": "1500",
            "premium": "2239.3",
            "gender": "1"
        },
        {
            "id": "542",
            "age": "54",
            "sumInsured": "1000",
            "premium": "1492.87",
            "gender": "1"
        },
        {
            "id": "541",
            "age": "54",
            "sumInsured": "500",
            "premium": "746.435",
            "gender": "1"
        },
        {
            "id": "540",
            "age": "53",
            "sumInsured": "5000",
            "premium": "6750.59",
            "gender": "1"
        },
        {
            "id": "539",
            "age": "53",
            "sumInsured": "4500",
            "premium": "6075.53",
            "gender": "1"
        },
        {
            "id": "538",
            "age": "53",
            "sumInsured": "4000",
            "premium": "5400.47",
            "gender": "1"
        },
        {
            "id": "537",
            "age": "53",
            "sumInsured": "3500",
            "premium": "4725.41",
            "gender": "1"
        },
        {
            "id": "536",
            "age": "53",
            "sumInsured": "3000",
            "premium": "4050.35",
            "gender": "1"
        },
        {
            "id": "535",
            "age": "53",
            "sumInsured": "2500",
            "premium": "3375.3",
            "gender": "1"
        },
        {
            "id": "534",
            "age": "53",
            "sumInsured": "2000",
            "premium": "2700.24",
            "gender": "1"
        },
        {
            "id": "533",
            "age": "53",
            "sumInsured": "1500",
            "premium": "2025.18",
            "gender": "1"
        },
        {
            "id": "532",
            "age": "53",
            "sumInsured": "1000",
            "premium": "1350.12",
            "gender": "1"
        },
        {
            "id": "531",
            "age": "53",
            "sumInsured": "500",
            "premium": "675.059",
            "gender": "1"
        },
        {
            "id": "530",
            "age": "52",
            "sumInsured": "5000",
            "premium": "6232.85",
            "gender": "1"
        },
        {
            "id": "529",
            "age": "52",
            "sumInsured": "4500",
            "premium": "5609.56",
            "gender": "1"
        },
        {
            "id": "528",
            "age": "52",
            "sumInsured": "4000",
            "premium": "4986.28",
            "gender": "1"
        },
        {
            "id": "527",
            "age": "52",
            "sumInsured": "3500",
            "premium": "4362.99",
            "gender": "1"
        },
        {
            "id": "526",
            "age": "52",
            "sumInsured": "3000",
            "premium": "3739.71",
            "gender": "1"
        },
        {
            "id": "525",
            "age": "52",
            "sumInsured": "2500",
            "premium": "3116.42",
            "gender": "1"
        },
        {
            "id": "524",
            "age": "52",
            "sumInsured": "2000",
            "premium": "2493.14",
            "gender": "1"
        },
        {
            "id": "523",
            "age": "52",
            "sumInsured": "1500",
            "premium": "1869.85",
            "gender": "1"
        },
        {
            "id": "522",
            "age": "52",
            "sumInsured": "1000",
            "premium": "1246.57",
            "gender": "1"
        },
        {
            "id": "521",
            "age": "52",
            "sumInsured": "500",
            "premium": "623.285",
            "gender": "1"
        },
        {
            "id": "520",
            "age": "51",
            "sumInsured": "5000",
            "premium": "5734.66",
            "gender": "1"
        },
        {
            "id": "519",
            "age": "51",
            "sumInsured": "4500",
            "premium": "5161.2",
            "gender": "1"
        },
        {
            "id": "518",
            "age": "51",
            "sumInsured": "4000",
            "premium": "4587.73",
            "gender": "1"
        },
        {
            "id": "517",
            "age": "51",
            "sumInsured": "3500",
            "premium": "4014.26",
            "gender": "1"
        },
        {
            "id": "516",
            "age": "51",
            "sumInsured": "3000",
            "premium": "3440.8",
            "gender": "1"
        },
        {
            "id": "515",
            "age": "51",
            "sumInsured": "2500",
            "premium": "2867.33",
            "gender": "1"
        },
        {
            "id": "514",
            "age": "51",
            "sumInsured": "2000",
            "premium": "2293.87",
            "gender": "1"
        },
        {
            "id": "513",
            "age": "51",
            "sumInsured": "1500",
            "premium": "1720.4",
            "gender": "1"
        },
        {
            "id": "512",
            "age": "51",
            "sumInsured": "1000",
            "premium": "1146.93",
            "gender": "1"
        },
        {
            "id": "511",
            "age": "51",
            "sumInsured": "500",
            "premium": "573.466",
            "gender": "1"
        },
        {
            "id": "510",
            "age": "50",
            "sumInsured": "5000",
            "premium": "5194.06",
            "gender": "1"
        },
        {
            "id": "509",
            "age": "50",
            "sumInsured": "4500",
            "premium": "4674.65",
            "gender": "1"
        },
        {
            "id": "508",
            "age": "50",
            "sumInsured": "4000",
            "premium": "4155.25",
            "gender": "1"
        },
        {
            "id": "507",
            "age": "50",
            "sumInsured": "3500",
            "premium": "3635.84",
            "gender": "1"
        },
        {
            "id": "506",
            "age": "50",
            "sumInsured": "3000",
            "premium": "3116.44",
            "gender": "1"
        },
        {
            "id": "505",
            "age": "50",
            "sumInsured": "2500",
            "premium": "2597.03",
            "gender": "1"
        },
        {
            "id": "504",
            "age": "50",
            "sumInsured": "2000",
            "premium": "2077.62",
            "gender": "1"
        },
        {
            "id": "503",
            "age": "50",
            "sumInsured": "1500",
            "premium": "1558.22",
            "gender": "1"
        },
        {
            "id": "502",
            "age": "50",
            "sumInsured": "1000",
            "premium": "1038.81",
            "gender": "1"
        },
        {
            "id": "501",
            "age": "50",
            "sumInsured": "500",
            "premium": "519.406",
            "gender": "1"
        },
        {
            "id": "500",
            "age": "49",
            "sumInsured": "5000",
            "premium": "4733.89",
            "gender": "1"
        },
        {
            "id": "499",
            "age": "49",
            "sumInsured": "4500",
            "premium": "4260.5",
            "gender": "1"
        },
        {
            "id": "498",
            "age": "49",
            "sumInsured": "4000",
            "premium": "3787.11",
            "gender": "1"
        },
        {
            "id": "497",
            "age": "49",
            "sumInsured": "3500",
            "premium": "3313.72",
            "gender": "1"
        },
        {
            "id": "496",
            "age": "49",
            "sumInsured": "3000",
            "premium": "2840.34",
            "gender": "1"
        },
        {
            "id": "495",
            "age": "49",
            "sumInsured": "2500",
            "premium": "2366.95",
            "gender": "1"
        },
        {
            "id": "494",
            "age": "49",
            "sumInsured": "2000",
            "premium": "1893.56",
            "gender": "1"
        },
        {
            "id": "493",
            "age": "49",
            "sumInsured": "1500",
            "premium": "1420.17",
            "gender": "1"
        },
        {
            "id": "492",
            "age": "49",
            "sumInsured": "1000",
            "premium": "946.778",
            "gender": "1"
        },
        {
            "id": "491",
            "age": "49",
            "sumInsured": "500",
            "premium": "473.389",
            "gender": "1"
        },
        {
            "id": "490",
            "age": "48",
            "sumInsured": "5000",
            "premium": "4292.99",
            "gender": "1"
        },
        {
            "id": "489",
            "age": "48",
            "sumInsured": "4500",
            "premium": "3863.69",
            "gender": "1"
        },
        {
            "id": "488",
            "age": "48",
            "sumInsured": "4000",
            "premium": "3434.39",
            "gender": "1"
        },
        {
            "id": "487",
            "age": "48",
            "sumInsured": "3500",
            "premium": "3005.09",
            "gender": "1"
        },
        {
            "id": "486",
            "age": "48",
            "sumInsured": "3000",
            "premium": "2575.79",
            "gender": "1"
        },
        {
            "id": "485",
            "age": "48",
            "sumInsured": "2500",
            "premium": "2146.49",
            "gender": "1"
        },
        {
            "id": "484",
            "age": "48",
            "sumInsured": "2000",
            "premium": "1717.19",
            "gender": "1"
        },
        {
            "id": "483",
            "age": "48",
            "sumInsured": "1500",
            "premium": "1287.9",
            "gender": "1"
        },
        {
            "id": "482",
            "age": "48",
            "sumInsured": "1000",
            "premium": "858.597",
            "gender": "1"
        },
        {
            "id": "481",
            "age": "48",
            "sumInsured": "500",
            "premium": "429.299",
            "gender": "1"
        },
        {
            "id": "480",
            "age": "47",
            "sumInsured": "5000",
            "premium": "3986.58",
            "gender": "1"
        },
        {
            "id": "479",
            "age": "47",
            "sumInsured": "4500",
            "premium": "3587.92",
            "gender": "1"
        },
        {
            "id": "478",
            "age": "47",
            "sumInsured": "4000",
            "premium": "3189.27",
            "gender": "1"
        },
        {
            "id": "477",
            "age": "47",
            "sumInsured": "3500",
            "premium": "2790.61",
            "gender": "1"
        },
        {
            "id": "476",
            "age": "47",
            "sumInsured": "3000",
            "premium": "2391.95",
            "gender": "1"
        },
        {
            "id": "475",
            "age": "47",
            "sumInsured": "2500",
            "premium": "1993.29",
            "gender": "1"
        },
        {
            "id": "474",
            "age": "47",
            "sumInsured": "2000",
            "premium": "1594.63",
            "gender": "1"
        },
        {
            "id": "473",
            "age": "47",
            "sumInsured": "1500",
            "premium": "1195.97",
            "gender": "1"
        },
        {
            "id": "472",
            "age": "47",
            "sumInsured": "1000",
            "premium": "797.317",
            "gender": "1"
        },
        {
            "id": "471",
            "age": "47",
            "sumInsured": "500",
            "premium": "398.658",
            "gender": "1"
        },
        {
            "id": "470",
            "age": "46",
            "sumInsured": "5000",
            "premium": "3692.45",
            "gender": "1"
        },
        {
            "id": "469",
            "age": "46",
            "sumInsured": "4500",
            "premium": "3323.2",
            "gender": "1"
        },
        {
            "id": "468",
            "age": "46",
            "sumInsured": "4000",
            "premium": "2953.96",
            "gender": "1"
        },
        {
            "id": "467",
            "age": "46",
            "sumInsured": "3500",
            "premium": "2584.71",
            "gender": "1"
        },
        {
            "id": "466",
            "age": "46",
            "sumInsured": "3000",
            "premium": "2215.47",
            "gender": "1"
        },
        {
            "id": "465",
            "age": "46",
            "sumInsured": "2500",
            "premium": "1846.22",
            "gender": "1"
        },
        {
            "id": "464",
            "age": "46",
            "sumInsured": "2000",
            "premium": "1476.98",
            "gender": "1"
        },
        {
            "id": "463",
            "age": "46",
            "sumInsured": "1500",
            "premium": "1107.73",
            "gender": "1"
        },
        {
            "id": "462",
            "age": "46",
            "sumInsured": "1000",
            "premium": "738.489",
            "gender": "1"
        },
        {
            "id": "461",
            "age": "46",
            "sumInsured": "500",
            "premium": "369.245",
            "gender": "1"
        },
        {
            "id": "460",
            "age": "45",
            "sumInsured": "5000",
            "premium": "3192.5",
            "gender": "1"
        },
        {
            "id": "459",
            "age": "45",
            "sumInsured": "4500",
            "premium": "2873.25",
            "gender": "1"
        },
        {
            "id": "458",
            "age": "45",
            "sumInsured": "4000",
            "premium": "2554",
            "gender": "1"
        },
        {
            "id": "457",
            "age": "45",
            "sumInsured": "3500",
            "premium": "2234.75",
            "gender": "1"
        },
        {
            "id": "456",
            "age": "45",
            "sumInsured": "3000",
            "premium": "1915.5",
            "gender": "1"
        },
        {
            "id": "455",
            "age": "45",
            "sumInsured": "2500",
            "premium": "1596.25",
            "gender": "1"
        },
        {
            "id": "454",
            "age": "45",
            "sumInsured": "2000",
            "premium": "1277",
            "gender": "1"
        },
        {
            "id": "453",
            "age": "45",
            "sumInsured": "1500",
            "premium": "957.749",
            "gender": "1"
        },
        {
            "id": "452",
            "age": "45",
            "sumInsured": "1000",
            "premium": "638.499",
            "gender": "1"
        },
        {
            "id": "451",
            "age": "45",
            "sumInsured": "500",
            "premium": "319.25",
            "gender": "1"
        },
        {
            "id": "450",
            "age": "44",
            "sumInsured": "5000",
            "premium": "2913.05",
            "gender": "1"
        },
        {
            "id": "449",
            "age": "44",
            "sumInsured": "4500",
            "premium": "2621.75",
            "gender": "1"
        },
        {
            "id": "448",
            "age": "44",
            "sumInsured": "4000",
            "premium": "2330.44",
            "gender": "1"
        },
        {
            "id": "447",
            "age": "44",
            "sumInsured": "3500",
            "premium": "2039.14",
            "gender": "1"
        },
        {
            "id": "446",
            "age": "44",
            "sumInsured": "3000",
            "premium": "1747.83",
            "gender": "1"
        },
        {
            "id": "445",
            "age": "44",
            "sumInsured": "2500",
            "premium": "1456.53",
            "gender": "1"
        },
        {
            "id": "444",
            "age": "44",
            "sumInsured": "2000",
            "premium": "1165.22",
            "gender": "1"
        },
        {
            "id": "443",
            "age": "44",
            "sumInsured": "1500",
            "premium": "873.916",
            "gender": "1"
        },
        {
            "id": "442",
            "age": "44",
            "sumInsured": "1000",
            "premium": "582.61",
            "gender": "1"
        },
        {
            "id": "441",
            "age": "44",
            "sumInsured": "500",
            "premium": "291.305",
            "gender": "1"
        },
        {
            "id": "440",
            "age": "43",
            "sumInsured": "5000",
            "premium": "2648.82",
            "gender": "1"
        },
        {
            "id": "439",
            "age": "43",
            "sumInsured": "4500",
            "premium": "2383.94",
            "gender": "1"
        },
        {
            "id": "438",
            "age": "43",
            "sumInsured": "4000",
            "premium": "2119.06",
            "gender": "1"
        },
        {
            "id": "437",
            "age": "43",
            "sumInsured": "3500",
            "premium": "1854.18",
            "gender": "1"
        },
        {
            "id": "436",
            "age": "43",
            "sumInsured": "3000",
            "premium": "1589.29",
            "gender": "1"
        },
        {
            "id": "435",
            "age": "43",
            "sumInsured": "2500",
            "premium": "1324.41",
            "gender": "1"
        },
        {
            "id": "434",
            "age": "43",
            "sumInsured": "2000",
            "premium": "1059.53",
            "gender": "1"
        },
        {
            "id": "433",
            "age": "43",
            "sumInsured": "1500",
            "premium": "794.647",
            "gender": "1"
        },
        {
            "id": "432",
            "age": "43",
            "sumInsured": "1000",
            "premium": "529.765",
            "gender": "1"
        },
        {
            "id": "431",
            "age": "43",
            "sumInsured": "500",
            "premium": "264.882",
            "gender": "1"
        },
        {
            "id": "430",
            "age": "42",
            "sumInsured": "5000",
            "premium": "2466.28",
            "gender": "1"
        },
        {
            "id": "429",
            "age": "42",
            "sumInsured": "4500",
            "premium": "2219.65",
            "gender": "1"
        },
        {
            "id": "428",
            "age": "42",
            "sumInsured": "4000",
            "premium": "1973.02",
            "gender": "1"
        },
        {
            "id": "427",
            "age": "42",
            "sumInsured": "3500",
            "premium": "1726.4",
            "gender": "1"
        },
        {
            "id": "426",
            "age": "42",
            "sumInsured": "3000",
            "premium": "1479.77",
            "gender": "1"
        },
        {
            "id": "425",
            "age": "42",
            "sumInsured": "2500",
            "premium": "1233.14",
            "gender": "1"
        },
        {
            "id": "424",
            "age": "42",
            "sumInsured": "2000",
            "premium": "986.512",
            "gender": "1"
        },
        {
            "id": "423",
            "age": "42",
            "sumInsured": "1500",
            "premium": "739.884",
            "gender": "1"
        },
        {
            "id": "422",
            "age": "42",
            "sumInsured": "1000",
            "premium": "493.256",
            "gender": "1"
        },
        {
            "id": "421",
            "age": "42",
            "sumInsured": "500",
            "premium": "246.628",
            "gender": "1"
        },
        {
            "id": "420",
            "age": "41",
            "sumInsured": "5000",
            "premium": "2293.46",
            "gender": "1"
        },
        {
            "id": "419",
            "age": "41",
            "sumInsured": "4500",
            "premium": "2064.12",
            "gender": "1"
        },
        {
            "id": "418",
            "age": "41",
            "sumInsured": "4000",
            "premium": "1834.77",
            "gender": "1"
        },
        {
            "id": "417",
            "age": "41",
            "sumInsured": "3500",
            "premium": "1605.42",
            "gender": "1"
        },
        {
            "id": "416",
            "age": "41",
            "sumInsured": "3000",
            "premium": "1376.08",
            "gender": "1"
        },
        {
            "id": "415",
            "age": "41",
            "sumInsured": "2500",
            "premium": "1146.73",
            "gender": "1"
        },
        {
            "id": "414",
            "age": "41",
            "sumInsured": "2000",
            "premium": "917.385",
            "gender": "1"
        },
        {
            "id": "413",
            "age": "41",
            "sumInsured": "1500",
            "premium": "688.039",
            "gender": "1"
        },
        {
            "id": "412",
            "age": "41",
            "sumInsured": "1000",
            "premium": "458.693",
            "gender": "1"
        },
        {
            "id": "411",
            "age": "41",
            "sumInsured": "500",
            "premium": "229.346",
            "gender": "1"
        },
        {
            "id": "410",
            "age": "40",
            "sumInsured": "5000",
            "premium": "2308.7",
            "gender": "1"
        },
        {
            "id": "409",
            "age": "40",
            "sumInsured": "4500",
            "premium": "2077.83",
            "gender": "1"
        },
        {
            "id": "408",
            "age": "40",
            "sumInsured": "4000",
            "premium": "1846.96",
            "gender": "1"
        },
        {
            "id": "407",
            "age": "40",
            "sumInsured": "3500",
            "premium": "1616.09",
            "gender": "1"
        },
        {
            "id": "406",
            "age": "40",
            "sumInsured": "3000",
            "premium": "1385.22",
            "gender": "1"
        },
        {
            "id": "405",
            "age": "40",
            "sumInsured": "2500",
            "premium": "1154.35",
            "gender": "1"
        },
        {
            "id": "404",
            "age": "40",
            "sumInsured": "2000",
            "premium": "923.481",
            "gender": "1"
        },
        {
            "id": "403",
            "age": "40",
            "sumInsured": "1500",
            "premium": "692.611",
            "gender": "1"
        },
        {
            "id": "402",
            "age": "40",
            "sumInsured": "1000",
            "premium": "461.741",
            "gender": "1"
        },
        {
            "id": "401",
            "age": "40",
            "sumInsured": "500",
            "premium": "230.87",
            "gender": "1"
        },
        {
            "id": "400",
            "age": "39",
            "sumInsured": "5000",
            "premium": "2217.15",
            "gender": "1"
        },
        {
            "id": "399",
            "age": "39",
            "sumInsured": "4500",
            "premium": "1995.44",
            "gender": "1"
        },
        {
            "id": "398",
            "age": "39",
            "sumInsured": "4000",
            "premium": "1773.72",
            "gender": "1"
        },
        {
            "id": "397",
            "age": "39",
            "sumInsured": "3500",
            "premium": "1552.01",
            "gender": "1"
        },
        {
            "id": "396",
            "age": "39",
            "sumInsured": "3000",
            "premium": "1330.29",
            "gender": "1"
        },
        {
            "id": "395",
            "age": "39",
            "sumInsured": "2500",
            "premium": "1108.58",
            "gender": "1"
        },
        {
            "id": "394",
            "age": "39",
            "sumInsured": "2000",
            "premium": "886.862",
            "gender": "1"
        },
        {
            "id": "393",
            "age": "39",
            "sumInsured": "1500",
            "premium": "665.146",
            "gender": "1"
        },
        {
            "id": "392",
            "age": "39",
            "sumInsured": "1000",
            "premium": "443.431",
            "gender": "1"
        },
        {
            "id": "391",
            "age": "39",
            "sumInsured": "500",
            "premium": "221.715",
            "gender": "1"
        },
        {
            "id": "390",
            "age": "38",
            "sumInsured": "5000",
            "premium": "2104.08",
            "gender": "1"
        },
        {
            "id": "389",
            "age": "38",
            "sumInsured": "4500",
            "premium": "1893.67",
            "gender": "1"
        },
        {
            "id": "388",
            "age": "38",
            "sumInsured": "4000",
            "premium": "1683.27",
            "gender": "1"
        },
        {
            "id": "387",
            "age": "38",
            "sumInsured": "3500",
            "premium": "1472.86",
            "gender": "1"
        },
        {
            "id": "386",
            "age": "38",
            "sumInsured": "3000",
            "premium": "1262.45",
            "gender": "1"
        },
        {
            "id": "385",
            "age": "38",
            "sumInsured": "2500",
            "premium": "1052.04",
            "gender": "1"
        },
        {
            "id": "384",
            "age": "38",
            "sumInsured": "2000",
            "premium": "841.633",
            "gender": "1"
        },
        {
            "id": "383",
            "age": "38",
            "sumInsured": "1500",
            "premium": "631.225",
            "gender": "1"
        },
        {
            "id": "382",
            "age": "38",
            "sumInsured": "1000",
            "premium": "420.816",
            "gender": "1"
        },
        {
            "id": "381",
            "age": "38",
            "sumInsured": "500",
            "premium": "210.408",
            "gender": "1"
        },
        {
            "id": "380",
            "age": "37",
            "sumInsured": "5000",
            "premium": "2035.67",
            "gender": "1"
        },
        {
            "id": "379",
            "age": "37",
            "sumInsured": "4500",
            "premium": "1832.1",
            "gender": "1"
        },
        {
            "id": "378",
            "age": "37",
            "sumInsured": "4000",
            "premium": "1628.53",
            "gender": "1"
        },
        {
            "id": "377",
            "age": "37",
            "sumInsured": "3500",
            "premium": "1424.97",
            "gender": "1"
        },
        {
            "id": "376",
            "age": "37",
            "sumInsured": "3000",
            "premium": "1221.4",
            "gender": "1"
        },
        {
            "id": "375",
            "age": "37",
            "sumInsured": "2500",
            "premium": "1017.83",
            "gender": "1"
        },
        {
            "id": "374",
            "age": "37",
            "sumInsured": "2000",
            "premium": "814.267",
            "gender": "1"
        },
        {
            "id": "373",
            "age": "37",
            "sumInsured": "1500",
            "premium": "610.7",
            "gender": "1"
        },
        {
            "id": "372",
            "age": "37",
            "sumInsured": "1000",
            "premium": "407.133",
            "gender": "1"
        },
        {
            "id": "371",
            "age": "37",
            "sumInsured": "500",
            "premium": "203.567",
            "gender": "1"
        },
        {
            "id": "370",
            "age": "36",
            "sumInsured": "5000",
            "premium": "1968.57",
            "gender": "1"
        },
        {
            "id": "369",
            "age": "36",
            "sumInsured": "4500",
            "premium": "1771.71",
            "gender": "1"
        },
        {
            "id": "368",
            "age": "36",
            "sumInsured": "4000",
            "premium": "1574.85",
            "gender": "1"
        },
        {
            "id": "367",
            "age": "36",
            "sumInsured": "3500",
            "premium": "1378",
            "gender": "1"
        },
        {
            "id": "366",
            "age": "36",
            "sumInsured": "3000",
            "premium": "1181.14",
            "gender": "1"
        },
        {
            "id": "365",
            "age": "36",
            "sumInsured": "2500",
            "premium": "984.283",
            "gender": "1"
        },
        {
            "id": "364",
            "age": "36",
            "sumInsured": "2000",
            "premium": "787.426",
            "gender": "1"
        },
        {
            "id": "363",
            "age": "36",
            "sumInsured": "1500",
            "premium": "590.57",
            "gender": "1"
        },
        {
            "id": "362",
            "age": "36",
            "sumInsured": "1000",
            "premium": "393.713",
            "gender": "1"
        },
        {
            "id": "361",
            "age": "36",
            "sumInsured": "500",
            "premium": "196.857",
            "gender": "1"
        },
        {
            "id": "360",
            "age": "35",
            "sumInsured": "5000",
            "premium": "1760.97",
            "gender": "1"
        },
        {
            "id": "359",
            "age": "35",
            "sumInsured": "4500",
            "premium": "1584.88",
            "gender": "1"
        },
        {
            "id": "358",
            "age": "35",
            "sumInsured": "4000",
            "premium": "1408.78",
            "gender": "1"
        },
        {
            "id": "357",
            "age": "35",
            "sumInsured": "3500",
            "premium": "1232.68",
            "gender": "1"
        },
        {
            "id": "356",
            "age": "35",
            "sumInsured": "3000",
            "premium": "1056.58",
            "gender": "1"
        },
        {
            "id": "355",
            "age": "35",
            "sumInsured": "2500",
            "premium": "880.487",
            "gender": "1"
        },
        {
            "id": "354",
            "age": "35",
            "sumInsured": "2000",
            "premium": "704.389",
            "gender": "1"
        },
        {
            "id": "353",
            "age": "35",
            "sumInsured": "1500",
            "premium": "528.292",
            "gender": "1"
        },
        {
            "id": "352",
            "age": "35",
            "sumInsured": "1000",
            "premium": "352.195",
            "gender": "1"
        },
        {
            "id": "351",
            "age": "35",
            "sumInsured": "500",
            "premium": "176.097",
            "gender": "1"
        },
        {
            "id": "350",
            "age": "34",
            "sumInsured": "5000",
            "premium": "1749.28",
            "gender": "1"
        },
        {
            "id": "349",
            "age": "34",
            "sumInsured": "4500",
            "premium": "1574.35",
            "gender": "1"
        },
        {
            "id": "348",
            "age": "34",
            "sumInsured": "4000",
            "premium": "1399.43",
            "gender": "1"
        },
        {
            "id": "347",
            "age": "34",
            "sumInsured": "3500",
            "premium": "1224.5",
            "gender": "1"
        },
        {
            "id": "346",
            "age": "34",
            "sumInsured": "3000",
            "premium": "1049.57",
            "gender": "1"
        },
        {
            "id": "345",
            "age": "34",
            "sumInsured": "2500",
            "premium": "874.641",
            "gender": "1"
        },
        {
            "id": "344",
            "age": "34",
            "sumInsured": "2000",
            "premium": "699.713",
            "gender": "1"
        },
        {
            "id": "343",
            "age": "34",
            "sumInsured": "1500",
            "premium": "524.785",
            "gender": "1"
        },
        {
            "id": "342",
            "age": "34",
            "sumInsured": "1000",
            "premium": "349.856",
            "gender": "1"
        },
        {
            "id": "341",
            "age": "34",
            "sumInsured": "500",
            "premium": "174.928",
            "gender": "1"
        },
        {
            "id": "340",
            "age": "33",
            "sumInsured": "5000",
            "premium": "1736.32",
            "gender": "1"
        },
        {
            "id": "339",
            "age": "33",
            "sumInsured": "4500",
            "premium": "1562.69",
            "gender": "1"
        },
        {
            "id": "338",
            "age": "33",
            "sumInsured": "4000",
            "premium": "1389.06",
            "gender": "1"
        },
        {
            "id": "337",
            "age": "33",
            "sumInsured": "3500",
            "premium": "1215.43",
            "gender": "1"
        },
        {
            "id": "336",
            "age": "33",
            "sumInsured": "3000",
            "premium": "1041.79",
            "gender": "1"
        },
        {
            "id": "335",
            "age": "33",
            "sumInsured": "2500",
            "premium": "868.161",
            "gender": "1"
        },
        {
            "id": "334",
            "age": "33",
            "sumInsured": "2000",
            "premium": "694.529",
            "gender": "1"
        },
        {
            "id": "333",
            "age": "33",
            "sumInsured": "1500",
            "premium": "520.897",
            "gender": "1"
        },
        {
            "id": "332",
            "age": "33",
            "sumInsured": "1000",
            "premium": "347.265",
            "gender": "1"
        },
        {
            "id": "331",
            "age": "33",
            "sumInsured": "500",
            "premium": "173.632",
            "gender": "1"
        },
        {
            "id": "330",
            "age": "32",
            "sumInsured": "5000",
            "premium": "1743.01",
            "gender": "1"
        },
        {
            "id": "329",
            "age": "32",
            "sumInsured": "4500",
            "premium": "1568.71",
            "gender": "1"
        },
        {
            "id": "328",
            "age": "32",
            "sumInsured": "4000",
            "premium": "1394.41",
            "gender": "1"
        },
        {
            "id": "327",
            "age": "32",
            "sumInsured": "3500",
            "premium": "1220.11",
            "gender": "1"
        },
        {
            "id": "326",
            "age": "32",
            "sumInsured": "3000",
            "premium": "1045.81",
            "gender": "1"
        },
        {
            "id": "325",
            "age": "32",
            "sumInsured": "2500",
            "premium": "871.507",
            "gender": "1"
        },
        {
            "id": "324",
            "age": "32",
            "sumInsured": "2000",
            "premium": "697.205",
            "gender": "1"
        },
        {
            "id": "323",
            "age": "32",
            "sumInsured": "1500",
            "premium": "522.904",
            "gender": "1"
        },
        {
            "id": "322",
            "age": "32",
            "sumInsured": "1000",
            "premium": "348.603",
            "gender": "1"
        },
        {
            "id": "321",
            "age": "32",
            "sumInsured": "500",
            "premium": "174.301",
            "gender": "1"
        },
        {
            "id": "320",
            "age": "31",
            "sumInsured": "5000",
            "premium": "1749.48",
            "gender": "1"
        },
        {
            "id": "319",
            "age": "31",
            "sumInsured": "4500",
            "premium": "1574.53",
            "gender": "1"
        },
        {
            "id": "318",
            "age": "31",
            "sumInsured": "4000",
            "premium": "1399.58",
            "gender": "1"
        },
        {
            "id": "317",
            "age": "31",
            "sumInsured": "3500",
            "premium": "1224.63",
            "gender": "1"
        },
        {
            "id": "316",
            "age": "31",
            "sumInsured": "3000",
            "premium": "1049.69",
            "gender": "1"
        },
        {
            "id": "315",
            "age": "31",
            "sumInsured": "2500",
            "premium": "874.738",
            "gender": "1"
        },
        {
            "id": "314",
            "age": "31",
            "sumInsured": "2000",
            "premium": "699.791",
            "gender": "1"
        },
        {
            "id": "313",
            "age": "31",
            "sumInsured": "1500",
            "premium": "524.843",
            "gender": "1"
        },
        {
            "id": "312",
            "age": "31",
            "sumInsured": "1000",
            "premium": "349.895",
            "gender": "1"
        },
        {
            "id": "311",
            "age": "31",
            "sumInsured": "500",
            "premium": "174.948",
            "gender": "1"
        },
        {
            "id": "310",
            "age": "30",
            "sumInsured": "5000",
            "premium": "1993.46",
            "gender": "1"
        },
        {
            "id": "309",
            "age": "30",
            "sumInsured": "4500",
            "premium": "1794.12",
            "gender": "1"
        },
        {
            "id": "308",
            "age": "30",
            "sumInsured": "4000",
            "premium": "1594.77",
            "gender": "1"
        },
        {
            "id": "307",
            "age": "30",
            "sumInsured": "3500",
            "premium": "1395.43",
            "gender": "1"
        },
        {
            "id": "306",
            "age": "30",
            "sumInsured": "3000",
            "premium": "1196.08",
            "gender": "1"
        },
        {
            "id": "305",
            "age": "30",
            "sumInsured": "2500",
            "premium": "996.732",
            "gender": "1"
        },
        {
            "id": "304",
            "age": "30",
            "sumInsured": "2000",
            "premium": "797.386",
            "gender": "1"
        },
        {
            "id": "303",
            "age": "30",
            "sumInsured": "1500",
            "premium": "598.039",
            "gender": "1"
        },
        {
            "id": "302",
            "age": "30",
            "sumInsured": "1000",
            "premium": "398.693",
            "gender": "1"
        },
        {
            "id": "301",
            "age": "30",
            "sumInsured": "500",
            "premium": "199.346",
            "gender": "1"
        },
        {
            "id": "300",
            "age": "29",
            "sumInsured": "5000",
            "premium": "1985.74",
            "gender": "1"
        },
        {
            "id": "299",
            "age": "29",
            "sumInsured": "4500",
            "premium": "1787.16",
            "gender": "1"
        },
        {
            "id": "298",
            "age": "29",
            "sumInsured": "4000",
            "premium": "1588.59",
            "gender": "1"
        },
        {
            "id": "297",
            "age": "29",
            "sumInsured": "3500",
            "premium": "1390.02",
            "gender": "1"
        },
        {
            "id": "296",
            "age": "29",
            "sumInsured": "3000",
            "premium": "1191.44",
            "gender": "1"
        },
        {
            "id": "295",
            "age": "29",
            "sumInsured": "2500",
            "premium": "992.869",
            "gender": "1"
        },
        {
            "id": "294",
            "age": "29",
            "sumInsured": "2000",
            "premium": "794.295",
            "gender": "1"
        },
        {
            "id": "293",
            "age": "29",
            "sumInsured": "1500",
            "premium": "595.721",
            "gender": "1"
        },
        {
            "id": "292",
            "age": "29",
            "sumInsured": "1000",
            "premium": "397.147",
            "gender": "1"
        },
        {
            "id": "291",
            "age": "29",
            "sumInsured": "500",
            "premium": "198.574",
            "gender": "1"
        },
        {
            "id": "290",
            "age": "28",
            "sumInsured": "5000",
            "premium": "1977.73",
            "gender": "1"
        },
        {
            "id": "289",
            "age": "28",
            "sumInsured": "4500",
            "premium": "1779.96",
            "gender": "1"
        },
        {
            "id": "288",
            "age": "28",
            "sumInsured": "4000",
            "premium": "1582.19",
            "gender": "1"
        },
        {
            "id": "287",
            "age": "28",
            "sumInsured": "3500",
            "premium": "1384.41",
            "gender": "1"
        },
        {
            "id": "286",
            "age": "28",
            "sumInsured": "3000",
            "premium": "1186.64",
            "gender": "1"
        },
        {
            "id": "285",
            "age": "28",
            "sumInsured": "2500",
            "premium": "988.866",
            "gender": "1"
        },
        {
            "id": "284",
            "age": "28",
            "sumInsured": "2000",
            "premium": "791.093",
            "gender": "1"
        },
        {
            "id": "283",
            "age": "28",
            "sumInsured": "1500",
            "premium": "593.32",
            "gender": "1"
        },
        {
            "id": "282",
            "age": "28",
            "sumInsured": "1000",
            "premium": "395.546",
            "gender": "1"
        },
        {
            "id": "281",
            "age": "28",
            "sumInsured": "500",
            "premium": "197.773",
            "gender": "1"
        },
        {
            "id": "280",
            "age": "27",
            "sumInsured": "5000",
            "premium": "1975.47",
            "gender": "1"
        },
        {
            "id": "279",
            "age": "27",
            "sumInsured": "4500",
            "premium": "1777.92",
            "gender": "1"
        },
        {
            "id": "278",
            "age": "27",
            "sumInsured": "4000",
            "premium": "1580.38",
            "gender": "1"
        },
        {
            "id": "277",
            "age": "27",
            "sumInsured": "3500",
            "premium": "1382.83",
            "gender": "1"
        },
        {
            "id": "276",
            "age": "27",
            "sumInsured": "3000",
            "premium": "1185.28",
            "gender": "1"
        },
        {
            "id": "275",
            "age": "27",
            "sumInsured": "2500",
            "premium": "987.735",
            "gender": "1"
        },
        {
            "id": "274",
            "age": "27",
            "sumInsured": "2000",
            "premium": "790.188",
            "gender": "1"
        },
        {
            "id": "273",
            "age": "27",
            "sumInsured": "1500",
            "premium": "592.641",
            "gender": "1"
        },
        {
            "id": "272",
            "age": "27",
            "sumInsured": "1000",
            "premium": "395.094",
            "gender": "1"
        },
        {
            "id": "271",
            "age": "27",
            "sumInsured": "500",
            "premium": "197.547",
            "gender": "1"
        },
        {
            "id": "270",
            "age": "26",
            "sumInsured": "5000",
            "premium": "1973.03",
            "gender": "1"
        },
        {
            "id": "269",
            "age": "26",
            "sumInsured": "4500",
            "premium": "1775.72",
            "gender": "1"
        },
        {
            "id": "268",
            "age": "26",
            "sumInsured": "4000",
            "premium": "1578.42",
            "gender": "1"
        },
        {
            "id": "267",
            "age": "26",
            "sumInsured": "3500",
            "premium": "1381.12",
            "gender": "1"
        },
        {
            "id": "266",
            "age": "26",
            "sumInsured": "3000",
            "premium": "1183.82",
            "gender": "1"
        },
        {
            "id": "265",
            "age": "26",
            "sumInsured": "2500",
            "premium": "986.513",
            "gender": "1"
        },
        {
            "id": "264",
            "age": "26",
            "sumInsured": "2000",
            "premium": "789.21",
            "gender": "1"
        },
        {
            "id": "263",
            "age": "26",
            "sumInsured": "1500",
            "premium": "591.908",
            "gender": "1"
        },
        {
            "id": "262",
            "age": "26",
            "sumInsured": "1000",
            "premium": "394.605",
            "gender": "1"
        },
        {
            "id": "261",
            "age": "26",
            "sumInsured": "500",
            "premium": "197.303",
            "gender": "1"
        },
        {
            "id": "260",
            "age": "25",
            "sumInsured": "5000",
            "premium": "1787.14",
            "gender": "1"
        },
        {
            "id": "259",
            "age": "25",
            "sumInsured": "4500",
            "premium": "1608.42",
            "gender": "1"
        },
        {
            "id": "258",
            "age": "25",
            "sumInsured": "4000",
            "premium": "1429.71",
            "gender": "1"
        },
        {
            "id": "257",
            "age": "25",
            "sumInsured": "3500",
            "premium": "1251",
            "gender": "1"
        },
        {
            "id": "256",
            "age": "25",
            "sumInsured": "3000",
            "premium": "1072.28",
            "gender": "1"
        },
        {
            "id": "255",
            "age": "25",
            "sumInsured": "2500",
            "premium": "893.569",
            "gender": "1"
        },
        {
            "id": "254",
            "age": "25",
            "sumInsured": "2000",
            "premium": "714.855",
            "gender": "1"
        },
        {
            "id": "253",
            "age": "25",
            "sumInsured": "1500",
            "premium": "536.141",
            "gender": "1"
        },
        {
            "id": "252",
            "age": "25",
            "sumInsured": "1000",
            "premium": "357.427",
            "gender": "1"
        },
        {
            "id": "251",
            "age": "25",
            "sumInsured": "500",
            "premium": "178.714",
            "gender": "1"
        },
        {
            "id": "250",
            "age": "24",
            "sumInsured": "5000",
            "premium": "1729.9",
            "gender": "1"
        },
        {
            "id": "249",
            "age": "24",
            "sumInsured": "4500",
            "premium": "1556.91",
            "gender": "1"
        },
        {
            "id": "248",
            "age": "24",
            "sumInsured": "4000",
            "premium": "1383.92",
            "gender": "1"
        },
        {
            "id": "247",
            "age": "24",
            "sumInsured": "3500",
            "premium": "1210.93",
            "gender": "1"
        },
        {
            "id": "246",
            "age": "24",
            "sumInsured": "3000",
            "premium": "1037.94",
            "gender": "1"
        },
        {
            "id": "245",
            "age": "24",
            "sumInsured": "2500",
            "premium": "864.951",
            "gender": "1"
        },
        {
            "id": "244",
            "age": "24",
            "sumInsured": "2000",
            "premium": "691.961",
            "gender": "1"
        },
        {
            "id": "243",
            "age": "24",
            "sumInsured": "1500",
            "premium": "518.971",
            "gender": "1"
        },
        {
            "id": "242",
            "age": "24",
            "sumInsured": "1000",
            "premium": "345.981",
            "gender": "1"
        },
        {
            "id": "241",
            "age": "24",
            "sumInsured": "500",
            "premium": "172.99",
            "gender": "1"
        },
        {
            "id": "240",
            "age": "23",
            "sumInsured": "5000",
            "premium": "1674.33",
            "gender": "1"
        },
        {
            "id": "239",
            "age": "23",
            "sumInsured": "4500",
            "premium": "1506.9",
            "gender": "1"
        },
        {
            "id": "238",
            "age": "23",
            "sumInsured": "4000",
            "premium": "1339.47",
            "gender": "1"
        },
        {
            "id": "237",
            "age": "23",
            "sumInsured": "3500",
            "premium": "1172.03",
            "gender": "1"
        },
        {
            "id": "236",
            "age": "23",
            "sumInsured": "3000",
            "premium": "1004.6",
            "gender": "1"
        },
        {
            "id": "235",
            "age": "23",
            "sumInsured": "2500",
            "premium": "837.167",
            "gender": "1"
        },
        {
            "id": "234",
            "age": "23",
            "sumInsured": "2000",
            "premium": "669.734",
            "gender": "1"
        },
        {
            "id": "233",
            "age": "23",
            "sumInsured": "1500",
            "premium": "502.3",
            "gender": "1"
        },
        {
            "id": "232",
            "age": "23",
            "sumInsured": "1000",
            "premium": "334.867",
            "gender": "1"
        },
        {
            "id": "231",
            "age": "23",
            "sumInsured": "500",
            "premium": "167.433",
            "gender": "1"
        },
        {
            "id": "230",
            "age": "22",
            "sumInsured": "5000",
            "premium": "1615.19",
            "gender": "1"
        },
        {
            "id": "229",
            "age": "22",
            "sumInsured": "4500",
            "premium": "1453.67",
            "gender": "1"
        },
        {
            "id": "228",
            "age": "22",
            "sumInsured": "4000",
            "premium": "1292.15",
            "gender": "1"
        },
        {
            "id": "227",
            "age": "22",
            "sumInsured": "3500",
            "premium": "1130.63",
            "gender": "1"
        },
        {
            "id": "226",
            "age": "22",
            "sumInsured": "3000",
            "premium": "969.114",
            "gender": "1"
        },
        {
            "id": "225",
            "age": "22",
            "sumInsured": "2500",
            "premium": "807.595",
            "gender": "1"
        },
        {
            "id": "224",
            "age": "22",
            "sumInsured": "2000",
            "premium": "646.076",
            "gender": "1"
        },
        {
            "id": "223",
            "age": "22",
            "sumInsured": "1500",
            "premium": "484.557",
            "gender": "1"
        },
        {
            "id": "222",
            "age": "22",
            "sumInsured": "1000",
            "premium": "323.038",
            "gender": "1"
        },
        {
            "id": "221",
            "age": "22",
            "sumInsured": "500",
            "premium": "161.519",
            "gender": "1"
        },
        {
            "id": "220",
            "age": "21",
            "sumInsured": "5000",
            "premium": "1557.85",
            "gender": "1"
        },
        {
            "id": "219",
            "age": "21",
            "sumInsured": "4500",
            "premium": "1402.07",
            "gender": "1"
        },
        {
            "id": "218",
            "age": "21",
            "sumInsured": "4000",
            "premium": "1246.28",
            "gender": "1"
        },
        {
            "id": "217",
            "age": "21",
            "sumInsured": "3500",
            "premium": "1090.5",
            "gender": "1"
        },
        {
            "id": "216",
            "age": "21",
            "sumInsured": "3000",
            "premium": "934.712",
            "gender": "1"
        },
        {
            "id": "215",
            "age": "21",
            "sumInsured": "2500",
            "premium": "778.927",
            "gender": "1"
        },
        {
            "id": "214",
            "age": "21",
            "sumInsured": "2000",
            "premium": "623.141",
            "gender": "1"
        },
        {
            "id": "213",
            "age": "21",
            "sumInsured": "1500",
            "premium": "467.356",
            "gender": "1"
        },
        {
            "id": "212",
            "age": "21",
            "sumInsured": "1000",
            "premium": "311.571",
            "gender": "1"
        },
        {
            "id": "211",
            "age": "21",
            "sumInsured": "500",
            "premium": "155.785",
            "gender": "1"
        },
        {
            "id": "210",
            "age": "20",
            "sumInsured": "5000",
            "premium": "1639.09",
            "gender": "1"
        },
        {
            "id": "209",
            "age": "20",
            "sumInsured": "4500",
            "premium": "1475.18",
            "gender": "1"
        },
        {
            "id": "208",
            "age": "20",
            "sumInsured": "4000",
            "premium": "1311.27",
            "gender": "1"
        },
        {
            "id": "207",
            "age": "20",
            "sumInsured": "3500",
            "premium": "1147.36",
            "gender": "1"
        },
        {
            "id": "206",
            "age": "20",
            "sumInsured": "3000",
            "premium": "983.455",
            "gender": "1"
        },
        {
            "id": "205",
            "age": "20",
            "sumInsured": "2500",
            "premium": "819.546",
            "gender": "1"
        },
        {
            "id": "204",
            "age": "20",
            "sumInsured": "2000",
            "premium": "655.637",
            "gender": "1"
        },
        {
            "id": "203",
            "age": "20",
            "sumInsured": "1500",
            "premium": "491.728",
            "gender": "1"
        },
        {
            "id": "202",
            "age": "20",
            "sumInsured": "1000",
            "premium": "327.818",
            "gender": "1"
        },
        {
            "id": "201",
            "age": "20",
            "sumInsured": "500",
            "premium": "163.909",
            "gender": "1"
        },
        {
            "id": "200",
            "age": "19",
            "sumInsured": "5000",
            "premium": "1560.89",
            "gender": "1"
        },
        {
            "id": "199",
            "age": "19",
            "sumInsured": "4500",
            "premium": "1404.8",
            "gender": "1"
        },
        {
            "id": "198",
            "age": "19",
            "sumInsured": "4000",
            "premium": "1248.71",
            "gender": "1"
        },
        {
            "id": "197",
            "age": "19",
            "sumInsured": "3500",
            "premium": "1092.62",
            "gender": "1"
        },
        {
            "id": "196",
            "age": "19",
            "sumInsured": "3000",
            "premium": "936.533",
            "gender": "1"
        },
        {
            "id": "195",
            "age": "19",
            "sumInsured": "2500",
            "premium": "780.444",
            "gender": "1"
        },
        {
            "id": "194",
            "age": "19",
            "sumInsured": "2000",
            "premium": "624.355",
            "gender": "1"
        },
        {
            "id": "193",
            "age": "19",
            "sumInsured": "1500",
            "premium": "468.266",
            "gender": "1"
        },
        {
            "id": "192",
            "age": "19",
            "sumInsured": "1000",
            "premium": "312.178",
            "gender": "1"
        },
        {
            "id": "191",
            "age": "19",
            "sumInsured": "500",
            "premium": "156.089",
            "gender": "1"
        },
        {
            "id": "190",
            "age": "18",
            "sumInsured": "5000",
            "premium": "1486.12",
            "gender": "1"
        },
        {
            "id": "189",
            "age": "18",
            "sumInsured": "4500",
            "premium": "1337.51",
            "gender": "1"
        },
        {
            "id": "188",
            "age": "18",
            "sumInsured": "4000",
            "premium": "1188.9",
            "gender": "1"
        },
        {
            "id": "187",
            "age": "18",
            "sumInsured": "3500",
            "premium": "1040.29",
            "gender": "1"
        },
        {
            "id": "186",
            "age": "18",
            "sumInsured": "3000",
            "premium": "891.674",
            "gender": "1"
        },
        {
            "id": "185",
            "age": "18",
            "sumInsured": "2500",
            "premium": "743.061",
            "gender": "1"
        },
        {
            "id": "184",
            "age": "18",
            "sumInsured": "2000",
            "premium": "594.449",
            "gender": "1"
        },
        {
            "id": "183",
            "age": "18",
            "sumInsured": "1500",
            "premium": "445.837",
            "gender": "1"
        },
        {
            "id": "182",
            "age": "18",
            "sumInsured": "1000",
            "premium": "297.225",
            "gender": "1"
        },
        {
            "id": "181",
            "age": "18",
            "sumInsured": "500",
            "premium": "148.612",
            "gender": "1"
        },
        {
            "id": "180",
            "age": "17",
            "sumInsured": "5000",
            "premium": "1406.67",
            "gender": "1"
        },
        {
            "id": "179",
            "age": "17",
            "sumInsured": "4500",
            "premium": "1266",
            "gender": "1"
        },
        {
            "id": "178",
            "age": "17",
            "sumInsured": "4000",
            "premium": "1125.34",
            "gender": "1"
        },
        {
            "id": "177",
            "age": "17",
            "sumInsured": "3500",
            "premium": "984.67",
            "gender": "1"
        },
        {
            "id": "176",
            "age": "17",
            "sumInsured": "3000",
            "premium": "844.002",
            "gender": "1"
        },
        {
            "id": "175",
            "age": "17",
            "sumInsured": "2500",
            "premium": "703.335",
            "gender": "1"
        },
        {
            "id": "174",
            "age": "17",
            "sumInsured": "2000",
            "premium": "562.668",
            "gender": "1"
        },
        {
            "id": "173",
            "age": "17",
            "sumInsured": "1500",
            "premium": "422.001",
            "gender": "1"
        },
        {
            "id": "172",
            "age": "17",
            "sumInsured": "1000",
            "premium": "281.334",
            "gender": "1"
        },
        {
            "id": "171",
            "age": "17",
            "sumInsured": "500",
            "premium": "140.667",
            "gender": "1"
        },
        {
            "id": "170",
            "age": "16",
            "sumInsured": "5000",
            "premium": "1331.35",
            "gender": "1"
        },
        {
            "id": "169",
            "age": "16",
            "sumInsured": "4500",
            "premium": "1198.22",
            "gender": "1"
        },
        {
            "id": "168",
            "age": "16",
            "sumInsured": "4000",
            "premium": "1065.08",
            "gender": "1"
        },
        {
            "id": "167",
            "age": "16",
            "sumInsured": "3500",
            "premium": "931.947",
            "gender": "1"
        },
        {
            "id": "166",
            "age": "16",
            "sumInsured": "3000",
            "premium": "798.811",
            "gender": "1"
        },
        {
            "id": "165",
            "age": "16",
            "sumInsured": "2500",
            "premium": "665.676",
            "gender": "1"
        },
        {
            "id": "164",
            "age": "16",
            "sumInsured": "2000",
            "premium": "532.541",
            "gender": "1"
        },
        {
            "id": "163",
            "age": "16",
            "sumInsured": "1500",
            "premium": "399.406",
            "gender": "1"
        },
        {
            "id": "162",
            "age": "16",
            "sumInsured": "1000",
            "premium": "266.27",
            "gender": "1"
        },
        {
            "id": "161",
            "age": "16",
            "sumInsured": "500",
            "premium": "133.135",
            "gender": "1"
        },
        {
            "id": "160",
            "age": "15",
            "sumInsured": "5000",
            "premium": "1379.94",
            "gender": "1"
        },
        {
            "id": "159",
            "age": "15",
            "sumInsured": "4500",
            "premium": "1241.94",
            "gender": "1"
        },
        {
            "id": "158",
            "age": "15",
            "sumInsured": "4000",
            "premium": "1103.95",
            "gender": "1"
        },
        {
            "id": "157",
            "age": "15",
            "sumInsured": "3500",
            "premium": "965.957",
            "gender": "1"
        },
        {
            "id": "156",
            "age": "15",
            "sumInsured": "3000",
            "premium": "827.963",
            "gender": "1"
        },
        {
            "id": "155",
            "age": "15",
            "sumInsured": "2500",
            "premium": "689.969",
            "gender": "1"
        },
        {
            "id": "154",
            "age": "15",
            "sumInsured": "2000",
            "premium": "551.975",
            "gender": "1"
        },
        {
            "id": "153",
            "age": "15",
            "sumInsured": "1500",
            "premium": "413.981",
            "gender": "1"
        },
        {
            "id": "152",
            "age": "15",
            "sumInsured": "1000",
            "premium": "275.988",
            "gender": "1"
        },
        {
            "id": "151",
            "age": "15",
            "sumInsured": "500",
            "premium": "137.994",
            "gender": "1"
        },
        {
            "id": "150",
            "age": "14",
            "sumInsured": "5000",
            "premium": "1332.71",
            "gender": "1"
        },
        {
            "id": "149",
            "age": "14",
            "sumInsured": "4500",
            "premium": "1199.44",
            "gender": "1"
        },
        {
            "id": "148",
            "age": "14",
            "sumInsured": "4000",
            "premium": "1066.17",
            "gender": "1"
        },
        {
            "id": "147",
            "age": "14",
            "sumInsured": "3500",
            "premium": "932.898",
            "gender": "1"
        },
        {
            "id": "146",
            "age": "14",
            "sumInsured": "3000",
            "premium": "799.627",
            "gender": "1"
        },
        {
            "id": "145",
            "age": "14",
            "sumInsured": "2500",
            "premium": "666.356",
            "gender": "1"
        },
        {
            "id": "144",
            "age": "14",
            "sumInsured": "2000",
            "premium": "533.085",
            "gender": "1"
        },
        {
            "id": "143",
            "age": "14",
            "sumInsured": "1500",
            "premium": "399.813",
            "gender": "1"
        },
        {
            "id": "142",
            "age": "14",
            "sumInsured": "1000",
            "premium": "266.542",
            "gender": "1"
        },
        {
            "id": "141",
            "age": "14",
            "sumInsured": "500",
            "premium": "133.271",
            "gender": "1"
        },
        {
            "id": "140",
            "age": "13",
            "sumInsured": "5000",
            "premium": "1286.09",
            "gender": "1"
        },
        {
            "id": "139",
            "age": "13",
            "sumInsured": "4500",
            "premium": "1157.48",
            "gender": "1"
        },
        {
            "id": "138",
            "age": "13",
            "sumInsured": "4000",
            "premium": "1028.87",
            "gender": "1"
        },
        {
            "id": "137",
            "age": "13",
            "sumInsured": "3500",
            "premium": "900.261",
            "gender": "1"
        },
        {
            "id": "136",
            "age": "13",
            "sumInsured": "3000",
            "premium": "771.652",
            "gender": "1"
        },
        {
            "id": "135",
            "age": "13",
            "sumInsured": "2500",
            "premium": "643.043",
            "gender": "1"
        },
        {
            "id": "134",
            "age": "13",
            "sumInsured": "2000",
            "premium": "514.435",
            "gender": "1"
        },
        {
            "id": "133",
            "age": "13",
            "sumInsured": "1500",
            "premium": "385.826",
            "gender": "1"
        },
        {
            "id": "132",
            "age": "13",
            "sumInsured": "1000",
            "premium": "257.217",
            "gender": "1"
        },
        {
            "id": "131",
            "age": "13",
            "sumInsured": "500",
            "premium": "128.609",
            "gender": "1"
        },
        {
            "id": "130",
            "age": "12",
            "sumInsured": "5000",
            "premium": "1239.19",
            "gender": "1"
        },
        {
            "id": "129",
            "age": "12",
            "sumInsured": "4500",
            "premium": "1115.27",
            "gender": "1"
        },
        {
            "id": "128",
            "age": "12",
            "sumInsured": "4000",
            "premium": "991.354",
            "gender": "1"
        },
        {
            "id": "127",
            "age": "12",
            "sumInsured": "3500",
            "premium": "867.435",
            "gender": "1"
        },
        {
            "id": "126",
            "age": "12",
            "sumInsured": "3000",
            "premium": "743.516",
            "gender": "1"
        },
        {
            "id": "125",
            "age": "12",
            "sumInsured": "2500",
            "premium": "619.597",
            "gender": "1"
        },
        {
            "id": "124",
            "age": "12",
            "sumInsured": "2000",
            "premium": "495.677",
            "gender": "1"
        },
        {
            "id": "123",
            "age": "12",
            "sumInsured": "1500",
            "premium": "371.758",
            "gender": "1"
        },
        {
            "id": "122",
            "age": "12",
            "sumInsured": "1000",
            "premium": "247.839",
            "gender": "1"
        },
        {
            "id": "121",
            "age": "12",
            "sumInsured": "500",
            "premium": "123.919",
            "gender": "1"
        },
        {
            "id": "120",
            "age": "11",
            "sumInsured": "5000",
            "premium": "1192.92",
            "gender": "1"
        },
        {
            "id": "119",
            "age": "11",
            "sumInsured": "4500",
            "premium": "1073.63",
            "gender": "1"
        },
        {
            "id": "118",
            "age": "11",
            "sumInsured": "4000",
            "premium": "954.337",
            "gender": "1"
        },
        {
            "id": "117",
            "age": "11",
            "sumInsured": "3500",
            "premium": "835.045",
            "gender": "1"
        },
        {
            "id": "116",
            "age": "11",
            "sumInsured": "3000",
            "premium": "715.753",
            "gender": "1"
        },
        {
            "id": "115",
            "age": "11",
            "sumInsured": "2500",
            "premium": "596.461",
            "gender": "1"
        },
        {
            "id": "114",
            "age": "11",
            "sumInsured": "2000",
            "premium": "477.169",
            "gender": "1"
        },
        {
            "id": "113",
            "age": "11",
            "sumInsured": "1500",
            "premium": "357.877",
            "gender": "1"
        },
        {
            "id": "112",
            "age": "11",
            "sumInsured": "1000",
            "premium": "238.584",
            "gender": "1"
        },
        {
            "id": "111",
            "age": "11",
            "sumInsured": "500",
            "premium": "119.292",
            "gender": "1"
        },
        {
            "id": "110",
            "age": "10",
            "sumInsured": "5000",
            "premium": "968.567",
            "gender": "1"
        },
        {
            "id": "109",
            "age": "10",
            "sumInsured": "4500",
            "premium": "871.71",
            "gender": "1"
        },
        {
            "id": "108",
            "age": "10",
            "sumInsured": "4000",
            "premium": "774.853",
            "gender": "1"
        },
        {
            "id": "107",
            "age": "10",
            "sumInsured": "3500",
            "premium": "677.997",
            "gender": "1"
        },
        {
            "id": "106",
            "age": "10",
            "sumInsured": "3000",
            "premium": "581.14",
            "gender": "1"
        },
        {
            "id": "105",
            "age": "10",
            "sumInsured": "2500",
            "premium": "484.283",
            "gender": "1"
        },
        {
            "id": "104",
            "age": "10",
            "sumInsured": "2000",
            "premium": "387.427",
            "gender": "1"
        },
        {
            "id": "103",
            "age": "10",
            "sumInsured": "1500",
            "premium": "290.57",
            "gender": "1"
        },
        {
            "id": "102",
            "age": "10",
            "sumInsured": "1000",
            "premium": "193.713",
            "gender": "1"
        },
        {
            "id": "101",
            "age": "10",
            "sumInsured": "500",
            "premium": "96.8567",
            "gender": "1"
        },
        {
            "id": "100",
            "age": "9",
            "sumInsured": "5000",
            "premium": "1050.2",
            "gender": "1"
        },
        {
            "id": "99",
            "age": "9",
            "sumInsured": "4500",
            "premium": "945.178",
            "gender": "1"
        },
        {
            "id": "98",
            "age": "9",
            "sumInsured": "4000",
            "premium": "840.159",
            "gender": "1"
        },
        {
            "id": "97",
            "age": "9",
            "sumInsured": "3500",
            "premium": "735.139",
            "gender": "1"
        },
        {
            "id": "96",
            "age": "9",
            "sumInsured": "3000",
            "premium": "630.119",
            "gender": "1"
        },
        {
            "id": "95",
            "age": "9",
            "sumInsured": "2500",
            "premium": "525.099",
            "gender": "1"
        },
        {
            "id": "94",
            "age": "9",
            "sumInsured": "2000",
            "premium": "420.079",
            "gender": "1"
        },
        {
            "id": "93",
            "age": "9",
            "sumInsured": "1500",
            "premium": "315.059",
            "gender": "1"
        },
        {
            "id": "92",
            "age": "9",
            "sumInsured": "1000",
            "premium": "210.04",
            "gender": "1"
        },
        {
            "id": "91",
            "age": "9",
            "sumInsured": "500",
            "premium": "105.02",
            "gender": "1"
        },
        {
            "id": "90",
            "age": "8",
            "sumInsured": "5000",
            "premium": "1137.54",
            "gender": "1"
        },
        {
            "id": "89",
            "age": "8",
            "sumInsured": "4500",
            "premium": "1023.79",
            "gender": "1"
        },
        {
            "id": "88",
            "age": "8",
            "sumInsured": "4000",
            "premium": "910.033",
            "gender": "1"
        },
        {
            "id": "87",
            "age": "8",
            "sumInsured": "3500",
            "premium": "796.279",
            "gender": "1"
        },
        {
            "id": "86",
            "age": "8",
            "sumInsured": "3000",
            "premium": "682.524",
            "gender": "1"
        },
        {
            "id": "85",
            "age": "8",
            "sumInsured": "2500",
            "premium": "568.77",
            "gender": "1"
        },
        {
            "id": "84",
            "age": "8",
            "sumInsured": "2000",
            "premium": "455.016",
            "gender": "1"
        },
        {
            "id": "83",
            "age": "8",
            "sumInsured": "1500",
            "premium": "341.262",
            "gender": "1"
        },
        {
            "id": "82",
            "age": "8",
            "sumInsured": "1000",
            "premium": "227.508",
            "gender": "1"
        },
        {
            "id": "81",
            "age": "8",
            "sumInsured": "500",
            "premium": "113.754",
            "gender": "1"
        },
        {
            "id": "80",
            "age": "7",
            "sumInsured": "5000",
            "premium": "1590.44",
            "gender": "1"
        },
        {
            "id": "79",
            "age": "7",
            "sumInsured": "4500",
            "premium": "1431.4",
            "gender": "1"
        },
        {
            "id": "78",
            "age": "7",
            "sumInsured": "4000",
            "premium": "1272.35",
            "gender": "1"
        },
        {
            "id": "77",
            "age": "7",
            "sumInsured": "3500",
            "premium": "1113.31",
            "gender": "1"
        },
        {
            "id": "76",
            "age": "7",
            "sumInsured": "3000",
            "premium": "954.264",
            "gender": "1"
        },
        {
            "id": "75",
            "age": "7",
            "sumInsured": "2500",
            "premium": "795.22",
            "gender": "1"
        },
        {
            "id": "74",
            "age": "7",
            "sumInsured": "2000",
            "premium": "636.176",
            "gender": "1"
        },
        {
            "id": "73",
            "age": "7",
            "sumInsured": "1500",
            "premium": "477.132",
            "gender": "1"
        },
        {
            "id": "72",
            "age": "7",
            "sumInsured": "1000",
            "premium": "318.088",
            "gender": "1"
        },
        {
            "id": "71",
            "age": "7",
            "sumInsured": "500",
            "premium": "159.044",
            "gender": "1"
        },
        {
            "id": "70",
            "age": "6",
            "sumInsured": "5000",
            "premium": "2130.87",
            "gender": "1"
        },
        {
            "id": "69",
            "age": "6",
            "sumInsured": "4500",
            "premium": "1917.78",
            "gender": "1"
        },
        {
            "id": "68",
            "age": "6",
            "sumInsured": "4000",
            "premium": "1704.7",
            "gender": "1"
        },
        {
            "id": "67",
            "age": "6",
            "sumInsured": "3500",
            "premium": "1491.61",
            "gender": "1"
        },
        {
            "id": "66",
            "age": "6",
            "sumInsured": "3000",
            "premium": "1278.52",
            "gender": "1"
        },
        {
            "id": "65",
            "age": "6",
            "sumInsured": "2500",
            "premium": "1065.44",
            "gender": "1"
        },
        {
            "id": "64",
            "age": "6",
            "sumInsured": "2000",
            "premium": "852.348",
            "gender": "1"
        },
        {
            "id": "63",
            "age": "6",
            "sumInsured": "1500",
            "premium": "639.261",
            "gender": "1"
        },
        {
            "id": "62",
            "age": "6",
            "sumInsured": "1000",
            "premium": "426.174",
            "gender": "1"
        },
        {
            "id": "61",
            "age": "6",
            "sumInsured": "500",
            "premium": "213.087",
            "gender": "1"
        },
        {
            "id": "60",
            "age": "5",
            "sumInsured": "5000",
            "premium": "2912.83",
            "gender": "1"
        },
        {
            "id": "59",
            "age": "5",
            "sumInsured": "4500",
            "premium": "2621.55",
            "gender": "1"
        },
        {
            "id": "58",
            "age": "5",
            "sumInsured": "4000",
            "premium": "2330.27",
            "gender": "1"
        },
        {
            "id": "57",
            "age": "5",
            "sumInsured": "3500",
            "premium": "2038.98",
            "gender": "1"
        },
        {
            "id": "56",
            "age": "5",
            "sumInsured": "3000",
            "premium": "1747.7",
            "gender": "1"
        },
        {
            "id": "55",
            "age": "5",
            "sumInsured": "2500",
            "premium": "1456.42",
            "gender": "1"
        },
        {
            "id": "54",
            "age": "5",
            "sumInsured": "2000",
            "premium": "1165.13",
            "gender": "1"
        },
        {
            "id": "53",
            "age": "5",
            "sumInsured": "1500",
            "premium": "873.85",
            "gender": "1"
        },
        {
            "id": "52",
            "age": "5",
            "sumInsured": "1000",
            "premium": "582.567",
            "gender": "1"
        },
        {
            "id": "51",
            "age": "5",
            "sumInsured": "500",
            "premium": "291.283",
            "gender": "1"
        },
        {
            "id": "50",
            "age": "4",
            "sumInsured": "5000",
            "premium": "3574.05",
            "gender": "1"
        },
        {
            "id": "49",
            "age": "4",
            "sumInsured": "4500",
            "premium": "3216.65",
            "gender": "1"
        },
        {
            "id": "48",
            "age": "4",
            "sumInsured": "4000",
            "premium": "2859.24",
            "gender": "1"
        },
        {
            "id": "47",
            "age": "4",
            "sumInsured": "3500",
            "premium": "2501.84",
            "gender": "1"
        },
        {
            "id": "46",
            "age": "4",
            "sumInsured": "3000",
            "premium": "2144.43",
            "gender": "1"
        },
        {
            "id": "45",
            "age": "4",
            "sumInsured": "2500",
            "premium": "1787.03",
            "gender": "1"
        },
        {
            "id": "44",
            "age": "4",
            "sumInsured": "2000",
            "premium": "1429.62",
            "gender": "1"
        },
        {
            "id": "43",
            "age": "4",
            "sumInsured": "1500",
            "premium": "1072.22",
            "gender": "1"
        },
        {
            "id": "42",
            "age": "4",
            "sumInsured": "1000",
            "premium": "714.81",
            "gender": "1"
        },
        {
            "id": "41",
            "age": "4",
            "sumInsured": "500",
            "premium": "357.405",
            "gender": "1"
        },
        {
            "id": "40",
            "age": "3",
            "sumInsured": "5000",
            "premium": "4315.52",
            "gender": "1"
        },
        {
            "id": "39",
            "age": "3",
            "sumInsured": "4500",
            "premium": "3883.97",
            "gender": "1"
        },
        {
            "id": "38",
            "age": "3",
            "sumInsured": "4000",
            "premium": "3452.42",
            "gender": "1"
        },
        {
            "id": "37",
            "age": "3",
            "sumInsured": "3500",
            "premium": "3020.86",
            "gender": "1"
        },
        {
            "id": "36",
            "age": "3",
            "sumInsured": "3000",
            "premium": "2589.31",
            "gender": "1"
        },
        {
            "id": "35",
            "age": "3",
            "sumInsured": "2500",
            "premium": "2157.76",
            "gender": "1"
        },
        {
            "id": "34",
            "age": "3",
            "sumInsured": "2000",
            "premium": "1726.21",
            "gender": "1"
        },
        {
            "id": "33",
            "age": "3",
            "sumInsured": "1500",
            "premium": "1294.66",
            "gender": "1"
        },
        {
            "id": "32",
            "age": "3",
            "sumInsured": "1000",
            "premium": "863.104",
            "gender": "1"
        },
        {
            "id": "31",
            "age": "3",
            "sumInsured": "500",
            "premium": "431.552",
            "gender": "1"
        },
        {
            "id": "30",
            "age": "2",
            "sumInsured": "5000",
            "premium": "4623.41",
            "gender": "1"
        },
        {
            "id": "29",
            "age": "2",
            "sumInsured": "4500",
            "premium": "4161.07",
            "gender": "1"
        },
        {
            "id": "28",
            "age": "2",
            "sumInsured": "4000",
            "premium": "3698.73",
            "gender": "1"
        },
        {
            "id": "27",
            "age": "2",
            "sumInsured": "3500",
            "premium": "3236.39",
            "gender": "1"
        },
        {
            "id": "26",
            "age": "2",
            "sumInsured": "3000",
            "premium": "2774.04",
            "gender": "1"
        },
        {
            "id": "25",
            "age": "2",
            "sumInsured": "2500",
            "premium": "2311.7",
            "gender": "1"
        },
        {
            "id": "24",
            "age": "2",
            "sumInsured": "2000",
            "premium": "1849.36",
            "gender": "1"
        },
        {
            "id": "23",
            "age": "2",
            "sumInsured": "1500",
            "premium": "1387.02",
            "gender": "1"
        },
        {
            "id": "22",
            "age": "2",
            "sumInsured": "1000",
            "premium": "924.682",
            "gender": "1"
        },
        {
            "id": "21",
            "age": "2",
            "sumInsured": "500",
            "premium": "462.341",
            "gender": "1"
        },
        {
            "id": "20",
            "age": "1",
            "sumInsured": "5000",
            "premium": "4953.26",
            "gender": "1"
        },
        {
            "id": "19",
            "age": "1",
            "sumInsured": "4500",
            "premium": "4457.93",
            "gender": "1"
        },
        {
            "id": "18",
            "age": "1",
            "sumInsured": "4000",
            "premium": "3962.61",
            "gender": "1"
        },
        {
            "id": "17",
            "age": "1",
            "sumInsured": "3500",
            "premium": "3467.28",
            "gender": "1"
        },
        {
            "id": "16",
            "age": "1",
            "sumInsured": "3000",
            "premium": "2971.96",
            "gender": "1"
        },
        {
            "id": "15",
            "age": "1",
            "sumInsured": "2500",
            "premium": "2476.63",
            "gender": "1"
        },
        {
            "id": "14",
            "age": "1",
            "sumInsured": "2000",
            "premium": "1981.3",
            "gender": "1"
        },
        {
            "id": "13",
            "age": "1",
            "sumInsured": "1500",
            "premium": "1485.98",
            "gender": "1"
        },
        {
            "id": "12",
            "age": "1",
            "sumInsured": "1000",
            "premium": "990.652",
            "gender": "1"
        },
        {
            "id": "11",
            "age": "1",
            "sumInsured": "500",
            "premium": "495.326",
            "gender": "1"
        },
        {
            "id": "10",
            "age": "0",
            "sumInsured": "5000",
            "premium": "5306.65",
            "gender": "1"
        },
        {
            "id": "9",
            "age": "0",
            "sumInsured": "4500",
            "premium": "4775.98",
            "gender": "1"
        },
        {
            "id": "8",
            "age": "0",
            "sumInsured": "4000",
            "premium": "4245.32",
            "gender": "1"
        },
        {
            "id": "7",
            "age": "0",
            "sumInsured": "3500",
            "premium": "3714.65",
            "gender": "1"
        },
        {
            "id": "6",
            "age": "0",
            "sumInsured": "3000",
            "premium": "3183.99",
            "gender": "1"
        },
        {
            "id": "5",
            "age": "0",
            "sumInsured": "2500",
            "premium": "2653.32",
            "gender": "1"
        },
        {
            "id": "4",
            "age": "0",
            "sumInsured": "2000",
            "premium": "2122.66",
            "gender": "1"
        },
        {
            "id": "3",
            "age": "0",
            "sumInsured": "1500",
            "premium": "1591.99",
            "gender": "1"
        },
        {
            "id": "2",
            "age": "0",
            "sumInsured": "1000",
            "premium": "1061.33",
            "gender": "1"
        },
        {
            "id": "1",
            "age": "0",
            "sumInsured": "500",
            "premium": "530.665",
            "gender": "1"
        }
    ]

}