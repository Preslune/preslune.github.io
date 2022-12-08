let validate = () => {
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let Cpassword = document.getElementById('confirmpassword')
    let email = document.getElementById('email')
    let Cemail = document.getElementById('confirmemail')
    let day = document.getElementById('day')
    let month = document.getElementById('month')
    let year = document.getElementById('year')
    let nation = document.getElementById('nation')
    let checkbox = document.getElementById('checkbox')
    let errorMsg = []
     
    //validasi
     vUsername(username, errorMsg)
     vPassword(password , errorMsg)
    //  Vspecialcharacters(password , errorMsg)
     vCpassword(password , Cpassword, errorMsg)
     vEmail(email, errorMsg)
     vCemail(email , Cemail , errorMsg)
     vBirth(day,month,year,errorMsg)
     vNation(nation, errorMsg)
     vCheckbox(checkbox, errorMsg)
 
    if (errorMsg.length === 0){
        alert('Registration Success! \n We will notify your email if you are selected for the beta!')
    } else {
        alert(errorMsg.join('\n'))
    }
 }

//  let Vspecialcharacters = (password, errorMsg) =>{
//     var i = 0;
//     var length = password.value.length;
//     while(i<length){
//         if(password[i] === '-' || password[i] === '_' || password[i] === '=' || password[i] === '+' || password[i] === ')' || password[i] === '(' ||
//         password[i] === '*' || password[i] === '&' || password[i] === '^' || password[i] === '%' || password[i] === '$' || password[i] === '#' ||
//         password[i] === '@' || password[i] === '!' || password[i] === '~' || password[i] === '`' || password[i] === ']' || password[i] === '[' ||
//         password[i] ==='{' || password[i] ==='}' || password[i] ===';' || password[i] ===':' || password[i] ==='"' || password[i] ===',' || 
//         password.charAt[i] === '.' || password[i] === '/' || password[i] === '<' || password[i] === '>' || password[i] === '?' || password[i] ==='|'){
//             errorMsg.push('Password can\'t contain the special characters `~!@#$%^&*()_+-=[]\|}{;:",./<>?')
//         }
        
