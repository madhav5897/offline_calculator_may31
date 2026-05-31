import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsComponent } from '../Products/products.page';
import { SumService } from 'src/app/services/sum.service';
import { InfoService } from 'src/app/services/activehealth/info.service';
import { DataService } from 'src/app/services/activehealth/data.service';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PincodeService } from 'src/app/services/pincode.service';
import { HospitalcashService } from 'src/app/services/activehealth/hospitalcash.service';
import { AbhiService } from 'src/app/services/activehealth/abhi.service';
import { CancerDataService } from 'src/app/services/activehealth/cancer.service';
import { ActiveoneService } from 'src/app/services/Active_One/activeone.service';
import { ActiveonemasterService } from 'src/app/services/Active_One/activeonemaster.service';
import { QuoteService } from 'src/app/services/activehealth/quote.service';
import { ComponentService } from 'src/app/services/component.service';
@Component({
    selector: 'app-activeone',
    templateUrl: 'activeone.page.html',
    styleUrls: ['activeone.page.scss']
})
export class ActiveOneComponent implements OnInit {

    premiumshow: number = 0;              // this value is used to show on screen
    premiumvalue: number = 0;
    premiumaftermemberselection: any = '';
    premiumafterdiesease: any = '';
    masterpremium: number = 0;
    OpdAddOnPremium: number = 0;
    durableEquipmentPremium: number = 0;
    diffrence: number = 0;
    premaster: number = 0;
    deleteselected: boolean = false;
    selectadult1error:boolean=false;

    quoteobject: any = {
        'sellername': '',
        'sellermobile': '',
        'selleraddress': '',

        'id': '',
        'name': '',
        'mobile': '',
        'pincode': '',
        'address': '',

        'plan': '',
        'policytype': '',
        'tenure': '',
        'date': '',
        'memberstring': '',
        'sum': '',

        'covers': '',
        'premium': '',
        'gst': '',
        'finalpremium': ''
    }

    gst: any;
    premiumbeforegst: any;

    emptyageerror: boolean = false;
    adultcount: number = 0;
    subPlan: any;
    Detail: boolean = false;

    sum: any = 'SI_1000000';
    sumindigits = '1000000'
    sumtoshow: string = '10 Lakh'
    tenure: any = '1 Year';
    tenureno: any = '';
    policyType: any = '';
    familyFloater: any = '';
    membersString: any = '';
    members: any = 'individual';

    sons: any[] = [];
    daughters: any[] = [];
    soncounter: number = 0;
    daughtercounter: number = 0;
    kidcounter: number = 0;
    multipremium = {
        'member': '',
        'premium': '',
    }
    multipremiumarray: any[] = [];

    showedit: boolean = false;
    tenurechange: boolean = false;
    tenurefactor: number = 1;
    isFloaterValid: boolean = true;
    onememberselected: boolean = false;

    memberspage: boolean = true;
    dieseasepage: boolean = false;
    coverspage: boolean = false;
    memberspageempty: boolean = false;
    master: any;
    plan: any;
    plancode: number = 0;
    platinumEssentialSelected: boolean = false;
    platinumEnhancedSelected: boolean = false;
    platinumPremiereSelected: boolean = false;
    nextClicked: boolean = false;
    addClicked: boolean = false;

    dieseasepremium: number = 0;
    dieseaseselected: boolean = false;

    code: any = {
        'self':
        {

        },
        'spouse':
        {

        },
        'father':
        {

        },
        'mother':
        {

        },
        'fatherinlaw':
        {

        },
        'motherinlaw':
        {

        },
        'brother':
        {

        },
        'sister':
        {

        }

    }

    abhiprotectselected: boolean = false;
    abhiPremiumTotal: number = 0;
    personalaccidentselected: boolean = false;
    criticalillnessselected: boolean = false;
    internationalcoverageselected: boolean = false;
    hospitalcashselected: boolean = false;
    hCSI: number = 2000;
    hospitalCashPremium: number = 0;
    futuresecureselected: boolean = false;
    futureSecurePremium: number = 0;
    cancerhospitalizationselected: boolean = false;
    cancerHospitalizationPremium: number = 0;

    vaccinecoverselected: boolean = false;
    vaccineCoverPremium: number = 0;

    teleopdselected: boolean = false;
    teleopdPremium: number = 0;

    internationalCoveragePremium: number = 0;

    personalAccidentPremium: number = 0;
    criticalIllnessPremium: number = 0;
    chronicManagementPremium: number = 0;

    noselectederror: boolean = false;
    pincode: any = '';
    pincodeerror: boolean = false;
    zone: any = 'Z001';
    zonefactor: any;
    roomtype: any;
    roomfactor: number = 1;
    roomtypechange: boolean = false;
    roomtypestring: any = 'Any';
    chornic: any = 'NCHR'
    dieseasecounter: number = 0;
    isdecreased: boolean = false;

    criticalillnessvalue: number = 1;

