import Sequelize from 'sequelize';

// create the connection
//const db = new Sequelize('ssdb', "nssf", "nssf", {

const db = new Sequelize('ssdb', "root", null, {
    host: 'localhost',
    dialect: 'mysql'
    // dialect: 'postgres'
});
// -------- Define Models for SSDB Database   -----------

// ----------- Employer Model -----------------------------
const EmployerModel = db.define('employer', {

      sso: { type: Sequelize.STRING },	            //#varchar(2)
      sector_id: {type: Sequelize.INTEGER},	         // #smallint(6)
      headoffice_id: {type: Sequelize.INTEGER},	     // #smallint(6)
      emprcode:{ type: Sequelize.STRING },	        // #varchar(5)
      branchcode: { type: Sequelize.STRING },	    // #varchar(2)
      emprname: { type: Sequelize.STRING },	        // #varchar(120)
      businesstype_id:{ type: Sequelize.STRING },	 // #varchar(1)
      province_id: { type: Sequelize.STRING },	    // #varchar(2)
      district_id: { type: Sequelize.STRING },	    // #varchar(2)
      village_id: { type: Sequelize.STRING },	    // #varchar(6)
      street: { type: Sequelize.STRING },	        // #varchar(50)
      unit_no: { type: Sequelize.STRING },	        // #varchar(50)
      house_no: { type: Sequelize.STRING },	        // #varchar(50)
      pobox: { type: Sequelize.STRING },	        //#varchar(50)
      mobile: { type: Sequelize.STRING },	        //#varchar(50)
      telephone: { type: Sequelize.STRING },	     // #varchar(50)
      fax: { type: Sequelize.STRING },	             // #varchar(50)
      email: { type: Sequelize.STRING },	        //#varchar(50)
      contact_name:{ type: Sequelize.STRING },	    //#varchar(50)
      contact_surname:{ type: Sequelize.STRING },	//#varchar(50)
      contact_mobile: { type: Sequelize.STRING },	//#varchar(50)
      taxfilenum: { type: Sequelize.STRING },	    //#varchar(50)
      lao_worker: {type: Sequelize.INTEGER},	     //#decimal(5,0)
      foreign_worker: {type: Sequelize.INTEGER},	//#decimal(5,0)
      total_worker:{type: Sequelize.INTEGER},	     // #decimal(5,0)
      regisdate: { type: Sequelize.STRING },	     // #date
      keydate: { type: Sequelize.STRING },	        //#date
      editdate:{ type: Sequelize.STRING },	        //#datetime
      rno: {type: Sequelize.INTEGER},	           // #decimal(18,0)
      link_empr: { type: Sequelize.STRING },	   //   #varchar(9)
      officer: { type: Sequelize.STRING },	        //#varchar(50)
      employerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
      },
   },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'employer'
});
EmployerModel.removeAttribute('id');

// ----------- Contrib Model -----------------------------
const ContribModel = db.define('contribs', {

      sso:{ type: Sequelize.STRING },          // #	varchar(2)
      emprcode: { type: Sequelize.STRING },    // #	varchar(5)
      branchcode:{ type: Sequelize.STRING },   // #	varchar(2)
      ssid:{ type: Sequelize.STRING },         // #   varchar (15)
      ssnum: { type: Sequelize.STRING },       // #	varchar(8)
      schedno: { type: Sequelize.STRING },    // #	varchar(8)
      month: { type: Sequelize.STRING },      // #	decimal(6,0)
      allwages:{ type: Sequelize.INTEGER },   //     #	decimal(10,0)
      wages:{ type: Sequelize.INTEGER },       //    #	decimal(10,0)
      empramtdue:{ type: Sequelize.INTEGER },   //  #	decimal(10,0)
      empeamtdue:{ type: Sequelize.INTEGER },   //  #	decimal(10,0)
      seqno: { type: Sequelize.INTEGER },      //    #	decimal(4,0)
      paydate: { type: Sequelize.STRING },     //#	date
      dateceased:{ type: Sequelize.STRING },  // #	date
      link_id: { type: Sequelize.STRING },    // #	varchar(21)
      payrate: { type: Sequelize.FLOAT },     // #	decimal(5,3)
      pp:{ type: Sequelize.FLOAT },           // #	decimal(5,3)
    },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'contribs'
});
ContribModel.removeAttribute('id');

