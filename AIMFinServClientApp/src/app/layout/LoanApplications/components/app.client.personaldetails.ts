﻿import { Component, Injectable, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Form, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {ClientsService} from '../../../services/app.clients.service';

@Component({
    selector: `client-personal-details`,
    templateUrl: './app.clients.personaldetails.html',
    animations: [routerTransition()],
    providers: [ClientsService]
})
export class ClientsPersonalDetailsComponent implements OnInit {
    public _ViewApplicantDetails: boolean = false;
    public _FormErrors;
    public _FormErrorsDescription: string = '';
    public _EditPersonalDetails: boolean = false;
    public _EditCommunicationDetails: boolean = false;

    public _ApplicantDetails = {
        AutoID: '',
        ApplicantID: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        MaritalStatus: '',
        NoOfDependents: '',
        NZResidents: '',
        CountryOfBirth: '',
        MobileNo: '',
        HomePhoneNo: '',
        WorkPhoneNo: '',
        EmailID: '',
        ApplicantTypeID: '',
        IsActive: '',
        CreatedBy: '',
        CreatedOn: '',
        ModifiedBy: '',
        ModifiedOn: '',
        ApplicantType: {},
    }

    public _ApplicantCommunicationDetails: {
        AutoID: '',
        CommunicationID: '',
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        Duration: '',
        Status: '',
        ApplicantID: '',
    }

    constructor(public router: Router, private _LocalStorageService: LocalStorageService, private _ClientsService: ClientsService) { }

    ngOnInit() {
        if (this._LocalStorageService.get("ApplicantID") != undefined && this._LocalStorageService.get("ApplicantID") != null) {
            this._ClientsService.GetClientDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientDetailsSuccess(res), res => this.GetClientDetailsError(res));
            this._ClientsService.GetClientCommunicationDetails(<string>this._LocalStorageService.get("ApplicantID")).subscribe(res => this.GetClientCommDetailsSuccess(res), res => this.GetClientCommDetailsError(res));
        }
    }

    GetClientDetailsSuccess(res) {
        if (res._body != null && res._body != undefined && res._body.toString().trim().length > 0) {
            debugger;
            this._ApplicantDetails = JSON.parse(res._body);
        }
    }
    GetClientDetailsError(res) { }

    GetClientCommDetailsSuccess(res) {
        this._ApplicantCommunicationDetails = JSON.parse(res._body);
    }
    GetClientCommDetailsError(res) { }
    EditPersonalDetails() {
        this._EditPersonalDetails = true;
    }

    EditCommunicationDetails() {
        this._EditCommunicationDetails = true;
    }

    UpdatePersonalDetails() {
        debugger;
        this._EditPersonalDetails = false;
    }

    UpdateCommunicationDetails() {
        debugger;
        this._EditCommunicationDetails = false;
    }

    AddClient() {

    }
}