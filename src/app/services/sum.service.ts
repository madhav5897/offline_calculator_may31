import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SumService {

    constructor() {
    }

    set(sum: any) {
        let sumInsured: any;

        switch (sum) {

            case 'sI_50000':
                sumInsured = '0.5 Lakh';
                return sumInsured;

            case 'sI_75000':
                sumInsured = '0.75 Lakh';
                return sumInsured;

            case 'sI_100000':
                sumInsured = '1 Lakh';
                return sumInsured;



            case 'sI_200000':
                sumInsured = '2 Lakh';
                return sumInsured;

            case 'sI_300000':
                sumInsured = '3 Lakh';
                return sumInsured;

            case 'sI_400000':
                sumInsured = '4 Lakh';
                return sumInsured;

            case 'sI_500000':
                sumInsured = '5 Lakh';
                return sumInsured;

            case 'sI_600000':
                sumInsured = '6 Lakh';
                return sumInsured;

            case 'sI_700000':
                sumInsured = '7 Lakh';
                return sumInsured;

            case 'sI_800000':
                sumInsured = '8 Lakh';
                return sumInsured;

            case 'sI_900000':
                sumInsured = '9 Lakh';
                return sumInsured;

            case 'sI_1000000':
                sumInsured = '10 Lakh';
                return sumInsured;

            case 'sI_1500000':
                sumInsured = '15 Lakh';
                return sumInsured;

            case 'sI_2000000':
                sumInsured = '20 Lakh';
                return sumInsured;

            case 'sI_2500000':
                sumInsured = '25 Lakh';
                return sumInsured;

            case 'sI_3000000':
                sumInsured = '30 Lakh';
                return sumInsured;

            case 'sI_4000000':
                sumInsured = '40 Lakh';
                return sumInsured;

            case 'sI_5000000':
                sumInsured = '50 Lakh';
                return sumInsured;

            case 'sI_7500000':
                sumInsured = '75 Lakh';
                return sumInsured;

            case 'sI_10000000':
                sumInsured = '1 Cr';
                return sumInsured;

            case 'sI_20000000':
                sumInsured = '2 Cr';
                return sumInsured;



        }


        return sumInsured;
    }

    set2(sum: any) {
        let sumInsured: any;

        switch (sum) {

            case 'sI_50000':
                sumInsured = '50000';
                return sumInsured;

            case 'sI_75000':
                sumInsured = '75000';
                return sumInsured;

            case 'sI_100000':
                sumInsured = '100000';
                return sumInsured;



            case 'sI_200000':
                sumInsured = '200000';
                return sumInsured;

            case 'sI_300000':
                sumInsured = '300000';
                return sumInsured;

            case 'sI_400000':
                sumInsured = '400000';
                return sumInsured;

            case 'sI_500000':
                sumInsured = '500000';
                return sumInsured;

            case 'sI_600000':
                sumInsured = '600000';
                return sumInsured;

            case 'sI_700000':
                sumInsured = '700000';
                return sumInsured;

            case 'sI_800000':
                sumInsured = '800000';
                return sumInsured;

            case 'sI_900000':
                sumInsured = '900000';
                return sumInsured;

            case 'sI_1000000':
                sumInsured = '1000000';
                return sumInsured;

            case 'sI_1500000':
                sumInsured = '1500000';
                return sumInsured;

            case 'sI_2000000':
                sumInsured = '2000000';
                return sumInsured;

            case 'sI_2500000':
                sumInsured = '2500000';
                return sumInsured;

            case 'sI_3000000':
                sumInsured = '3000000';
                return sumInsured;

            case 'sI_4000000':
                sumInsured = '4000000';
                return sumInsured;

            case 'sI_5000000':
                sumInsured = '5000000';
                return sumInsured;

            case 'sI_7500000':
                sumInsured = '7500000';
                return sumInsured;

            case 'sI_10000000':
                sumInsured = '10000000';
                return sumInsured;

            case 'sI_20000000':
                sumInsured = '20000000';
                return sumInsured;

        }


        return sumInsured;

    }

}