// ----------- Employee Model -----------------------------
const EmployeeModel  = db.define('employees', {
      
      sso: { type: Sequelize.STRING},                // #	varchar(2)
      ssid: { type: Sequelize.STRING},               //  #     varchar(15)
      ssnum: { type: Sequelize.STRING},              // #	varchar(8)
      name: { type: Sequelize.STRING},               // #	varchar(50)
      surname: { type: Sequelize.STRING},            // #	varchar(50)
      sex: { type: Sequelize.STRING},                // varchar(3)
      birthdate: { type: Sequelize.STRING},          //date
      labour: { type: Sequelize.STRING},             //	varchar(12)
      marstatus: { type: Sequelize.STRING},          // 	varchar(1)
      nationalcard: { type: Sequelize.STRING},        //varchar(20)
      issudate: { type: Sequelize.STRING},             // 	date
      familybook: { type: Sequelize.STRING},            // 	varchar(20)
      hosptl: { type: Sequelize.STRING},               //   #	varchar(1)
      status: { type: Sequelize.STRING},                //  #	varchar(25)
      childnum:{ type: Sequelize.STRING},            // #	decimal(2,0)
      keydate: { type: Sequelize.STRING},                //  #	date
      changedate: { type: Sequelize.STRING},                // #	date
      province_id: { type: Sequelize.STRING},                // #	varchar(2)
      district_id: { type: Sequelize.STRING},                //#	varchar(2)
      village_id: { type: Sequelize.STRING},                // #	varchar(7)
      rno:{ type: Sequelize.INTEGER},                         // #	decimal(18,0)
      ssnum_chk: { type: Sequelize.STRING},                //  #	varchar(50)
      changedate_chk: { type: Sequelize.STRING},             //   #	varchar(10)
      nationality: { type: Sequelize.STRING},                // #	varchar(50)
    },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'employees'
    }
);
EmployeeModel.removeAttribute('id');

// ----------- Spouse Model -----------------------------
const SpouseModel = db.define('spouses', {

      sso:{ type:Sequelize.STRING},    //            #	varchar(2)
      ssid:{ type:Sequelize.STRING},    //           # varchar(15)
      ssnum:{ type:Sequelize.STRING},    //          #	varchar(8)
      name:{ type:Sequelize.STRING},    //           #	varchar(50)
      surname:{ type:Sequelize.STRING},    //        #	varchar(50)
      birthdate:{ type:Sequelize.STRING},    //      #	date
      sex:{ type:Sequelize.STRING},    //            #	varchar(3)
      province_id:{ type:Sequelize.STRING},    //    #	varchar(2)
      district_id:{ type:Sequelize.STRING},    //    #	varchar(2)
      village_id:{ type:Sequelize.STRING},    //     #	varchar(7)
      nationalcard:{ type:Sequelize.STRING},    //   #	varchar(50)
      job:{ type:Sequelize.STRING},    //            #	varchar(50)
      socialcard:{ type:Sequelize.STRING},    //     #	varchar(50)
      hosptl:{ type:Sequelize.STRING},    //         #	varchar(1)
      hosptl1:{ type:Sequelize.STRING},    //        #	varchar(1)
      disable:{ type:Sequelize.STRING},    //        #	varchar(50)
      mobile:{ type:Sequelize.STRING},    //         #	varchar(50)
      tel:{ type:Sequelize.STRING},    //            #	varchar(50)
      fax:{ type:Sequelize.STRING},    //            #	varchar(50)
      pobox:{ type:Sequelize.STRING},    //          #	varchar(50)
      keydate:{ type:Sequelize.STRING},    //        #	date
      changedate:{ type:Sequelize.STRING},    //     #	date
    },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'spouses'
});
SpouseModel.removeAttribute('id');