//         i++;
//     }
//  }

 let vUsername = (username , errorMsg) => {
     if(username.value === '') {
         errorMsg.push('Username required!')
     } else if (username.value.length < 4) {
         errorMsg.push('Username needs to be longer than 5 characters!')
     } 
 }
 
 let vPassword = (password, errorMsg) => {
     if(password.value === '') {
         errorMsg.push('Password required')
     } else if (password.value.length < 7) {
         errorMsg.push('Password needs to be longer than 7 characters')
     } 
 }

 let vCpassword = (password, Cpassword, errorMsg) =>{
     if(password.value === Cpassword.value){
     } else{
         errorMsg.push('Passwords do not match!')
     }
 }
 
 let vEmail = (email, errorMsg) => {
     if (email.value === ''){
         errorMsg.push('Email required')
     } else if (email.value.startsWith('.') || email.value.startsWith('@')) {
         errorMsg.push('Email cannot start with . or @')
     } else if (email.value.indexOf('.') === (email.value.indexOf('@') + 1)){
         errorMsg.push('Email cannot contain . after @')
     } else if (!email.value.endsWith('.com')){
         errorMsg.push('Email must end with .com!')
     }
 }

 let vCemail = (email, Cemail, errorMsg) =>{
    if(email.value === Cemail.value){
        
    } else{
        errorMsg.push('Emails do not match!')
    }
}

 let vBirth = (day,month,year,errorMsg) =>{
     if(month > 12 || month < 1){
         //Check for Jan-Dec
         errorMsg.push('Please enter a valid month!')
     } else{
         if(month === 2){
             //Check for Feb
             if(year % 4 === 0){
                 //Check for Tahun Kabisat
                if(day < 0 || day > 29){
                    //Check for valid date
                    errorMsg.push('Please enter a valid date!')
                }
             } else{
                 if(day < 0 || day > 28){
                     //check for valid date
                    errorMsg.push('Please enter a valid date!')
                 }
             }
         } else{
            if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month == 12){
                //check for month with 31 days
                if(day < 0 || day > 31){
                    //check for valid date
                    errorMsh.push('Please enter a valid date!')
                }
            } else{
                if(day < 0 || day > 30){
                    //check for valid date
                    errorMsg.push('Please enter a valid date!')
                }
            }
         }
     }
 }
 
 let vNation = (nation,errorMsg) => {
     if(nation.value === 'Abkhazia' || nation.value === 'Abkhazian' || nation.value === 'Afghanistan' || 
     nation.value ==='Afghan' || nation.value ==='Albania' || nation.value ==='Albanian' || 
     nation.value ==='Algeria' || nation.value ==='Algerian' || nation.value ==='Andorra' ||
     nation.value === 'Andorran' || nation.value === 'Angola' || nation.value ==='Angolan' ||
     nation.value === 'Antigua and Barbuda' || nation.value ==='Antiguan' || nation.value === 'Argentina' ||
     nation.value === 'Argentinian' || nation.value ==='Argentine' || nation.value ==='Armenia' ||
     nation.value === 'Armenian' || nation.value === 'Artsakh' || nation.value ==='Australia' ||
     nation.value === 'Australian' || nation.value === 'Aussie' || nation.value === 'Austria' ||
     nation.value === 'Austrian' || nation.value === 'Azerbaijan' || nation.value ==='Azeri' ||
     nation.value === 'Azerbaijan' || nation.value === 'Bahamas' || nation.value === 'The Bahamas' ||
     nation.value === 'Bahamian' || nation.value === 'Bahrain' || nation.value === 'Bahraini' ||
     nation.value === 'Bahrani' || nation.value ==='Bangladesh' || nation.value === 'Bangladeshi' ||
     nation.value === 'Bengali' || nation.value ==='Barbados' || nation.value ==='Barbadian' || 
     nation.value ==='Bajan' || nation.value ==='Belarus' || nation.value ==='Belarusian' ||
     nation.value ==='Belgium' || nation.value ==='Belgian' || nation.value ==='Belgen' || 
     nation.value ==='Belges' || nation.value ==='Belgier' || nation.value ==='Belize' ||
     nation.value ==='Belizean' || nation.value ==='Benin' || nation.value ==='Beninese' ||
     nation.value ==='Bhutan' || nation.value ==='Bhutanese' || nation.value ==='Bolivia' ||
     nation.value ==='Bolivian' || nation.value ==='Bolivianos' || nation.value ==='Bosnia' ||
     nation.value ==='Bosnia and Herzegovina' || nation.value ==='Bosniak' || nation.value ==='Bosniac' ||
     nation.value ==='Bosnian' || nation.value ==='Botswana' || nation.value ==='Motswana' ||
     nation.value ==='Batswana' || nation.value ==='Brazil' || nation.value ==='Brazilian' ||
     nation.value ==='Brunei' || nation.value ==='Bruneian' || nation.value ==='Bulgaria' || 
     nation.value ==='Bulgarian' || nation.value ==='Burkina Faso' || nation.value ==='Burkinabe' ||
     nation.value ==='Burma' || nation.value ==='Burman' || nation.value ==='Burmese' ||
     nation.value ==='Burundi' || nation.value ==='Burundian' || nation.value ==='Cambodia' ||
     nation.value ==='Cambodian' || nation.value ==='Khmer' || nation.value ==='Cameroon' || 
     nation.value ==='Cameroonian' || nation.value ==='Canada' || nation.value ==='Canadian' ||
     nation.value ==='Canuck' || nation.value ==='Cape Verde' || nation.value ==='Cape Verdian' ||
     nation.value ==='Cabo Verdian' || nation.value ==='Central African Republic' || nation.value ==='Central African' ||
     nation.value ==='Chad' || nation.value ==='Chadian' || nation.value ==='Chile' ||
     nation.value ==='Chilean' || nation.value ==='Chilenos' || nation.value ==='China' ||
     nation.value ==='Chinese' || nation.value ==='Colombia' || nation.value ==='Colombian' ||
     nation.value ==='Colombianos' || nation.value ==='Comoros' || nation.value ==='Congo' ||
     nation.value ==='Congolese' || nation.value ==='Cook Island' || nation.value ==='Cook Islander' ||
     nation.value ==='Costa Rica' || nation.value ==='Costa Rican' || nation.value ==='Ticos' ||
     nation.value ==='Cote d\'Ivoire' ||nation.value ==='Ivorian' || nation.value ==='Croatia' ||
     nation.value ==='Croatian' || nation.value ==='Cuba' || nation.value ==='Cuban' ||
     nation.value ==='Cubanos' || nation.value ==='Cyprus' || nation.value ==='Cypriot' || 
     nation.value ==='Cypriote' || nation.value ==='Czech Republic' || nation.value ==='Czech' ||
     nation.value ==='Denmark' || nation.value ==='Dane' || nation.value ==='Danish' ||
     nation.value ==='Djibouti' || nation.value ==='Djiboutian' || nation.value ==='Djiboutien' ||
     nation.value ==='Dominica' || nation.value ==='Dominican' || nation.value ==='East Timor' ||
     nation.value ==='East Timorese' || nation.value ==='Ecuador' || nation.value ==='Ecuadorian' ||
     nation.value ==='Egypt' || nation.value ==='Egyptian' || nation.value ==='El Salvador' ||
     nation.value ==='Salvadoran' || nation.value ==='Equatorial Guinea' || nation.value ==='Equatoguinean' ||
     nation.value ==='Equatorial Guinean' || nation.value ==='Eritrea' || nation.value ==='Eritrean' ||
     nation.value ==='Estonia' || nation.value ==='Estonian' || nation.value ==='Eswatini' ||
     nation.value ==='Swati' || nation.value ==='Ethiopia' || nation.value ==='Ethiopian' ||
     nation.value ==='Fiji' || nation.value ==='Fijian' || nation.value ==='Finland' || 
     nation.value ==='Finnish' || nation.value ==='France' || nation.value ==='French' ||
     nation.value ==='Gabon' || nation.value ==='Gabonese' || nation.value ==='Gambia' ||
     nation.value ==='The Gambia' || nation.value ==='Gambian' || nation.value ==='Georgia' ||
     nation.value ==='Georgian' || nation.value ==='Germany' || nation.value ==='German' ||
     nation.value ==='Germani' || nation.value ==='Deutsche' || nation.value ==='Ghana' ||
     nation.value ==='Ghanaian' || nation.value ==='Greece' || nation.value ==='Greek' ||
     nation.value ==='Grenada' || nation.value ==='Grenadian' || nation.value ==='Guatemala'||
     nation.value ==='Guatemalan' || nation.value ==='Guinea' || nation.value ==='Guinean' ||
     nation.value ==='Guinea-Bissau' || nation.value ==='Guinea Bissau' || nation.value ==='Guyana' ||
     nation.value ==='Guyanese' || nation.value ==='Haiti' || nation.value ==='Haitian' ||
     nation.value ==='Haitien' || nation.value ==='Honduras' || nation.value ==='Honduran' ||
     nation.value ==='Hondurans' || nation.value ==='Hungary' || nation.value ==='Hungarian' ||
     nation.value ==='Iceland' || nation.value ==='Icelander' || nation.value ==='India' ||
     nation.value ==='Indian' || nation.value ==='Indonesia' || nation.value ==='Indonesian' ||
     nation.value ==='Iran' || nation.value ==='Iranian' || nation.value ==='Iraqi' ||
     nation.value ==='Iraq' || nation.value ==='Ireland' || nation.value ==='Irish' ||
     nation.value ==='Israel' || nation.value ==='Israeli' || nation.value ==='Italy' ||
     nation.value ==='Italian' || nation.value ==='Ivory Coast' || nation.value ==='Ivorian' ||
     nation.value ==='Jamaica' || nation.value ==='Jamaican' || nation.value ==='Japan' ||
     nation.value ==='Japanese' || nation.value ==='Jordan' || nation.value ==='Jordanian' ||
     nation.value ==='Kazakhstan' || nation.value ==='Kazakhstani' || nation.value ==='Kenya' ||
     nation.value ==='Kenyan' || nation.value ==='Kiribati' || nation.value ==='North Korea' ||
     nation.value ==='North Korean' || nation.value ==='South Korea' || nation.value ==='South Korean' ||
     nation.value ==='Korean' || nation.value ==='Kosovo' || nation.value ==='Kosovar' || 
     nation.value ==='Kosovan' || nation.value ==='Kuwaiti' || nation.value ==='Kuwaiti' ||
     nation.value ==='Kyrgyzstan' || nation.value ==='Kyrgyz' || nation.value ==='Kirgiz' || 
     nation.value ==='Khirgiz' || nation.value ==='Laos' || nation.value ==='Lao' ||
     nation.value ==='Laotian' || nation.value ==='Latvian' || nation.value ==='Latvian' ||
     nation.value ==='Lebanon' || nation.value ==='Lebanese' || nation.value ==='Lesotho' ||
     nation.value ==='Mosotho' || nation.value ==='Basotho' || nation.value ==='Liberia' ||
     nation.value ==='Liberian' || nation.value ==='Libya' || nation.value ==='Libyan' ||
     nation.value ==='Liechtenstein' || nation.value ==='Liechtensteiner' || nation.value ==='Lithuania' ||
     nation.value ==='Lithuanian' || nation.value ==='Luxembourg' || nation.value ==='Luxembourger' ||
     nation.value ==='Macedonia' || nation.value ==='Macedonian' || nation.value ==='Madagascar' ||
     nation.value ==='Malagasy' || nation.value ==='Madagascan' || nation.value ==='Malawi' ||
     nation.value ==='Malawian' || nation.value ==='Malaysia' || nation.value ==='Malaysian' ||
     nation.value ==='Maldives' || nation.value ==='Maldivian' || nation.value ==='Mali' ||
     nation.value ==='Malian' || nation.value ==='Malta' || nation.value ==='Maltese' ||
     nation.value ==='Marshall Islands' || nation.value ==='Marshallese' || nation.value ==='Mauritania' ||
     nation.value ==='Mauritanian' || nation.value ==='Mauritius' || nation.value ==='Mauritian' ||
     nation.value ==='Mexico' || nation.value ==='Mexican' || nation.value ==='Micronesia' ||
     nation.value ==='Micronesian' || nation.value ==='Moldova' || nation.value ==='Moldovan' ||
     nation.value ==='Monaco' || nation.value ==='Monacan' || nation.value ==='Monegasque' ||
     nation.value ==='Mongolia' || nation.value ==='Mongol' || nation.value ==='Montenegro' ||
     nation.value ==='Montenegrin' || nation.value ==='Morocco' || nation.value ==='Moroccan' ||
     nation.value ==='Mozambique' || nation.value ==='Mozambican' || nation.value ==='Myanmar' ||
     nation.value ==='Nargorno-Karabakh' || nation.value ==='Nargono Karabakh' || nation.value ==='Namibia' ||
     nation.value ==='Nama' || nation.value ==='Namibian' || nation.value ==='Nauru' ||
     nation.value ==='Nauruan' || nation.value ==='Nepal' || nation.value ==='Nepali' ||
     nation.value ==='Nepalese' || nation.value ==='Netherlands' || nation.value ==='Dutch' ||
     nation.value ==='New Zealand' || nation.value ==='Kiwi' || nation.value ==='New Zealander' ||
     nation.value ==='Nicaragua' || nation.value ==='Nicaraguan' || nation.value ==='Niger' ||
     nation.value ==='Nigerien' || nation.value ==='Nigerian' || nation.value ==='Nigeria' ||
     nation.value ==='Niue' || nation.value ==='Niuean' || nation.value ==='North Macedonia' ||
     nation.value ==='Northern Cyprus' || nation.value ==='Norway' || nation.value ==='Norwegian' ||
     nation.value ==='Oman' || nation.value ==='Omani' || nation.value ==='Pakistan' ||
     nation.value ==='Pakistani' || nation.value ==='Palau' || nation.value ==='Palauan' ||
     nation.value ==='Palestine' || nation.value ==='Palestinian' || nation.value ==='Panama' ||
     nation.value ==='Panamanian' || nation.value ==='Papua New Guinea' || nation.value ==='Papuan' ||
     nation.value ==='Paraguay' || nation.value ==='Paraguayan' || nation.value ==='Peru' ||
     nation.value ==='Peruvian' || nation.value ==='Philippines' || nation.value ==='Pinoy' ||
     nation.value ==='Filipino' || nation.value ==='Poland' || nation.value ==='Polish' ||
     nation.value ==='Pole' || nation.value ==='Poles'|| nation.value ==='Portugal' ||
     nation.value ==='Portuguese' || nation.value ==='Pridnestrovie' || nation.value ==='Qatar' ||
     nation.value ==='Qatari' || nation.value ==='Romania' || nation.value ==='Romanian' ||
     nation.value ==='Russia' || nation.value ==='Russian' || nation.value ==='Rwanda' ||
     nation.value ==='Rwandan' || nation.value ==='Rwandanese' || nation.value ==='Sahrawi' ||
     nation.value ==='Sahrawi Arab Democratic Repbulic' || nation.value ==='Saint Kitts and Nevis' ||
     nation.value ==='Kittitian' || nation.value ==='Nevisian' || nation.value ==='Saint Lucia' ||
     nation.value ==='Saint Vincent and the Grenadines' || nation.value ==='Vincentian' || nation.value ==='Samoa' ||
     nation.value ==='Samoan' || nation.value ==='San Marino' || nation.value ==='Sammarinese' ||
     nation.value ==='Sao Tome and Principe' || nation.value ==='Saudi Arabia' || nation.value ==='Arab' ||
     nation.value ==='Arabian' || nation.value ==='Saudi' || nation.value ==='Saudi Arabian' ||
     nation.value ==='Senegal' || nation.value ==='Senegalese' || nation.value ==='Serbia' ||
     nation.value ==='Serbian' || nation.value ==='Seychelles' || nation.value ==='Seychellois' ||
     nation.value ==='Sierra Leone' || nation.value ==='Creole' || nation.value ==='Singapore' ||
     nation.value ==='Singaporean' || nation.value ==='Slovakia' || nation.value ==='Slovak' ||
     nation.value ==='SLovenia' || nation.value ==='Slovenes' || nation.value ==='Slovenian' ||
     nation.value ==='Solomon Islands' || nation.value ==='Somalia' || nation.value ==='Somali' ||
     nation.value ==='South Africa' || nation.value ==='South African' || nation.value ==='Somaliland' ||
     nation.value ==='South Sudan' || nation.value ==='Spain' || nation.value ==='Spanish' ||
     nation.value ==='Sri Lanka' || nation.value ==='Tamil' || nation.value ==='Sri Lankan' ||
     nation.value ==='Sudan' || nation.value ==='Sudanese' || nation.value ==='Suriname' ||
     nation.value ==='Surinamese' || nation.value ==='Swaziland' || nation.value ==='Sweden' ||
     nation.value ==='Swede' || nation.value ==='Swedish' || nation.value ==='Switzerland' ||
     nation.value ==='Swiss' || nation.value ==='Syria' || nation.value ==='Syrian' ||
     nation.value ==='Taiwan' || nation.value ==='Taiwanese' || nation.value ==='Taijikistan' ||
     nation.value ==='Taijikistani' || nation.value ==='Tajik' || nation.value ==='Tanzania' ||
     nation.value ==='Tanzanian' || nation.value ==='Thailand' || nation.value ==='Thai' ||
     nation.value ==='Togo' || nation.value ==='Togolese' || nation.value ==='Tonga' ||
     nation.value ==='Tongan' || nation.value ==='Transnistria' || nation.value ==='Trinidad and Tobago' ||
     nation.value ==='Trinidadia' || nation.value ==='Tobagonian' || nation.value ==="Tunisia" ||
     nation.value ==='Tunisian' || nation.value ==='Turkey' || nation.value ==='Turkish' ||
     nation.value ==='Turkmenistan' || nation.value ==='Turkmen' || nation.value ==='Tuvalu' ||
     nation.value ==='Tuvaluan' || nation.value ==='Uganda' || nation.value ==='Ugandan' ||
     nation.value ==='Ukraine' || nation.value ==='Ukrainian' || nation.value ==='United Arab Emirates' ||
     nation.value ==='Arabic' || nation.value ==='United Kingdom' || nation.value ==='British' ||
     nation.value ==='America' || nation.value ==='United States' || nation.value ==='American' ||
     nation.value ==='Uruguay' || nation.value ==='Uruguayan' || nation.value ==='Uzbekistan' ||
     nation.value ==='Uzbek' || nation.value ==='Vanuatu' || nation.value ==='Vatican' ||
     nation.value ==='Vatican City' || nation.value ==='Venezuela' || nation.value ==='Venezuelan' ||
     nation.value ==='Vietnam' || nation.value ==='Vietnamese' || nation.value ==='Yemen' || 
     nation.value ==='Yemeni' || nation.value ==='Zambia' || nation.value ==='Zambian' || 
     nation.value ==='Zimbabwe'
     ){
         //check if nation entered is valid or not
     } else {
         errorMsg.push('You need to input a real country or nationality!')
     }
 }

 let vCheckbox = (checkbox, errorMsg) => {
     if(!checkbox.checked) {
         errorMsg.push('You need to agree to submit!')
     }
 }
 

//  let checkforbadwords = (username) => {
//     var i = 0;
//     while(i<username.length){
//         if(username[i] === 'f' || username[i] === 'F'){
//             if(username.length-i >= 4){   
//                 if(username[i+1] === 'u' || username[i+1] === 'U'){
//                     if(username[i+2] === 'c' || username[i+2] === 'C'){
//                         if(username[i+3] === 'k' || username[i+3] === 'K'){
//                             return 1;
//                         }
//                     }
//                 }
//             }
//         }
        

//         i++;
//     }
//  }