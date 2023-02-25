import {FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export function creatDateRangeValidator(): ValidatorFn {
    return (fg:any): ValidationErrors | null => {

        const start:String = fg.get("dateDebutContrat").value;

        const end:String = fg.get("dateFinContrat").value;
        
        if (start && end) {
            const dd = Number(start.substring(9,10))
           // var dd = Number(start. getDate());
            var mm = Number(start.substring(6,17))
            var yyyy = Number(start.substring(1,4));
            let isRangeValid = false;

            const dd1 = Number(end.substring(9,10))
            // var dd = Number(start. getDate());
             var mm1 = Number(end.substring(6,17))
             var yyyy1 = Number(end.substring(1,4));
            if (yyyy-yyyy1 < 0 ){
               isRangeValid = true
            }
            if (yyyy-yyyy1 == 0 ){
                if(mm-mm1 < 0){
                     isRangeValid = true
                }
                if(mm-mm1==0)
                {
                    if(dd-dd1< 0){
                         isRangeValid = true 
                    }
                }
              }
            return isRangeValid ? null : {dateRange:true};
        }

        return null;
    }
}