// ----------- Child Model -----------------------------
const ChildModel = db.define('children', {

      sso:{ type:Sequelize.STRING},         //            #	varchar(2)
      dcode:{ type:Sequelize.STRING},         //          #DCODE	varchar(10)
      ssid:{ type:Sequelize.STRING},         //           #varchar(15)
      ssnum:{ type:Sequelize.STRING},         //          #	varchar(8)
      no: { type:Sequelize.INTEGER},         //           #	decimal(2,0)
      name: { type:Sequelize.STRING},         //          #	varchar(50)
      surname: { type:Sequelize.STRING},         //       #	varchar(50)
      birthdate: { type:Sequelize.STRING},         //     #	date
      sex:{ type:Sequelize.STRING},                 //    #	varchar(3)
      province_id:{ type:Sequelize.STRING},         //    #	varchar(2)
      district_id:{ type:Sequelize.STRING},         //    #	varchar(2)
      village_id:{ type:Sequelize.STRING},         //     #	varchar(7)
      relation:{ type:Sequelize.STRING},         //       #	varchar(50)
      school:{ type:Sequelize.STRING},         //         #	varchar(50)
      hosptl:{ type:Sequelize.STRING},         //         #	varchar(1)
      hosptl1:{ type:Sequelize.STRING},         //        #	varchar(1)
      disable:{ type:Sequelize.STRING},         //        #	varchar(50)
      mobile:{ type:Sequelize.STRING},         //         #	varchar(50)
      tel:{ type:Sequelize.STRING},         //            #	varchar(50)
      fax:{ type:Sequelize.STRING},         //            #	varchar(50)
      pobox:{ type:Sequelize.STRING},         //          #	varchar(50)
      keydate:{ type:Sequelize.STRING},         //        #	date
      changedate:{ type:Sequelize.STRING},         //     #	date
     },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'children'
});
ChildModel.removeAttribute('id');

// --------- Reception Model -----------
const ReceptionModel = db.define('reception', {
        receptionId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
      ssid:{ type:Sequelize.STRING},               //             #     varchar(15)
      entry_number:{ type:Sequelize.STRING},               //     #	Char(12)
      deliver_name:{ type:Sequelize.STRING},               //     #     cHAR(40)
      deliver_phone:{ type:Sequelize.STRING},               //    #     Char(15)
      claimno:{ type:Sequelize.STRING},               //          #	char(12)
      claimtype:{ type:Sequelize.STRING},               //        #     Char(20), selection
      receiver_name:{ type:Sequelize.STRING},               //    #	char(40)
      receiver_id:{ type:Sequelize.STRING},               //     #	char(10)
      reception_date:{ type:Sequelize.STRING},               //  #	Date
      reception_time:{ type:Sequelize.STRING},               //  #	Time
      step:{ type:Sequelize.INTEGER},                  //#	char(6)
      document_complete:{ type:Sequelize.BOOLEAN},               //    #Boolean
      comment:{ type:Sequelize.STRING},               //     
    },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'reception'
});
ReceptionModel.removeAttribute('id');

//----------- Inregis Model -----------------------------
const InregisModel = db.define('inregis', {

     seqno:{ type:Sequelize.INTEGER},               //EGER},         //            #	small{ type:Sequelize.{ type:Sequelize.INTEGER},               //EGER},         //(6)
      claimno:{ type:Sequelize.STRING},       //          #	char(9)
      indate:{ type:Sequelize.STRING},        //           #	date
      name:{ type:Sequelize.STRING},          //             #	char(35)
      surname:{ type:Sequelize.STRING},       //          #	char(35)
      ssid:{ type:Sequelize.STRING},          //             #     varchar(15)
      ssnum:{ type:Sequelize.STRING},         //            #	char(8)
      emprname:{ type:Sequelize.STRING},      //         #	char(100)
      emprcode:{ type:Sequelize.STRING},      //         #	char(5)
      officer:{ type:Sequelize.STRING},       //          #	char(35)
      claimtype:{ type:Sequelize.STRING},     //        #	char(1)
      remark:{ type:Sequelize.STRING},        //           #	char(60)
      note:{ type:Sequelize.STRING},          //             #	char(100)
      regismonth:{ type:Sequelize.STRING},    //       #	char(6)
      active:{ type:Sequelize.INTEGER},       //          #	tiny{ type:Sequelize.INTEGER},         //(1)
      pass:{ type:Sequelize.INTEGER},         //            #	tinyint(1)
      cond_level:{ type:Sequelize.INTEGER},   //(11)  #
    //  inregisId:{ type:Sequelize.INTEGER},    //       #	int(11) unsigned
    },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'inregis'
});
InregisModel.removeAttribute('id');

