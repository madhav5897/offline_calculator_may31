import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AbhiService {
    abhimaster:any= [
        {
            "id": "120",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1365",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "119",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1421",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "118",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1542",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "117",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "875",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "116",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "922",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "115",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1017",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "114",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "585",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "113",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "618",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "112",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "699",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "111",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "377",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "110",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "389",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "109",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "459",
            "adultCount": "1",
            "childCount": "4"
        },
        {
            "id": "108",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1341",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "107",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1398",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "106",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1507",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "105",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "845",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "104",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "892",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "103",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "973",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "102",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "554",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "101",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "588",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "100",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "658",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "99",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "346",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "98",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "362",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "97",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "420",
            "adultCount": "1",
            "childCount": "3"
        },
        {
            "id": "96",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1317",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "95",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1373",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "94",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1474",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "93",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "810",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "92",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "855",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "91",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "925",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "90",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "518",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "89",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "550",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "88",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "610",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "87",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "308",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "86",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "323",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "85",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "369",
            "adultCount": "1",
            "childCount": "2"
        },
        {
            "id": "84",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1300",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "83",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1352",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "82",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1446",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "81",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "782",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "80",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "821",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "79",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "881",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "78",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "482",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "77",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "508",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "76",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "557",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "75",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "275",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "74",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "285",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "73",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "320",
            "adultCount": "1",
            "childCount": "1"
        },
        {
            "id": "72",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1631",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "71",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1742",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "70",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1922",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "69",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1049",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "68",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1122",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "67",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1267",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "66",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "707",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "65",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "759",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "64",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "881",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "63",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "450",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "62",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "471",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "61",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "562",
            "adultCount": "2",
            "childCount": "4"
        },
        {
            "id": "60",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1611",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "59",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1709",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "58",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1887",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "57",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1019",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "56",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1090",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "55",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1225",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "54",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "671",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "53",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "718",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "52",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "827",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "51",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "413",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "50",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "430",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "49",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "508",
            "adultCount": "2",
            "childCount": "3"
        },
        {
            "id": "48",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1585",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "47",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1677",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "46",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1847",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "45",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "986",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "44",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1042",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "43",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1172",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "42",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "635",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "41",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "662",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "40",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "774",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "39",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "382",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "38",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "400",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "37",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "462",
            "adultCount": "2",
            "childCount": "2"
        },
        {
            "id": "36",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1565",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "35",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1653",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "34",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1814",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "33",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "956",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "32",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1009",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "31",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1121",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "30",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "600",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "29",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "626",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "28",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "719",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "27",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "355",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "26",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "368",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "25",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "421",
            "adultCount": "2",
            "childCount": "1"
        },
        {
            "id": "24",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1533",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "23",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1622",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "22",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1773",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "21",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "920",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "20",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "981",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "19",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1072",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "18",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "562",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "17",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "597",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "16",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "671",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "15",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "315",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "14",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "328",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "13",
            "minAge": "18",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "369",
            "adultCount": "2",
            "childCount": "0"
        },
        {
            "id": "12",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "1280",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "11",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "1333",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "10",
            "minAge": "66",
            "maxAge": "100",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "1422",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "9",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "760",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "8",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "799",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "7",
            "minAge": "56",
            "maxAge": "65",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "857",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "6",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "456",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "5",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "482",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "4",
            "minAge": "46",
            "maxAge": "55",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "525",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "3",
            "minAge": "0",
            "maxAge": "45",
            "minSI": "1100000",
            "maxSI": "20000000",
            "premium": "247",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "2",
            "minAge": "0",
            "maxAge": "45",
            "minSI": "500000",
            "maxSI": "1000000",
            "premium": "261",
            "adultCount": "1",
            "childCount": "0"
        },
        {
            "id": "1",
            "minAge": "0",
            "maxAge": "45",
            "minSI": "0",
            "maxSI": "400000",
            "premium": "289",
            "adultCount": "1",
            "childCount": "0"
        }
    ]
}
