import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
platinumPlan:any='platinumEnhanced';

  info:any={
    'policyType':'multiIndividual',

    'self': { 
      'selected':false,
       'age':'',
       'gender':'Male',
       'premium':'',       //   this base premium is for self before diesease 
       'premium2':'',
       'sum':''
  },
  'spouse': { 
    'selected':false,
     'age':'',
     'gender':'Female',
     'premium':'',
     'premium2':'',

     'sum':''

},
'father': { 
  'selected':false,
   'age':'',
   'gender':'Male',
   'premium':'',
   'premium2':'',

   'sum':''

},
'mother': { 
  'selected':false,
   'age':'',
   'gender':'Female',
   'premium':'',
   'premium2':'',

   'sum':''

},
'fatherinlaw': { 
  'selected':false,
   'age':'',
   'gender':'Male',
   'premium':'',
   'premium2':'',

   'sum':''

},
'motherinlaw': { 
  'selected':false,
   'age':'',
   'gender':'Female',
   'premium':'',
   'premium2':'',

   'sum':''

},
'brother': { 
  'selected':false,
   'age':'',
   'gender':'Male',
   'premium':'',
   'premium2':'',

   'sum':''

},
'sister': { 
  'selected':false,
   'age':'',
   'gender':'Female',
   'premium':'',
   'premium2':'',

   'sum':''

},
'kid1': { 
  'selected':false,
   'age':'',
   'gender':'Male',
   'premium':'',
   'sum':''

},
  'kids': '',

'kid2': { 
  'selected':false,
   'age':'',
   'gender':'Male',
   'premium':''

},
'kid3': { 
  'selected':false,
   'age':'',
   'gender':'Male',
   'premium':''

},
'kid4': { 
  'selected':false,
   'age':'',
   'gender':'Male',
   'premium':''

},

  }

  DieseaseData:any= [
    {
        "id": "11",
        "pE002": "0",
        "pE003": "0",
        "pE009": "1",
        "pE010": "1",
        "premium": "450"
    },
    {
        "id": "10",
        "pE002": "0",
        "pE003": "1",
        "pE009": "0",
        "pE010": "1",
        "premium": "1250"
    },
    {
        "id": "9",
        "pE002": "0",
        "pE003": "1",
        "pE009": "1",
        "pE010": "0",
        "premium": "1650"
    },
    {
        "id": "8",
        "pE002": "0",
        "pE003": "1",
        "pE009": "1",
        "pE010": "1",
        "premium": "2100"
    },
    {
        "id": "7",
        "pE002": "1",
        "pE003": "0",
        "pE009": "1",
        "pE010": "0",
        "premium": "1650"
    },
    {
        "id": "6",
        "pE002": "1",
        "pE003": "0",
        "pE009": "0",
        "pE010": "1",
        "premium": "0"
    },
    {
        "id": "5",
        "pE002": "1",
        "pE003": "1",
        "pE009": "0",
        "pE010": "0",
        "premium": "1250"
    },
    {
        "id": "4",
        "pE002": "1",
        "pE003": "0",
        "pE009": "1",
        "pE010": "1",
        "premium": "1650"
    },
    {
        "id": "3",
        "pE002": "1",
        "pE003": "1",
        "pE009": "0",
        "pE010": "1",
        "premium": "1250"
    },
    {
        "id": "2",
        "pE002": "1",
        "pE003": "1",
        "pE009": "1",
        "pE010": "0",
        "premium": "2900"
    },
    {
        "id": "1",
        "pE002": "1",
        "pE003": "1",
        "pE009": "1",
        "pE010": "1",
        "premium": "2900"
    }
]
  
  constructor() {

   }

}