//----------- Spouse Model -----------------------------
const MaternityModel = db.define('maternity', {

      claimno:{ type:Sequelize.STRING},         //          #char(9)
      claimdate:{ type:Sequelize.STRING},         //        #date
      officer:{ type:Sequelize.STRING},         //          #char(30)
      ssnum:{ type:Sequelize.STRING},         //            #char(8)
      ssid:{ type:Sequelize.STRING},         //             #Varchar(15)
      name:{ type:Sequelize.STRING},         //             #char(35)
      surname:{ type:Sequelize.STRING},         //          #char(35)
      sex:{ type:Sequelize.STRING},         //              #char(1)
      birthdate:{ type:Sequelize.STRING},         //        #date
      national:{ type:Sequelize.STRING},         //         #char(20)
      tel:{ type:Sequelize.STRING},         //              #char(10)
      houseno:{ type:Sequelize.STRING},         //          #char(4)
      street:{ type:Sequelize.STRING},         //           #char(20)
      unit:{ type:Sequelize.STRING},         //             #char(2)
      village:{ type:Sequelize.STRING},         //          #char(30)
      district:{ type:Sequelize.STRING},         //         #char(30)
      province:{ type:Sequelize.STRING},         //         #char(30)
      emprcode:{ type:Sequelize.STRING},         //         #char(5)
      who:{ type:Sequelize.STRING},         //              #char(20)
      place:{ type:Sequelize.STRING},         //            #char(70)
      date:{ type:Sequelize.STRING},         //             #date
      namemater:{ type:Sequelize.STRING},         //        #char(60)
      dobmater:{ type:Sequelize.STRING},         //         #date
      relax:{ type:Sequelize.STRING},         //            #date
      return:{ type:Sequelize.STRING},         //           #date
      getmoney:{ type:Sequelize.STRING},         //         #char(150)
      branch:{ type:Sequelize.STRING},         //           #char(100)
      accname:{ type:Sequelize.STRING},         //          #char(60)
      accno:{ type:Sequelize.STRING},         //            #char(30)
      takename:{ type:Sequelize.STRING},         //         #char(35)
      takesur:{ type:Sequelize.STRING},         //          #char(35)
      takesex:{ type:Sequelize.STRING},         //          #char(1)
      takebirth:{ type:Sequelize.STRING},         //        #date
      copy:{ type:Sequelize.STRING},         //             #char(50)
      docno:{ type:Sequelize.STRING},         //            #char(10)
      docdate:{ type:Sequelize.STRING},         //          #date
      takeunit:{ type:Sequelize.STRING},         //         #char(2)
      takevilla:{ type:Sequelize.STRING},         //        #char(30)
      takedist:{ type:Sequelize.STRING},         //         #char(30)
      takepro:{ type:Sequelize.STRING},         //          #char(30)
      taketel:{ type:Sequelize.STRING},         //          #char(10)
      takerela:{ type:Sequelize.STRING},         //         #char(30)
      pass:{ type:Sequelize.STRING},         //             #tinyint(1)
      cond_level:{ type:Sequelize.INTEGER},         //          #int(11)
      chtype:{ type:Sequelize.INTEGER},         //              #smallint(6)
      miscarry:{ type:Sequelize.INTEGER},         //            #smallint(6)
      numday:{ type:Sequelize.INTEGER},         //              #smallint(6)
      active_officer:{ type:Sequelize.STRING},                // #varchar(30)
   //   action:{ type:Sequelize.STRING},                      //#
      //action_date:{ type:Sequelize.STRING},             //#Date

     },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'maternity'
    });
MaternityModel.removeAttribute('id');

