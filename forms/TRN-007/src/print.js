"use strict";
/**
 * @module PrintModule
 */
var printModule = (function(){
    var modo = "";

    var setup = function () {
        modo = getFormMode();
    };

    var geraAvaliacao = function () {
        try {
            var myWindow;
            if(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){				
                myWindow = window.open("print/print.html", "myWindow");
                setup();
                setTimeout(function() {
                    var list = getData();
                    setData(myWindow, list);
                }, 3000);
                
            } else {
                alert('Navegador incompatível! Utilizar o Google Chrome');
            }
        } catch (err) {
            console.log(err.message);
            alert('DESCULPE! Ocorreu um erro, contate o administrador');
        }
    };

    var getData = function () {
       var formObj, nomeCurso, dataInicio, dataFim, nomeParticipante,
             matParticipante, conteudoProgramatico, cargoParticipante, lotacaoParticipante, avaliadorTreinamento;
        nomeCurso = modo == "VIEW" ? $("span[name*=nomeCurso]").html() : $("input[name*=nomeCurso]").val();
        dataInicio = modo == "VIEW" ? $("span[name*=data1]").html() : $("input[name*=data1]").val();
        dataFim = modo == "VIEW" ? $("span[name*=data2]").html() : $("input[name*=data2]").val();
        nomeParticipante = modo == "VIEW" ? $("span[name*=nomeParticipante]").html() : $("input[name*=nomeParticipante]").val();
        matParticipante = modo == "VIEW" ? $("span[name*=matParticipante]").html() : $("input[name*=matParticipante]").val();
        conteudoProgramatico = modo == "VIEW" ? $("span[name*=conteudoProgramatico]").html() : $("textarea[name*=conteudoProgramatico]").val();
        cargoParticipante = modo == "VIEW" ? $("span[name*=cargoParticipante]").html() : $("#cargoParticipante").val();
        cargoParticipante = cargoParticipante == null ? " " : cargoParticipante; 
        lotacaoParticipante = modo == "VIEW" ? $("span[name*=lotacaoParticipante]").html() : $("#lotacaoParticipante").val();
        lotacaoParticipante = lotacaoParticipante == null ? " " : lotacaoParticipante;
        avaliadorTreinamento = modo == "VIEW" ? $("span[name*=avaliadorTreinamento]").html() : $("#avaliadorTreinamento").val();
        avaliadorTreinamento = avaliadorTreinamento == null ? " " : avaliadorTreinamento;
        formObj = {
            "nomeCurso":nomeCurso + "",
            "dataInicio": dataInicio + "",
            "dataFim": dataFim + "",
            "nomeParticipante": nomeParticipante + "",
            "matParticipante": matParticipante + "",
            "conteudoProgramatico": conteudoProgramatico.replace(/\n/g, '<br>') + "",
            "cargoParticipante": cargoParticipante + "",
            "lotacaoParticipante": lotacaoParticipante + "",
            "avaliadorTreinamento": avaliadorTreinamento + ""
        };
        if ( formObj.conteudoProgramatico == "" ) {
            formObj.conteudoProgramatico = "<div style='height: 100px;'></div>";
        }
        return formObj;     
    };

    var getHeader = function (){
        var data = new Date();
        var dia = data.getDate() < 10 ? '0'+data.getDate() : data.getDate();
        var mes = (data.getMonth()+1) < 10 ? '0'+(data.getMonth()+1) : (data.getMonth()+1);
        var ano = data.getFullYear();
        var header = '<div>'+
        '				<div class="row">'+
        '					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-left">'+
        '						<img src="../logo12.png" alt="" width="45" height="45">'+
        '					</div>'+
        '					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">'+
        '						<h4>Avaliação de eficácia de treinamento</h4>'+
        '					</div>'+
        '					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="font-size: 10px;">'+
        '						<span><b>Data: </b></span><span>'+dia+'/'+mes+'/'+ano+'</span>'+
        '						<br>'+
        '						<span><b>Solicitação: </b></span><span>'+getProcess()+'</span>'+
        '					</div>'+
        '				</div>'+
        '				<div class="row">'+
        '					<div class="col-xs-12 col-sm-12 col-md-12">'+
        '						<br>'+
        '						<legend style="border-bottom: solid .5px;"></legend>'+
        '					</div>'+
        '				</div>'+
        '			</div>';
        return header;
    };

    function setData(myWindow, list) {
        try{
            var style = 'background-color: #4169E1 !important; color: #fff !important;';
            var dvDados = myWindow.document.createElement('div');
            var dvHeader = myWindow.document.createElement('div');
            var header = getHeader();
            dvHeader.innerHTML = header;
            if (list.dataInicio == "" && list.dataFim == "") {
                list.dataInicio = "__/__/____";
                list.dataFim = "__/__/____";
            }
            dvHeader.id = 'aprovacaoEficaciaFormHeader';
            var html =
            '       <div class="row">'+
                '           <div class="col-md-12">'+
                '               <div class="container-text">'+
                '                   Este questionário tem como objetivo identificar os resultados pós treinamento.'+ 
                '                   Responda todas as questões, conforme instruções abaixo.'+
                '               </div>'+
                '           </div>'+
            '       </div>'+

            '		<div class="row">'+
                '       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">'+
                '               <table class="table table-bordered table-hover table-condensed" style="width: 100%;">'+
                '                <thead>'+
                '                    <tr>'+
                '                        <th width="50%" class="text-center" style="'+style+'">Curso</th>'+
                '                        <th width="50%" class="text-center" style="'+style+'">Período de realização</th>'+
                '                    </tr>'+
                '                </thead>'+
                '                <tbody>'+
                '                    <tr>'+
                '                        <td width="50%">'+
                '                            <span>'+list.nomeCurso+'</span>'+
                '                        </td> '+
                '                        <td width="50%">'+
                '                            <span>'+list.dataInicio + "  à  " + list.dataFim +'</span>'+
                '                        </td>'+
                '                    </tr>'+
                '                </tbody>'+
                '            </table>'+
                '       </div>'+
            '       </div>'+

            '		<div class="row">'+
                '       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">'+
                '               <table class="table table-bordered table-hover table-condensed" style="width: 100%;">'+
                '                <thead>'+
                '                    <tr>'+
                '                        <th width="50%" class="text-center" style="'+style+'">Participante</th>'+
                '                        <th width="50%" class="text-center" style="'+style+'">Matrícula</th>'+
                '                    </tr>'+
                '                </thead>'+
                '                <tbody>'+
                '                    <tr>'+
                '                        <td width="50%">'+
                '                            <span>'+list.nomeParticipante+'</span>'+
                '                        </td> '+
                '                        <td width="50%">'+
                '                            <span>'+list.matParticipante +'</span>'+
                '                        </td>'+
                '                    </tr>'+
                '                </tbody>'+
                '            </table>'+
                '       </div>'+
            '       </div>'+

            
            '		<div class="row">'+
                '       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">'+
                '               <table class="table table-bordered table-hover table-condensed" style="width: 100%;">'+
                '                <thead>'+
                '                    <tr>'+
                '                        <th width="50%" class="text-center" style="'+style+'">Cargo</th>'+
                '                        <th width="50%" class="text-center" style="'+style+'">Lotação</th>'+
                '                    </tr>'+
                '                </thead>'+
                '                <tbody>'+
                '                    <tr>'+
                '                        <td width="50%">'+
                '                            <span>'+list.cargoParticipante+'</span>'+
                '                        </td> '+
                '                        <td width="50%">'+
                '                            <span>'+list.lotacaoParticipante +'</span>'+
                '                        </td>'+
                '                    </tr>'+
                '                </tbody>'+
                '            </table>'+
                '       </div>'+
            '       </div>'+

            '		<div class="row">'+
                '       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">'+
                '               <table class="table table-bordered table-hover table-condensed" style="width: 100%;">'+
                '                <thead>'+
                '                    <tr>'+
                '                        <th width="100%" class="text-center" style="'+style+'">Avaliador</th>'+
                '                    </tr>'+
                '                </thead>'+
                '                <tbody>'+
                '                    <tr>'+
                '                        <td width="100%">'+
                '                            <span>'+list.avaliadorTreinamento+'</span>'+
                '                        </td> '+
                '                    </tr>'+
                '                </tbody>'+
                '            </table>'+
                '       </div>'+
            '       </div>'+
            
            '       <div class="row">'+
                '       <div class="col-md-12">'+
                '           <div class="container-text">'+
                '               Conteúdo Programático:'+
                '           </div>'+
                '       </div>'+
            '       </div>'+

            '       <div class="row">'+
                '       <div class="col-md-12">'+
                '           <div class="container-text-2" style="padding-left: 10px;">'+
                                list.conteudoProgramatico +
                '          </div>'+
                '      </div>'+
            '      </div>'+

            '       <div class="row">'+
                '       <div class="col-md-12">'+
                '          <div class="container-text">Instruções de Preenchimento: Avaliador e avaliado devem realizar o procedimento em conjunto para análise e definição consensual.</div>'+
                '       </div>'+
            '       </div>'+

            '       <div class="row">'+
                '        <div class="col-md-12">'+
                '            <div class="form-field" data-type="checkbox" data-show-properties="" data-field-name="pergunta1">'+
                '                <div class="form-input">'+
                '                    <div class="form-group">'+
                '                        <label>1) O treinamento realizado atingiu os resultados esperados?</label>&nbsp;'+
                '                        <div class="radio-options">'+
                '                            <div>'+
                '                                <label class="labelForRadio"><input name="pergunta1" id="pergunta1" type="checkbox" value="Sim"> Sim (100%)</label>'+
                '                            </div>'+
                '                            <div>'+
                '                                <label class="labelForRadio"><input name="pergunta1" id="pergunta1" type="checkbox" value="Parcialmente"> Parcialmente (50%)</label>'+
                '                            </div>'+
                '                            <div>'+
                '                                <label class="labelForRadio"><input name="pergunta1" id="pergunta1" type="checkbox" value="Não"> Não (menos de 50%)</label>'+
                '                            </div>'+
                '                        </div>'+
                '                    </div>'+
                '                </div>'+
                '             </div>'+
                '       </div>'+
            '       </div>'+
            
            '       <div class="row">'+
                '        <div class="col-md-12">'+
                '           <div class="form-field" data-type="textarea" data-show-properties="" data-field-name="justificativa1">'+
                '               <div class="form-input">'+
                '                   <div class="form-group">'+
                '                       <label>Justifique para respostas Parcialmente (50%) e Não (menos de 50%)'+
                '                       </label>'+
                '                       <div style="padding-top: 100px;"></div>'+
                '                   </div>'+
                '               </div>'+
                '           </div>'+
                '       </div>'+
            '       </div>'+

            '       <div class="row">'+
                '           <div class="col-md-12">'+
                '               <div class="form-field" data-type="checkbox" data-show-properties="" data-field-name="pergunta2">'+
                '                   <div class="form-input">'+
                '                       <div class="form-group">'+
                '                           <label>2) Qual percentual de aplicabilidade dos conceitos ou metodologias desse treinamento nas atividades rotineiras do participante?</label>&nbsp;'+
                '                           <div class="radio-options">'+
                '                               <div>'+
                '                                   <label class="labelForRadio"><input name="pergunta2" id="pergunta2" type="checkbox" value="aplicavel"> Aplicável (100% a 76%)</label>'+
                '                               </div>'+
                '                               <div>'+
                '                                   <label class="labelForRadio"><input name="pergunta2" id="pergunta2" type="checkbox" value="parcialmente_aplicavel"> Parcialmente aplicável (75% a 51%) </label>'+
                '                               </div>'+
                '                               <div>'+
                '                                   <label class="labelForRadio"><input name="pergunta2" id="pergunta2" type="checkbox" value="pouco_aplicavel"> Pouco aplicável (50% a 26%)</label>'+
                '                               </div>'+
                '                               <div>'+
                '                                   <label class="labelForRadio"><input name="pergunta2" id="pergunta2" type="checkbox" value="nao_aplicavel"> Não aplicável (25% a 0%)</label>'+
                '                               </div>'+
                '                           </div>'+
                '                       </div>'+
                '                   </div>'+
                '               </div>'+
                '           </div>'+
            '       </div>'+

            '    <div class="row">'+
                '        <div class="col-md-12">'+
                '               <div class="form-field" data-type="textarea" data-show-properties="" data-field-name="justificativa2">'+
                '                   <div class="form-input">'+
                '                       <div class="form-group">'+
                '                           <label>Justifique sua resposta'+
                '                           </label>'+
                '                           <div style="padding-top: 100px;"></div>'+
                '                       </div>'+
                '                   </div>'+
                '               </div>'+
                '       </div>'+
            '    </div>'+

            '       <div class="row">'+
                '           <div class="col-md-12">'+
                '               <div class="form-field" data-type="textarea" data-show-properties="" data-field-name="pergunta3">'+
                '                   <div class="form-input">'+
                '                       <div class="form-group">'+
                '                           <label>3) Descreva os resultados obtidos em relação a situação anterior x situação atual'+
                '                           </label>'+
                '                           <div style="padding-top: 100px;"></div>'+
                '                       </div>'+
                '                   </div>'+
                '               </div>'+
                '           </div>'+
            '       </div>'+

            '       <div class="row">'+
                '               <div class="col-md-12">'+
                '                   <table style=" text-align: center; margin-bottom: 20px;">'+
                '                       <th>'+
                '                           <tr>'+
                '                               <td style="width: 14%;">Participante</td>'+
                '                                   <td style="width: 14%">Avaliador</td>'+
                '                                   <td style="width: 14%">Responsável pelo departamento</td>'+
                '                                   <td style="width: 14%">Recursos Humanos</td>'+
                '                           </tr>'+
                '                       </th>'+
                '                       <tr>'+
                '                         <td><br/>________________________<br/>assinatura</td>'+
                '                         <td><br/>________________________<br/>assinatura</td>'+
                '                         <td><br/>________________________<br/>assinatura</td>'+
                '                         <td><br/>________________________<br/>assinatura</td>'+
                '                       </tr>'+
                '                       <tr>'+
                '                         <td>__/__/____</td>'+
                '                         <td>__/__/____</td>'+
                '                         <td>__/__/____</td>'+
                '                         <td>__/__/____</td>'+
                '                       </tr>'+
                '                   </table>'+
                '               Nº Solicitação: '+getProcess()+
                '               </div>'+
            '       </div>';

            dvDados.innerHTML = html;
            dvDados.id = 'aprovacaoEficaciaForm';
            var page = myWindow.document.createElement("page");
            
            page.appendChild(dvHeader);
            page.appendChild(dvDados);
            myWindow.document.getElementById("content-pages").appendChild(page);

           /*setTimeout(function() {
                myWindow.print();
                myWindow.close(); 
            }, 1500);*/

        }catch(err){
            console.log('Erro na funcao '+ err.message);
            alert('DESCULPE, OCORREU UM ERRO! Tente novamente ou Contate o administrador');
            myWindow.close();
        }
    };

    return {
        print: geraAvaliacao
    };
})();