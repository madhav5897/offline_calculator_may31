
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveoneService {

    AnnualScreening:any= [
        {
          "ID": 2,
          "MINAGE": 46,
          "MAXAGE": 150,
          "PREMIUM": 451
        },
        {
          "ID": 1,
          "MINAGE": 0,
          "MAXAGE": 45,
          "PREMIUM": 225
        }
      ]

  CODI_roomtype_rate_master:any= [
    {
      "ID": "3",
      "ROOMTYPE": "Actuals up to Base Sum Insured",
      "DISCOUNTPERCENTAGE": "0.00000"
    },
    {
      "ID": "2",
      "ROOMTYPE": "Single Private Room",
      "DISCOUNTPERCENTAGE": "7.50000"
    },
    {
      "ID": "1",
      "ROOMTYPE": "Shared Room",
      "DISCOUNTPERCENTAGE": "15.00000"
    }
  ]

  CODI_perclaimdeductible_rate_master:any= [
    {
      "ID": "12",
      "MINAGE": "51",
      "MAXAGE": "150",
      "DEDUCTBLE": "25000",
      "MINSI": "2500000",
      "MAXSI": "20000000",
      "DISCOUNTPERCENTAGE": "4.5"
    },
    {
      "ID": "11",
      "MINAGE": "51",
      "MAXAGE": "150",
      "DEDUCTBLE": "25000",
      "MINSI": "1500000",
      "MAXSI": "2000000",
      "DISCOUNTPERCENTAGE": "6"
    },
    {
      "ID": "10",
      "MINAGE": "51",
      "MAXAGE": "150",
      "DEDUCTBLE": "25000",
      "MINSI": "0",
      "MAXSI": "1000000",
      "DISCOUNTPERCENTAGE": "13.5"
    },
    {
      "ID": "9",
      "MINAGE": "0",
      "MAXAGE": "50",
      "DEDUCTBLE": "25000",
      "MINSI": "2500000",
      "MAXSI": "20000000",
      "DISCOUNTPERCENTAGE": "6.8"
    },
    {
      "ID": "8",
      "MINAGE": "0",
      "MAXAGE": "50",
      "DEDUCTBLE": "25000",
      "MINSI": "1500000",
      "MAXSI": "2000000",
      "DISCOUNTPERCENTAGE": "9"
    },
    {
      "ID": "7",
      "MINAGE": "0",
      "MAXAGE": "50",
      "DEDUCTBLE": "25000",
      "MINSI": "0",
      "MAXSI": "1000000",
      "DISCOUNTPERCENTAGE": "18"
    },
    {
      "ID": "6",
      "MINAGE": "51",
      "MAXAGE": "150",
      "DEDUCTBLE": "15000",
      "MINSI": "2500000",
      "MAXSI": "20000000",
      "DISCOUNTPERCENTAGE": "2.5"
    },
    {
      "ID": "5",
      "MINAGE": "51",
      "MAXAGE": "150",
      "DEDUCTBLE": "15000",
      "MINSI": "1500000",
      "MAXSI": "2000000",
      "DISCOUNTPERCENTAGE": "3.5"
    },
    {
      "ID": "4",
      "MINAGE": "51",
      "MAXAGE": "150",
      "DEDUCTBLE": "15000",
      "MINSI": "0",
      "MAXSI": "1000000",
      "DISCOUNTPERCENTAGE": "6.5"
    },
    {
      "ID": "3",
      "MINAGE": "0",
      "MAXAGE": "50",
      "DEDUCTBLE": "15000",
      "MINSI": "2500000",
      "MAXSI": "20000000",
      "DISCOUNTPERCENTAGE": "3.5"
    },
    {
      "ID": "2",
      "MINAGE": "0",
      "MAXAGE": "50",
      "DEDUCTBLE": "15000",
      "MINSI": "1500000",
      "MAXSI": "2000000",
      "DISCOUNTPERCENTAGE": "5"
    },
    {
      "ID": "1",
      "MINAGE": "0",
      "MAXAGE": "50",
      "DEDUCTBLE": "15000",
      "MINSI": "0",
      "MAXSI": "1000000",
      "DISCOUNTPERCENTAGE": "9"
    }
  ]

  CODI_PA_rate_master:any= [
    {
      "ID": "3",
      "RISK_CLASS": "Risk class 3",
      "GROSSRATEPERMILE": "0.89"
    },
    {
      "ID": "2",
      "RISK_CLASS": "Risk class 2",
      "GROSSRATEPERMILE": "0.75"
    },
    {
      "ID": "1",
      "RISK_CLASS": "Risk class 1",
      "GROSSRATEPERMILE": "0.47"
    }
  ]

  CODI_CHB_rate_master:any= [
    {
      "ID": "8",
      "MINAGE": "46",
      "MAXAGE": "150",
      "MINSI": "7500000",
      "MAXSI": "20000000",
      "LOADINGPERCENTAGE": "3.00"
    },
    {
      "ID": "7",
      "MINAGE": "46",
      "MAXAGE": "150",
      "MINSI": "1500000",
      "MAXSI": "5000000",
      "LOADINGPERCENTAGE": "4.50"
    },
    {
      "ID": "6",
      "MINAGE": "46",
      "MAXAGE": "150",
      "MINSI": "500000",
      "MAXSI": "1000000",
      "LOADINGPERCENTAGE": "5.50"
    },
    {
      "ID": "5",
      "MINAGE": "46",
      "MAXAGE": "150",
      "MINSI": "200000",
      "MAXSI": "400000",
      "LOADINGPERCENTAGE": "6.50"
    },
    {
      "ID": "4",
      "MINAGE": "0",
      "MAXAGE": "45",
      "MINSI": "7500000",
      "MAXSI": "20000000",
      "LOADINGPERCENTAGE": "1.50"
    },
    {
      "ID": "3",
      "MINAGE": "0",
      "MAXAGE": "45",
      "MINSI": "1500000",
      "MAXSI": "5000000",
      "LOADINGPERCENTAGE": "2.00"
    },
    {
      "ID": "2",
      "MINAGE": "0",
      "MAXAGE": "45",
      "MINSI": "500000",
      "MAXSI": "1000000",
      "LOADINGPERCENTAGE": "3.00"
    },
    {
      "ID": "1",
      "MINAGE": "0",
      "MAXAGE": "45",
      "MINSI": "200000",
      "MAXSI": "400000",
      "LOADINGPERCENTAGE": "3.50"
    }
  ]

  CODI_supercredit_rate_master:any= [
    {
      "ID": "2",
      "MINAGE": "46",
      "MAXAGE": "150",
      "PREMIUMPERCENTAGE": "15.00"
    },
    {
      "ID": "1",
      "MINAGE": "0",
      "MAXAGE": "45",
      "PREMIUMPERCENTAGE": "10.00"
    }
  ]

  CODI_chroniccare_rate_master:any= [
    {
      "ID": "3",
      "WP_REDUCTION": "4 years to nil",
      "CONDITION": "3",
      "PREMIUMPERCENTAGE": "35.00"
    },
    {
      "ID": "2",
      "WP_REDUCTION": "4 years to nil",
      "CONDITION": "2",
      "PREMIUMPERCENTAGE": "30.00"
    },
    {
      "ID": "1",
      "WP_REDUCTION": "4 years to nil",
      "CONDITION": "1",
      "PREMIUMPERCENTAGE": "25.00"
    }
  ]

  CODI_chronicManagement_rate_master:any= [
    {
      "ID": "3",
      "CONDITION": "3",
      "PREMIUM": "5050"
    },
    {
      "ID": "2",
      "CONDITION": "2",
      "PREMIUM": "4650"
    },
    {
      "ID": "1",
      "CONDITION": "1",
      "PREMIUM": "3650"
    }
  ]

  CODI_ReductioninPEDWP_rate_master:any= [
    {
      "ID": "6",
      "WP_Reduction": "4years to 1years",
      "MINAGE": "61",
      "MAXAGE": "150",
      "PREMIUMPERCENTAGE": "31"
    },
    {
      "ID": "5",
      "WP_Reduction": "4years to 2years",
      "MINAGE": "61",
      "MAXAGE": "150",
      "PREMIUMPERCENTAGE": "21"
    },
    {
      "ID": "4",
      "WP_Reduction": "4years to 3years",
      "MINAGE": "61",
      "MAXAGE": "150",
      "PREMIUMPERCENTAGE": "16"
    },
    {
      "ID": "3",
      "WP_Reduction": "4years to 1years",
      "MINAGE": "0",
      "MAXAGE": "60",
      "PREMIUMPERCENTAGE": "16"
    },
    {
      "ID": "2",
      "WP_Reduction": "4years to 2years",
      "MINAGE": "0",
      "MAXAGE": "60",
      "PREMIUMPERCENTAGE": "11"
    },
    {
      "ID": "1",
      "WP_Reduction": "4years to 3years",
      "MINAGE": "0",
      "MAXAGE": "60",
      "PREMIUMPERCENTAGE": "8"
    }
  ]

  CODI_AnnualHelathcheckup_rate_master:any= [
    {
      "ID": "12",
      "MINAGE": "56",
      "MAXAGE": "150",
      "MINSI": "5000000",
      "MAXSI": "60000000",
      "PREMIUM": "1700"
    },
    {
      "ID": "11",
      "MINAGE": "46",
      "MAXAGE": "55",
      "MINSI": "5000000",
      "MAXSI": "60000000",
      "PREMIUM": "1275"
    },
    {
      "ID": "10",
      "MINAGE": "36",
      "MAXAGE": "45",
      "MINSI": "5000000",
      "MAXSI": "60000000",
      "PREMIUM": "1020"
    },
    {
      "ID": "9",
      "MINAGE": "18",
      "MAXAGE": "35",
      "MINSI": "5000000",
      "MAXSI": "60000000",
      "PREMIUM": "1020"
    },
    {
      "ID": "8",
      "MINAGE": "56",
      "MAXAGE": "150",
      "MINSI": "1500000",
      "MAXSI": "2500000",
      "PREMIUM": "1020"
    },
    {
      "ID": "7",
      "MINAGE": "46",
      "MAXAGE": "55",
      "MINSI": "1500000",
      "MAXSI": "2500000",
      "PREMIUM": "765"
    },
    {
      "ID": "6",
      "MINAGE": "36",
      "MAXAGE": "45",
      "MINSI": "1500000",
      "MAXSI": "2500000",
      "PREMIUM": "612"
    },
    {
      "ID": "5",
      "MINAGE": "18",
      "MAXAGE": "35",
      "MINSI": "1500000",
      "MAXSI": "2500000",
      "PREMIUM": "612"
    },
    {
      "ID": "4",
      "MINAGE": "56",
      "MAXAGE": "150",
      "MINSI": "200000",
      "MAXSI": "1000000",
      "PREMIUM": "720"
    },
    {
      "ID": "3",
      "MINAGE": "46",
      "MAXAGE": "55",
      "MINSI": "200000",
      "MAXSI": "1000000",
      "PREMIUM": "576"
    },
    {
      "ID": "2",
      "MINAGE": "36",
      "MAXAGE": "45",
      "MINSI": "200000",
      "MAXSI": "1000000",
      "PREMIUM": "432"
    },
    {
      "ID": "1",
      "MINAGE": "18",
      "MAXAGE": "35",
      "MINSI": "200000",
      "MAXSI": "1000000",
      "PREMIUM": "432"
    }
  ]

  CODI_Durableequipment_rate_master:any= [
    {
      "ID": "6",
      "MINAGE": "46",
      "MAXAGE": "150",
      "MINSI": "7500000",
      "MAXSI": "60000000",
      "PREMIUMPERCENTAGE": "5.50"
    },
    {
      "ID": "5",
      "MINAGE": "46",
      "MAXAGE": "150",
      "MINSI": "1500000",
      "MAXSI": "5000000",
      "PREMIUMPERCENTAGE": "11.00"
    },
    {
      "ID": "4",
      "MINAGE": "46",
      "MAXAGE": "150",
      "MINSI": "200000",
      "MAXSI": "1000000",
      "PREMIUMPERCENTAGE": "15.00"
    },
    {
      "ID": "3",
      "MINAGE": "0",
      "MAXAGE": "45",
      "MINSI": "7500000",
      "MAXSI": "60000000",
      "PREMIUMPERCENTAGE": "3.50"
    },
    {
      "ID": "2",
      "MINAGE": "0",
      "MAXAGE": "45",
      "MINSI": "1500000",
      "MAXSI": "5000000",
      "PREMIUMPERCENTAGE": "7.50"
    },
    {
      "ID": "1",
      "MINAGE": "0",
      "MAXAGE": "45",
      "MINSI": "200000",
      "MAXSI": "1000000",
      "PREMIUMPERCENTAGE": "10.00"
    }
  ]










  



}