const Maternity_trModel = db.define('maternity_tr', {

      claimno:{ type:Sequelize.STRING},         //          #char(9)
      claimdate:{ type:Sequelize.STRING},         //        #date
      officer:{ type:Sequelize.STRING},         //          #char(30)
      ssnum:{ type:Sequelize.STRING},         //            #char(8)
      ssid:{ type:Sequelize.STRING},         //             #Varchar(15)
      name:{ type:Sequelize.STRING},         //             #char(35)
      surname:{ type:Sequelize.STRING},         //          #char(35)
      sex:{ type:Sequelize.STRING},         //              #char(1)
      birthdate:{ type:Sequelize.STRING},         //        #date
      national:{ type:Sequelize.STRING},         //         #char(20)
      tel:{ type:Sequelize.STRING},         //              #char(10)
      houseno:{ type:Sequelize.STRING},         //          #char(4)
      street:{ type:Sequelize.STRING},         //           #char(20)
      unit:{ type:Sequelize.STRING},         //             #char(2)
      village:{ type:Sequelize.STRING},         //          #char(30)
      district:{ type:Sequelize.STRING},         //         #char(30)
      province:{ type:Sequelize.STRING},         //         #char(30)
      emprcode:{ type:Sequelize.STRING},         //         #char(5)
      who:{ type:Sequelize.STRING},         //              #char(20)
      place:{ type:Sequelize.STRING},         //            #char(70)
      date:{ type:Sequelize.STRING},         //             #date
      namemater:{ type:Sequelize.STRING},         //        #char(60)
      dobmater:{ type:Sequelize.STRING},         //         #date
      relax:{ type:Sequelize.STRING},         //            #date
      return:{ type:Sequelize.STRING},         //           #date
      getmoney:{ type:Sequelize.STRING},         //         #char(150)
      branch:{ type:Sequelize.STRING},         //           #char(100)
      accname:{ type:Sequelize.STRING},         //          #char(60)
      accno:{ type:Sequelize.STRING},         //            #char(30)
      takename:{ type:Sequelize.STRING},         //         #char(35)
      takesur:{ type:Sequelize.STRING},         //          #char(35)
      takesex:{ type:Sequelize.STRING},         //          #char(1)
      takebirth:{ type:Sequelize.STRING},         //        #date
      copy:{ type:Sequelize.STRING},         //             #char(50)
      docno:{ type:Sequelize.STRING},         //            #char(10)
      docdate:{ type:Sequelize.STRING},         //          #date
      takeunit:{ type:Sequelize.STRING},         //         #char(2)
      takevilla:{ type:Sequelize.STRING},         //        #char(30)
      takedist:{ type:Sequelize.STRING},         //         #char(30)
      takepro:{ type:Sequelize.STRING},         //          #char(30)
      taketel:{ type:Sequelize.STRING},         //          #char(10)
      takerela:{ type:Sequelize.STRING},         //         #char(30)
      pass:{ type:Sequelize.STRING},         //             #tinyint(1)
      cond_level:{ type:Sequelize.INTEGER},         //          #int(11)
      chtype:{ type:Sequelize.INTEGER},         //              #smallint(6)
      miscarry:{ type:Sequelize.INTEGER},         //            #smallint(6)
      numday:{ type:Sequelize.INTEGER},         //              #smallint(6)
      active_officer:{ type:Sequelize.STRING},                // #varchar(30)
      action:{ type:Sequelize.STRING},                      //#
      //action_date:{ type:Sequelize.STRING},             //#Date

     },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'maternity_tr'
    });
Maternity_trModel.removeAttribute('id');


const CalmaterModel = db.define('calmater', {
      calcno:{ type:Sequelize.STRING},         //           #char(9)
      claimno:{ type:Sequelize.STRING},         //          #char(9)
      ssnum:{ type:Sequelize.STRING},         //            #char(8)
      ssid:{ type:Sequelize.STRING},         //             #varchar(15)
      who:{ type:Sequelize.STRING},         //              #char(30)
      payno:{ type:Sequelize.INTEGER},         //               #smallint(6)
      datefrom:{ type:Sequelize.STRING},         //         #date
      dateto:{ type:Sequelize.STRING},         //           #date
      averwage:{ type:Sequelize.INTEGER},         //            #int(11)
      permater:{ type:Sequelize.FLOAT},           //        #decimal(4,2)
      materbene:{ type:Sequelize.INTEGER},         //           #int(11)
      lowwage:{ type:Sequelize.INTEGER},         //             #int(11)
      perbirth:{ type:Sequelize.FLOAT},           //           #decimal(4,2)
      childnum:{ type:Sequelize.INTEGER},         //            #smallint(6)
      birthgrant:{ type:Sequelize.INTEGER},         //          #int(11)
      total:{ type:Sequelize.INTEGER},         //               #int(11)
      dateout:{ type:Sequelize.STRING},         //          #date
      month1:{ type:Sequelize.STRING},         //           #char(9)
      wage1:{ type:Sequelize.INTEGER},         //               #int(11)
      month2:{ type:Sequelize.STRING},         //           #char(9)
      wage2:{ type:Sequelize.INTEGER},         //               #int(11)
      month3:{ type:Sequelize.STRING},         //           #char(9)
      wage3:{ type:Sequelize.INTEGER},         //               #int(11)
      month4:{ type:Sequelize.STRING},         //           #char(9)
      wage4:{ type:Sequelize.INTEGER},         //               #int(11)
      month5:{ type:Sequelize.STRING},         //           #char(9)
      wage5:{ type:Sequelize.INTEGER},         //               #int(11)
      month6:{ type:Sequelize.STRING},         //           #char(9)
      wage6:{ type:Sequelize.INTEGER},         //               #int(11)
      numday:{ type:Sequelize.INTEGER},         //              #smallint(6)
      averday:{ type:Sequelize.INTEGER},         //             #int(11)
      officer:{ type:Sequelize.STRING},                // #varchar(30)
    },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'calmater'
    });