    modelarray: any = [

        {
            'name': '',
            'id': '0',
            'member': 'Self',
            'iskid': false,
            'floater': 'Self',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',


            'gender': 'Male',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,

            'premium': ''
            , 'dieseasepremium': ''
            , 'premium2': ''
            , 'img': 'assets/images/self.png'
            , 'ageerror': false

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0

            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false
            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0


            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'

            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0
            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''

            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
            ,'roomfactor': 1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''


            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false



            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Spouse',
            'floater': 'Spouse',
            'iskid': false,
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '1',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,
            'premium': ''
            , 'dieseasepremium': '',
            'premium2': ''
            , 'img': 'assets/images/spouse.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Daughter1',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '2',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        }, {
            'name': '',
            'member': 'Daughter2',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '3',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0
            , 'chronic': 'NCHR'

            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Daughter3',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '4',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'Daughter4',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '5',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        }
        ,
        {
            'name': '',
            'member': 'Son1',
            'floater': 'Male',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '6',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/son.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Son2',
            'floater': 'Male',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '7',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/son.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'Son3',
            'floater': 'Male',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '8',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/son.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'Son4',
            'floater': 'Male',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '9',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/son.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR',
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,

            'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },


        {
            'name': '',
            'iskid': false,
            'member': 'Father',
            'floater': 'Father',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '10',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/father.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'Mother',
            'iskid': false,
            'floater': 'Mother',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '11',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/mother.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Brother',
            'iskid': false,
            'floater': '',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '12',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/self.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Sister',
            'iskid': false,
            'floater': '',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '13',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/spouse.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Fatherinlaw',
            'iskid': false,
            'floater': 'Spouse',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '14',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/father.png'
            , 'ageerror': false


            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Motherinlaw',
            'floater': 'Motherinlaw',
            'iskid': false,
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '15',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/mother.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false

        }

    ]
    modelarraycopy: any = [

        {
            'name': '',
            'id': '0',
            'member': 'Self',
            'iskid': false,
            'floater': 'Self',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',


            'gender': 'Male',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,

            'premium': ''
            , 'dieseasepremium': ''
            , 'premium2': ''
            , 'img': 'assets/images/self.png'
            , 'ageerror': false

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0

            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false
            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0


            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'

            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0
            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''

            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''


            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false



            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Spouse',
            'floater': 'Spouse',
            'iskid': false,
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '1',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,
            'premium': ''
            , 'dieseasepremium': '',
            'premium2': ''
            , 'img': 'assets/images/spouse.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Daughter1',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '2',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        }, {
            'name': '',
            'member': 'Daughter2',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '3',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0
            , 'chronic': 'NCHR'

            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Daughter3',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '4',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'Daughter4',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '5',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        }
        ,
        {
            'name': '',
            'member': 'Son1',
            'floater': 'Male',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '6',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/son.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Son2',
            'floater': 'Male',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '7',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/son.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'Son3',
            'floater': 'Male',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '8',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/son.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'Son4',
            'floater': 'Male',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '9',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/son.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR',
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,

            'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },


        {
            'name': '',
            'iskid': false,
            'member': 'Father',
            'floater': 'Father',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '10',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/father.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'Mother',
            'iskid': false,
            'floater': 'Mother',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '11',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/mother.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Brother',
            'iskid': false,
            'floater': '',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '12',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/self.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Sister',
            'iskid': false,
            'floater': '',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '13',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/spouse.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0
                        ,'roomfactor':1
            ,'roomtypestring':'Base SI'


            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Fatherinlaw',
            'iskid': false,
            'floater': 'Spouse',
            'gender': 'Male',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '14',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/father.png'
            , 'ageerror': false


            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0

            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Motherinlaw',
            'floater': 'Motherinlaw',
            'iskid': false,
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs',

            'id': '15',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'pE002': '0',
            'pE003': '0',
            'pE009': '0',
            'pE010': '0'
            ,
            'premium': ''
            , 'dieseasepremium': '', 'premium2': ''
            , 'img': 'assets/images/mother.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0

            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false

        }

    ]

    modelarray2: any = [

        {
            'name': '',
            'id': '0',
            'member': 'Adult 1',
            'iskid': false,
            'floater': 'Self',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs'

            ,'roomfactor': 1
            ,'roomtypestring':'Base SI',


            'gender': 'Male',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,

            'premium': ''
            , 'dieseasepremium': ''
            , 'premium2': ''
            , 'img': 'assets/images/self.png'
            , 'ageerror': false

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0

            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false
            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0


            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'

            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0
            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''

            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0

            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''


            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false



            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Adult 2',
            'floater': 'Spouse',
            'iskid': false,
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs'
            ,'roomfactor': 1
            ,'roomtypestring':'Base SI',


            'id': '1',
            'age': '',
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,
            'premium': ''
            , 'dieseasepremium': '',
            'premium2': ''
            , 'img': 'assets/images/spouse.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0

            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Kid1',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs'
            ,'roomfactor': 1
            ,'roomtypestring':'Base SI',


            'id': '2',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0,

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0

            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        }, {
            'name': '',
            'member': 'Kid2',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs'
            ,'roomfactor': 1
            ,'roomtypestring':'Base SI',


            'id': '3',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0
            , 'chronic': 'NCHR'

            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0

            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599


        },
        {
            'name': '',
            'member': 'Kid3',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs'
            ,'roomfactor': 1
            ,'roomtypestring':'Base SI',


            'id': '4',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0

            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        },
        {
            'name': '',
            'member': 'kid4',
            'floater': 'Female',
            'gender': 'Female',
            'sum': 'SI_1000000',
            'sumtoshow': 1000000,
            'suminlakhs': '10 Lakhs'
            ,'roomfactor': 1
            ,'roomtypestring':'Base SI',


            'id': '5',
            'age': '',
            'masterselected': false,
            'selected': false,
            'preselected': false,

            'pre_exsisting': "null",

            'iskid': true,
            'premium': ''
            , 'dieseasepremium': ''
            , 'img': 'assets/images/daughter.png'
            , 'ageerror': false

            , 'abhiprotect': false
            , 'abhiPremium': ''

            , 'perclaimdeductable': false
            , 'perclaimSI': 15000
            , 'perclaimfactor': 0.91


            , 'chroniccare': false
            , 'chroniccarefactor': 1.2
            , 'ccpremium': 0
            , 'specificdiesease': false
            , 'specificdieseasefactor': 1

            , 'pedwaiting': false
            , 'pedwaitingfactor': 1.09
            , 'pedSI': '3to2'
            , 'cancerbooster': false

            , 'compassionatevisit': false

            , 'annualscreening': false
            , 'secondmedical': false
            , 'chronicmanagement': false
            , 'cMPremium': 0

            , 'personalaccident': false
            , 'pASI': '1000000'
            , 'pAPremium': 0
            , 'riskfactor': null
            ,
            'ASTHMA': false,
            'HYPTN': false,
            'HYPRLIP': false,
            'DIABT': false,
            'PTCA': false,
            'COPD': false,
            'HBMI': false
            , 'dieseasecounter': 0


            , 'chronic': 'NCHR'


            , 'criticalillness': false
            , 'cIfactor': ''
            , 'cISI': 'SI_2000000'
            , 'cIPremium': 0

            , 'internationalcoverage': false
            , 'iCSI': '30000000'
            , 'iCPremium': ''


            , 'hospitalcashcover': false
            , 'hCPremium': ''

            , 'roomtypecover': false
            , 'futuresecure': false
            , 'fCPremium': 0

            , 'cancerhospitalization': false
            , 'cHPremium': 0
            , 'durablequipment': false
            , 'dEPremium': ''
            , 'vaccinecover': false
            , 'vCSI': 1000
            , 'vCPremium': 0

            , 'teleopd': false
            , 'tOPremium': 0
            , 'opdaddon': false

            , 'oaOption': 'In-Person GP unlimited consultations'
            , 'oaPremium': 599



        }
    ]

    self: any;
    object: any = {

    }
    selectatleasttwomembers: boolean = false;

    coverArray: any = [
        {
            'id': 1,
            'name': 'Room Type Cover',
            'pincode': '',
            'zone': '',
            'selected': false
            , 'img': ''
            , 'premium': ''
        },
        {
            'id': 2,
            'name': 'Per Claim Deductable',
            'selected': false
            , 'img': 'assets/images/compassion.png'
            , 'premium': ''
        },
        {
            'id': 3,
            'name': 'Chronic Care Restriction'
            , 'selected': false
            , 'img': 'assets/images/personal-accident-cover.png'
            , 'premium': ''

        },
        {
            'id': 4,
            'name': 'Reduction In Specific Diesease Waiting Period ',
            'selected': false
            , 'img': 'assets/images/personal-accident-cover.png'
            , 'premium': ''

        },

        {
            'id': 5,
            'name': 'Reduction In PED Waiting Period',
            'selected': false
            , 'img': 'assets/images/personal-accident-cover.png'
            , 'premium': ''

        },
        {
            'id': 6,
            'name': 'Cancer Hospitalization Booster',
            'selected': false
            , 'img': 'assets/images/critical-illness-cover.png'
            , 'premium': ''

        },
        {
            'id': 7,
            'name': 'Compassionate Visit',
            'selected': false
            , 'img': 'assets/images/international_coverage.png'
            , 'premium': ''

        },
        {
            'id': 8,
            'name': 'Annual Screening Package for Cancer Diagnosed Patients',

            'selected': false
            , 'img': 'assets/images/super-credit.png'
            , 'premium': ''

        },
        {
            'id': 9,
            'name': 'Critical Illness Cover',
            'selected': false
            , 'img': 'assets/images/accident_cover.png'
            , 'premium': ''

        },
        {
            'id': 10,
            'name': 'Peresonal Accident Cover',
            'selected': false
            , 'img': 'assets/images/future_secure.png'
            , 'premium': ''

        },
        {
            'id': 11,
            'name': 'Chronic Management Program (OPD)',
            'selected': false
            , 'img': 'assets/images/cancer_hospital_booster.png'
            , 'premium': ''

        },
        {
            'id': 12,
            'name': 'Second Medical Opinion for listed Major Illness',
            'selected': false
            , 'img': 'assets/images/cancer_hospital_booster.png'
            , 'premium': ''

        },
        {
            'id': 13,
        },

        {
            'id': 14,
            'name': 'Durable equipment cover',
            'selected': false
            , 'img': 'assets/images/cancer_hospital_booster.png'
            , 'premium': ''

        },

        // 

        {
            'id': 15,
            'name': 'Vaccine Cover',
            'selected': false
            , 'img': 'assets/images/vaccine_cover.png'
        },
        {
            'id': 16,
            'name': 'Tele-OPD consultation',
            'selected': false
            , 'img': 'assets/images/tele_opd.png'
        },
        {
            'id': 17,
            'name': 'OPD Add on',
            'selected': false
            , 'img': 'assets/images/tele_opd.png'
        },

    ]

    ageArray: any[] = [
        { 'value': 18, 'string': '18 Year' },
        { 'value': 19, 'string': '19 Year' },
        { 'value': 20, 'string': '20 Year' },
        { 'value': 21, 'string': '21 Year' },
        { 'value': 22, 'string': '22 Year' },
        { 'value': 23, 'string': '23 Year' },
        { 'value': 24, 'string': '24 Year' },
        { 'value': 25, 'string': '25 Year' },
        { 'value': 26, 'string': '26 Year' },
        { 'value': 27, 'string': '27 Year' },
        { 'value': 28, 'string': '28  Year' },
        { 'value': 29, 'string': '29  Year' },
        { 'value': 30, 'string': '30  Year' },
        { 'value': 31, 'string': '31  Year' },
        { 'value': 32, 'string': '32  Year' },
        { 'value': 33, 'string': '33  Year' },
        { 'value': 34, 'string': '34  Year' },
        { 'value': 35, 'string': '35  Year' },
        { 'value': 36, 'string': '36  Year' },
        { 'value': 37, 'string': '37  Year' },
        { 'value': 38, 'string': '38  Year' },
        { 'value': 39, 'string': ' 39 Year' },
        { 'value': 40, 'string': '40  Year' },
        { 'value': 41, 'string': '41  Year' },
        { 'value': 42, 'string': '42  Year' },
        { 'value': 43, 'string': '43  Year' },
        { 'value': 44, 'string': '44  Year' },
        { 'value': 45, 'string': '45  Year' },
        { 'value': 46, 'string': '46  Year' },
        { 'value': 47, 'string': '47  Year' },
        { 'value': 48, 'string': '48  Year' },
        { 'value': 49, 'string': '49  Year' },
        { 'value': 50, 'string': '50  Year' },
        { 'value': 51, 'string': '51  Year' },
        { 'value': 52, 'string': '52  Year' },
        { 'value': 53, 'string': '53  Year' },
        { 'value': 54, 'string': '54  Year' },
        { 'value': 55, 'string': '55  Year' },
        { 'value': 56, 'string': '56  Year' },
        { 'value': 57, 'string': '57  Year' },
        { 'value': 58, 'string': '58  Year' },
        { 'value': 59, 'string': '59  Year' },
        { 'value': 60, 'string': '60  Year' },
        { 'value': 61, 'string': '61  Year' },
        { 'value': 62, 'string': '62  Year' },
        { 'value': 63, 'string': '63  Year' },
        { 'value': 64, 'string': '64  Year' },
        { 'value': 65, 'string': '65  Year' },
        { 'value': 66, 'string': '66  Year' },
        { 'value': 67, 'string': '67  Year' },
        { 'value': 68, 'string': '68  Year' },
        { 'value': 69, 'string': '69  Year' },
        { 'value': 70, 'string': '70  Year' },
        { 'value': 71, 'string': '71  Year' },
        { 'value': 72, 'string': '72  Year' },
        { 'value': 73, 'string': '73  Year' },
        { 'value': 74, 'string': '74  Year' },
        { 'value': 75, 'string': '75  Year' },
        { 'value': 76, 'string': '76  Year' },
        { 'value': 77, 'string': '77  Year' },
        { 'value': 78, 'string': '78  Year' },
        { 'value': 79, 'string': '79  Year' },
        { 'value': 80, 'string': '80  Year' },
        { 'value': 81, 'string': '81  Year' },
        { 'value': 82, 'string': '82  Year' },
        { 'value': 83, 'string': '83  Year' },
        { 'value': 84, 'string': '84  Year' },
        { 'value': 85, 'string': '85  Year' },
        { 'value': 86, 'string': '86  Year' },
        { 'value': 87, 'string': '87  Year' },
        { 'value': 88, 'string': '88  Year' },
        { 'value': 89, 'string': '89  Year' },
        { 'value': 90, 'string': '90  Year' },
        { 'value': 91, 'string': '91  Year' },
        { 'value': 92, 'string': '92  Year' },
        { 'value': 93, 'string': '93  Year' },
        { 'value': 94, 'string': '94  Year' },
        { 'value': 95, 'string': '95  Year' },
        { 'value': 96, 'string': '96  Year' },
        { 'value': 97, 'string': '97  Year' },
        { 'value': 98, 'string': '98  Year' },
        { 'value': 99, 'string': '99  Year' },
    ]

    shownote: boolean = false;
    ageArray2: any[] = [
        { 'value': 18, 'string': '18 Year' },
        { 'value': 19, 'string': '19 Year' },
        { 'value': 20, 'string': '20 Year' },
        { 'value': 21, 'string': '21 Year' },
        { 'value': 22, 'string': '22 Year' },
        { 'value': 23, 'string': '23 Year' },
        { 'value': 24, 'string': '24 Year' },
        { 'value': 25, 'string': '25 Year' },
        { 'value': 26, 'string': '26 Year' },
        { 'value': 27, 'string': '27 Year' },
        { 'value': 28, 'string': '28  Year' },
        { 'value': 29, 'string': '29  Year' },
        { 'value': 30, 'string': '30  Year' },
        { 'value': 31, 'string': '31  Year' },
        { 'value': 32, 'string': '32  Year' },
        { 'value': 33, 'string': '33  Year' },
        { 'value': 34, 'string': '34  Year' },
        { 'value': 35, 'string': '35  Year' },
        { 'value': 36, 'string': '36  Year' },
        { 'value': 37, 'string': '37  Year' },
        { 'value': 38, 'string': '38  Year' },
        { 'value': 39, 'string': ' 39 Year' },
        { 'value': 40, 'string': '40  Year' },
        { 'value': 41, 'string': '41  Year' },
        { 'value': 42, 'string': '42  Year' },
        { 'value': 43, 'string': '43  Year' },
        { 'value': 44, 'string': '44  Year' },
        { 'value': 45, 'string': '45  Year' },
        { 'value': 46, 'string': '46  Year' },
        { 'value': 47, 'string': '47  Year' },
        { 'value': 48, 'string': '48  Year' },
        { 'value': 49, 'string': '49  Year' },
        { 'value': 50, 'string': '50  Year' },
        { 'value': 51, 'string': '51  Year' },
        { 'value': 52, 'string': '52  Year' },
        { 'value': 53, 'string': '53  Year' },
        { 'value': 54, 'string': '54  Year' },
        { 'value': 55, 'string': '55  Year' },
        { 'value': 56, 'string': '56  Year' },
        { 'value': 57, 'string': '57  Year' },
        { 'value': 58, 'string': '58  Year' },
        { 'value': 59, 'string': '59  Year' },
        { 'value': 60, 'string': '60  Year' },
        { 'value': 61, 'string': '61  Year' },
        { 'value': 62, 'string': '62  Year' },
        { 'value': 63, 'string': '63  Year' },
        { 'value': 64, 'string': '64  Year' },
        { 'value': 65, 'string': '65  Year' },
        { 'value': 66, 'string': '66  Year' },
        { 'value': 67, 'string': '67  Year' },
        { 'value': 68, 'string': '68  Year' },
        { 'value': 69, 'string': '69  Year' },
        { 'value': 70, 'string': '70  Year' },
        { 'value': 71, 'string': '71  Year' },
        { 'value': 72, 'string': '72  Year' },
        { 'value': 73, 'string': '73  Year' },
        { 'value': 74, 'string': '74  Year' },
        { 'value': 75, 'string': '75  Year' },
        { 'value': 76, 'string': '76  Year' },
        { 'value': 77, 'string': '77  Year' },
        { 'value': 78, 'string': '78  Year' },
        { 'value': 79, 'string': '79  Year' },
        { 'value': 80, 'string': '80  Year' },
        { 'value': 81, 'string': '81  Year' },
        { 'value': 82, 'string': '82  Year' },
        { 'value': 83, 'string': '83  Year' },
        { 'value': 84, 'string': '84  Year' },
        { 'value': 85, 'string': '85  Year' },
        { 'value': 86, 'string': '86  Year' },
        { 'value': 87, 'string': '87  Year' },
        { 'value': 88, 'string': '88  Year' },
        { 'value': 89, 'string': '89  Year' },
        { 'value': 90, 'string': '90  Year' },
        { 'value': 91, 'string': '91  Year' },
        { 'value': 92, 'string': '92  Year' },
        { 'value': 93, 'string': '93  Year' },
        { 'value': 94, 'string': '94  Year' },
        { 'value': 95, 'string': '95  Year' },
        { 'value': 96, 'string': '96  Year' },
        { 'value': 97, 'string': '97  Year' },
        { 'value': 98, 'string': '98  Year' },
        { 'value': 99, 'string': '99  Year' },
    ]

    RiskFactorData:any= [
        {
          "ID": 1,
          "Nature_Of_Duty": "ACCOUNTANT",
          "Risk_class": 1
        },
        {
          "ID": 2,
          "Nature_Of_Duty": "ACROBAT",
          "Risk_class": 4
        },
        {
          "ID": 3,
          "Nature_Of_Duty": "ACTUARY",
          "Risk_class": 1
        },
        {
          "ID": 8,
          "Nature_Of_Duty": "ACUPUNCTURIST",
          "Risk_class": 1
        },
        {
          "ID": 9,
          "Nature_Of_Duty": "ADMINISTRATIVE WORKER",
          "Risk_class": 1
        },
        {
          "ID": 11,
          "Nature_Of_Duty": "Adventurous sports professionals/ trainers",
          "Risk_class": 4
        },
        {
          "ID": 12,
          "Nature_Of_Duty": "ADVERTISING AGENT",
          "Risk_class": 1
        },
        {
          "ID": 13,
          "Nature_Of_Duty": "ADVOCATE/LAWYER",
          "Risk_class": 1
        },
        {
          "ID": 14,
          "Nature_Of_Duty": "AERONAUTICAL ENGINEER",
          "Risk_class": 1
        },
        {
          "ID": 15,
          "Nature_Of_Duty": "Agents-Others",
          "Risk_class": 1
        },
        {
          "ID": 16,
          "Nature_Of_Duty": "Agricultural Administration",
          "Risk_class": 1
        },
        {
          "ID": 17,
          "Nature_Of_Duty": "Agricultural and Horticultural Workers",
          "Risk_class": 3
        },
        {
          "ID": 18,
          "Nature_Of_Duty": "Agricultural Others",
          "Risk_class": 3
        },
        {
          "ID": 19,
          "Nature_Of_Duty": "AGRICULTURAL WORKER / LABOURER",
          "Risk_class": 3
        },
        {
          "ID": 20,
          "Nature_Of_Duty": "AGRICULTURIST/ LAND OWNER",
          "Risk_class": 1
        },
        {
          "ID": 21,
          "Nature_Of_Duty": "Air force operations",
          "Risk_class": 4
        },
        {
          "ID": 22,
          "Nature_Of_Duty": "Air Traffic Control",
          "Risk_class": 1
        },
        {
          "ID": 23,
          "Nature_Of_Duty": "AIR TRAFFIC CONTROLLER",
          "Risk_class": 1
        },
        {
          "ID": 25,
          "Nature_Of_Duty": "AIRCRAFT GROUND CREW",
          "Risk_class": 1
        },
        {
          "ID": 26,
          "Nature_Of_Duty": "AIRCRAFT TECHNICIANS",
          "Risk_class": 2
        },
        {
          "ID": 27,
          "Nature_Of_Duty": "Aircraft-Others",
          "Risk_class": 1
        },
        {
          "ID": 28,
          "Nature_Of_Duty": "Aircraft-Worker",
          "Risk_class": 2
        },
        {
          "ID": 29,
          "Nature_Of_Duty": "AIRPORT SERVICE STAFF / MANAGEMENT",
          "Risk_class": 1
        },
        {
          "ID": 30,
          "Nature_Of_Duty": "Alcohol Production-Others",
          "Risk_class": 2
        },
        {
          "ID": 31,
          "Nature_Of_Duty": "Alcohol Production-Workers",
          "Risk_class": 3
        },
        {
          "ID": 32,
          "Nature_Of_Duty": "AMBULANCE ATTENDANT",
          "Risk_class": 2
        },
        {
          "ID": 33,
          "Nature_Of_Duty": "ANAESTHETIST",
          "Risk_class": 1
        },
        {
          "ID": 34,
          "Nature_Of_Duty": "Animal Handlers and Breeders",
          "Risk_class": 3
        },
        {
          "ID": 35,
          "Nature_Of_Duty": "Animal Trainers",
          "Risk_class": 3
        },
        {
          "ID": 37,
          "Nature_Of_Duty": "ANIMATOR / CARTOONIST",
          "Risk_class": 1
        },
        {
          "ID": 38,
          "Nature_Of_Duty": "ANNOUNCER - Radio / Television",
          "Risk_class": 1
        },
        {
          "ID": 39,
          "Nature_Of_Duty": "ARCHAEOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 40,
          "Nature_Of_Duty": "ARCHITECT",
          "Risk_class": 1
        },
        {
          "ID": 42,
          "Nature_Of_Duty": "Armed Forces",
          "Risk_class": 4
        },
        {
          "ID": 43,
          "Nature_Of_Duty": "Army",
          "Risk_class": 4
        },
        {
          "ID": 44,
          "Nature_Of_Duty": "ART TEACHER",
          "Risk_class": 1
        },
        {
          "ID": 45,
          "Nature_Of_Duty": "ARTIST",
          "Risk_class": 1
        },
        {
          "ID": 46,
          "Nature_Of_Duty": "Asbestos Worker",
          "Risk_class": 4
        },
        {
          "ID": 47,
          "Nature_Of_Duty": "ASPHALT WORKER",
          "Risk_class": 4
        },
        {
          "ID": 48,
          "Nature_Of_Duty": "ASSESSOR - Insurance",
          "Risk_class": 1
        },
        {
          "ID": 49,
          "Nature_Of_Duty": "Astrologer",
          "Risk_class": 1
        },
        {
          "ID": 50,
          "Nature_Of_Duty": "AUDITOR",
          "Risk_class": 1
        },
        {
          "ID": 51,
          "Nature_Of_Duty": "AUTHOR",
          "Risk_class": 1
        },
        {
          "ID": 52,
          "Nature_Of_Duty": "Aviation-Cabin Personnel",
          "Risk_class": 4
        },
        {
          "ID": 55,
          "Nature_Of_Duty": "Aviation-Ground Personnel",
          "Risk_class": 2
        },
        {
          "ID": 57,
          "Nature_Of_Duty": "Aviation-Pilots",
          "Risk_class": 4
        },
        {
          "ID": 58,
          "Nature_Of_Duty": "BAKER / BAKERY MANAGER",
          "Risk_class": 1
        },
        {
          "ID": 59,
          "Nature_Of_Duty": "Ballooning",
          "Risk_class": 4
        },
        {
          "ID": 60,
          "Nature_Of_Duty": "BANKER",
          "Risk_class": 1
        },
        {
          "ID": 61,
          "Nature_Of_Duty": "BARBER / HAIRDRESSER",
          "Risk_class": 1
        },
        {
          "ID": 62,
          "Nature_Of_Duty": "BARMAN / BARMAID",
          "Risk_class": 1
        },
        {
          "ID": 63,
          "Nature_Of_Duty": "BEAUTICIAN",
          "Risk_class": 1
        },
        {
          "ID": 64,
          "Nature_Of_Duty": "Beauty Treatment",
          "Risk_class": 1
        },
        {
          "ID": 65,
          "Nature_Of_Duty": "Beauty Treatment-Others",
          "Risk_class": 1
        },
        {
          "ID": 66,
          "Nature_Of_Duty": "BEUROCRATS",
          "Risk_class": 1
        },
        {
          "ID": 67,
          "Nature_Of_Duty": "BIOCHEMIST",
          "Risk_class": 1
        },
        {
          "ID": 68,
          "Nature_Of_Duty": "BIOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 69,
          "Nature_Of_Duty": "BLASTERS",
          "Risk_class": 4
        },
        {
          "ID": 70,
          "Nature_Of_Duty": "BODYGUARD",
          "Risk_class": 4
        },
        {
          "ID": 72,
          "Nature_Of_Duty": "BOMB DISPOSAL",
          "Risk_class": 4
        },
        {
          "ID": 73,
          "Nature_Of_Duty": "BOTANIST",
          "Risk_class": 1
        },
        {
          "ID": 74,
          "Nature_Of_Duty": "Brick and Tile-Workers",
          "Risk_class": 3
        },
        {
          "ID": 75,
          "Nature_Of_Duty": "BRICKLAYER",
          "Risk_class": 3
        },
        {
          "ID": 76,
          "Nature_Of_Duty": "BROKER - Administrative",
          "Risk_class": 1
        },
        {
          "ID": 77,
          "Nature_Of_Duty": "Builders",
          "Risk_class": 2
        },
        {
          "ID": 78,
          "Nature_Of_Duty": "Building and Construction Workers",
          "Risk_class": 3
        },
        {
          "ID": 79,
          "Nature_Of_Duty": "Building and Construction-Drivers and Operatives",
          "Risk_class": 4
        },
        {
          "ID": 80,
          "Nature_Of_Duty": "BUILDING CLEANER",
          "Risk_class": 4
        },
        {
          "ID": 81,
          "Nature_Of_Duty": "Building Labourer-Special Hazards",
          "Risk_class": 4
        },
        {
          "ID": 82,
          "Nature_Of_Duty": "Building-Technicians and Administrators",
          "Risk_class": 2
        },
        {
          "ID": 83,
          "Nature_Of_Duty": "BULLDOZER OPERATOR",
          "Risk_class": 4
        },
        {
          "ID": 84,
          "Nature_Of_Duty": "Bureaucrats",
          "Risk_class": 1
        },
        {
          "ID": 85,
          "Nature_Of_Duty": "BUS CONDUCTORS",
          "Risk_class": 2
        },
        {
          "ID": 86,
          "Nature_Of_Duty": "Bus Drivers",
          "Risk_class": 3
        },
        {
          "ID": 87,
          "Nature_Of_Duty": "Bus Guards/cleaner",
          "Risk_class": 2
        },
        {
          "ID": 88,
          "Nature_Of_Duty": "BUSINESS OWNER / MANAGER - Clerical",
          "Risk_class": 1
        },
        {
          "ID": 89,
          "Nature_Of_Duty": "Butcher",
          "Risk_class": 3
        },
        {
          "ID": 90,
          "Nature_Of_Duty": "CAMERAMAN  (no hazardous work)",
          "Risk_class": 1
        },
        {
          "ID": 91,
          "Nature_Of_Duty": "CAPTAIN - Fishing Boat or Trawler",
          "Risk_class": 4
        },
        {
          "ID": 92,
          "Nature_Of_Duty": "CAPTAIN - Ship",
          "Risk_class": 4
        },
        {
          "ID": 93,
          "Nature_Of_Duty": "Car Exhaust fitter",
          "Risk_class": 3
        },
        {
          "ID": 94,
          "Nature_Of_Duty": "CARDIOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 95,
          "Nature_Of_Duty": "Cargo Staff-Heavy Goods",
          "Risk_class": 3
        },
        {
          "ID": 96,
          "Nature_Of_Duty": "Cargo-Administration",
          "Risk_class": 1
        },
        {
          "ID": 97,
          "Nature_Of_Duty": "Cargo-Staff",
          "Risk_class": 2
        },
        {
          "ID": 98,
          "Nature_Of_Duty": "CARPENTER",
          "Risk_class": 3
        },
        {
          "ID": 99,
          "Nature_Of_Duty": "CASHIER",
          "Risk_class": 1
        },
        {
          "ID": 100,
          "Nature_Of_Duty": "Casino and Gambling Personnel",
          "Risk_class": 2
        },
        {
          "ID": 101,
          "Nature_Of_Duty": "Ceramics Industry-Kiln Workers",
          "Risk_class": 4
        },
        {
          "ID": 102,
          "Nature_Of_Duty": "Ceramics Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 103,
          "Nature_Of_Duty": "CHAUFFEUR /TOURIST CAR/PRIVATE CAR/COMPANY CAR",
          "Risk_class": 2
        },
        {
          "ID": 104,
          "Nature_Of_Duty": "CHEF / COOK OTHERS",
          "Risk_class": 1
        },
        {
          "ID": 105,
          "Nature_Of_Duty": "CHEMICAL ENGINEER",
          "Risk_class": 2
        },
        {
          "ID": 106,
          "Nature_Of_Duty": "Chemical Industry-research",
          "Risk_class": 2
        },
        {
          "ID": 107,
          "Nature_Of_Duty": "CHEMIST / PHARMACIST",
          "Risk_class": 1
        },
        {
          "ID": 108,
          "Nature_Of_Duty": "CHILDCARE WORKER",
          "Risk_class": 1
        },
        {
          "ID": 109,
          "Nature_Of_Duty": "CHOREOGRAPHER",
          "Risk_class": 1
        },
        {
          "ID": 110,
          "Nature_Of_Duty": "CIRCUS PERFORMER",
          "Risk_class": 4
        },
        {
          "ID": 111,
          "Nature_Of_Duty": "Circus personal",
          "Risk_class": 4
        },
        {
          "ID": 112,
          "Nature_Of_Duty": "CIVIL ENGINEER",
          "Risk_class": 1
        },
        {
          "ID": 113,
          "Nature_Of_Duty": "Clergy and Religion",
          "Risk_class": 2
        },
        {
          "ID": 114,
          "Nature_Of_Duty": "CLERK",
          "Risk_class": 1
        },
        {
          "ID": 115,
          "Nature_Of_Duty": "Coal and Mining Industry-Others",
          "Risk_class": 4
        },
        {
          "ID": 116,
          "Nature_Of_Duty": "Coal and Mining Industry-Worker",
          "Risk_class": 4
        },
        {
          "ID": 117,
          "Nature_Of_Duty": "COASTGUARD",
          "Risk_class": 2
        },
        {
          "ID": 118,
          "Nature_Of_Duty": "Commercial Cleaning-Workers",
          "Risk_class": 2
        },
        {
          "ID": 120,
          "Nature_Of_Duty": "COMPUTER ANALYST / PROGRAMMER / OPERATOR",
          "Risk_class": 1
        },
        {
          "ID": 121,
          "Nature_Of_Duty": "CONSTABLE - Police",
          "Risk_class": 4
        },
        {
          "ID": 122,
          "Nature_Of_Duty": "CONSTRUCTION WORKER",
          "Risk_class": 3
        },
        {
          "ID": 124,
          "Nature_Of_Duty": "Consulting Engineers",
          "Risk_class": 1
        },
        {
          "ID": 125,
          "Nature_Of_Duty": "Contractors",
          "Risk_class": 2
        },
        {
          "ID": 126,
          "Nature_Of_Duty": "COURIER - Car / Truck",
          "Risk_class": 2
        },
        {
          "ID": 127,
          "Nature_Of_Duty": "Cradles or Safety lines",
          "Risk_class": 4
        },
        {
          "ID": 128,
          "Nature_Of_Duty": "Craftsmen-Creative Aspects",
          "Risk_class": 2
        },
        {
          "ID": 131,
          "Nature_Of_Duty": "CUSTOMS OFFICIAL",
          "Risk_class": 1
        },
        {
          "ID": 132,
          "Nature_Of_Duty": "Demolition Workers",
          "Risk_class": 4
        },
        {
          "ID": 133,
          "Nature_Of_Duty": "DENTIST",
          "Risk_class": 1
        },
        {
          "ID": 134,
          "Nature_Of_Duty": "DERMATOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 135,
          "Nature_Of_Duty": "Designer",
          "Risk_class": 1
        },
        {
          "ID": 136,
          "Nature_Of_Duty": "DETECTIVE - Private",
          "Risk_class": 3
        },
        {
          "ID": 137,
          "Nature_Of_Duty": "DIAMOND CUTTER / POLISHER",
          "Risk_class": 1
        },
        {
          "ID": 138,
          "Nature_Of_Duty": "DIETICIAN",
          "Risk_class": 1
        },
        {
          "ID": 139,
          "Nature_Of_Duty": "DIPLOMAT",
          "Risk_class": 1
        },
        {
          "ID": 140,
          "Nature_Of_Duty": "DISC JOCKEY",
          "Risk_class": 1
        },
        {
          "ID": 141,
          "Nature_Of_Duty": "Diver",
          "Risk_class": 4
        },
        {
          "ID": 142,
          "Nature_Of_Duty": "Dockyards-Miscellaneous",
          "Risk_class": 3
        },
        {
          "ID": 143,
          "Nature_Of_Duty": "DOCTOR",
          "Risk_class": 1
        },
        {
          "ID": 144,
          "Nature_Of_Duty": "DOMESTIC SERVANT",
          "Risk_class": 2
        },
        {
          "ID": 145,
          "Nature_Of_Duty": "DRAUGHTSMAN",
          "Risk_class": 1
        },
        {
          "ID": 146,
          "Nature_Of_Duty": "DRILLER",
          "Risk_class": 4
        },
        {
          "ID": 147,
          "Nature_Of_Duty": "DRIVER -  Ambulance",
          "Risk_class": 3
        },
        {
          "ID": 148,
          "Nature_Of_Duty": "Driver-Commercial Vehicles/Taxi/Auto Rickshaw",
          "Risk_class": 2
        },
        {
          "ID": 149,
          "Nature_Of_Duty": "Driving-Instructors and Examiners",
          "Risk_class": 2
        },
        {
          "ID": 150,
          "Nature_Of_Duty": "Driving-Messenger (no motorcycle)",
          "Risk_class": 2
        },
        {
          "ID": 151,
          "Nature_Of_Duty": "Dustmen and Road Cleaners",
          "Risk_class": 2
        },
        {
          "ID": 152,
          "Nature_Of_Duty": "EDITOR",
          "Risk_class": 1
        },
        {
          "ID": 153,
          "Nature_Of_Duty": "ELECTRICAL LINE WORKER",
          "Risk_class": 4
        },
        {
          "ID": 154,
          "Nature_Of_Duty": "Electrical Workers",
          "Risk_class": 4
        },
        {
          "ID": 155,
          "Nature_Of_Duty": "Electrical-Others",
          "Risk_class": 1
        },
        {
          "ID": 157,
          "Nature_Of_Duty": "Electricians",
          "Risk_class": 3
        },
        {
          "ID": 158,
          "Nature_Of_Duty": "Employees engaged in offshore activities like oil rigs, or in similar activity or occupation",
          "Risk_class": 4
        },
        {
          "ID": 159,
          "Nature_Of_Duty": "Energy Industry",
          "Risk_class": 3
        },
        {
          "ID": 160,
          "Nature_Of_Duty": "Energy Industry-Supervision",
          "Risk_class": 3
        },
        {
          "ID": 162,
          "Nature_Of_Duty": "ENGINEER - Mining",
          "Risk_class": 4
        },
        {
          "ID": 163,
          "Nature_Of_Duty": "Engineer-Others",
          "Risk_class": 2
        },
        {
          "ID": 164,
          "Nature_Of_Duty": "Entertainment Electronics-creative aspects",
          "Risk_class": 1
        },
        {
          "ID": 165,
          "Nature_Of_Duty": "Entertainment Electronics-No creative aspects",
          "Risk_class": 1
        },
        {
          "ID": 166,
          "Nature_Of_Duty": "Entertainment-Classical Musician",
          "Risk_class": 1
        },
        {
          "ID": 167,
          "Nature_Of_Duty": "Entertainment-Dancer",
          "Risk_class": 2
        },
        {
          "ID": 168,
          "Nature_Of_Duty": "Entertainment-Musician",
          "Risk_class": 1
        },
        {
          "ID": 169,
          "Nature_Of_Duty": "Entertainment-Performer",
          "Risk_class": 2
        },
        {
          "ID": 170,
          "Nature_Of_Duty": "Entertainment-Production and Administration",
          "Risk_class": 1
        },
        {
          "ID": 171,
          "Nature_Of_Duty": "Entertainment-Worker",
          "Risk_class": 3
        },
        {
          "ID": 172,
          "Nature_Of_Duty": "Entertainment-Writers and Composers",
          "Risk_class": 1
        },
        {
          "ID": 173,
          "Nature_Of_Duty": "ENTOMOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 174,
          "Nature_Of_Duty": "EXPLOSIVE WORKER",
          "Risk_class": 4
        },
        {
          "ID": 175,
          "Nature_Of_Duty": "Explosives Industry-Worker",
          "Risk_class": 4
        },
        {
          "ID": 176,
          "Nature_Of_Duty": "FACTORY MANAGER",
          "Risk_class": 1
        },
        {
          "ID": 177,
          "Nature_Of_Duty": "FACTORY WORKER",
          "Risk_class": 3
        },
        {
          "ID": 178,
          "Nature_Of_Duty": "Factory-Others",
          "Risk_class": 3
        },
        {
          "ID": 179,
          "Nature_Of_Duty": "FARM OWNER",
          "Risk_class": 1
        },
        {
          "ID": 180,
          "Nature_Of_Duty": "FARM WORKER",
          "Risk_class": 3
        },
        {
          "ID": 181,
          "Nature_Of_Duty": "Farmers",
          "Risk_class": 3
        },
        {
          "ID": 182,
          "Nature_Of_Duty": "Fibre or Textile Industry-Supervising Workers",
          "Risk_class": 2
        },
        {
          "ID": 183,
          "Nature_Of_Duty": "Fibre or Textile Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 184,
          "Nature_Of_Duty": "Filing Station Attendants",
          "Risk_class": 3
        },
        {
          "ID": 185,
          "Nature_Of_Duty": "Fine Arts, Clock and Jewellery Industry-Workers",
          "Risk_class": 1
        },
        {
          "ID": 186,
          "Nature_Of_Duty": "Fire Brigade",
          "Risk_class": 4
        },
        {
          "ID": 187,
          "Nature_Of_Duty": "Fire Brigade-Very Special Duties",
          "Risk_class": 4
        },
        {
          "ID": 188,
          "Nature_Of_Duty": "FIREMAN",
          "Risk_class": 4
        },
        {
          "ID": 189,
          "Nature_Of_Duty": "FISHERMAN - Deep Sea",
          "Risk_class": 4
        },
        {
          "ID": 190,
          "Nature_Of_Duty": "FISHERMAN - Inshore",
          "Risk_class": 2
        },
        {
          "ID": 191,
          "Nature_Of_Duty": "Fishery-Administration",
          "Risk_class": 1
        },
        {
          "ID": 192,
          "Nature_Of_Duty": "Fishing Boat Crew-Captain",
          "Risk_class": 4
        },
        {
          "ID": 193,
          "Nature_Of_Duty": "Fishing Boat Crew-Others",
          "Risk_class": 4
        },
        {
          "ID": 194,
          "Nature_Of_Duty": "Fishing Industry-Miscellaneous",
          "Risk_class": 3
        },
        {
          "ID": 195,
          "Nature_Of_Duty": "Fishing Industry-Worker",
          "Risk_class": 3
        },
        {
          "ID": 196,
          "Nature_Of_Duty": "Floor-Worker",
          "Risk_class": 2
        },
        {
          "ID": 197,
          "Nature_Of_Duty": "Food Industry-Direct Contact",
          "Risk_class": 3
        },
        {
          "ID": 198,
          "Nature_Of_Duty": "Food Industry-Others",
          "Risk_class": 3
        },
        {
          "ID": 199,
          "Nature_Of_Duty": "Food Processing-Worker",
          "Risk_class": 3
        },
        {
          "ID": 200,
          "Nature_Of_Duty": "Food Production-Dangerous",
          "Risk_class": 4
        },
        {
          "ID": 201,
          "Nature_Of_Duty": "FOREMAN - Non hazardous industry",
          "Risk_class": 1
        },
        {
          "ID": 202,
          "Nature_Of_Duty": "Forestry-Others",
          "Risk_class": 2
        },
        {
          "ID": 203,
          "Nature_Of_Duty": "Forestry-Worker",
          "Risk_class": 3
        },
        {
          "ID": 204,
          "Nature_Of_Duty": "Funeral Services - Administrative",
          "Risk_class": 1
        },
        {
          "ID": 205,
          "Nature_Of_Duty": "Funeral Services-Miscellaneous",
          "Risk_class": 2
        },
        {
          "ID": 206,
          "Nature_Of_Duty": "FURNACEMAN  Supervisory",
          "Risk_class": 2
        },
        {
          "ID": 207,
          "Nature_Of_Duty": "FURNACEMAN  Worker",
          "Risk_class": 4
        },
        {
          "ID": 208,
          "Nature_Of_Duty": "Furniture Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 209,
          "Nature_Of_Duty": "GARDENER - Supervisory",
          "Risk_class": 1
        },
        {
          "ID": 210,
          "Nature_Of_Duty": "GARDENER - Worker",
          "Risk_class": 3
        },
        {
          "ID": 211,
          "Nature_Of_Duty": "Gas and Heating-Others",
          "Risk_class": 4
        },
        {
          "ID": 212,
          "Nature_Of_Duty": "Gas and Heating-Workers",
          "Risk_class": 4
        },
        {
          "ID": 213,
          "Nature_Of_Duty": "GEOLOGIST - No explosives",
          "Risk_class": 1
        },
        {
          "ID": 214,
          "Nature_Of_Duty": "Glass - Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 215,
          "Nature_Of_Duty": "Glass-Industry-Others",
          "Risk_class": 3
        },
        {
          "ID": 216,
          "Nature_Of_Duty": "Glass-Industry-Workers with dangerous duties",
          "Risk_class": 4
        },
        {
          "ID": 217,
          "Nature_Of_Duty": "GOLDSMITH",
          "Risk_class": 2
        },
        {
          "ID": 220,
          "Nature_Of_Duty": "Hand gliding as an occupation",
          "Risk_class": 4
        },
        {
          "ID": 221,
          "Nature_Of_Duty": "Hang gliding",
          "Risk_class": 4
        },
        {
          "ID": 222,
          "Nature_Of_Duty": "Harbour-Others",
          "Risk_class": 3
        },
        {
          "ID": 223,
          "Nature_Of_Duty": "Harbour-Worker",
          "Risk_class": 3
        },
        {
          "ID": 224,
          "Nature_Of_Duty": "HEAVY MACHINARY WORKERS",
          "Risk_class": 4
        },
        {
          "ID": 225,
          "Nature_Of_Duty": "Heavy Vehicle Drivers",
          "Risk_class": 3
        },
        {
          "ID": 226,
          "Nature_Of_Duty": "HOMEOPATH",
          "Risk_class": 1
        },
        {
          "ID": 227,
          "Nature_Of_Duty": "Hotel and Catering-Administration",
          "Risk_class": 2
        },
        {
          "ID": 228,
          "Nature_Of_Duty": "Hotel and Catering-Others",
          "Risk_class": 2
        },
        {
          "ID": 229,
          "Nature_Of_Duty": "Hotel and Catering-Workers",
          "Risk_class": 2
        },
        {
          "ID": 230,
          "Nature_Of_Duty": "Househusband",
          "Risk_class": 1
        },
        {
          "ID": 231,
          "Nature_Of_Duty": "Housekeeping",
          "Risk_class": 2
        },
        {
          "ID": 232,
          "Nature_Of_Duty": "Housewife",
          "Risk_class": 1
        },
        {
          "ID": 233,
          "Nature_Of_Duty": "Ice hockey",
          "Risk_class": 4
        },
        {
          "ID": 234,
          "Nature_Of_Duty": "Ice Skating",
          "Risk_class": 4
        },
        {
          "ID": 235,
          "Nature_Of_Duty": "Individual engaged in racing in wheels or horseback",
          "Risk_class": 4
        },
        {
          "ID": 236,
          "Nature_Of_Duty": "Industrial Workers",
          "Risk_class": 3
        },
        {
          "ID": 237,
          "Nature_Of_Duty": "Industry Others-Miscellaneous Workers",
          "Risk_class": 2
        },
        {
          "ID": 238,
          "Nature_Of_Duty": "INSURANCE BROKER",
          "Risk_class": 1
        },
        {
          "ID": 239,
          "Nature_Of_Duty": "Insurance-Agent",
          "Risk_class": 1
        },
        {
          "ID": 240,
          "Nature_Of_Duty": "Interpreter",
          "Risk_class": 1
        },
        {
          "ID": 241,
          "Nature_Of_Duty": "Investigator - On field",
          "Risk_class": 2
        },
        {
          "ID": 242,
          "Nature_Of_Duty": "Investigator - Other",
          "Risk_class": 1
        },
        {
          "ID": 243,
          "Nature_Of_Duty": "IT-Staff",
          "Risk_class": 1
        },
        {
          "ID": 244,
          "Nature_Of_Duty": "Jockeys",
          "Risk_class": 4
        },
        {
          "ID": 245,
          "Nature_Of_Duty": "JOURNALIST - Other",
          "Risk_class": 2
        },
        {
          "ID": 246,
          "Nature_Of_Duty": "JOURNALIST - War risk",
          "Risk_class": 4
        },
        {
          "ID": 247,
          "Nature_Of_Duty": "JUDGE",
          "Risk_class": 1
        },
        {
          "ID": 248,
          "Nature_Of_Duty": "LABORATORY - Assistant / Technician",
          "Risk_class": 1
        },
        {
          "ID": 249,
          "Nature_Of_Duty": "Labourer",
          "Risk_class": 3
        },
        {
          "ID": 250,
          "Nature_Of_Duty": "LATHE OPERATOR",
          "Risk_class": 1
        },
        {
          "ID": 251,
          "Nature_Of_Duty": "Laundry Service-Others",
          "Risk_class": 2
        },
        {
          "ID": 252,
          "Nature_Of_Duty": "Laundry Service-Worker",
          "Risk_class": 2
        },
        {
          "ID": 253,
          "Nature_Of_Duty": "Lawyers",
          "Risk_class": 1
        },
        {
          "ID": 254,
          "Nature_Of_Duty": "Leather-Workmanship-Workers",
          "Risk_class": 2
        },
        {
          "ID": 255,
          "Nature_Of_Duty": "LECTURER",
          "Risk_class": 1
        },
        {
          "ID": 256,
          "Nature_Of_Duty": "Legal Profession",
          "Risk_class": 1
        },
        {
          "ID": 257,
          "Nature_Of_Duty": "LIFT OPERATOR",
          "Risk_class": 2
        },
        {
          "ID": 258,
          "Nature_Of_Duty": "Loggers",
          "Risk_class": 4
        },
        {
          "ID": 259,
          "Nature_Of_Duty": "Lorry Driver",
          "Risk_class": 3
        },
        {
          "ID": 260,
          "Nature_Of_Duty": "Lumber mill workers",
          "Risk_class": 4
        },
        {
          "ID": 261,
          "Nature_Of_Duty": "MAGISTRATE",
          "Risk_class": 1
        },
        {
          "ID": 262,
          "Nature_Of_Duty": "Management-Others",
          "Risk_class": 1
        },
        {
          "ID": 263,
          "Nature_Of_Duty": "Marketing",
          "Risk_class": 1
        },
        {
          "ID": 264,
          "Nature_Of_Duty": "MARTIAL ARTS",
          "Risk_class": 1
        },
        {
          "ID": 265,
          "Nature_Of_Duty": "MASON / STONEMASON",
          "Risk_class": 3
        },
        {
          "ID": 266,
          "Nature_Of_Duty": "Matchmaker",
          "Risk_class": 1
        },
        {
          "ID": 267,
          "Nature_Of_Duty": "Mechanics",
          "Risk_class": 3
        },
        {
          "ID": 268,
          "Nature_Of_Duty": "Medical Administration",
          "Risk_class": 1
        },
        {
          "ID": 269,
          "Nature_Of_Duty": "Medical Assistance",
          "Risk_class": 1
        },
        {
          "ID": 270,
          "Nature_Of_Duty": "Medical Doctors",
          "Risk_class": 1
        },
        {
          "ID": 271,
          "Nature_Of_Duty": "Medical-Miscellaneous",
          "Risk_class": 1
        },
        {
          "ID": 272,
          "Nature_Of_Duty": "Medical-Others",
          "Risk_class": 1
        },
        {
          "ID": 273,
          "Nature_Of_Duty": "Metal Industry-Others",
          "Risk_class": 3
        },
        {
          "ID": 274,
          "Nature_Of_Duty": "Metal Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 275,
          "Nature_Of_Duty": "Metal Industry-Workers with dangerous duties",
          "Risk_class": 4
        },
        {
          "ID": 276,
          "Nature_Of_Duty": "METEOROLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 277,
          "Nature_Of_Duty": "MIDWIFE",
          "Risk_class": 1
        },
        {
          "ID": 278,
          "Nature_Of_Duty": "MINER",
          "Risk_class": 4
        },
        {
          "ID": 279,
          "Nature_Of_Duty": "MINER - Administration",
          "Risk_class": 1
        },
        {
          "ID": 280,
          "Nature_Of_Duty": "MODEL",
          "Risk_class": 1
        },
        {
          "ID": 281,
          "Nature_Of_Duty": "Mountaineering",
          "Risk_class": 4
        },
        {
          "ID": 282,
          "Nature_Of_Duty": "Mountaineers",
          "Risk_class": 4
        },
        {
          "ID": 283,
          "Nature_Of_Duty": "Musical Instrument Specialists",
          "Risk_class": 1
        },
        {
          "ID": 284,
          "Nature_Of_Duty": "MUSICIAN",
          "Risk_class": 1
        },
        {
          "ID": 285,
          "Nature_Of_Duty": "Navigation-Administration",
          "Risk_class": 3
        },
        {
          "ID": 286,
          "Nature_Of_Duty": "Navigation-Inland Water",
          "Risk_class": 4
        },
        {
          "ID": 287,
          "Nature_Of_Duty": "Navigation-Off Shore-No Special Duties",
          "Risk_class": 4
        },
        {
          "ID": 288,
          "Nature_Of_Duty": "Navigation-Off Shore-Ship Crew",
          "Risk_class": 4
        },
        {
          "ID": 289,
          "Nature_Of_Duty": "Navigation-Others",
          "Risk_class": 3
        },
        {
          "ID": 290,
          "Nature_Of_Duty": "Navigation-Pilots and Lighthousemen",
          "Risk_class": 4
        },
        {
          "ID": 291,
          "Nature_Of_Duty": "Navy",
          "Risk_class": 4
        },
        {
          "ID": 292,
          "Nature_Of_Duty": "NURSE",
          "Risk_class": 1
        },
        {
          "ID": 293,
          "Nature_Of_Duty": "OBSTETRICIAN / GYNAECOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 294,
          "Nature_Of_Duty": "Office Executives",
          "Risk_class": 1
        },
        {
          "ID": 295,
          "Nature_Of_Duty": "Office Workers and Commercial Clerks",
          "Risk_class": 1
        },
        {
          "ID": 296,
          "Nature_Of_Duty": "Office Workers-Craftsmen",
          "Risk_class": 2
        },
        {
          "ID": 297,
          "Nature_Of_Duty": "OIL RIG WORKER - Manual",
          "Risk_class": 4
        },
        {
          "ID": 298,
          "Nature_Of_Duty": "OIL RIG WORKER - Non Manual e.g.. Engineer",
          "Risk_class": 3
        },
        {
          "ID": 299,
          "Nature_Of_Duty": "Oil Rig-Flying Personnel",
          "Risk_class": 4
        },
        {
          "ID": 300,
          "Nature_Of_Duty": "Oil Rig-Management and Control",
          "Risk_class": 4
        },
        {
          "ID": 301,
          "Nature_Of_Duty": "Oil Rig-Others",
          "Risk_class": 4
        },
        {
          "ID": 302,
          "Nature_Of_Duty": "Oil Rig-Workers with dangerous duties",
          "Risk_class": 4
        },
        {
          "ID": 303,
          "Nature_Of_Duty": "Oil Rig-Workers with very dangerous duties",
          "Risk_class": 4
        },
        {
          "ID": 304,
          "Nature_Of_Duty": "On-site engineers",
          "Risk_class": 3
        },
        {
          "ID": 305,
          "Nature_Of_Duty": "Optical Industry-Others",
          "Risk_class": 1
        },
        {
          "ID": 306,
          "Nature_Of_Duty": "Optical Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 307,
          "Nature_Of_Duty": "OPTOMETRIST / OPTICIAN / TECHNICIAN",
          "Risk_class": 1
        },
        {
          "ID": 308,
          "Nature_Of_Duty": "ORTHODONTIST",
          "Risk_class": 1
        },
        {
          "ID": 309,
          "Nature_Of_Duty": "ORTHOPAEDIC SURGEON",
          "Risk_class": 1
        },
        {
          "ID": 311,
          "Nature_Of_Duty": "Paper Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 312,
          "Nature_Of_Duty": "PATHOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 313,
          "Nature_Of_Duty": "Personal Car Drivers",
          "Risk_class": 2
        },
        {
          "ID": 314,
          "Nature_Of_Duty": "PETROL STATION PUMP ATTENDANT",
          "Risk_class": 3
        },
        {
          "ID": 315,
          "Nature_Of_Duty": "PHARMACIST/CHEMIST",
          "Risk_class": 1
        },
        {
          "ID": 316,
          "Nature_Of_Duty": "PHOTOGRAPHER",
          "Risk_class": 1
        },
        {
          "ID": 317,
          "Nature_Of_Duty": "Photography-Technical",
          "Risk_class": 2
        },
        {
          "ID": 318,
          "Nature_Of_Duty": "PHYSIOTHERAPIST",
          "Risk_class": 1
        },
        {
          "ID": 320,
          "Nature_Of_Duty": "PILOT Harbour",
          "Risk_class": 4
        },
        {
          "ID": 321,
          "Nature_Of_Duty": "PIPELINE WORKER",
          "Risk_class": 3
        },
        {
          "ID": 322,
          "Nature_Of_Duty": "Plastics Industry-Supervision",
          "Risk_class": 2
        },
        {
          "ID": 323,
          "Nature_Of_Duty": "Plastics Industry-Worker",
          "Risk_class": 3
        },
        {
          "ID": 324,
          "Nature_Of_Duty": "PLUMBER",
          "Risk_class": 1
        },
        {
          "ID": 325,
          "Nature_Of_Duty": "POLICE PROFESSIONALS",
          "Risk_class": 4
        },
        {
          "ID": 326,
          "Nature_Of_Duty": "Polo playing",
          "Risk_class": 4
        },
        {
          "ID": 327,
          "Nature_Of_Duty": "PORTER",
          "Risk_class": 2
        },
        {
          "ID": 328,
          "Nature_Of_Duty": "POST OFFICE  - Clerical Staff",
          "Risk_class": 1
        },
        {
          "ID": 329,
          "Nature_Of_Duty": "Postal Service-Others",
          "Risk_class": 1
        },
        {
          "ID": 330,
          "Nature_Of_Duty": "Postal Service-Workers",
          "Risk_class": 2
        },
        {
          "ID": 331,
          "Nature_Of_Duty": "POSTMAN",
          "Risk_class": 1
        },
        {
          "ID": 332,
          "Nature_Of_Duty": "Pottery Worker",
          "Risk_class": 3
        },
        {
          "ID": 333,
          "Nature_Of_Duty": "Pottery Worker with dangerous duties",
          "Risk_class": 3
        },
        {
          "ID": 334,
          "Nature_Of_Duty": "Press Coverage-No foreign assignments",
          "Risk_class": 1
        },
        {
          "ID": 335,
          "Nature_Of_Duty": "PRIEST",
          "Risk_class": 1
        },
        {
          "ID": 336,
          "Nature_Of_Duty": "Printing Industry-Others",
          "Risk_class": 1
        },
        {
          "ID": 337,
          "Nature_Of_Duty": "Printing Industry-Workers",
          "Risk_class": 2
        },
        {
          "ID": 338,
          "Nature_Of_Duty": "Printing Industry-Workers with dangerous duties",
          "Risk_class": 4
        },
        {
          "ID": 340,
          "Nature_Of_Duty": "PROFESSIONAL SPORTSMAN",
          "Risk_class": 3
        },
        {
          "ID": 341,
          "Nature_Of_Duty": "Professionals in car/bike racing",
          "Risk_class": 4
        },
        {
          "ID": 342,
          "Nature_Of_Duty": "Property - Landlord",
          "Risk_class": 1
        },
        {
          "ID": 343,
          "Nature_Of_Duty": "Property Owner",
          "Risk_class": 1
        },
        {
          "ID": 344,
          "Nature_Of_Duty": "PSYCHIATRIST",
          "Risk_class": 1
        },
        {
          "ID": 345,
          "Nature_Of_Duty": "PSYCHOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 346,
          "Nature_Of_Duty": "Public Health Service",
          "Risk_class": 1
        },
        {
          "ID": 347,
          "Nature_Of_Duty": "Public Health Service-Pest Control",
          "Risk_class": 3
        },
        {
          "ID": 348,
          "Nature_Of_Duty": "Public Services-Not Office",
          "Risk_class": 1
        },
        {
          "ID": 349,
          "Nature_Of_Duty": "Public Services-Others",
          "Risk_class": 1
        },
        {
          "ID": 350,
          "Nature_Of_Duty": "Public Services-Prison",
          "Risk_class": 2
        },
        {
          "ID": 351,
          "Nature_Of_Duty": "Public Services-Security [Armed - No Personal Security]",
          "Risk_class": 4
        },
        {
          "ID": 352,
          "Nature_Of_Duty": "Public Services-Security [Not Armed]",
          "Risk_class": 4
        },
        {
          "ID": 353,
          "Nature_Of_Duty": "Public Services-Security [Personal Security]",
          "Risk_class": 4
        },
        {
          "ID": 354,
          "Nature_Of_Duty": "QUARRY WORKER - Blasting",
          "Risk_class": 4
        },
        {
          "ID": 355,
          "Nature_Of_Duty": "QUARRY WORKER - Non Blasting",
          "Risk_class": 3
        },
        {
          "ID": 357,
          "Nature_Of_Duty": "Radio and Television",
          "Risk_class": 1
        },
        {
          "ID": 358,
          "Nature_Of_Duty": "RADIOLOGIST / X-RAY TECHNICIAN",
          "Risk_class": 1
        },
        {
          "ID": 359,
          "Nature_Of_Duty": "RAILWAY LINESMAN - high voltage",
          "Risk_class": 4
        },
        {
          "ID": 360,
          "Nature_Of_Duty": "RAILWAY PROFESSIONAL",
          "Risk_class": 1
        },
        {
          "ID": 361,
          "Nature_Of_Duty": "RAILWAY WORKER",
          "Risk_class": 3
        },
        {
          "ID": 362,
          "Nature_Of_Duty": "Railways-Drivers and Guards",
          "Risk_class": 3
        },
        {
          "ID": 363,
          "Nature_Of_Duty": "Railways-Others",
          "Risk_class": 1
        },
        {
          "ID": 364,
          "Nature_Of_Duty": "Railway-Supervising Workers",
          "Risk_class": 2
        },
        {
          "ID": 365,
          "Nature_Of_Duty": "Railway-Workers",
          "Risk_class": 3
        },
        {
          "ID": 366,
          "Nature_Of_Duty": "Railway-Workers with less dangerous duties",
          "Risk_class": 3
        },
        {
          "ID": 367,
          "Nature_Of_Duty": "REFINERY WORKER - oil / gas",
          "Risk_class": 4
        },
        {
          "ID": 368,
          "Nature_Of_Duty": "REFINERY WORKER - sugarcane",
          "Risk_class": 2
        },
        {
          "ID": 369,
          "Nature_Of_Duty": "Retail and Sales - back office",
          "Risk_class": 1
        },
        {
          "ID": 370,
          "Nature_Of_Duty": "Retail and Sales-Others",
          "Risk_class": 2
        },
        {
          "ID": 371,
          "Nature_Of_Duty": "Retired",
          "Risk_class": 1
        },
        {
          "ID": 372,
          "Nature_Of_Duty": "River Rafting",
          "Risk_class": 4
        },
        {
          "ID": 373,
          "Nature_Of_Duty": "Road Safety-Officer",
          "Risk_class": 3
        },
        {
          "ID": 374,
          "Nature_Of_Duty": "Road Transport-Others",
          "Risk_class": 3
        },
        {
          "ID": 375,
          "Nature_Of_Duty": "ROOF TILER",
          "Risk_class": 2
        },
        {
          "ID": 376,
          "Nature_Of_Duty": "Rubber Industry-Others",
          "Risk_class": 1
        },
        {
          "ID": 377,
          "Nature_Of_Duty": "Rubber Industry-Workers",
          "Risk_class": 2
        },
        {
          "ID": 378,
          "Nature_Of_Duty": "Rubber Industry-Workers with dangerous duties",
          "Risk_class": 3
        },
        {
          "ID": 379,
          "Nature_Of_Duty": "Salesmen",
          "Risk_class": 1
        },
        {
          "ID": 380,
          "Nature_Of_Duty": "Salvage worker",
          "Risk_class": 4
        },
        {
          "ID": 381,
          "Nature_Of_Duty": "Scientists-predominantly indoor",
          "Risk_class": 1
        },
        {
          "ID": 382,
          "Nature_Of_Duty": "Scientists-predominantly indoor and  humanistic",
          "Risk_class": 1
        },
        {
          "ID": 383,
          "Nature_Of_Duty": "SECRETARY / TYPIST",
          "Risk_class": 1
        },
        {
          "ID": 384,
          "Nature_Of_Duty": "Security Service-Guards [Armed - No Personal Security]",
          "Risk_class": 4
        },
        {
          "ID": 385,
          "Nature_Of_Duty": "Security Service-Guards [Not Armed]",
          "Risk_class": 4
        },
        {
          "ID": 386,
          "Nature_Of_Duty": "Security Service-Guards [Personal Security]",
          "Risk_class": 4
        },
        {
          "ID": 387,
          "Nature_Of_Duty": "SHEET METAL WORKER",
          "Risk_class": 3
        },
        {
          "ID": 388,
          "Nature_Of_Duty": "Ship Building-Others",
          "Risk_class": 3
        },
        {
          "ID": 389,
          "Nature_Of_Duty": "Ship Building-Workers",
          "Risk_class": 3
        },
        {
          "ID": 390,
          "Nature_Of_Duty": "Ship crews",
          "Risk_class": 4
        },
        {
          "ID": 391,
          "Nature_Of_Duty": "Shopkeepers and Traders",
          "Risk_class": 1
        },
        {
          "ID": 392,
          "Nature_Of_Duty": "SINGER",
          "Risk_class": 1
        },
        {
          "ID": 393,
          "Nature_Of_Duty": "Skiing",
          "Risk_class": 4
        },
        {
          "ID": 395,
          "Nature_Of_Duty": "Sports-Coach",
          "Risk_class": 3
        },
        {
          "ID": 396,
          "Nature_Of_Duty": "Sports-Miscellaneous",
          "Risk_class": 3
        },
        {
          "ID": 397,
          "Nature_Of_Duty": "Steeple Jacks",
          "Risk_class": 4
        },
        {
          "ID": 398,
          "Nature_Of_Duty": "STUDENT",
          "Risk_class": 1
        },
        {
          "ID": 399,
          "Nature_Of_Duty": "STUNT MAN",
          "Risk_class": 4
        },
        {
          "ID": 400,
          "Nature_Of_Duty": "Stunt pilots",
          "Risk_class": 4
        },
        {
          "ID": 401,
          "Nature_Of_Duty": "Stunt show participants",
          "Risk_class": 4
        },
        {
          "ID": 402,
          "Nature_Of_Duty": "SURGEON",
          "Risk_class": 1
        },
        {
          "ID": 403,
          "Nature_Of_Duty": "SURVEYOR",
          "Risk_class": 1
        },
        {
          "ID": 404,
          "Nature_Of_Duty": "Synthetic Material-Worker",
          "Risk_class": 2
        },
        {
          "ID": 405,
          "Nature_Of_Duty": "TAILOR",
          "Risk_class": 1
        },
        {
          "ID": 406,
          "Nature_Of_Duty": "TEACHER",
          "Risk_class": 1
        },
        {
          "ID": 407,
          "Nature_Of_Duty": "Teacher-normal career",
          "Risk_class": 1
        },
        {
          "ID": 408,
          "Nature_Of_Duty": "Teacher-Others [not predominantly artistic]",
          "Risk_class": 1
        },
        {
          "ID": 409,
          "Nature_Of_Duty": "Teacher-upscaled career",
          "Risk_class": 1
        },
        {
          "ID": 410,
          "Nature_Of_Duty": "Technicians",
          "Risk_class": 2
        },
        {
          "ID": 411,
          "Nature_Of_Duty": "Technicians-Others",
          "Risk_class": 1
        },
        {
          "ID": 412,
          "Nature_Of_Duty": "Telecommunication",
          "Risk_class": 1
        },
        {
          "ID": 413,
          "Nature_Of_Duty": "Telecommunication-Others",
          "Risk_class": 2
        },
        {
          "ID": 414,
          "Nature_Of_Duty": "Textile Industry-Creative Aspects",
          "Risk_class": 2
        },
        {
          "ID": 415,
          "Nature_Of_Duty": "Textile Industry-Others",
          "Risk_class": 1
        },
        {
          "ID": 416,
          "Nature_Of_Duty": "Textile Industry-Workers",
          "Risk_class": 2
        },
        {
          "ID": 417,
          "Nature_Of_Duty": "Tobacco Industry-Others",
          "Risk_class": 2
        },
        {
          "ID": 418,
          "Nature_Of_Duty": "Tobacco Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 419,
          "Nature_Of_Duty": "Tourism",
          "Risk_class": 1
        },
        {
          "ID": 420,
          "Nature_Of_Duty": "Traders-Others",
          "Risk_class": 2
        },
        {
          "ID": 421,
          "Nature_Of_Duty": "TRAFFIC OFFICER / INSPECTOR / WARDEN",
          "Risk_class": 2
        },
        {
          "ID": 422,
          "Nature_Of_Duty": "TRAWLERMAN - Deep-sea",
          "Risk_class": 4
        },
        {
          "ID": 423,
          "Nature_Of_Duty": "TRAWLERMAN - Inshore",
          "Risk_class": 3
        },
        {
          "ID": 424,
          "Nature_Of_Duty": "TUTOR",
          "Risk_class": 1
        },
        {
          "ID": 425,
          "Nature_Of_Duty": "Typist",
          "Risk_class": 1
        },
        {
          "ID": 426,
          "Nature_Of_Duty": "Tyre Industry-Workers",
          "Risk_class": 3
        },
        {
          "ID": 427,
          "Nature_Of_Duty": "UNDERWRITER",
          "Risk_class": 1
        },
        {
          "ID": 428,
          "Nature_Of_Duty": "Unemployed",
          "Risk_class": 1
        },
        {
          "ID": 429,
          "Nature_Of_Duty": "Unskilled Labourers",
          "Risk_class": 3
        },
        {
          "ID": 430,
          "Nature_Of_Duty": "UROLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 431,
          "Nature_Of_Duty": "Vehicle Industry-Assembly and Maintenance",
          "Risk_class": 3
        },
        {
          "ID": 432,
          "Nature_Of_Duty": "Vehicle-Tester",
          "Risk_class": 3
        },
        {
          "ID": 433,
          "Nature_Of_Duty": "VETERINARIAN",
          "Risk_class": 2
        },
        {
          "ID": 434,
          "Nature_Of_Duty": "Veterinary Doctors",
          "Risk_class": 2
        },
        {
          "ID": 435,
          "Nature_Of_Duty": "WAITER / WAITRESS",
          "Risk_class": 3
        },
        {
          "ID": 436,
          "Nature_Of_Duty": "Water Supply-Miscellaneous",
          "Risk_class": 1
        },
        {
          "ID": 437,
          "Nature_Of_Duty": "Water Supply-Workers",
          "Risk_class": 1
        },
        {
          "ID": 438,
          "Nature_Of_Duty": "Weapons Production",
          "Risk_class": 4
        },
        {
          "ID": 439,
          "Nature_Of_Duty": "WEAVER",
          "Risk_class": 1
        },
        {
          "ID": 440,
          "Nature_Of_Duty": "WELDER",
          "Risk_class": 3
        },
        {
          "ID": 441,
          "Nature_Of_Duty": "Winter Sports",
          "Risk_class": 4
        },
        {
          "ID": 442,
          "Nature_Of_Duty": "Wood Processing-Workers",
          "Risk_class": 3
        },
        {
          "ID": 443,
          "Nature_Of_Duty": "Wood Processing-Workers with dangerous duties",
          "Risk_class": 3
        },
        {
          "ID": 444,
          "Nature_Of_Duty": "Workers (bodily)-General",
          "Risk_class": 2
        },
        {
          "ID": 445,
          "Nature_Of_Duty": "Workers [With no special hazards]",
          "Risk_class": 3
        },
        {
          "ID": 446,
          "Nature_Of_Duty": "Wrestlers",
          "Risk_class": 4
        },
        {
          "ID": 447,
          "Nature_Of_Duty": "X-RAY TECHNICIAN / RADIOLOGIST",
          "Risk_class": 1
        },
        {
          "ID": 448,
          "Nature_Of_Duty": "ZOOLOGIST",
          "Risk_class": 1
        }
      ]

    constructor(private router: Router, private componentService: ComponentService, private sumService: SumService, private infoService: InfoService, private pincodeService: PincodeService, private quoteService: QuoteService,
        private dataService: DataService, private cancerdata: CancerDataService, private hospitalmaster: HospitalcashService, private abhimaster: AbhiService, private toastController: ToastController,
        private activeoneService: ActiveoneService, private activeonemasterService: ActiveonemasterService) {
        this.policyType = localStorage.getItem('policytype');
        this.tenure = localStorage.getItem('tenure');
        this.pincode = localStorage.getItem('pincode');
        let p: any = localStorage.getItem('roomfactor');
        if (p == null) {
            this.roomfactor = 1
        }
        else {
            this.roomfactor = parseInt(p);
        }
        if (this.roomfactor == 0) {
            this.roomfactor = 1
        }
        this.roomfactor = parseInt(p);
        this.setInitial();
        this.daughters = this.modelarray.daughters;
        this.sons = this.modelarray.sons;
        this.zone = localStorage.getItem('zone')
        this.activeoneService.info.plan = localStorage.getItem('planname')
        this.setMaster();
        localStorage.setItem('plan', this.plan)
    }

    setInitial() {
        if (localStorage.getItem('tenure') == null) {
            this.tenure = '1 Year'
        }
        if (localStorage.getItem('plan') == null) {
            this.router.navigateByUrl('tabs/tab1/products');
        }
        if (localStorage.getItem('roomtypestirng') == null) {
            localStorage.setItem('roomtypestring', 'Base SI');
            this.roomtypestring = 'Base SI';
            this.roomfactor = 1;
        }
        if (this.roomfactor == 0) {
            this.roomfactor = 1;
        }
        if (localStorage.getItem('policytype') == null) {
            this.policyType = 'multiIndividual';
            localStorage.setItem('policyType2', 'Multi Individual')

        }
        if (localStorage.getItem('policytype') == 'familyFloater') {
            this.policyType = 'familyFloater';
            this.modelarray = this.modelarray2;
            this.shownote = true;
            setTimeout(() => {
                this.shownote = false;
            }, 1500)

            localStorage.setItem('policyType2', 'FamilyFloater')
        }
        if (localStorage.getItem('policytype') == 'multiIndividual') {
            this.policyType = 'multiIndividual';
            localStorage.setItem('policyType2', 'Multi Individual')
        }

        this.roomtypestring = localStorage.getItem('roomtypestring');
        if (localStorage.getItem('policytype') == 'familyFloater') {
            localStorage.setItem('policyType2', 'FamilyFloater')
        } else {
            localStorage.setItem('policyType2', 'Multi Individual')
        }
    }

    ngOnInit(): void {
        this.setMaster();
        this.componentService.isChanged.subscribe((change: boolean) => {
            if (change) {
                this.setMaster();

            }
        })
    }

    setMaster() {

        if (this.activeoneService.info.plan == 'NXT') {
            this.master = this.activeonemasterService.nxtmaster;
            this.plan = 'Activ One NXT Plan';
            this.plancode = 1;
            for (let i = 0; i < this.modelarray.length; i++) {
                this.modelarray[i].pre_existing = null;
            }
        }

        if (this.activeoneService.info.plan == 'VYTL') {
            this.master = this.activeonemasterService.vytlmaster;
            this.plan = 'Activ One Vytl';
            for (let i = 0; i < this.modelarray.length; i++) {
                this.modelarray[i].pre_existing = 'NCHR';
            }
            this.plancode = 2;
        }
        if (this.activeoneService.info.plan == 'MASS') {

            this.master = this.activeonemasterService.massmaster;
            this.plan = 'Activ One Max';
            this.plancode = 3;

            for (let i = 0; i < this.modelarray.length; i++) {
                this.modelarray[i].chronic = null;
            }
        }

        if (this.plancode == 2) {

            for (let i = 0; i < this.modelarray.length; i++) {
                this.modelarray[i].chronic = 'NCHR'
            }
        }
        this.findSI(1)
    }

    setPincode() {
        let y: any;
        y = this.pincodeService.pincodemaster.filter((x: any) => {
            if (x['pincode'] == this.pincode)
                return x;
        }
        );
        //

        setTimeout(() => {
            if (y[0]['abhI_ZONE_MAP'] == 'Z001') {
                this.zone = 'Z001';
                localStorage.setItem('zone', this.zone);
                localStorage.setItem('pincode', this.pincode)
            }
            if (y[0]['abhI_ZONE_MAP'] == 'Z002') {
                this.zone = 'Z002';
                localStorage.setItem('zone', this.zone)
                localStorage.setItem('pincode', this.pincode)

            }
            if (y[0]['abhI_ZONE_MAP'] == 'Z003') {
                this.zone = 'Z003';
                localStorage.setItem('zone', this.zone)
                localStorage.setItem('pincode', this.pincode)

            }
            this.findSI(1);
            this.findFinalPremium();


        }, 400)


    }

    preselect(id: any) {
        for (let i = 0; i < this.modelarray.length; i++) {
            this.modelarray[i].preselected = false;
        }
        this.modelarray[id].preselected = true;
    }

    focusInput(member: any) {
        document.getElementById(member.member).focus();
    }

    removePreselect() {
        for (let i = 0; i < this.modelarray.length; i++) {
            this.modelarray[i].preselected = false;
        }

    }

    selectmember(id: any) {
        for (let i = 0; i < this.modelarray.length; i++) {
            this.modelarray[i].preselected = false;
        }

        if (this.pincode == undefined) {
            this.pincodeerror = true;
            setTimeout(() => { this.pincodeerror = false }, 1500);
            return;
        }


        if (this.policyType == 'multiIndividual') {

            if (this.modelarray[id].selected == false) {
                if (this.modelarray[id].age !== '') {
                    this.modelarray[id].selected = true;
                    if (this.modelarray[id].iskid == true) {
                    }
                    if (this.modelarray[id].iskid == false) {
                        this.adultcount++;
                        console.log('adultcount >> ' + this.adultcount)
                    }
                }
            }
            else {
                if (this.deleteselected) {
                    this.modelarray[id].selected = false;
                    this.modelarray[id].age = '';
                    if (this.modelarray[id].iskid == false) {
                        this.adultcount--;
                        console.log('adultcount >> ' + this.adultcount)
                    }
                    if (this.modelarray[id].iskid == true) {

                        this.kidcounter--;
                        if(this.modelarray[id].iskid==true){
                            if (this.modelarray[id].gender == 'Female' && this.daughtercounter >= 1) { this.daughtercounter-- }
                            if (this.modelarray[id].gender == 'Male' && this.soncounter >= 1) { this.soncounter-- }
                        }
        
                        if (this.kidcounter == -1) { this.kidcounter = 0 }
                        console.log('kidcounter >> ' + this.kidcounter);
                        this.modelarray[id].premium = 0;
                        this.modelarray[id].age = '';
                        if (this.modelarray[id].gender == 'Female') {
                            this.daughtercounter--;
                            if (this.daughtercounter == -1) {
                                this.daughtercounter = 0
                            }
                        }
                        if (this.modelarray[id].gender == 'Male') {
                            this.soncounter--;
                            if (this.soncounter == -1) {
                                this.soncounter = 0
                            }
                        }
                    }
                }
                this.deleteselected = false;

            }
            setTimeout(() => { this.addClicked = false; }, 1500)
            if (!this.modelarray[id].selected && this.modelarray[id].premium !== '') {
                console.log('removed ' + this.modelarray[id].member + '  >>>> ' + this.modelarray[id].premium);
                this.modelarray[id].premium = '';
            }

            this.setMembersString()
            this.findSI(1);

        }
        if (this.policyType == 'familyFloater') {
            if(id==1 && this.modelarray[0].selected==false){
                this.selectadult1error=true;
                setTimeout(()=>{
                this.selectadult1error=false;
                },1500)
                location.reload();
                return;
            }

            if (this.modelarray[id].selected == false) {
                if (this.modelarray[id].age !== '') {
                    this.modelarray[id].selected = true;
                    if (this.modelarray[id].iskid == false) { this.adultcount++ }
                    
                    console.log('adultcount >> ' + this.adultcount)
                    console.log('kidcount >> ' + this.kidcounter)
                }
            }
            else {
                if (this.deleteselected ) {

                    this.modelarray[id].selected = false;
                    this.modelarray[id].age == '';
                    if (this.modelarray[id].iskid == false) {
                        this.adultcount--;
                        console.log('adultcount >> ' + this.adultcount)
                    }
                    if (this.modelarray[id].iskid == true) {
                        
                        if (this.kidcounter>= 1) {
                            this.kidcounter--;
                            
                        }
                        console.log('kidcounter >> ' + this.kidcounter);
                        this.modelarray[id].premium = 0;
                        this.modelarray[id].age = '';
                        if (this.modelarray[id].gender == 'Female') { if (this.daughtercounter>=1 ) { this.daughtercounter-- } }
                        if (this.modelarray[id].gender == 'Male') { if (this.soncounter>=1) { this.soncounter-- } }

                    }
                }
                this.deleteselected = false;

            }
            setTimeout(() => { this.addClicked = false; }, 1500)

            if ((this.adultcount * 1 + this.kidcounter * 1) <= 1) {
                this.premiumshow = 0;
                for (let i = 0; i < this.modelarray[i].length; i++) {
                    this.modelarray[i].premium = 0;
                }
                this.findSI(1);
            }
            this.setMembersString()

                this.findSI(1);
            

        }

    }


    addson() {
        if (this.soncounter < 4 && this.soncounter >= 0) {
            this.soncounter++;
            let id = 5;
            id = id * 1 + this.soncounter;
            this.modelarray[id].masterselected = true;
            this.selectmember(id)
        }

        this.kidcounter = 0;
        this.kidcounter = this.daughtercounter * 1 + this.soncounter * 1;
        console.log('kidcounter >> ' + this.kidcounter)
    }

    removeson() {
        if (this.soncounter <= 3 && this.soncounter >= 0) {
            this.soncounter;
            let id = 5;
            id = id * 1 + this.soncounter;
            this.modelarray[id].masterselected = false;
            this.modelarray[id].premium = 0;

            if (this.modelarray[id].age == '') {
                this.soncounter--;
                if (this.soncounter == -1) {
                    this.soncounter = 0;
                }
            }
            else {
                this.selectmember(id)
            }
        }
        this.kidcounter = 0;
        this.kidcounter = this.daughtercounter * 1 + this.soncounter * 1;
        console.log('kidcounter >> ' + this.kidcounter)

    }

    adddaughter() {
        if (this.daughtercounter < 4 && this.daughtercounter >= 0) {
            this.daughtercounter++;
            let id = 1;
            id = id * 1 + this.daughtercounter;
            this.modelarray[id].masterselected = true;
            this.selectmember(id)
        }
        this.kidcounter = 0;
        this.kidcounter = this.daughtercounter * 1 + this.soncounter * 1;
        console.log('kidcounter >> ' + this.kidcounter)
    }

    removedaughter() {
        if (this.daughtercounter <= 3 && this.daughtercounter >= 0) {

            let id = 1;
            id = id * 1 + this.daughtercounter;
            this.modelarray[id].masterselected = false;
            this.modelarray[id].premium = 0;
            if (this.modelarray[id].age == '') {
                this.daughtercounter--;
                if (this.daughtercounter == -1) {
                    this.daughtercounter = 0;
                }
            }
            else {
                this.deleteselected=true;
                setTimeout(()=>{
                    this.deleteselected=false;
                },200)
                
                this.selectmember(id)
            }
        }
        this.kidcounter = 0;
        this.kidcounter = this.daughtercounter * 1 + this.soncounter * 1;
        console.log('kidcounter >> ' + this.kidcounter)
    }

    setGender(value: any) {

        this.modelarray[0]['gender'] = value.detail.value;
        if (value.detail.value == 'Female') {
            this.modelarray[1]['gender'] = 'Male'
        }
    }

    setPolicyType(type: any) {
        if (localStorage.getItem('policytype') == 'multiIndividual') {
            localStorage.setItem('policytype', 'familyFloater');
            this.modelarray = this.modelarray2;
            localStorage.setItem('policyType2', 'FamilyFloater');
            this.policyType = 'familyFloater';
            location.reload()

            this.shownote = true;
            setTimeout(() => {
                this.shownote = false;
            }, 1500)

        }
        else {
            this.policyType = 'multiIndividual'
            localStorage.setItem('policytype', 'multiIndividual');
            this.modelarray = this.modelarraycopy;
            localStorage.setItem('policyType2', 'Multi Individual')
            location.reload()

        }
        this.findSI(1);
        setTimeout(() => {
            this.findFinalPremium();
        }, 400)

    }

    setAge(event: any, id: any) {
        this.modelarray[id].age = event.detail.value;
        this.selectmember(id);
        this.findSI(1);

        let maxage = 0;
        if (this.modelarray[0].age !== null && this.modelarray[1].age == null) { maxage = this.modelarray[0].age }
        else if (this.modelarray[0].age == null && this.modelarray[1].age !== null) { maxage = this.modelarray[1].age }
        else {

            if (this.modelarray[1].age > this.modelarray[0].age) { maxage = this.modelarray[1].age }
            else {
                maxage = this.modelarray[0].age;
            }
        };

        this.ageArray2 = [];
        this.ageArray2.push(this.ageArray.filter((x: any) => {
            if (x.value > maxage)
                return x;
        })
        )
        this.ageArray2 = this.ageArray2[0];

    }


    setRoomTypeFloater(event: any) {
        this.roomfactor = event.detail.value;
        let p: any = this.roomfactor.toString()
        localStorage.setItem('roomfactor', p);
        if (this.roomfactor == 1) { localStorage.setItem('roomtypestring', 'Base SI') }

        if (this.roomfactor == 0.85) { localStorage.setItem('roomtypestring', 'Shared') }
        if (this.roomfactor == 0.925) { localStorage.setItem('roomtypestring', 'Single AC') }
        this.findSI(1);
        this.findFinalPremium();

    }
    setRoomType(event: any,member:any) {
        this.modelarray[member.id].roomfactor = event.detail.value;
        let p: any = this.roomfactor.toString()
        localStorage.setItem('roomfactor', p);
        if (this.roomfactor == 1) { this.modelarray[member.id].roomtypestirng='Base SI'}
        if (this.roomfactor == 0.85) { this.modelarray[member.id].roomtypestring='Shared'  }
        if (this.roomfactor == 0.925) { this.modelarray[member.id].roomtypestring='Single Ac'  }
        this.findSI(1);
        this.findFinalPremium();

    }


    findSI(id: any) {
        // plancode 2 for vytl
        if (this.plancode == 2) {
            if (this.policyType == 'familyFloater' && (this.adultcount * 1 + this.kidcounter * 1) <= 1) {
                this.masterpremium = 0;
                return;
            }

            let y: any;
            let premiumpre: number = 0;
            this.premiumshow = 0;
            this.masterpremium = 0;

            if (this.policyType == 'multiIndividual') {
                for (let i = 0; i < this.modelarray.length; i++) {

                    if (this.modelarray[i].selected) {
                        console.log(this.zone)

                        y = this.master.filter((x: any) => {
                            if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                            )
                                return x;
                        }
                        );
                        console.log(y);
                        premiumpre = y[0][this.modelarray[i].sum] * 1;
                        console.log('>>>  ' + this.modelarray[i].sum)
                        console.log(premiumpre)
                        premiumpre = premiumpre * 1 + this.modelarray[i].dieseasepremium;
                        console.log('diesease premium addded ' + this.modelarray[i].dieseasepremium)
                        premiumpre = premiumpre * this.modelarray[i].roomfactor;
                        console.log('roomfactor >>' + this.modelarray[i].roomfactor)
                        //it will store base premium for every member;
                        this.modelarray[i].premium = premiumpre;
                        console.log(this.modelarray[i].member + ' premium after room and zone facotr >>> ' + this.modelarray[i].premium)
                        if (this.modelarray[i].perclaimdeductable) {
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                            this.coverArray[1].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)
                            console.log('per claim applied ' + this.modelarray[i].perclaimfactor)
                        }
                        if (this.modelarray[i].chroniccare) {
                            // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                            this.coverArray[2].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)
                            console.log('chronic care applied ' + this.modelarray[i].chroniccarefactor)
                        }
                        if (this.modelarray[i].specificdiesease) {
                            // premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                            this.coverArray[3].premium = ((premiumpre - pre).toFixed(2));
                            console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                            console.log('specific diesease applied ' + this.modelarray[i].specificdieseasefactor)
                        }
                        if (this.modelarray[i].pedwaiting) {
                            // premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                            this.coverArray[4].premium = ((premiumpre - pre).toFixed(2));
                            console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                            console.log('ped waiting applied ' + this.modelarray[i].pedwaitingfactor)
                        }
                        if (this.modelarray[i].cancerbooster) {
                            // premiumpre = premiumpre * 1.03;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1.03;
                            this.coverArray[5].premium = ((premiumpre - pre).toFixed(2));
                            console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                            console.log('cancer booster applied ')
                        }
                        if (this.modelarray[i].compassionatevisit) {
                            // premiumpre = premiumpre * 1 + 325 * 1;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1 + 325 * 1;
                            this.coverArray[6].premium = ((premiumpre - pre).toFixed(2));
                            console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                            console.log('compassionate visit applied ')
                        }
                        if (this.modelarray[i].annualscreening) {
                            // premiumpre = premiumpre * 1 + 225 * 1;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1 + 225 * 1;
                            this.coverArray[7].premium = ((premiumpre - pre).toFixed(2));
                            console.log(this.coverArray[7].name + ' ' + this.coverArray[7].premium)

                            console.log('annual Screening applied ')
                        }
                        if (this.modelarray[i].secondmedical) {
                            // premiumpre = premiumpre * 1 + 100 * 1;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1 + 100 * 1;
                            this.coverArray[11].premium = ((premiumpre - pre).toFixed(2));
                            console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                            console.log('second medical applied ')
                        }
                        this.modelarray[i].premium = premiumpre;
                        this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 1;
                        console.log(this.premiumshow)

                        if (this.tenure == '2 Year') {
                            let a: number = parseInt(this.modelarray[i].age);
                            a++;
                            this.modelarray[i].age = a.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for second year')
                            this.premiumshow = this.premiumshow * 1 - this.modelarray[i].premium * 1;
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre)
                            premiumpre = premiumpre * 1 + this.modelarray[i].dieseasepremium;
                            console.log('diesease premium addded for 2nd year ' + this.modelarray[i].dieseasepremium)

                            premiumpre = premiumpre * this.modelarray[i].roomfactor;    //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4))
                            if (this.modelarray[i].perclaimdeductable) {
                                // premiumpre = premiumpre * this.modelarray[i].perclaimfactor;

                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                this.coverArray[1].premium = parseInt(this.coverArray[1].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                                console.log('per claim applied ' + this.modelarray[i].perclaimfactor)
                            }

                            if (this.modelarray[i].chroniccare) {

                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.coverArray[2].premium = parseInt(this.coverArray[2].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                console.log('chronic care applied ' + this.modelarray[i].chroniccarefactor)
                            }
                            if (this.modelarray[i].specificdiesease) {
                                // premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                this.coverArray[3].premium = parseInt(this.coverArray[3].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                                console.log('specific diesease applied ' + this.modelarray[i].specificdieseasefactor)
                            }
                            if (this.modelarray[i].pedwaiting) {
                                // premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                this.coverArray[4].premium = parseInt(this.coverArray[4].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                                console.log('ped waiting applied ' + this.modelarray[i].pedwaitingfactor)
                            }
                            if (this.modelarray[i].cancerbooster) {
                                // premiumpre = premiumpre * 1.03;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.03;
                                this.coverArray[5].premium = parseInt(this.coverArray[5].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                                console.log('cancer booster applied ')
                            }
                            if (this.modelarray[i].compassionatevisit) {
                                // premiumpre = premiumpre * 1 + 325 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 325 * 1;
                                this.coverArray[6].premium = parseInt(this.coverArray[6].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                                console.log('compassionate visit applied ')
                            }
                            if (this.modelarray[i].annualscreening) {
                                // premiumpre = premiumpre * 1 + 225 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 225 * 1;
                                this.coverArray[7].premium = parseInt(this.coverArray[7].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[7].name + ' ' + this.coverArray[7].premium)

                                console.log('annual Screening applied ')
                            }
                            if (this.modelarray[i].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = parseInt(this.coverArray[11].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }

                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after room and zone facotr >>>' + this.modelarray[i].premium)
                            this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 1;
                            console.log('premiumshow >>>' + this.premiumshow)
                            let d: number = parseInt(this.modelarray[i].age);
                            d--;
                            this.modelarray[i].age = d.toString();
                        }

                        if (this.tenure == '3 Year') {
                            this.premiumshow = this.premiumshow * 1 - this.modelarray[i].premium * 1;
                            let a: number = parseInt(this.modelarray[i].age);
                            a++;
                            this.modelarray[i].age = a.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for 2nd year')
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre)
                            premiumpre = premiumpre * 1 + this.modelarray[i].dieseasepremium;
                            console.log('diesease premium addded for 2nd year ' + this.modelarray[i].dieseasepremium)

                            premiumpre = premiumpre * this.modelarray[i].roomfactor;      //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4))

                            if (this.modelarray[i].perclaimdeductable) {
                                // premiumpre = premiumpre * this.modelarray[i].perclaimfactor;

                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                this.coverArray[1].premium = parseInt(this.coverArray[1].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                                console.log('per claim applied ' + this.modelarray[i].perclaimfactor)
                            }
                            if (this.modelarray[i].chroniccare) {
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.coverArray[2].premium = parseInt(this.coverArray[2].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                console.log('chronic care applied ' + this.modelarray[i].chroniccarefactor)
                            }
                            if (this.modelarray[i].specificdiesease) {
                                // premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                this.coverArray[3].premium = parseInt(this.coverArray[3].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                                console.log('specific diesease applied ' + this.modelarray[i].specificdieseasefactor)
                            }
                            if (this.modelarray[i].pedwaiting) {
                                // premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].setPedWaitingFactor;
                                this.coverArray[4].premium = parseInt(this.coverArray[4].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                                console.log('ped waiting applied ' + this.modelarray[i].pedwaitingfactor)
                            }
                            if (this.modelarray[i].cancerbooster) {
                                // premiumpre = premiumpre * 1.03;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.03;
                                this.coverArray[5].premium = parseInt(this.coverArray[5].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                                console.log('cancer booster applied ')
                            }
                            if (this.modelarray[i].compassionatevisit) {
                                // premiumpre = premiumpre * 1 + 325 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 325 * 1;
                                this.coverArray[6].premium = parseInt(this.coverArray[6].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                                console.log('compassionate visit applied ')
                            }
                            if (this.modelarray[i].annualscreening) {
                                // premiumpre = premiumpre * 1 + 225 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 225 * 1;
                                this.coverArray[7].premium = parseInt(this.coverArray[7].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[7].name + ' ' + this.coverArray[7].premium)

                                console.log('annual Screening applied ')
                            }
                            if (this.modelarray[i].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = parseInt(this.coverArray[11].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }


                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after room and zone facotr >>>' + this.modelarray[i].premium)

                            let b: number = parseInt(this.modelarray[i].age);
                            b++;
                            this.modelarray[i].age = b.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for third year')
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre);
                            premiumpre = premiumpre * 1 + this.modelarray[i].dieseasepremium;
                            console.log('diesease premium addded for 3rd year ' + this.modelarray[i].dieseasepremium)

                            premiumpre = premiumpre * this.modelarray[i].roomfactor;      //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4))
                            if (this.modelarray[i].perclaimdeductable) {
                                // premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                this.coverArray[1].premium = parseInt(this.coverArray[1].premium) * 1 + parseInt((premiumpre - pre).toFixed(2)) * 1;
                                console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                                console.log('per claim applied ' + this.modelarray[i].perclaimfactor)
                            }
                            if (this.modelarray[i].chroniccare) {
                                // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.coverArray[2].premium = parseInt(this.coverArray[2].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                console.log('chronic care applied ' + this.modelarray[i].chroniccarefactor)
                            }
                            if (this.modelarray[i].specificdiesease) {
                                // premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                this.coverArray[3].premium = parseInt(this.coverArray[3].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                                console.log('specific diesease applied ' + this.modelarray[i].specificdieseasefactor)
                            }
                            if (this.modelarray[i].pedwaiting) {
                                // premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                this.coverArray[4].premium = parseInt(this.coverArray[4].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                                console.log('ped waiting applied ' + this.modelarray[i].pedwaitingfactor)
                            }
                            if (this.modelarray[i].cancerbooster) {
                                // premiumpre = premiumpre * 1.03;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.03;
                                this.coverArray[5].premium = parseInt(this.coverArray[5].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                                console.log('cancer booster applied ')
                            }
                            if (this.modelarray[i].compassionatevisit) {
                                // premiumpre = premiumpre * 1 + 325 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 325 * 1;
                                this.coverArray[6].premium = parseInt(this.coverArray[6].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)
                                console.log('compassionate visit applied ')
                            }
                            if (this.modelarray[i].annualscreening) {
                                // premiumpre = premiumpre * 1 + 225 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 225 * 1;
                                this.coverArray[7].premium = parseInt(this.coverArray[7].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[7].name + ' ' + this.coverArray[7].premium)

                                console.log('annual Screening applied ')
                            }
                            if (this.modelarray[i].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = parseInt(this.coverArray[11].premium) * 1 + parseInt((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }


                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after room and zone facotr >>>' + this.modelarray[i].premium)
                            this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 1;

                            console.log('premiumshow >>>' + this.premiumshow)
                            let c: number = parseInt(this.modelarray[i].age);
                            c--;
                            c--;
                            this.modelarray[i].age = c.toString()
                        }


                        if (this.policyType == 'familyFloater') {
                            let counter = 0;
                            this.premiumshow = 0;
                            for (let i = 0; i < this.modelarray.length; i++) {
                                if (this.modelarray[i].selected == true) {
                                    if (counter == 0) {
                                        this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 0.95;
                                        console.log(this.modelarray[i].member + '  ' + this.modelarray[i].premium + ' 5% ff discount applied')
                                    }
                                    if (counter == 1) {
                                        this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 0.85;
                                        console.log(this.modelarray[i].member + '  ' + this.modelarray[i].premium + ' 15% ff discount applied')
                                    }
                                    if (counter >= 2) {

                                        this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 0.60;
                                        console.log(this.modelarray[i].member + '  ' + this.modelarray[i].premium + ' 40% ff discount applied')
                                    }

                                    counter++;
                                    // this.premiumshow=this.premiumshow*1+this.modelarray[i].premium*1;
                                }
                            }
                        }
                        if (this.policyType == 'familyFloater') {
                            if ((this.adultcount * 1 + this.kidcounter * 1) == 1) {
                                this.premiumshow = 0;
                                return;
                            }
                        }
                    }
                }
            }

            if (this.policyType == 'familyFloater') {

                console.log('------------------')
                console.log('------------------')

                let isfiveapplied: boolean = false;
                let isfifteenapplied: boolean = false;
                let isfive2applied: boolean = false;
                let isfifteen2applied: boolean = false;
                let isfive3applied: boolean = false;
                let isfifteen3applied: boolean = false;
                let isfive33applied: boolean = false;
                let isfifteen33applied: boolean = false;


                for (let i = 0; i < this.modelarray.length; i++) {
                    console.log('------')

                    if (this.modelarray[i].selected) {
                        console.log(this.zone)

                        y = this.master.filter((x: any) => {
                            if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                            )
                                return x;
                        }
                        );

                        console.log(y);
                        premiumpre = y[0][this.modelarray[i].sum] * 1;
                        console.log('>>>  ' + this.modelarray[i].sum)
                        console.log(premiumpre);

                        if (isfiveapplied == false) {
                            premiumpre = premiumpre * 0.95;
                            console.log(this.modelarray[i].member + ' 5% discount applied ' + premiumpre)
                            isfiveapplied = true;
                        }
                        else if (isfifteenapplied == false) {
                            premiumpre = premiumpre * 0.85;
                            console.log(this.modelarray[i].member + ' 15% discount applied ' + premiumpre);
                            isfifteenapplied = true;
                        }
                        else {
                            premiumpre = premiumpre * 0.60;
                            console.log(this.modelarray[i].member + ' 40% discount applied ' + premiumpre)
                        }

                        premiumpre = premiumpre * 1 + this.modelarray[i].dieseasepremium;
                        console.log('diesease premium addded ' + this.modelarray[i].dieseasepremium)
                        premiumpre = premiumpre * this.modelarray[i].roomfactor;
                        console.log('roomfactor >>' + this.roomfactor)
                        this.modelarray[i].premium = premiumpre;
                        console.log(this.modelarray[i].member + ' for 1 year >>> ' + this.modelarray[i].premium)

                        // let base = premiumpre / (this.adultcount * 1 + this.kidcounter * 1);
                        // this.modelarray[i].premium = base;
                        if (this.modelarray[i].chroniccare) {
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                            this.modelarray[i].ccpremium = premiumpre - pre;
                            console.log('chronic care factor ' + this.modelarray[i].chroniccarefactor)
                            console.log(this.modelarray[i].member + '  chronic care applied ' + premiumpre)
                        }

                        this.modelarray[i].premium = premiumpre;

                        if (this.tenure == '2 Year') {
                            // isfive2applied = false;
                            // isfifteen2applied = false;
                            let a: number = parseInt(this.modelarray[i].age);
                            a++;
                            this.modelarray[i].age = a.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for second year')
                            this.premiumshow = this.premiumshow * 1 - this.modelarray[i].premium * 1;
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre)
                            if (isfive2applied == false) {
                                premiumpre = premiumpre * 0.95;
                                console.log(this.modelarray[i].member + ' 5% discount applied ' + premiumpre)
                                isfive2applied = true;
                            }
                            else if (isfifteen2applied == false) {
                                premiumpre = premiumpre * 0.85;
                                console.log(this.modelarray[i].member + ' 15% discount applied ' + premiumpre);
                                isfifteen2applied = true;
                            }
                            else {
                                premiumpre = premiumpre * 0.60;
                                console.log(this.modelarray[i].member + ' 40% discount applied ' + premiumpre)

                            }

                            premiumpre = premiumpre * 1 + this.modelarray[i].dieseasepremium;
                            console.log('diesease premium addded for 2nd year ' + this.modelarray[i].dieseasepremium)

                            premiumpre = premiumpre * this.modelarray[i].roomfactor;    //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4))

                            if (this.modelarray[i].chroniccare) {
                                let pre = premiumpre
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.modelarray[i].ccpremium = (this.modelarray[i].ccpremium) * 1 + (premiumpre - pre) * 1;

                                console.log('chronic care factor ' + this.modelarray[i].chroniccarefactor)
                                console.log(this.modelarray[i].member + '  chronic care applied ' + this.modelarray[i].premium)
                            }

                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after 2 year >>>' + this.modelarray[i].premium)
                            premiumpre = premiumpre * 1 + this.modelarray[i].premium * 1;
                            console.log('premiumpre >>>' + premiumpre)
                            let d: number = parseInt(this.modelarray[i].age);
                            d--;
                            this.modelarray[i].age = d.toString();
                        }

                        if (this.tenure == '3 Year') {

                            this.premiumshow = this.premiumshow * 1 - this.modelarray[i].premium * 1;
                            let a: number = parseInt(this.modelarray[i].age);
                            a++;
                            this.modelarray[i].age = a.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for 2nd year')
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre);
                            if (isfive3applied == false) {
                                premiumpre = premiumpre * 0.95;
                                console.log(this.modelarray[i].member + ' 5% discount applied ' + premiumpre)
                                isfiveapplied = true;
                            }
                            else if (isfifteen3applied == false) {
                                premiumpre = premiumpre * 0.85;
                                console.log(this.modelarray[i].member + ' 15% discount applied ' + premiumpre);
                                isfifteenapplied = true;
                            }
                            else {
                                premiumpre = premiumpre * 0.60;
                                console.log(this.modelarray[i].member + ' 40% discount applied ' + premiumpre)

                            }

                            premiumpre = premiumpre * 1 + this.modelarray[i].dieseasepremium;
                            console.log('diesease premium addded for 2nd year ' + this.modelarray[i].dieseasepremium)

                            premiumpre = premiumpre * this.modelarray[i].roomfactor;      //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4))
                            // this.modelarray[i].premium = premiumpre;

                            if (this.modelarray[i].chroniccare) {
                                // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                let pre = premiumpre
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.modelarray[i].ccpremium = (this.modelarray[i].ccpremium) * 1 + (premiumpre - pre) * 1;

                                console.log('chronic care factor ' + this.modelarray[i].chroniccarefactor)
                                console.log(this.modelarray[i].member + '  chronic care applied ' + this.modelarray[i].premium)
                            }

                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after room and zone facotr >>>' + this.modelarray[i].premium)
                            let b: number = parseInt(this.modelarray[i].age);
                            b++;
                            this.modelarray[i].age = b.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for third year')
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre);
                            isfiveapplied = false;
                            isfifteenapplied = false;

                            if (isfive33applied == false) {
                                premiumpre = premiumpre * 0.95;
                                console.log(this.modelarray[i].member + ' 5% discount applied ' + premiumpre)
                                isfiveapplied = true;
                            }
                            else if (isfifteen33applied == false) {
                                premiumpre = premiumpre * 0.85;
                                console.log(this.modelarray[i].member + ' 15% discount applied ' + premiumpre);
                                isfifteenapplied = true;
                            }
                            else {
                                premiumpre = premiumpre * 0.60;
                                console.log(this.modelarray[i].member + ' 40% discount applied ' + premiumpre)
                            }
                            premiumpre = premiumpre * 1 + this.modelarray[i].dieseasepremium;
                            console.log('diesease premium addded for 3rd year ' + this.modelarray[i].dieseasepremium)

                            premiumpre = premiumpre * this.modelarray[i].roomfactor;      //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4))

                            if (this.modelarray[i].chroniccare) {
                                //    premiumpre =premiumpre * this.modelarray[i].chroniccarefactor;
                                let pre = premiumpre
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.modelarray[i].ccpremium = (this.modelarray[i].ccpremium) * 1 + (premiumpre - pre) * 1;

                                console.log('chronic care factor ' + this.modelarray[i].chroniccarefactor)
                                console.log(this.modelarray[i].member + '  chronic care applied ' + this.modelarray[i].premium)
                            }


                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after room and zone facotr >>>' + this.modelarray[i].premium)
                            premiumpre = premiumpre * 1 + this.modelarray[i].premium * 1;
                            console.log('premiumpre >>>' + premiumpre)
                            let c: number = parseInt(this.modelarray[i].age);
                            c--;
                            c--;
                            this.modelarray[i].age = c.toString()
                        }

                    }
                }

                this.premiumshow = 0;

                for (let i = 0; i < this.modelarray.length; i++) {
                    if (this.modelarray[i].selected == true) {
                        this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium;
                    }
                }
                for (let i = 0; i < this.modelarray.length; i++) {
                    if (this.modelarray[i].chroniccare == true) {
                        this.coverArray[2].premium = this.coverArray[2].premium * 1 + this.modelarray[i].ccpremium;
                    }
                }

                console.log('premiumshow  >> ' + this.premiumshow)

                if (this.modelarray[0].perclaimdeductable) {
                    let pre = this.premiumshow;
                    this.premiumshow = this.premiumshow * this.modelarray[0].perclaimfactor;
                    this.coverArray[1].premium = parseInt((this.premiumshow - pre).toFixed(2)) * 1;
                    console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)
                    // this.premiumshow = this.premiumshow * this.modelarray[0].perclaimfactor;
                    console.log('per claim applied ' + this.modelarray[0].perclaimfactor)
                }

                if (this.modelarray[0].specificdiesease) {
                    // this.premiumshow = this.premiumshow * this.modelarray[0].specificdieseasefactor;
                    let pre = this.premiumshow;
                    this.premiumshow = this.premiumshow * this.modelarray[0].specificdieseasefactor;
                    this.coverArray[3].premium = parseInt((this.premiumshow - pre).toFixed(2)) * 1;
                    console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)
                    console.log('specific diesease applied ' + this.modelarray[0].specificdieseasefactor)
                    console.log('premiumshow after specific diesease >> ' + this.premiumshow)
                }
                if (this.modelarray[0].pedwaiting) {

                    let pre = this.premiumshow;
                    this.premiumshow = this.premiumshow * this.modelarray[0].pedwaitingfactor;
                    this.coverArray[4].premium = parseInt((this.premiumshow - pre).toFixed(2)) * 1;
                    console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                    // this.premiumshow = this.premiumshow * this.modelarray[0].pedwaitingfactor;
                    console.log('ped waiting applied ' + this.modelarray[0].pedwaitingfactor)
                }
                if (this.modelarray[0].cancerbooster) {
                    let pre = this.premiumshow;
                    this.premiumshow = this.premiumshow * this.modelarray[0] * 1.03;
                    this.coverArray[1].premium = parseInt((this.premiumshow - pre).toFixed(2)) * 1;
                    console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                    // this.premiumshow = this.premiumshow * 1.03;
                    console.log('cancer booster applied ')
                }
                if (this.modelarray[0].compassionatevisit) {
                    let tenurefactor = 1;
                    if (this.tenure == '2 Year') { tenurefactor = 2 }
                    if (this.tenure == '3 Year') { tenurefactor = 3 }
                    this.coverArray[6].premium = 325 * tenurefactor
                    this.premiumshow = this.premiumshow * 1 + 325 * 1 * tenurefactor;
                    console.log('compassionate visit applied ')
                }

                console.log('premiumshow ' + this.premiumshow)

                if ((this.adultcount * 1 + this.kidcounter * 1) == 1) {
                    this.premiumshow = 0;
                    return;
                }
            }
            setTimeout(() => {
                console.log(this.coverArray)
                console.log(this.premiumshow)
                this.findFinalPremium()
            }, 400)
            localStorage.setItem('sum', '')
        }

        if (this.plancode == 3) {

            if (this.policyType == 'familyFloater' && (this.adultcount * 1 + this.kidcounter * 1) <= 1) {
                this.masterpremium = 0;
                return;
            }
            let y: any;

            let premiumpre: number = 0;
            this.premiumshow = 0;
            this.masterpremium = 0;

            if (this.policyType == 'multiIndividual') {
                for (let i = 0; i < this.modelarray.length; i++) {

                    if (this.modelarray[i].selected) {
                        console.log(this.zone)
                        console.log('i >> ' + i)
                        y = this.master.filter((x: any) => {
                            if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                            )
                                return x;
                        }
                        );

                        console.log(y);
                        premiumpre = y[0][this.modelarray[i].sum] * 1;
                        console.log(premiumpre)
                        premiumpre = premiumpre * this.modelarray[i].roomfactor;
                        console.log('roomfactor >>' + this.roomfactor)
                        //it will store base premium for every member;
                        console.log(premiumpre)

                        if (this.modelarray[i].perclaimdeductable) {
                            // premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                            this.coverArray[1].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                            console.log('per claim applied ' + this.modelarray[i].perclaimfactor)
                        }
                        if (this.modelarray[i].chroniccare) {
                            // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                            this.coverArray[2].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                            console.log('chronic care applied ' + this.modelarray[i].chroniccarefactor)
                        }
                        if (this.modelarray[i].specificdiesease) {
                            // premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                            this.coverArray[3].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                            console.log('specific diesease applied ' + this.modelarray[i].specificdieseasefactor)
                        }
                        if (this.modelarray[i].pedwaiting) {
                            // premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                            let pre = premiumpre;
                            premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                            this.coverArray[4].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                            console.log('ped waiting applied ' + this.modelarray[i].pedwaitingfactor)
                        }
                        if (this.modelarray[i].cancerbooster) {
                            // premiumpre = premiumpre * 1.03;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1.03;
                            this.coverArray[5].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                            console.log('cancer booster applied ')
                        }
                        if (this.modelarray[i].compassionatevisit) {
                            // premiumpre = premiumpre * 1 + 325 * 1;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1 + 325 * 1;
                            this.coverArray[6].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                            console.log('compassionate visit applied ')
                        }
                        if (this.modelarray[0].secondmedical) {
                            // premiumpre = premiumpre * 1 + 100 * 1;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1 + 100 * 1;
                            this.coverArray[11].premium = ((premiumpre - pre).toFixed(2));
                            console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                            console.log('second medical applied ')
                        }

                        if (this.modelarray[i].annualscreening) {
                            // premiumpre = premiumpre * 1 + 225 * 1;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1 + 225 * 1;
                            this.coverArray[7].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[7].name + ' ' + this.coverArray[7].premium)

                            console.log('annual Screening applied ')
                        }
                        if (this.modelarray[i].secondmedical) {
                            // premiumpre = premiumpre * 1 + 100 * 1;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1 + 100 * 1;
                            this.coverArray[11].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                            console.log('second medical applied ')
                        }

                        if (this.modelarray[i].durableequipment) {
                            // premiumpre = premiumpre * 1.1;
                            let pre = premiumpre;
                            premiumpre = premiumpre * 1.1;
                            this.coverArray[13].premium = (premiumpre - pre).toFixed(2);
                            console.log(this.coverArray[13].name + ' ' + this.coverArray[13].premium)

                            console.log('durable equipment applied ')
                        }


                        this.modelarray[i].premium = premiumpre;
                        console.log(this.modelarray[i].member + ' premium after room and zone facotr >>> ' + this.modelarray[i].premium);

                        this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 1;
                        console.log(this.premiumshow)

                        if (this.tenure == '2 Year') {
                            let a: number = parseInt(this.modelarray[i].age);
                            a++;
                            this.modelarray[i].age = a.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for second year')
                            this.premiumshow = this.premiumshow * 1 - this.modelarray[i].premium * 1;
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre)
                            premiumpre = premiumpre * this.modelarray[id].roomfactor;    //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4));

                            if (this.modelarray[i].perclaimdeductable) {
                                // premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                this.coverArray[1].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                                console.log('per claim applied ' + this.modelarray[i].perclaimfactor)
                            }
                            if (this.modelarray[i].chroniccare) {
                                23
                                // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.coverArray[2].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                console.log('chronic care applied ' + this.modelarray[i].chroniccarefactor)
                            }
                            if (this.modelarray[i].specificdiesease) {
                                // premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                this.coverArray[3].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                                console.log('specific diesease applied ' + this.modelarray[i].specificdieseasefactor)
                            }
                            if (this.modelarray[i].pedwaiting) {
                                // premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                this.coverArray[4].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                                console.log('ped waiting applied ' + this.modelarray[i].pedwaitingfactor)
                            }
                            if (this.modelarray[i].cancerbooster) {
                                // premiumpre = premiumpre * 1.03;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.03;
                                this.coverArray[5].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                                console.log('cancer booster applied ')
                            }
                            if (this.modelarray[0].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = ((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }

                            if (this.modelarray[i].compassionatevisit) {
                                // premiumpre = premiumpre * 1 + 325 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 325 * 1;
                                this.coverArray[6].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                                console.log('compassionate visit applied ')
                            }
                            if (this.modelarray[i].annualscreening) {
                                // premiumpre = premiumpre * 1 + 225 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 225 * 1;
                                this.coverArray[7].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[7].name + ' ' + this.coverArray[7].premium)

                                console.log('annual Screening applied ')
                            }
                            if (this.modelarray[i].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }

                            if (this.modelarray[i].durableequipment) {
                                // premiumpre = premiumpre * 1.1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.1;
                                this.coverArray[13].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[13].name + ' ' + this.coverArray[13].premium)
                                console.log('durable equipment applied ')
                            }

                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after room and zone facotr >>>' + this.modelarray[i].premium)
                            this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 1;
                            console.log('premiumshow >>>' + this.premiumshow)
                            let d: number = parseInt(this.modelarray[i].age);
                            d--;
                            this.modelarray[i].age = d.toString();
                        }

                        if (this.tenure == '3 Year') {
                            this.premiumshow = this.premiumshow * 1 - this.modelarray[i].premium * 1;
                            let a: number = parseInt(this.modelarray[i].age);
                            a++;
                            this.modelarray[i].age = a.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for  year')
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre)
                            premiumpre = premiumpre * this.modelarray[id].roomfactor;      //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4))

                            if (this.modelarray[i].perclaimdeductable) {
                                // premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                this.coverArray[1].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                                console.log('per claim applied ' + this.modelarray[i].perclaimfactor)
                            }
                            if (this.modelarray[i].chroniccare) {
                                // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.coverArray[2].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                console.log('chronic care applied ' + this.modelarray[i].chroniccarefactor)
                            }
                            if (this.modelarray[i].specificdiesease) {
                                // premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                this.coverArray[3].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                                console.log('specific diesease applied ' + this.modelarray[i].specificdieseasefactor)
                            }
                            if (this.modelarray[i].pedwaiting) {
                                // premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                this.coverArray[4].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                                console.log('ped waiting applied ' + this.modelarray[i].pedwaitingfactor)
                            }
                            if (this.modelarray[0].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = ((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }

                            if (this.modelarray[i].cancerbooster) {
                                // premiumpre = premiumpre * 1.03;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.03;
                                this.coverArray[5].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                                console.log('cancer booster applied ')
                            }
                            if (this.modelarray[i].compassionatevisit) {
                                // premiumpre = premiumpre * 1 + 325 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 325 * 1;
                                this.coverArray[6].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                                console.log('compassionate visit applied ')
                            }
                            if (this.modelarray[i].annualscreening) {
                                // premiumpre = premiumpre * 1 + 225 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 225 * 1;
                                this.coverArray[7].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[7].name + ' ' + this.coverArray[7].premium)

                                console.log('annual Screening applied ')
                            }
                            if (this.modelarray[i].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }

                            if (this.modelarray[i].durableequipment) {
                                // premiumpre = premiumpre * 1.1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.1;
                                this.coverArray[13].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[13].name + ' ' + this.coverArray[13].premium)
                                console.log('durable equipment applied ')
                            }


                            // this.modelarray[i].premium = premiumpre;
                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after room and zone facotr >>>' + this.modelarray[i].premium)

                            let b: number = parseInt(this.modelarray[i].age);
                            b++;
                            this.modelarray[i].age = b.toString();
                            y = this.master.filter((x: any) => {
                                if (x['ADULTCOUNT'] == 1 && x['CHILDCOUNT'] == 0 && x['ZONE'] == this.zone &&
                                    x['MINAGE'] <= this.modelarray[i].age && x['MAXAGE'] >= this.modelarray[i].age && x['PRE_EXISTING'] == this.modelarray[i].chronic
                                )
                                    return x;
                            }
                            );
                            console.log(y);
                            console.log('for second year')
                            premiumpre = y[0][this.modelarray[i].sum] * 1;
                            console.log(premiumpre)
                            premiumpre = premiumpre * this.modelarray[id].roomfactor;      //it will store base premium for every member;
                            premiumpre = parseInt(premiumpre.toFixed(4));

                            if (this.modelarray[i].perclaimdeductable) {
                                // premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].perclaimfactor;
                                this.coverArray[1].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                                console.log('per claim applied ' + this.modelarray[i].perclaimfactor)
                            }
                            if (this.modelarray[i].chroniccare) {
                                // premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].chroniccarefactor;
                                this.coverArray[2].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                console.log('chronic care applied ' + this.modelarray[i].chroniccarefactor)
                            }
                            if (this.modelarray[i].specificdiesease) {
                                // premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].specificdieseasefactor;
                                this.coverArray[3].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                                console.log('specific diesease applied ' + this.modelarray[i].specificdieseasefactor)
                            }
                            if (this.modelarray[i].pedwaiting) {
                                // premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                let pre = premiumpre;
                                premiumpre = premiumpre * this.modelarray[i].pedwaitingfactor;
                                this.coverArray[4].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                                console.log('ped waiting applied ' + this.modelarray[i].pedwaitingfactor)
                            }
                            if (this.modelarray[i].cancerbooster) {
                                // premiumpre = premiumpre * 1.03;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.03;
                                this.coverArray[5].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                                console.log('cancer booster applied ')
                            }
                            if (this.modelarray[i].compassionatevisit) {
                                // premiumpre = premiumpre * 1 + 325 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 325 * 1;
                                this.coverArray[6].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                                console.log('compassionate visit applied ')
                            }
                            if (this.modelarray[0].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = ((premiumpre - pre).toFixed(2));
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }

                            if (this.modelarray[i].annualscreening) {
                                // premiumpre = premiumpre * 1 + 225 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 225 * 1;
                                this.coverArray[7].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[7].name + ' ' + this.coverArray[7].premium)

                                console.log('annual Screening applied ')
                            }
                            if (this.modelarray[i].secondmedical) {
                                // premiumpre = premiumpre * 1 + 100 * 1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1 + 100 * 1;
                                this.coverArray[11].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                                console.log('second medical applied ')
                            }

                            if (this.modelarray[i].durableequipment) {
                                // premiumpre = premiumpre * 1.1;
                                let pre = premiumpre;
                                premiumpre = premiumpre * 1.1;
                                this.coverArray[13].premium = (premiumpre - pre).toFixed(2);
                                console.log(this.coverArray[13].name + ' ' + this.coverArray[13].premium)
                                console.log('durable equipment applied ')
                            }

                            this.modelarray[i].premium = this.modelarray[i].premium * 1 + premiumpre * 1;
                            console.log(this.modelarray[i].member + 'premium after room and zone facotr >>>' + this.modelarray[i].premium)
                            this.premiumshow = this.premiumshow * 1 + this.modelarray[i].premium * 1;
                            console.log('premiumshow >>>' + this.premiumshow)
                            let c: number = parseInt(this.modelarray[i].age);
                            c--;
                            c--;
                            this.modelarray[i].age = c.toString()
                        }

                        this.findFinalPremium();
                    }
                }

            }


            if (this.policyType == 'familyFloater') {

                if ((this.adultcount * 1 + this.kidcounter * 1) >= 2) {

                    this.setMembersString();
                    this.premiumshow = 0;
                    this.premiumvalue = 0;
                    let y: any;

                    y = 'Empty'
                    y = this.master.filter((x: any) => {
                        if (x['ADULTCOUNT'] == this.adultcount && x['CHILDCOUNT'] == this.kidcounter && x['ZONE'] == this.zone &&
                            x['MINAGE'] <= this.modelarray[0].age && x['MAXAGE'] >= this.modelarray[0].age && x['PRE_EXISTING'] == this.modelarray[0].pre_existing
                        )
                            return x;
                    }
                    );
                    console.log(y)
                    this.premiumvalue = y[0][this.sum];
                    console.log(this.premiumvalue);
                    console.log('roomfactor >> ' + this.modelarray[0].roomfactor)
                    
                    this.premiumvalue = this.premiumvalue * this.modelarray[0].roomfactor;

                    let base = this.premiumvalue / (this.adultcount * 1 + this.kidcounter * 1);
                    for (let i = 0; i < this.modelarray.length; i++) {
                        if (this.modelarray[i].chroniccare) {
                            // base = base * this.modelarray[i].chroniccarefactor;
                            let pre = base;
                            base = base * this.modelarray[i].chroniccarefactor
                            this.coverArray[2].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                            console.log('chronic care factor ' + this.modelarray[i].chroniccarefactor)
                            console.log(this.modelarray[i].member + '  chronic care applied ' + this.modelarray[i].premium)
                        }
                    }

                    if (this.modelarray[0].perclaimdeductable) {
                        // base = base * this.modelarray[0].perclaimfactor;
                        let pre = base;
                        base = base * this.modelarray[0].perclaimfactor
                        this.coverArray[1].premium = (base - pre).toFixed(2);
                        console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                        console.log('per claim applied ' + this.modelarray[0].perclaimfactor)
                    }

                    if (this.modelarray[0].specificdiesease) {
                        // base = base * this.modelarray[0].specificdieseasefactor;
                        let pre = base;
                        base = base * this.modelarray[0].specificdieseasefactor
                        this.coverArray[3].premium = (base - pre).toFixed(2);
                        console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                        console.log('specific diesease applied ' + this.modelarray[0].specificdieseasefactor)
                        console.log('premiumshow after specific diesease >> ' + base)
                    }
                    if (this.modelarray[0].pedwaiting) {
                        // base = base * this.modelarray[0].pedwaitingfactor;
                        let pre = base;
                        base = base * this.modelarray[0].pedwaitingfactor
                        this.coverArray[4].premium = (base - pre).toFixed(2);
                        console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                        console.log('ped waiting applied ' + this.modelarray[0].pedwaitingfactor)
                    }
                    if (this.modelarray[0].cancerbooster) {
                        // base = base * 1.03;
                        let pre = base;
                        base = base * 1.03
                        this.coverArray[5].premium = (base - pre).toFixed(2);
                        console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                        console.log('cancer booster applied ')
                    }
                    if (this.modelarray[0].compassionatevisit) {
                        // base = base * 1 + 325 * 1;
                        let pre = base;
                        base = base * 1 + 325 * 1
                        this.coverArray[6].premium = (base - pre).toFixed(2);
                        console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                        console.log('compassionate visit applied ')
                    }

                    if (this.modelarray[0].secondmedical) {
                        // premiumpre = premiumpre * 1 + 100 * 1;
                        let pre = base;
                        base = base * 1 + 100 * 1;
                        this.coverArray[11].premium = ((base - pre).toFixed(2));
                        console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                        console.log('second medical applied ')
                    }

                    if (this.modelarray[0].durableequipment) {
                        // base = base * 1.1;
                        let pre = base;
                        base = base * 1.1
                        this.coverArray[13].premium = (base - pre).toFixed(2);
                        console.log(this.coverArray[13].name + ' ' + this.coverArray[13].premium)

                        console.log('durable equipment applied ')
                    }

                    this.modelarray[0].premium = base;
                    console.log('base for 1 year >> ' + base)

                    if (this.tenure == '2 Year') {
                        let int: number = parseInt(this.modelarray[0].age);
                        int++;
                        this.modelarray[0].age = int.toString()

                        console.log(this.modelarray[0].age)
                        y = this.master.filter((x: any) => {
                            if (x['ADULTCOUNT'] == this.adultcount && x['CHILDCOUNT'] == this.kidcounter && x['ZONE'] == this.zone &&
                                x['MINAGE'] <= this.modelarray[0].age && x['MAXAGE'] >= this.modelarray[0].age && x['PRE_EXISTING'] == this.modelarray[0].pre_existing
                            )
                                return x;
                        }
                        );
                        let int2: number = parseInt(this.modelarray[0].age);
                        int2--;
                        this.modelarray[0].age = int2.toString()
                        console.log(y)
                        this.premiumvalue = y[0][this.sum];
                        this.premiumvalue=this.premiumvalue * this.modelarray[0].roomfactor
                        console.log(this.premiumvalue);

                        let base = this.premiumvalue / (this.adultcount * 1 + this.kidcounter * 1);
                        for (let i = 0; i < this.modelarray.length; i++) {
                            if (this.modelarray[i].chroniccare) {
                                // base = base * this.modelarray[i].chroniccarefactor;
                                let pre = base;
                                base = base * this.modelarray[i].chroniccarefactor
                                this.coverArray[2].premium = (base - pre).toFixed(2);
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                console.log('chronic care factor ' + this.modelarray[i].chroniccarefactor)
                                console.log(this.modelarray[i].member + '  chronic care applied ' + this.modelarray[i].premium)
                            }
                        }

                        if (this.modelarray[0].perclaimdeductable) {
                            // base = base * this.modelarray[0].perclaimfactor;
                            let pre = base;
                            base = base * this.modelarray[0].perclaimfactor
                            this.coverArray[1].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                            console.log('per claim applied ' + this.modelarray[0].perclaimfactor)
                        }

                        if (this.modelarray[0].specificdiesease) {
                            // base = base * this.modelarray[0].specificdieseasefactor;
                            let pre = base;
                            base = base * this.modelarray[0].specificdieseasefactor
                            this.coverArray[3].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                            console.log('specific diesease applied ' + this.modelarray[0].specificdieseasefactor)
                            console.log('premiumshow after specific diesease >> ' + base)
                        }
                        if (this.modelarray[0].pedwaiting) {
                            // base = base * this.modelarray[0].pedwaitingfactor;
                            let pre = base;
                            base = base * this.modelarray[0].pedwaitingfactor
                            this.coverArray[4].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                            console.log('ped waiting applied ' + this.modelarray[0].pedwaitingfactor)
                        }
                        if (this.modelarray[0].cancerbooster) {
                            // base = base * 1.03;
                            let pre = base;
                            base = base * 1.03
                            this.coverArray[5].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                            console.log('cancer booster applied ')
                        }
                        if (this.modelarray[0].compassionatevisit) {
                            // base = base * 1 + 325 * 1;
                            let pre = base;
                            base = base * 1 + 325 * 1
                            this.coverArray[6].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                            console.log('compassionate visit applied ')
                        }
                        if (this.modelarray[0].secondmedical) {
                            // premiumpre = premiumpre * 1 + 100 * 1;
                            let pre = base;
                            base = base * 1 + 100 * 1;
                            this.coverArray[11].premium = ((base - pre).toFixed(2));
                            console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                            console.log('second medical applied ')
                        }

                        if (this.modelarray[0].durableequipment) {
                            // base = base * 1.1;
                            let pre = base;
                            base = base * 1.1
                            this.coverArray[13].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[13].name + ' ' + this.coverArray[13].premium)

                            console.log('durable equipment applied ')
                        }
                        console.log('base for 2 year >> ' + base)

                        this.modelarray[0].premium = this.modelarray[0].premium * 1 + base * 1;

                        //         this.premiumshow = this.premiumshow * 1 + this.premiumvalue * 1;
                        // this.premiumshow = parseInt((this.premiumshow).toFixed(4))
                    }

                    if (this.tenure == '3 Year') {
                        let int3: number = parseInt(this.modelarray[0].age);
                        int3++;
                        this.modelarray[0].age = int3.toString()

                        console.log(this.modelarray[0].age)
                        y = this.master.filter((x: any) => {
                            if (x['ADULTCOUNT'] == this.adultcount && x['CHILDCOUNT'] == this.kidcounter && x['ZONE'] == this.zone &&
                                x['MINAGE'] <= this.modelarray[0].age && x['MAXAGE'] >= this.modelarray[0].age && x['PRE_EXISTING'] == this.modelarray[0].pre_existing
                            )
                                return x;

                        }
                        );
                        console.log(y)
                        this.premiumvalue = y[0][this.sum];
                        this.premiumvalue=this.premiumvalue * this.modelarray[0].roomfactor

0                       
                        let base = this.premiumvalue / (this.adultcount * 1 + this.kidcounter * 1);
                        for (let i = 0; i < this.modelarray.length; i++) {
                            if (this.modelarray[i].chroniccare) {
                                // base = base * this.modelarray[i].chroniccarefactor;
                                let pre = base;
                                base = base * this.modelarray[i].chroniccarefactor
                                this.coverArray[2].premium = (base - pre).toFixed(2);
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                console.log('chronic care factor ' + this.modelarray[i].chroniccarefactor)
                                console.log(this.modelarray[i].member + '  chronic care applied ' + this.modelarray[i].premium)
                            }
                        }

                        if (this.modelarray[0].perclaimdeductable) {
                            // base = base * this.modelarray[0].perclaimfactor;
                            let pre = base;
                            base = base * this.modelarray[0].perclaimfactor
                            this.coverArray[1].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                            console.log('per claim applied ' + this.modelarray[0].perclaimfactor)
                        }

                        if (this.modelarray[0].specificdiesease) {
                            // base = base * this.modelarray[0].specificdieseasefactor;
                            let pre = base;
                            base = base * this.modelarray[0].specificdieseasefactor
                            this.coverArray[3].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                            console.log('specific diesease applied ' + this.modelarray[0].specificdieseasefactor)
                            console.log('premiumshow after specific diesease >> ' + base)
                        }
                        if (this.modelarray[0].pedwaiting) {
                            // base = base * this.modelarray[0].pedwaitingfactor;
                            let pre = base;
                            base = base * this.modelarray[0].pedwaitingfactor
                            this.coverArray[4].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                            console.log('ped waiting applied ' + this.modelarray[0].pedwaitingfactor)
                        }
                        if (this.modelarray[0].cancerbooster) {
                            // base = base * 1.03;
                            let pre = base;
                            base = base * 1.03
                            this.coverArray[5].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                            console.log('cancer booster applied ')
                        }
                        if (this.modelarray[0].secondmedical) {
                            // premiumpre = premiumpre * 1 + 100 * 1;
                            let pre = base;
                            base = base * 1 + 100 * 1;
                            this.coverArray[11].premium = ((base - pre).toFixed(2));
                            console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                            console.log('second medical applied ')
                        }

                        if (this.modelarray[0].compassionatevisit) {
                            // base = base * 1 + 325 * 1;
                            let pre = base;
                            base = base * 1 + 325 * 1
                            this.coverArray[6].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                            console.log('compassionate visit applied ')
                        }
                        if (this.modelarray[0].durableequipment) {
                            // base = base * 1.1;
                            let pre = base;
                            base = base * 1.1
                            this.coverArray[13].premium = (base - pre).toFixed(2);
                            console.log(this.coverArray[13].name + ' ' + this.coverArray[13].premium)

                            console.log('durable equipment applied ')
                        }
                        console.log('base for 2 year >> ' + base)

                        this.modelarray[0].premium = this.modelarray[0].premium * 1 + base * 1;

                        let int4: number = parseInt(this.modelarray[0].age);
                        int4++;
                        this.modelarray[0].age = int4.toString()

                        console.log(this.modelarray[0].age)
                        y = this.master.filter((x: any) => {
                            if (x['ADULTCOUNT'] == this.adultcount && x['CHILDCOUNT'] == this.kidcounter && x['ZONE'] == this.zone &&
                                x['MINAGE'] <= this.modelarray[0].age && x['MAXAGE'] >= this.modelarray[0].age && x['PRE_EXISTING'] == this.modelarray[0].pre_existing
                            )
                                return x;
                        }
                        );
                        console.log(y)
                        this.premiumvalue = y[0][this.sum];
                        this.premiumvalue=this.premiumvalue * this.modelarray[0].roomfactor

0                       
                        let base2 = this.premiumvalue / (this.adultcount * 1 + this.kidcounter * 1);
                        for (let i = 0; i < this.modelarray.length; i++) {
                            if (this.modelarray[i].chroniccare) {
                                // base = base * this.modelarray[i].chroniccarefactor;
                                let pre = base2;
                                base2 = base2 * this.modelarray[i].chroniccarefactor
                                this.coverArray[2].premium = (base2 - pre).toFixed(2);
                                console.log(this.coverArray[2].name + ' ' + this.coverArray[2].premium)

                                console.log('chronic care factor ' + this.modelarray[i].chroniccarefactor)
                                console.log(this.modelarray[i].member + '  chronic care applied ' + this.modelarray[i].premium)
                            }
                        }

                        if (this.modelarray[0].perclaimdeductable) {
                            // base2 = base2 * this.modelarray[0].perclaimfactor;
                            let pre = base2;
                            base2 = base2 * this.modelarray[0].perclaimfactor
                            this.coverArray[1].premium = (base2 - pre).toFixed(2);
                            console.log(this.coverArray[1].name + ' ' + this.coverArray[1].premium)

                            console.log('per claim applied ' + this.modelarray[0].perclaimfactor)
                        }

                        if (this.modelarray[0].specificdiesease) {
                            // base2 = base2 * this.modelarray[0].specificdieseasefactor;
                            let pre = base2;
                            base2 = base2 * this.modelarray[0].specificdieseasefactor
                            this.coverArray[3].premium = (base2 - pre).toFixed(2);
                            console.log(this.coverArray[3].name + ' ' + this.coverArray[3].premium)

                            console.log('specific diesease applied ' + this.modelarray[0].specificdieseasefactor)
                            console.log('premiumshow after specific diesease >> ' + base2)
                        }
                        if (this.modelarray[0].pedwaiting) {
                            // base2 = base2 * this.modelarray[0].pedwaitingfactor;
                            let pre = base2;
                            base2 = base2 * this.modelarray[0].pedwaitingfactor
                            this.coverArray[4].premium = (base2 - pre).toFixed(2);
                            console.log(this.coverArray[4].name + ' ' + this.coverArray[4].premium)

                            console.log('ped waiting applied ' + this.modelarray[0].pedwaitingfactor)
                        }
                        if (this.modelarray[0].cancerbooster) {
                            // base2 = base2 * 1.03;
                            let pre = base2;
                            base2 = base2 * 1.03
                            this.coverArray[5].premium = (base2 - pre).toFixed(2);
                            console.log(this.coverArray[5].name + ' ' + this.coverArray[5].premium)

                            console.log('cancer booster applied ')
                        }
                        if (this.modelarray[0].compassionatevisit) {
                            // base2 = base2 * 1 + 325 * 1;
                            let pre = base2;
                            base2 = base2 * 1 + 325 * 1
                            this.coverArray[6].premium = (base2 - pre).toFixed(2);
                            console.log(this.coverArray[6].name + ' ' + this.coverArray[6].premium)

                            console.log('compassionate visit applied ')
                        }
                        if (this.modelarray[0].secondmedical) {
                            // premiumpre = premiumpre * 1 + 100 * 1;
                            let pre = base2;
                            base2 = base2 * 1 + 100 * 1;
                            this.coverArray[11].premium = ((base2 - pre).toFixed(2));
                            console.log(this.coverArray[11].name + ' ' + this.coverArray[11].premium)

                            console.log('second medical applied ')
                        }

                        if (this.modelarray[0].durableequipment) {
                            // base2 = base2 * 1.1;
                            let pre = base2;
                            base2 = base2 * 1.1
                            this.coverArray[13].premium = (base2 - pre).toFixed(2);
                            console.log(this.coverArray[13].name + ' ' + this.coverArray[13].premium)

                            console.log('durable equipment applied ')
                        }
                        console.log('base2 for 3 year >> ' + base2)

                        this.modelarray[0].premium = this.modelarray[0].premium * 1 + base2 * 1;

                        let int2: number = parseInt(this.modelarray[0].age);
                        int2--;
                        int2--;
                        this.modelarray[0].age = int2.toString()
                    }

                    this.premiumshow = this.modelarray[0].premium * (this.adultcount * 1 + this.kidcounter * 1)

                }
                else {
                    this.premiumshow = 0;
                }

                localStorage.setItem('sum', this.sumtoshow);
                setTimeout(() => {
                    this.findFinalPremium()

                }, 300)

            }
        }
    }


    findFinalPremium() {
        this.masterpremium = 0;


        if (this.tenure == '2 Year') {
            this.tenurefactor = 2;
        }
        if (this.tenure == '3 Year') {
            this.tenurefactor = 3
        }

        this.masterpremium = this.premiumshow * 1 + this.dieseasepremium * 1 +
            this.personalAccidentPremium * 1 * this.tenurefactor + this.chronicManagementPremium * 1 * this.tenurefactor + this.criticalIllnessPremium * 1 +
            this.internationalCoveragePremium * 1 + this.hospitalCashPremium * 1 + this.abhiPremiumTotal * 1
            + this.futureSecurePremium * 1 + this.cancerHospitalizationPremium * 1
            ;
        ;

        console.log('masterpremium after adding covers ' + this.masterpremium)

        if (this.tenure == '2 Year') {
            this.masterpremium = this.masterpremium * 0.925;
            for (let i = 0; i < this.coverArray.length; i++) {
                if (this.coverArray[i].selected) {
                    this.coverArray[i].premium = (this.coverArray[i].premium * 0.925).toFixed(2)
                }
            }
            console.log('7.5% % discout applied for 2 year');
        }
        if (this.tenure == '3 Year') {
            for (let i = 0; i < this.coverArray.length; i++) {
                if (this.coverArray[i].selected) {
                    this.coverArray[i].premium = (this.coverArray[i].premium * 0.9).toFixed(2)
                }
            }
            this.masterpremium = this.masterpremium * 0.9;
            console.log('10 % discout applied for 3 year');
        }
        console.log(this.masterpremium)

        if (this.policyType == 'multiIndividual' && (this.kidcounter * 1 + this.adultcount * 1) >= 2) {
            for (let i = 0; i < this.coverArray.length; i++) {
                if (this.coverArray[i].selected) {
                    this.coverArray[i].premium = (this.coverArray[i].premium * 0.95).toFixed(2)
                }
            }
            this.masterpremium = this.masterpremium * 0.95;
            console.log('MI discount 5% applied')
        }
        console.log('masterpremium  ' + this.masterpremium)
        this.masterpremium = this.masterpremium * 0.85;
        for (let i = 0; i < this.coverArray.length; i++) {
            if (this.coverArray[i].selected) {
                this.coverArray[i].premium = (this.coverArray[i].premium * 0.85).toFixed(2)
            }
        }

        console.log('15% commission discount applied.')
        console.log('masterpremium  ' + this.masterpremium)

        this.coverArray[14].premium = this.vaccineCoverPremium.toFixed(2);
        this.coverArray[15].premium = this.teleopdPremium.toFixed(2);;
        this.coverArray[16].premium = this.OpdAddOnPremium.toFixed(2);;

        if (this.plancode == 3) {
            if (this.tenurefactor == 1) {
                this.masterpremium =
                    (this.masterpremium * 1 + this.OpdAddOnPremium * 1 + this.vaccineCoverPremium * 1 + this.teleopdPremium * 1)
            }
            if (this.tenurefactor == 2) {
                this.masterpremium = (this.masterpremium * 1 + (this.OpdAddOnPremium * 1 + this.vaccineCoverPremium * 1 + this.teleopdPremium * 1) * 0.925);
                this.coverArray[14].premium = (this.coverArray[14].premium * 0.925).toFixed(2);
                this.coverArray[15].premium = (this.coverArray[15].premium * 0.925).toFixed(2);
                this.coverArray[16].premium = (this.coverArray[16].premium * 0.925).toFixed(2);

            }
            if (this.tenurefactor == 3) {
                this.masterpremium =
                    (this.masterpremium * 1 + (this.OpdAddOnPremium * 1 + this.vaccineCoverPremium * 1 + this.teleopdPremium * 1) * 0.9);
                this.coverArray[14].premium = (this.coverArray[14].premium * 0.9).toFixed(2);
                this.coverArray[15].premium = (this.coverArray[15].premium * 0.9).toFixed(2);
                this.coverArray[16].premium = (this.coverArray[16].premium * 0.9).toFixed(2);
            }
        }


        this.premiumbeforegst = this.masterpremium;
        this.gst = Math.round(this.masterpremium * 0.18);
        this.masterpremium = this.masterpremium * 1.18;
        let p: any = Math.round(this.masterpremium);
        localStorage.setItem('premium', p);
        this.masterpremium = parseInt(p);
        this.diffrence = 0;
        this.diffrence = this.masterpremium - this.premaster;
        this.premaster = this.masterpremium;


        console.log('gst applied  ' + this.masterpremium)
        console.log('*************************')
        console.log('')
    }

    // ------------------------------------------------------------------------------------------------------------------------

    setEmpty() {
        this.familyFloater = '';
        this.membersString = '';
        this.premiumshow = 0;
        this.familyFloater = '';
        this.membersString = '';
    }


    setMembersString() {
        this.membersString = '';
        let counter = 0;
        if(this.policyType=='multiIndividual'){
            for (let i = 0; i < this.modelarray.length; i++) {
                if (this.modelarray[i].floater !== '' && !this.modelarray[i].iskid && this.modelarray[i].selected) {
                    if (counter == 0) {
                        this.membersString = this.modelarray[i].floater;
                        counter = 1;
                    } else
                        this.membersString = this.membersString + " , " + this.modelarray[i].floater;
                }
            }
            if (this.kidcounter > 0) {
                this.membersString = this.membersString + ', ' + this.kidcounter + ' kids';
            }
    
        }
        else{
                this.membersString = this.adultcount+ ' Adults ' + ', ' + this.kidcounter + ' kids';
            }
    
        console.log('In set memberstring>>>>' + this.membersString)
    }

    setTenure(tenure: any) {
        this.tenurechange = true;
        setTimeout(() => {
            this.tenurechange = false;
        }, 700)

        this.tenureno = tenure.detail.value;
        if (this.tenureno == 1) {
            this.tenure = '1 Year';
            localStorage.setItem('tenure', '1 Year')
        }
        if (this.tenureno == 2) {
            this.tenure = '2 Year';
            localStorage.setItem('tenure', '2 Year')
        }
        if (this.tenureno == 3) {
            this.tenure = '3 Year';
            localStorage.setItem('tenure', '3 Year')
        }
        this.findSI(1)
    }

    setSI(sum: any, id: any) {
        console.log('sI and id >> ' + sum.detail.value, id)
        if (this.policyType == 'multiIndividual') {
            this.modelarray[id].sum = sum.detail.value;
            this.modelarray[id].sumtoshow = this.sumService.set(sum.detail.value);

        }

        if (this.policyType == 'familyFloater') {
            
            this.sum = sum.detail.value;
            this.sumtoshow = this.sumService.set(this.sum);
        }
        this.tenurechange = true;
        setTimeout(() => {
            this.tenurechange = false;
        }, 700)

        this.findSI(1);
        this.findFinalPremium();
    }
// 
    ///  per claim deductable

    selectPerClaimDeductable() {
        if (this.policyType == 'familyFloater') {
            this.modelarray[0].perclaimdeductable = true;
        }
        this.findSI(1);
    }
    removePerClaimDeductable() {
        this.modelarray[0].perclaimdeductable = false;
        for (let i = 0; i < this.modelarray.length; i++) {
            this.modelarray[i].perclaimdeductable = false;
        }
        this.findSI(1);
    }

    selectMemberPerClaim(id: any) {
        this.findSI(1);
    }

    setSIPerClaimDeductable(event: any, id: any) {
        this.modelarray[id].perclaimSI = event.detail.value;
        this.setPerClaimFactor(id);
        this.findSI(1);
    }

    setPerClaimFactor(id: any) {
        if (this.modelarray[id].perclaimSI == 25000) {
            this.modelarray[id].perclaimfactor = 0.82
        }
        else {
            this.modelarray[id].perclaimfactor = 0.91
        }
    }

    /// Chronic Care

    selectChronicCare() {
        this.findSI(1)
    }

    removeChronicCare() {
        for (let i = 0; i < this.modelarray.length; i++) {
            this.modelarray[i].chroniccare = false;
        }
        this.findSI(1);
    }

    selectMemberChronicCare(id: any) {
        this.findSI(1);
    }

    setChronicCareFactor() {
        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.plancode == 2) {
                this.modelarray[i].chroniccarefactor = 0.95
            }
            if (this.plancode == 3) {
                if (this.modelarray[i].dieseasecounter == 1) {
                    this.modelarray[i].chroniccarefactor = 1.3
                }
                else if (this.modelarray[i].dieseasecounter == 2) {
                    this.modelarray[i].chroniccarefactor = 1.3
                }
                else if (this.modelarray[i].dieseasecounter >= 3) {
                    this.modelarray[i].chroniccarefactor = 1.3
                }
                else if (this.modelarray[i].dieseasecounter == 0) {
                    this.modelarray[i].chroniccarefactor = 1
                }
            }

        }
    }

    /// specific diesease

    selectSpecificDiesease() {
        if (this.policyType == 'familyFloater') {
            this.modelarray[0].specificdiesease = true;
        }

        this.setSpecificDieseaseFactor();
        this.findSI(1);
    }

    removeSpecificDiesease() {
        for (let i = 0; i < this.modelarray.length; i++) {
            this.modelarray[i].specificdiesease = false;
        }
        this.findSI(1);
    }

    selectMemberSpecificDiesease(id: any) {
        this.findSI(1);
    }

    setSpecificDieseaseFactor() {
        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].dieseasecounter == 1) {
                this.modelarray[i].specificdieseasefactor = 1.2
            }
            else if (this.modelarray[i].dieseasecounter == 2) {
                this.modelarray[i].specificdieseasefactor = 1.25
            }
            else if (this.modelarray[i].dieseasecounter >= 3) {
                this.modelarray[i].specificdieseasefactor = 1.3
            }
            else if (this.modelarray[i].dieseasecounter == 0) {
                this.modelarray[i].specificdieseasefactor = 1
            }

        }
    }

    //  PED Waiting
    selectPedWaiting() {
        if (this.policyType == 'familyFloater') {
            this.modelarray[0].pedwaiting = true;
        }
        this.setPedWaitingFactor();
        this.findSI(1);
    }

    removePedWaiting() {
        for (let i = 0; i < this.modelarray.length; i++) {
            this.modelarray[i].pedwaiting = false;
        }
        this.findSI(1);
    }

    selectMemberPedWaiting(id: any) {
        this.findSI(1);
    }

    setSIPedWaiting(event: any, id: any) {
        this.modelarray[id].pedSI = event.detail.value;
        this.setPedWaitingFactor();
        this.findSI(1);
    }

    setPedWaitingFactor() {
        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].pedSI == '3to2') {
                this.modelarray[i].pedwaitingfactor = 1.09
            }
            else if (this.modelarray[i].pedSI == '3to1') {
                this.modelarray[i].pedwaitingfactor = 1.129
            }

        }
    }

    // Cancer Hospitalization Booster

    selectCancerBooster() {
        if (this.policyType == 'familyFloater') {
            this.modelarray[0].cancerbooster = true;
        }
        this.findSI(1);
    }
    removeCancerBooster() {

        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].selected) {
                this.modelarray[i].cancerbooster = false;
            };
        }
        this.findSI(1)
    }

    selectMemberCancerBooster(id: any) {
        this.findSI(1);
    }

    // annual screening

    selectAnnualScreening() {
        if (this.policyType == 'familyFloater') {
            this.modelarray[0].annualscreening = true;
        }
        this.findSI(1);
    }
    removeAnnualScreening() {

        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].selected) {
                this.modelarray[i].annualscreening = false;
            };
        }
        this.findSI(1)
    }

    selectMemberAnnualScreening(id: any) {
        this.findSI(1);
    }


    selectSecondMedical() {
        if (this.policyType == 'familyFloater') {
            this.modelarray[0].secondmedical = true;
        }
        this.findSI(1);
    }
    removeSecondMedical() {

        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].selected) {
                this.modelarray[i].secondmedical = false;
            };
        }
        this.findSI(1)
    }

    selectMemberSecondMedical(id: any) {
        this.findSI(1);
    }



    // Compassionate Visit

    selectCompassionateVisit() {
        if (this.policyType == 'familyFloater') {
            this.modelarray[0].compassionatevisit = true;
        }
        this.findSI(1);
    }
    removeCompassionateVisit() {

        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].selected) {
                this.modelarray[i].compassionatevisit = false;
            };
        }
        this.findSI(1)
    }

    selectMemberCompassionateVisit(id: any) {
        this.findSI(1);
    }

    // chronic Management Program OPD

    selectChronicManagement() {

    }
    removeChronicManagement() {

        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].selected) {
                this.modelarray[i].chronicmanagement = false;
            };
        }
        this.findSI(1)
    }

    selectMemberChronicManagement(id: any) {

        this.chronicManagementPremium = 0;

        for (let i = 0; i < this.modelarray.length; i++) {
            if (!this.modelarray[i].chronicmanagement) {

                if (this.chronicManagementPremium! <= 0) {
                    this.modelarray[i].cMPremium = 0;
                }
                this.modelarray[i].cMPremium = 0;
            }
            else {
                let value = 0;
                if ((this.modelarray[i].dieseasecounter) == 1) value = 3650;
                if ((this.modelarray[i].dieseasecounter) == 2) value = 4650;
                if ((this.modelarray[i].dieseasecounter) >= 3) value = 5650;
                this.modelarray[i].cMPremium = value;

                this.modelarray[i].cMPremium = value;
                this.modelarray[i].cMPremium = parseInt(this.modelarray[i].cMPremium).toFixed(4)
                console.log(this.modelarray[i].member + 'chronic mangement added >>>' + this.modelarray[i].cMPremium);
                if (this.modelarray[i].cMPremium !== 0) {
                    this.chronicManagementPremium = this.chronicManagementPremium * 1 + this.modelarray[i].cMPremium * 1;
                    this.coverArray[10].premium = this.chronicManagementPremium;
                }

            }
        }

        setTimeout(() => {
            console.log(' chronic management all premium >>>' + this.chronicManagementPremium)
            this.coverArray[10].premiere = this.chronicManagementPremium;
            this.findFinalPremium();
        }, 400)

    }

    /// personsal accident 
    setFactor(value: number) {
        let factor: any;
        switch (value) {
            case 1:
                factor = 0.47;
                break;
            case 2:
                factor = 0.75;
                break;

            case 3:
                factor = 0.89;
                break;
        }
        return factor;
    }
    selectPersonalAccident() {

    }
    removePersonalAccident() {

        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i]) {
                this.modelarray[i].personalaccident = false;
                this.modelarray[i].pAPremium = 0;
            };
        }
        
        this.personalAccidentPremium = 0;
        this.findFinalPremium();
    }

    selectMemberPersonalAccident() {

        let factor: any;
        this.personalAccidentPremium = 0;

        for (let i = 0; i < this.modelarray.length; i++) {
            if (!this.modelarray[i].personalaccident) {
                if (this.personalAccidentPremium! <= 0) {
                    this.modelarray[i].pAPremium = 0;
                }
                this.modelarray[i].pAPremium = 0;
            }
            else {
                factor = this.setFactor(this.modelarray[i].riskfactor)
                this.modelarray[i].pAPremium = (this.modelarray[i].pASI / 1000) * factor;
                this.modelarray[i].pAPremium = parseInt(this.modelarray[i].pAPremium).toFixed(4)
                console.log(this.modelarray[i].member + 'PA premium added >>>' + this.modelarray[i].pAPremium);
                if (this.modelarray[i].pAPremium !== 0) {
                    this.personalAccidentPremium = this.personalAccidentPremium * 1 + this.modelarray[i].pAPremium * 1;

                }

            }
        }
        setTimeout(() => {
            console.log(' PA all premium >>>' + this.personalAccidentPremium)
            this.coverArray[9].premium = this.personalAccidentPremium;
            this.findFinalPremium();
        }, 400)
    }

    setRFPersonalAccident(event: any, member: any) {
        this.modelarray[member.id].riskfactor = parseInt(event.detail.value);
        this.personalAccidentPremium = 0;
        
        this.selectMemberPersonalAccident();
    }

    setSIPersonalAccident(event: any, member: any) {

        this.modelarray[member.id].pASI = event.detail.value;
        this.personalAccidentPremium = 0;
        this.selectMemberPersonalAccident();

    }

    /// critical illnes functions

    setCriticalIllnessvalue(age: any, sum: any) {

        if (age >= 66 && age <= 99) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 61325; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 91988; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 122650; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 153313; }
        }
        if (age >= 61 && age <= 65) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 40997; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 61496; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 81994; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 102493; }
        };
        if (age >= 56 && age <= 60) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 26400; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 39600; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 52800; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 66000; }
        };
        if (age >= 51 && age <= 55) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 15620; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 23430; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 31240; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 39050; }
        };
        if (age >= 46 && age <= 50) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 9977; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 14966; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 19954; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 24943; }
        };
        if (age >= 41 && age <= 45) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 6402; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 9603; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 12804; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 16005; }
        };
        if (age >= 36 && age <= 40) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 3905; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 5858; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 7810; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 9763; }
        };
        if (age >= 26 && age <= 35) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 2156; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 3234; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 4312; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 5390; }
        }
        if (age >= 18 && age <= 25) {
            if (sum == 'SI_1000000') { this.criticalillnessvalue = 1346; }
            if (sum == 'SI_1500000') { this.criticalillnessvalue = 2046; }
            if (sum == 'SI_2000000') { this.criticalillnessvalue = 2728; }
            if (sum == 'SI_2500000') { this.criticalillnessvalue = 3410; }
        };

        return this.criticalillnessvalue;
    }

    selectCriticalIllness() {

    }
    removeCriticalIllness() {

        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i]) {
                this.modelarray[i].criticalillness = false;
                this.modelarray[i].cIPremium = 0;
            };
        }
        this.criticalIllnessPremium = 0;
        this.findFinalPremium();
    }

    selectMemberCriticalIllness() {

        this.criticalIllnessPremium = 0;
        for (let i = 0; i < this.modelarray.length; i++) {
            if (!this.modelarray[i].criticalillness) {
                // console.log('removed critical illness premium >> ' + this.modelarray[i].cIPremium)
                this.modelarray[i].cIPremium = 0;
            }
            else {
                this.modelarray[i].criticalillnessvalue = this.setCriticalIllnessvalue(this.modelarray[i].age, this.modelarray[i].cISI)
                this.modelarray[i].cIPremium = this.modelarray[i].criticalillnessvalue;
                this.modelarray[i].cIPremium = parseInt(this.modelarray[i].cIPremium).toFixed(4);
                console.log(this.modelarray[i].member + ' CI premium added >>> ' + this.modelarray[i].cIPremium);

                if (this.tenure == '2 Year') {
                    let age: number = this.modelarray[i].age;
                    age++;
                    let value = this.setCriticalIllnessvalue(age, this.modelarray[i].cISI)
                    this.modelarray[i].cIPremium = this.modelarray[i].cIPremium * 1 + value * 1;
                    this.modelarray[i].cIPremium = parseInt(this.modelarray[i].cIPremium).toFixed(4);

                    console.log('critical illness premium for 2 year ' + this.modelarray[i].cIPremium);

                }
                if (this.tenure == '3 Year') {
                    let age: number = this.modelarray[i].age;
                    age++;
                    let value = this.setCriticalIllnessvalue(this.modelarray[i].age, this.modelarray[i].cISI)
                    this.modelarray[i].cIPremium = this.modelarray[i].cIPremium * 1 + value * 1;
                    console.log('critical illness premium for 2 year ' + this.modelarray[i].cIPremium);

                    age++;
                    let value2 = this.setCriticalIllnessvalue(this.modelarray[i].age, this.modelarray[i].cISI)
                    this.modelarray[i].cIPremium = this.modelarray[i].cIPremium * 1 + value2 * 1;
                    console.log('critical illness premium for 3 year ' + this.modelarray[i].cIPremium);

                }
                if (this.modelarray[i].cIPremium !== 0) {
                    this.criticalIllnessPremium = this.criticalIllnessPremium * 1 + this.modelarray[i].cIPremium * 1;
                }
            }

        }
        setTimeout(() => {
            this.findFinalPremium();
            this.coverArray[8].premium = this.criticalIllnessPremium

        }, 200)
    }

    setSICriticalIllness(event: any, id: any) {
        this.criticalIllnessPremium = 0;
        this.modelarray[id].cISI = event.detail.value;
        this.selectMemberCriticalIllness();
    }

    /// cancer hospitalization

    selectCancerHospitalization() {
        let costobject: any = 0;
        let cost: any = 0;
        console.log('in select cancer hospitalizatoin >> ' + this.policyType)

        if (this.policyType == 'multiIndividual') {
            for (let i = 0; i < this.modelarray.length; i++) {
                if (this.modelarray[i].selected) {

                    costobject = this.cancerdata.cancerdata.filter((x: any) => {
                        if (x['minAge'] <= this.modelarray[i].age && x['maxAge'] >= this.modelarray[i].age && x['adultCount'] == 1
                            && x['childCount'] == 0)
                            return x;
                    });
                    console.log(costobject)
                    cost = costobject[0][this.modelarray[i].sum];
                    console.log(this.modelarray[i].member + ' cancer premium 1 yr >>' + cost);
                    this.modelarray[i].cHPremium = cost * 1;

                    if (this.tenure == '2 Year') {
                        cost = costobject[0][this.modelarray[i].sum];
                        let costobject2 = this.cancerdata.cancerdata.filter((x: any) => {
                            if (x['minAge'] <= this.modelarray[i].age && x['maxAge'] >= this.modelarray[i].age && x['adultCount'] == 1
                                && x['childCount'] == 0)
                                return x;
                        });
                        console.log(costobject2)

                        cost = cost * 1 + costobject2[0][this.modelarray[i].sum] * 1;
                        console.log(this.modelarray[i].member + ' cancer premium for 2 year>>' + cost)
                        this.modelarray[i].cHPremium = cost;

                    }

                    if (this.tenure == '3 Year') {
                        cost = costobject[0][this.modelarray[i].sum];
                        let tempselfage: any = this.modelarray[i].age;
                        let b: number = parseInt(tempselfage);
                        b++;
                        this.modelarray[i].age = b.toString();
                        let costobject3 = this.cancerdata.cancerdata.filter((x: any) => {
                            if (x['minAge'] <= tempselfage && x['maxAge'] >= tempselfage && x['adultCount'] == 1
                                && x['childCount'] == 0)
                                return x;
                        });
                        console.log(costobject3)

                        cost = cost * 1 + costobject3[0][this.modelarray[i].sum] * 1;

                        let q: number = parseInt(tempselfage);
                        q++;
                        this.modelarray[i].age = q.toString();
                        let costobject4 = this.cancerdata.cancerdata.filter((x: any) => {
                            if (x['minAge'] <= tempselfage && x['maxAge'] >= tempselfage && x['adultCount'] == 1
                                && x['childCount'] == 0)
                                return x;
                        });
                        console.log(costobject)

                        cost = cost * 1 + costobject4[0][this.modelarray[i].sum] * 1;
                        console.log(this.modelarray[i].member + ' cancer premium for 3 year >>' + cost);
                        this.modelarray[i].Premium = cost;

                    }
                    this.cancerHospitalizationPremium = this.cancerHospitalizationPremium * 1 + cost * 1;
                }
            }
        }

        if (this.policyType == 'familyFloater') {
            this.cancerHospitalizationPremium = 0;
            costobject = this.cancerdata.cancerdata.filter((x: any) => {
                if (x['minAge'] <= this.modelarray[0].age && x['maxAge'] >= this.modelarray[0].age && x['adultCount'] == this.adultcount
                    && x['childCount'] == this.kidcounter)

                    return x;
            });
            console.log(costobject)
            cost = costobject[0][this.modelarray[0].sum];
            this.cancerHospitalizationPremium = cost;
            console.log(cost)

            if (this.tenure == '2 Year') {
                cost = costobject[0][this.modelarray[0].sum];
                let costobject2 = this.cancerdata.cancerdata.filter((x: any) => {
                    if (x['minAge'] < this.modelarray[0].age && x['maxAge'] > this.modelarray[0].age && x['adultCount'] == this.adultcount
                        && x['childCount'] == this.kidcounter)
                        return x;
                });
                cost = cost * 1 + costobject2[0][this.modelarray[0].sum] * 1;
                console.log(this.modelarray[0].member + ' cancer premium for 2 year>>' + cost)
                this.cancerHospitalizationPremium = cost;
                console.log(cost)

            }

            if (this.tenure == '3 Year') {
                cost = costobject[0][this.modelarray[0].sum];
                let tempselfage: any = this.modelarray[0].age;
                let b: number = parseInt(tempselfage);
                b++;
                this.modelarray[0].age = b.toString();
                let costobject3 = this.cancerdata.cancerdata.filter((x: any) => {
                    if (x['minAge'] < tempselfage && x['maxAge'] > tempselfage && x['adultCount'] == this.adultcount
                        && x['childCount'] == this.kidcounter)
                        return x;
                });
                cost = cost * 1 + costobject3[0][this.modelarray[0].sum] * 1;

                let q: number = parseInt(tempselfage);
                q++;
                this.modelarray[0].age = q.toString();
                let costobject4 = this.cancerdata.cancerdata.filter((x: any) => {
                    if (x['minAge'] < tempselfage && x['maxAge'] > tempselfage && x['adultCount'] == this.adultcount
                        && x['childCount'] == this.kidcounter)
                        return x;
                });
                cost = cost * 1 + costobject4[0][this.modelarray[0].sum] * 1;
                console.log(this.modelarray[0].member + ' cancer premium for 3 year >>' + cost)
                this.cancerHospitalizationPremium = cost;
                console.log(cost)
            }

        }
        console.log('cancer booster added ' + cost)

        setTimeout(() => {
            this.findFinalPremium()
        }, 300)

    }

    removeCancerHospitalization() {
        this.cancerhospitalizationselected = false;
        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i]) {
                this.modelarray[i].cancerhospitalization = false;
                this.modelarray[i].cHPremium = 0;
            };
        }

        this.cancerHospitalizationPremium = 0;
        this.findFinalPremium();


    }


    // durable-Equipment cover----

    selectDurableEquipment() {
        if (this.policyType == 'familyFloater') {
            this.modelarray[0].durableequipment = true;

        }
        this.findSI(1);
    }

    removeDurableEquipment() {
        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].selected) {
                this.modelarray[i].durableequipment = false;
            };
        }
        this.findSI(1)
    }

    selectMemberDurableEquipment() {
        this.findSI(1)
    }

    /// Vaccine Cover

    setSIVaccineCover(event: any, id: any) {

        this.modelarray[id].vCSI = event.detail.value;
        this.vaccineCoverPremium = 0;
        this.selectMemberVaccineCover(1);
    }

    setVCPremium(i: any) {
        let a: any = this.modelarray[i].age;
        if (this.modelarray[i].vCSI == '500') { this.modelarray[i].vCPremium = 369 }
        if (this.modelarray[i].vCSI == '750') { this.modelarray[i].vCPremium = 554 }
        if (this.modelarray[i].vCSI == '1000') { this.modelarray[i].vCPremium = 738 }

    }
    selectVaccineCover() {
        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].selected) {
                this.modelarray[i].vaccinecover = true;
                this.modelarray[i].vCPremium = 0;
                this.setVCPremium(i);
                this.selectMemberVaccineCover(i)
            };
        }
    }

    removeVaccineCover() {
        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].vaccinecover) {
                this.modelarray[i].vaccinecover = false;
                this.modelarray[i].vCPremium = 0;
            };
        }
        this.vaccineCoverPremium = 0;
        this.findFinalPremium();

    }

    selectMemberVaccineCover(id: any) {
        this.vaccineCoverPremium = 0;
        for (let i = 0; i < this.modelarray.length; i++) {
            if (!this.modelarray[i].vaccinecover) {
                this.modelarray[i].vCPremium = 0;
            }
            else {
                this.setVCPremium(i);
                setTimeout(() => {
                    this.modelarray[i].vCPremium = parseInt(this.modelarray[i].vCPremium).toFixed(4)
                    console.log(this.modelarray[i].member + ' vaccine cover premium added for 1 year >>> ' + this.modelarray[i].vCPremium);

                    if (this.tenure == '2 Year') {

                        this.modelarray[i].vCPremium = this.modelarray[i].vCPremium * 2;
                        console.log('vaccine cover for 2 year ' + this.modelarray[i].vCPremium);
                    }
                    if (this.tenure == '3 Year') {

                        this.modelarray[i].vCPremium = this.modelarray[i].vCPremium * 3;
                        console.log('vaccine cover premium for 3 year ' + this.modelarray[i].vCPremium);
                    }

                    if (this.modelarray[i].vCPremium !== 0) {
                        this.vaccineCoverPremium = this.vaccineCoverPremium * 1 + this.modelarray[i].vCPremium * 1;
                    }
                }, 50)
            }
        }
        setTimeout(() => {
            console.log('total vaccine premium ' + this.vaccineCoverPremium)
            this.findFinalPremium();

        }, 200)

    }

    // tele-opd----

    selectTeleOpd() {
        // for (let i = 0; i < this.modelarray.length; i++) {
        //     if (this.modelarray[i].selected) {
        //         this.modelarray[i].teleopd = true;
        //         this.modelarray[i].tOPremium = 0;
        //         this.selectMemberTeleOpd()
        //     };
        // }

    }

    removeTeleOpd() {
        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.modelarray[i].teleopd) {
                this.modelarray[i].teleopdselected = false;
                this.modelarray[i].tOPremium = 0;
            };
        }
        this.teleopdPremium = 0;
        this.findFinalPremium();

    }

    selectMemberTeleOpd() {
        this.teleopdPremium = 0;
        for (let i = 0; i < this.modelarray.length; i++) {
            if (!this.modelarray[i].teleopd) {
                this.modelarray[i].tOPremium = 0;
            }
            else {

                setTimeout(() => {
                    this.modelarray[i].tOPremium = 376;
                    console.log(this.modelarray[i].member + ' tele OPD premium added for 1 year >>> ' + this.modelarray[i].tOPremium);

                    if (this.tenure == '2 Year') {

                        this.modelarray[i].tOPremium = this.modelarray[i].tOPremium * 2;
                        console.log('tele opd for 2 year ' + this.modelarray[i].tOPremium);
                    }
                    if (this.tenure == '3 Year') {

                        this.modelarray[i].tOPremium = this.modelarray[i].tOPremium * 3;
                        console.log('tele opd premium for 3 year ' + this.modelarray[i].tOPremium);
                    }

                }, 50)
                setTimeout(() => {
                    if (this.modelarray[i].tOPremium !== 0) {
                        this.teleopdPremium = this.teleopdPremium * 1 + this.modelarray[i].tOPremium * 1;

                    }

                }, 400)
            }
        }
        setTimeout(() => {
            this.findFinalPremium();

        }, 600)

    }

    // OPD add on

    setOptionAddon(event: any, id: any) {
        this.modelarray[id].opOption = event.detail.value;
        if (this.modelarray[id].opOptdon == 'In-Person GP unlimited consultations') { this.modelarray[id].oaPremium = 599 }
        if (this.modelarray[id].opOption == 'In-Person/Tele/Video GP unlimited consultations') { this.modelarray[id].oaPremium = 799 }
        if (this.modelarray[id].opOption == 'In-Person/Tele/Video GP unlimited and specialist consultations') { this.modelarray[id].oaPremium = 999 }
        this.OpdAddOnPremium = 0;
        this.selectMemberOpdAddOn();
    }

    selectOpdAddOn() {

    }

    removeOpdAddOn() {
        for (let i = 0; i < this.modelarray.length; i++) {
            this.modelarray[i].opdaddon = false;
        }
        this.OpdAddOnPremium = 0;
        this.findFinalPremium();
    }

    selectMemberOpdAddOn() {

        this.OpdAddOnPremium = 0;

        for (let i = 0; i < this.modelarray.length; i++) {
            if (!this.modelarray[i].opdaddon) {
            }
            else {
                let value: number = 0;

                if (this.modelarray[i].oaOption == 'In-Person GP unlimited consultations') { value = 599 }
                if (this.modelarray[i].oaOption == 'In-Person/Tele/Video GP unlimited consultations') { value = 799 }
                if (this.modelarray[i].oaOption == 'In-Person/Tele/Video GP unlimited and specialist consultations') { value = 999 }

                setTimeout(() => {
                    this.modelarray[i].oaPremium = value;
                    console.log(this.modelarray[i].member + 'OPD Add On premium added for 1 year >>> ' + this.modelarray[i].oaPremium);

                    if (this.tenure == '2 Year') {
                        this.modelarray[i].oaPremium = value * 2;
                        console.log('OPD Add On for 2 year ' + this.modelarray[i].oaPremium);
                    }
                    if (this.tenure == '3 Year') {
                        this.modelarray[i].oaPremium = value * 3;
                        console.log('OPD Add On premium for 3 year ' + this.modelarray[i].oaPremium);
                    }

                    if (this.modelarray[i].opdaddon) {
                        this.OpdAddOnPremium = this.OpdAddOnPremium * 1 + this.modelarray[i].oaPremium * 1;
                    }
                }, 50)
            }
        }
        setTimeout(() => {
            console.log('opd addon premium total >> ' + this.OpdAddOnPremium)
            this.findFinalPremium();

        }, 200)

    }

    // ---------------------


    reset() {
        location.reload();

    }

    prev() {
        this.router.navigateByUrl('tabs/tab1/products');
    }

    prevondieseasepage() {
        this.memberspage = true;
        this.dieseasepage = false;
    }
    prevoncoverspage() {
        this.dieseasepage = true;
        this.coverspage = false;
    }
    inccounter(id: any) {
        this.modelarray[id].dieseasecounter++;
        console.log(this.modelarray[id].member + ' dieseasecounter >> ' + this.modelarray[id].dieseasecounter);
        this.dieseaseselected = false;
        
        for (let i = 0; this.modelarray.length; i++) {

            if (this.modelarray[i].dieseasecounter >= 1) {
                this.dieseaseselected = true;
            }
        }

    }
    deccounter(id: any) {
        this.modelarray[id].dieseasecounter--;
        console.log(this.modelarray[id].member + ' dieseasecounter >> ' + this.modelarray[id].dieseasecounter);
        this.isdecreased = true;
        setTimeout(() => {
            this.isdecreased = false;
        }, 500);
        this.dieseaseselected = false;
        for (let i = 0; this.modelarray[i].length; i++) {
            if (this.modelarray.dieseasecounter >= 1) {
                this.dieseaseselected = true;
            }
        }
    }

    setChronic(id: any, chronic: any) {
        
        if (this.plancode == 2) {
            setTimeout(() => {
                if (this.isdecreased) {
                    this.modelarray[id].dieseasecounter = 0;
                    this.modelarray[id].dieseasepremium = 0;
                    this.modelarray[id].dieseasepremium = 0;
                    this.modelarray[id].ASTHMA = false;
                    this.modelarray[id].HYPTN = false;
                    this.modelarray[id].HYPRLIP = false;
                    this.modelarray[id].DIABT = false;
                    this.modelarray[id].PTCA = false;
                    this.modelarray[id].COPD = false;
                    this.modelarray[id].HBMI = false;
                }

                if (this.modelarray[id].dieseasecounter == 0) {
                    this.modelarray[id].chronic = 'NCHR';
                    console.log(this.modelarray[id].member + ' chronic >> ' + this.modelarray[id].chronic);
                    this.findSI(1)
                }

                if (this.modelarray[id].dieseasecounter == 1) {
                    this.modelarray[id].dieseasepremium = 0;

                    if (this.modelarray[id].chornic == 'NCHR') {
                        this.setchroniccode(chronic, id)
                    }
                    console.log(this.modelarray[id].member + ' chronic >> ' + this.modelarray[id].chronic);
                    this.modelarray[id].dieseasepremium = 0;
                    this.findSI(1);
                }

                if (this.modelarray[id].dieseasecounter >= 2) {
                    this.setchroniccode(chronic, id)
                    this.modelarray[id].dieseasepremium = 5000;
                    console.log(this.modelarray[id].member + ' 5000  diesease premium added >> ');
                    this.findSI(1);
                }

            }, 200)

            setTimeout(() => {
                this.findFinalPremium()

            }, 400)

        }
        if (this.plancode == 3) {

        }

    }

    setchroniccode(chronic: any, id: any) {
        
        if (this.plancode == 2) {
            if (this.modelarray[id].chronic == 'NCHR') {
                this.modelarray[id].chronic = chronic;
            }

            if (chronic == 'PTCA') {
                this.modelarray[id].chronic = chronic;
            }
            if (chronic == 'HYPTN' && this.modelarray[id].chronic !== 'PTCA') {
                this.modelarray[id].chronic = chronic;
            }
            if (chronic == 'DIABT' && this.modelarray[id].chronic !== 'HYPTN' && this.modelarray[id].chronic !== 'PTCA') {
                this.modelarray[id].chronic = chronic;
            }
            if (chronic == 'HYPRLIP' && this.modelarray[id].chronic !== 'HYPTN' && this.modelarray[id].chronic !== 'PTCA' && this.modelarray[id].chronic !== 'DIABT') {
                this.modelarray[id].chronic = chronic;
            }
            if (chronic == 'HYPRLIP' && this.modelarray[id].chronic !== 'HYPTN' && this.modelarray[id].chronic !== 'HYPRLIP' && this.modelarray[id].chronic !== 'DIABT' && this.modelarray[id].chronic !== 'PTCA') {
                this.modelarray[id].chronic = chronic;
            }
            if (chronic == 'HBMI' && this.modelarray[id].chronic !== 'HYPTN' && this.modelarray[id].chronic !== 'HYPRLIP' && this.modelarray[id].chronic !== 'DIABT' && this.modelarray[id].chronic !== 'PTCA' && this.modelarray[id].chronic !== 'COPD') {
                this.modelarray[id].chronic = chronic;
            }
            if (chronic == 'ASTHMA' && this.modelarray[id].chronic !== 'HYPTN' && this.modelarray[id].chronic !== 'HYPRLIP' && this.modelarray[id].chronic !== 'DIABT' && this.modelarray[id].chronic !== 'PTCA' && this.modelarray[id].chronic !== 'COPD' && this.modelarray[id].chronic !== 'HBMI') {
                this.modelarray[id].chronic = chronic;
            }

            console.log('>>> ' + this.modelarray[id].chronic)

        }
        if (this.plancode == 3) {

        }
    }


    next() {

        for (let i = 0; i < this.modelarray.length; i++) {
            if (this.plancode == 2) {
                this.modelarray[i].chornic = 'NCHR'
            }
        }
        if (this.premiumshow !== 0 && this.pincode !== undefined) {
            this.premiumaftermemberselection = this.premiumshow;

            this.dieseasepage = true;
            this.memberspage = false;
        }

        else {
            this.noselectederror = true;
            setTimeout(() => { this.noselectederror = false }, 1500);

        }
        this.nextClicked = true;
        setTimeout(() => { this.nextClicked = false }, 1500);

    }
    nextondieseasepage() {
        this.coverspage = true;
        this.dieseasepage = false;
        if(this.plancode==3){
            for (let i = 0; i < this.modelarray.length; i++) {
                if (this.modelarray[i]) {
                    this.modelarray[i].pASI = 5000000; 
                };
            }
        }

        if(this.plancode==2){
            for (let i = 0; i < this.modelarray.length; i++) {
                if (this.modelarray[i]) {
                    this.modelarray[i].pASI = 1000000; 
                };
            }
        }

    }
    nextoncoverspage() {

        this.quoteobject.plan = this.plan;
        this.quoteobject.tenure = this.tenure;
        this.quoteobject.policytype = localStorage.getItem('policyType2');
        this.quoteobject.memberstring = this.membersString;
        if (this.policyType == 'multiIndividual') {
            let sumarr: any[] = [];
            for (let i = 0; i < this.modelarray.length; i++) {
                if (this.modelarray[i].selected) {
                    sumarr.push(this.modelarray[i]);
                };
            }
            this.quoteobject.sum = sumarr;
            
        } else {
            this.quoteobject.sum = this.modelarray[0].suminlakhs;
        }
        this.premiumbeforegst = Math.round(this.premiumbeforegst)
        this.quoteobject.premium = this.premiumbeforegst;
        this.quoteobject.pincode = this.pincode;

        this.quoteobject.gst = this.gst;
        this.quoteobject.finalpremium = this.masterpremium;
        let arr: any[] = [];

        for (let i = 0; i < this.coverArray.length; i++) {
            if (this.coverArray[i].selected && this.coverArray[i].premium !== '') {
                arr.push(this.coverArray[i])
            }
        }
        console.log(arr)
        this.quoteobject.covers = arr;
        this.quoteService.quoteObject = this.quoteobject;
        localStorage.setItem('quote', this.quoteobject)
        localStorage.setItem('details', this.modelarray[0])

        this.router.navigateByUrl('tabs/tab1/members')
    }

}
