import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

export interface IAlert{
  title?:string;
  text:string;
  type:any; /** [success, warning, error] */
  timer?: number;
  showCancelButton?: boolean,
  confirmButtonColor?: string,
  cancelButtonColor?: string,
  confirmButtonText?: string,
  cancelButtonText?: string,
  handlerConfirm?: any,
  handlerCancel?: any,
  allowOutsideClick?:boolean,
  allowEscapeKey?: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  openSwal(data:IAlert) {
    swal({
      title: data.title || 'Good job!',
      text: data.text || 'You clicked the button!',
      type: data.type || 'success'
    }).catch(swal.noop);
  }

  openSwalHtml(data:IAlert) {
    swal({
      title: data.title || 'Good job!',
      html: data.text || 'You clicked the button!',
      type: data.type || 'success',
      timer: data.timer,
    }).catch(swal.noop);
  }

  openCloseAuto(data:IAlert){
    swal({
      title: data.title || 'Espere un momento..!',
      html: data.text || '',
      type: data.type || 'success',
      timer: data.timer,
      onBeforeOpen: () => {
        swal.showLoading();
      },
    }).then((result) => {
      if(result.dismiss  === swal.DismissReason.timer){
        console.log('I was closed by the timer')
      }
    });
  }

  openConfirmsSwal(data: IAlert) {
    swal({
        title: data.title,
        html: data.text,
        type: data.type,
        showCancelButton: data.showCancelButton,
        confirmButtonColor: data.confirmButtonColor,
        cancelButtonColor: data.confirmButtonColor,
        confirmButtonText: data.confirmButtonText,
        cancelButtonText: data.cancelButtonText,
        allowOutsideClick: data.allowOutsideClick,
        allowEscapeKey: data.allowEscapeKey
    }).then((result) => {
        if (result.value) {
            data.handlerConfirm();
        } else {
            if (data.handlerCancel) {
                data.handlerCancel();
            }
        }
    });
  }
}