CalmaterModel.removeAttribute('id');

const Calmater_trModel = db.define('calmater_tr', {
      calcno:{ type:Sequelize.STRING},         //           #char(9)
      claimno:{ type:Sequelize.STRING},         //          #char(9)
      ssnum:{ type:Sequelize.STRING},         //            #char(8)
      ssid:{ type:Sequelize.STRING},         //             #varchar(15)
      who:{ type:Sequelize.STRING},         //              #char(30)
      payno:{ type:Sequelize.INTEGER},         //               #smallint(6)
      datefrom:{ type:Sequelize.STRING},         //         #date
      dateto:{ type:Sequelize.STRING},         //           #date
      averwage:{ type:Sequelize.INTEGER},         //            #int(11)
      permater:{ type:Sequelize.FLOAT},           //        #decimal(4,2)
      materbene:{ type:Sequelize.INTEGER},         //           #int(11)
      lowwage:{ type:Sequelize.INTEGER},         //             #int(11)
      perbirth:{ type:Sequelize.FLOAT},           //           #decimal(4,2)
      childnum:{ type:Sequelize.INTEGER},         //            #smallint(6)
      birthgrant:{ type:Sequelize.INTEGER},         //          #int(11)
      total:{ type:Sequelize.INTEGER},         //               #int(11)
      dateout:{ type:Sequelize.STRING},         //          #date
      month1:{ type:Sequelize.STRING},         //           #char(9)
      wage1:{ type:Sequelize.INTEGER},         //               #int(11)
      month2:{ type:Sequelize.STRING},         //           #char(9)
      wage2:{ type:Sequelize.INTEGER},         //               #int(11)
      month3:{ type:Sequelize.STRING},         //           #char(9)
      wage3:{ type:Sequelize.INTEGER},         //               #int(11)
      month4:{ type:Sequelize.STRING},         //           #char(9)
      wage4:{ type:Sequelize.INTEGER},         //               #int(11)
      month5:{ type:Sequelize.STRING},         //           #char(9)
      wage5:{ type:Sequelize.INTEGER},         //               #int(11)
      month6:{ type:Sequelize.STRING},         //           #char(9)
      wage6:{ type:Sequelize.INTEGER},         //               #int(11)
      numday:{ type:Sequelize.INTEGER},         //              #smallint(6)
      averday:{ type:Sequelize.INTEGER},         //             #int(11)
      officer:{ type:Sequelize.STRING},                // #varchar(30)
      active_officer:{ type:Sequelize.STRING},                // #varchar(30)
      action:{ type:Sequelize.STRING},                      //#
      //action_date:{ type:Sequelize.STRING},             //#Date

    },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'calmater_tr'
    });
Calmater_trModel.removeAttribute('id');



//----

const InvoiceModel = db.define('invoice',{ 
    invoiceId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      calcno:{ type:Sequelize.STRING},         //           #char(9)
      claimno:{ type:Sequelize.STRING},         //          #char(9)
      betchno:{ type:Sequelize.STRING},         //          #char(7)
      exdate:{ type:Sequelize.STRING},         //           #date
      name:{ type:Sequelize.STRING},         //             #char(35)
      surname:{ type:Sequelize.STRING},         //          #char(35)
      ssnum:{ type:Sequelize.STRING},         //            #char(8)
      ssid:{ type:Sequelize.STRING},         //             #varchar(15)
      emprname:{ type:Sequelize.STRING},         //         #char(100)
      emprcode:{ type:Sequelize.STRING},         //         #char(5)
      claimtype: { type:Sequelize.INTEGER},         //           #int(11)
      remark:{ type:Sequelize.STRING},         //           #char(60)
      sendmonth:{ type:Sequelize.STRING},         //        #char(6)
      total:{ type:Sequelize.INTEGER},         //               #int(11)
      paye:{ type:Sequelize.INTEGER},         //                #int(11)
      paydate:{ type:Sequelize.STRING},         //          #date
      seqnopay:{ type:Sequelize.INTEGER},         //            #smallint(6)
      officer:{ type:Sequelize.STRING},                // #varchar(30)
    },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'invoice'
    });
InvoiceModel.removeAttribute('id');

const Invoice_trModel = db.define('invoice_tr',{ 

      calcno:{ type:Sequelize.STRING},         //           #char(9)
      claimno:{ type:Sequelize.STRING},         //          #char(9)
      betchno:{ type:Sequelize.STRING},         //          #char(7)
      exdate:{ type:Sequelize.STRING},         //           #date
      name:{ type:Sequelize.STRING},         //             #char(35)
      surname:{ type:Sequelize.STRING},         //          #char(35)
      ssnum:{ type:Sequelize.STRING},         //            #char(8)
      ssid:{ type:Sequelize.STRING},         //             #varchar(15)
      emprname:{ type:Sequelize.STRING},         //         #char(100)
      emprcode:{ type:Sequelize.STRING},         //         #char(5)
      claimtype: { type:Sequelize.INTEGER},         //           #int(11)
      remark:{ type:Sequelize.STRING},         //           #char(60)
      sendmonth:{ type:Sequelize.STRING},         //        #char(6)
      total:{ type:Sequelize.INTEGER},         //               #int(11)
      paye:{ type:Sequelize.INTEGER},         //                #int(11)
      paydate:{ type:Sequelize.STRING},         //          #date
      seqnopay:{ type:Sequelize.INTEGER},         //            #smallint(6)
      officer:{ type:Sequelize.STRING},                // #varchar(30)
      active_officer:{ type:Sequelize.STRING},                // #varchar(30)
      action:{ type:Sequelize.STRING},                      //#
  //    action_date:{ type:Sequelize.STRING},             //#Date
    },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'invoice_tr'
    });
   Invoice_trModel.removeAttribute('id');

// ------------------Workflow related Tables-------------

const WorkflowModel = db.define('workflow', {
    workflowId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ssid: { type: Sequelize.STRING },
      claimtype:{ type: Sequelize.STRING },       // #Varchar(20)
      receptionNo:{ type: Sequelize.STRING },     //# char(15)
      claimno:{ type: Sequelize.STRING },         //#Char(9)
      complete:{ type: Sequelize.BOOLEAN },         //an        #
      numberofstep:{ type: Sequelize.INTEGER},
      activestep:{ type: Sequelize.INTEGER },
    },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'workflow'
});

// EmployeeModel.removeAttribute('id');

const StepModel = db.define('step', {
    stepId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    ssid: { type: Sequelize.STRING },
    claimno:{ type: Sequelize.STRING },
    stepDate: { type: Sequelize.DATE },
    stepTime: { type: Sequelize.TIME },
    active: { type: Sequelize.BOOLEAN },
    stepNo: { type: Sequelize.INTEGER },
    complete: { type: Sequelize.BOOLEAN },
    comment: { type: Sequelize.STRING },
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'step'
});


WorkflowModel.hasMany(StepModel);
StepModel.belongsTo(WorkflowModel);
//------------ Test workflow 

const Workflow1Model = db.define('workflow1', {
    workflowId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ssid: { type: Sequelize.STRING },
      claimno:{ type: Sequelize.STRING }        //#Char(9)
     },
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'workflow1'
});

// EmployeeModel.removeAttribute('id');

const Step1Model = db.define('step1', {
    stepId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    stepname: { type: Sequelize.STRING }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'step1'
});


Workflow1Model.hasMany(Step1Model);
Step1Model.belongsTo(Workflow1Model);



// ---- create the table if it doesn't exist yet  --------

db.sync();

// --------------------- export Models to Resolvers ---------------------

const Workflow = db.models.workflow;
const Step = db.models.step;
const Workflow1 = db.models.workflow1;
const Step1 = db.models.step1;
const Employee = db.models.employees;
const Contrib = db.models.contribs;
const Employer = db.models.employer;
const Spouse = db.models.spouses;
const Child = db.models.children;
const Reception = db.models.reception;
const Inregis = db.models.inregis;
const Maternity = db.models.maternity;
const Calmater = db.models.calmater;
const Invoice = db.models.invoice;
const Maternity_tr = db.models.maternity_tr;
const Calmater_tr = db.models.calmater_tr;
const Invoice_tr = db.models.invoice_tr;

export {Workflow1,Step1, Workflow,Step, Employer, Contrib, Employee, Spouse, Child, 
        Reception,Inregis, Maternity, Calmater, Invoice,
        Maternity_tr, Calmater_tr, Invoice_tr };
