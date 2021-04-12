import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, Image, alert, ImageSource, confirm } from "@nativescript/core";
import { isAvailable, requestCameraPermissions, takePicture } from '@nativescript/camera';
import {
    getString,
    setString
} from "@nativescript/core/application-settings";
import {
    trigger,
    style,
    animate,
    transition
} from '@angular/animations';
import { RouterExtensions } from "@nativescript/angular";

interface RadioOption {
    text: string;
    selected: boolean;
}

class q1TableValues {
    commentQ11: string;
    statusQ11: boolean = true;
    percentQ11: number = 0.5;
    commentQ12: string;
    statusQ12: boolean = true;
    percentQ12: number = 0.5;
    commentQ13: string;
    statusQ13: boolean = true;
    percentQ13: number = 0.25;
    commentQ14: string;
    statusQ14: boolean = true;
    percentQ14: number = 0.25;
    commentQ15: string;
    statusQ15: boolean = true;
    percentQ15: number = 0.25;
    commentQ16: string;
    statusQ16: boolean = true;
    percentQ16: number = 0.25;
    total: number = 4;
}

class q2TableValues {
    commentQ21: string;
    statusQ21: boolean = true;
    percentQ21: number = 0.5;
    commentQ22: string;
    statusQ22: boolean = true;
    percentQ22: number = 0.5;
    commentQ23: string;
    statusQ23: boolean = true;
    percentQ23: number = 0.5;
    commentQ24: string;
    statusQ24: boolean = true;
    percentQ24: number = 0.5;
    commentQ25: string;
    statusQ25: boolean = true;
    percentQ25: number = 0.5;
    commentQ26: string;
    statusQ26: boolean = true;
    percentQ26: number = 0.5;
    commentQ27: string;
    statusQ27: boolean = true;
    percentQ27: number = 0.5;
    commentQ28: string;
    statusQ28: boolean = true;
    percentQ28: number = 0.5;
    commentQ29: string;
    statusQ29: boolean = true;
    percentQ29: number = 0.5;
    total: number = 9;
}

class q3TableValues {
    commentQ31: string;
    statusQ31: boolean = true;
    percentQ31: number = 0.5;
    commentQ32: string;
    statusQ32: boolean = true;
    percentQ32: number = 0.25;
    commentQ33: string;
    statusQ33: boolean = true;
    percentQ33: number = 0.25;
    commentQ34: string;
    statusQ34: boolean = true;
    percentQ34: number = 0.25;
    commentQ35: string;
    statusQ35: boolean = true;
    percentQ35: number = 0.25;
    commentQ36: string;
    statusQ36: boolean = true;
    percentQ36: number = 0.25;
    commentQ37: string;
    statusQ37: boolean = true;
    percentQ37: number = 0.5;
    commentQ38: string;
    statusQ38: boolean = true;
    percentQ38: number = 0.25;
    commentQ39: string;
    statusQ39: boolean = true;
    percentQ39: number = 0.25;
    commentQ310: string;
    statusQ310: boolean = true;
    percentQ310: number = 0.5;
    commentQ311: string;
    statusQ311: boolean = true;
    percentQ311: number = 0.5;
    commentQ312: string;
    statusQ312: boolean = true;
    percentQ312: number = 0.25;
    commentQ313: string;
    statusQ313: boolean = true;
    percentQ313: number = 0.25;
    commentQ314: string;
    statusQ314: boolean = true;
    percentQ314: number = 0.25;
    total: number = 9;
}

class q4TableValues {
    commentQ41: string;
    statusQ41: boolean = true;
    percentQ41: number = 1;
    commentQ42: string;
    statusQ42: boolean = true;
    percentQ42: number = 0.5;
    commentQ43: string;
    statusQ43: boolean = true;
    percentQ43: number = 0.5;
    commentQ44: string;
    statusQ44: boolean = true;
    percentQ44: number = 0.5;
    commentQ45: string;
    statusQ45: boolean = true;
    percentQ45: number = 0.5;
    commentQ46: string;
    statusQ46: boolean = true;
    percentQ46: number = 0.5;
    commentQ47: string;
    statusQ47: boolean = true;
    percentQ47: number = 0.5;
    total: number = 4;
}

class q5TableValues {
    commentQ51: string;
    statusQ51: boolean = true;
    percentQ51: number = 1;
    commentQ52: string;
    statusQ52: boolean = true;
    percentQ52: number = 1;
    commentQ53: string;
    statusQ53: boolean = true;
    percentQ53: number = 1;
    commentQ54: string;
    statusQ54: boolean = true;
    percentQ54: number = 0.5;
    commentQ55: string;
    statusQ55: boolean = true;
    percentQ55: number = 0.5;
    commentQ56: string;
    statusQ56: boolean = true;
    percentQ56: number = 0.5;
    commentQ57: string;
    statusQ57: boolean = true;
    percentQ57: number = 0.5;
    commentQ58: string;
    statusQ58: boolean = true;
    percentQ58: number = 0.5;
    commentQ59: string;
    statusQ59: boolean = true;
    percentQ59: number = 0.5;
    commentQ510: string;
    statusQ510: boolean = true;
    percentQ510: number = 0.5;
    commentQ511: string;
    statusQ511: boolean = true;
    percentQ511: number = 0.5;
    commentQ512: string;
    statusQ512: boolean = true;
    percentQ512: number = 0.5;
    commentQ513: string;
    statusQ513: boolean = true;
    percentQ513: number = 1;
    commentQ514: string;
    statusQ514: boolean = true;
    percentQ514: number = 0.5;
    commentQ515: string;
    statusQ515: boolean = true;
    percentQ515: number = 1;
    total: number = 9;
}

class formValues {
    nameOfLocation: string;
    streetSituation: string;
    nearestLocationDistance: string;
    externalInstallatioinsFound: boolean = false;
    externalInstallatioinsFoundText: string;
    waterBody: boolean = false;
    waterBodyText: string;
    floorOfBuilding: string;
    mainLandmarks: string;
    weakness: string;
}

class formValuesTwo {
    externalMonitorEnv: boolean = false;
    externalMonitorEnvText: string;
    externalPowerStat: boolean = false;
    externalPowerStatText: string;
    externalPerimeter: boolean = false;
    externalPerimeterText: string;
    warningSigns: boolean = false;
    warningSignsText: string;
    roadLeading: boolean = false;
    roadLeadingText: string;
    weakness: string;
}

class formValuesThree {
    heightOuterWall: string;
    surveillanceAlarm: boolean = false;
    surveillanceAlarmText: string;
    secureCCTV: boolean = false;
    secureCCTVText: string;
    moreFence: boolean = false;
    moreFenceText: string;
    lighting: boolean = false;
    lightingText: string;
    adjacent: boolean = false;
    adjacentText: string;
    climbFacility: boolean = false;
    climbFacilityText: string;
    barrier: boolean = false;
    barrierText: string;
    barbedWire: boolean = false;
    barbedWireText: string;
    weakness: string;
}

class formValuesFour {
    heightFenceText: string;
    fenceFacility: boolean = false;
    fenceFacilityText: string;
    lightingFence: boolean = false;
    lightingFenceText: string;
    fenceLanyardText: string;
    alarmFence: boolean = false;
    alarmFenceText: string;
    barrierFence: boolean = false;
    barrierFenceText: string;
    weakness: string;
}

class formValuesFive {
    useGate: string;
    gateFacility: string;
    protectionPortal: string;
    guarding: string;
    unauthorizedText: string;
    unauthorized: boolean = false;
    warningSignsText: string;
    warningSigns: boolean = false;
    emergencyPortalText: string;
    emergencyPortal: boolean = false;
    eveningHourText: string;
    eveningHour: boolean = false;
    vehicleInspectionText: string;
    vehicleInspection: boolean = false;
    weakness: string;
}

@Component({
    selector: "Settings",
    animations: [
        trigger('fadeAndSlide', [
            transition(':enter', [
                style({ opacity: 0, transform: "translateY(20)" }),
                animate('1s ease-out', style({ opacity: 1, transform: "translateY(0)" }))
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: "translateY(0)" }),
                animate('1s ease-in', style({ opacity: 0, transform: "translateY(20)" }))
            ])
        ])
    ],
    templateUrl: "./settings.component.html"
})

export class SettingsComponent implements OnInit {
    title: string;
    reason: string;
    public signedApplication: Array<any> = [];
    // public signedApplicationTwo: Array<any> = [];
    // public signedApplicationThree: Array<any> = [];
    documents = [];
    availableItems: any = [];
    commentList = [{
        "id": 0,
        "comment": ""
    }];
    comment: string;
    //externalInstallatioinsFound: boolean = false;
    //externalInstallatioinsFoundText: string;
    waterBody: boolean = false;
    waterBodyText: string;
    weakness: boolean = false;
    formValues: formValues = new formValues();
    formValuesTwo: formValuesTwo = new formValuesTwo();
    formValuesThree: formValuesThree = new formValuesThree();
    formValuesFour: formValuesFour = new formValuesFour();
    formValuesFive: formValuesFive = new formValuesFive();
    q1TableValues: q1TableValues = new q1TableValues();
    q2TableValues: q2TableValues = new q2TableValues();
    q3TableValues: q3TableValues = new q3TableValues();
    q4TableValues: q4TableValues = new q4TableValues();
    q5TableValues: q5TableValues = new q5TableValues();
    category: string;
    @ViewChild('myfilter') myfilter: ElementRef;

    public listitems = [
        {
            "title": "reason1",
            "code": 'reason1'
        },
        {
            "title": "reason2",
            "code": 'reason2'
        },
        {
            "title": "reason3",
            "code": 'reason3'
        }
    ];

    public items = [{
        "title": 'battery',
        "selected": false
    }]

    constructor(private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        if (getString('questions')) {
            const questArr: Array<RadioOption> = JSON.parse(getString('questions'));
            console.log(questArr);
            questArr.forEach((option, index) => {
                if (option.selected) {
                    const q = "Q" + (index + 1);
                    this.category = q;
                    this.title = q + '. ' + option.text;

                    if (q == "Q1" && getString(q)) {
                        const answers: formValues = JSON.parse(getString(q));
                        //console.log("_images", getString(this.category + '_images'))
                        if (getString(this.category + '_images')) {
                            const documents = JSON.parse(getString(this.category + '_images'));
                            this.documents = documents;
                            documents.forEach((item, index: number) => {
                                this.signedApplication.push(item.image);
                            });
                        }

                        this.formValues.nameOfLocation = answers.nameOfLocation;
                        this.formValues.streetSituation = answers.streetSituation;
                        this.formValues.nearestLocationDistance = answers.nearestLocationDistance;
                        this.formValues.externalInstallatioinsFound = answers.externalInstallatioinsFound;
                        this.formValues.externalInstallatioinsFoundText = answers.externalInstallatioinsFoundText;
                        this.formValues.waterBody = answers.waterBody;
                        this.formValues.waterBodyText = answers.waterBodyText;
                        this.formValues.floorOfBuilding = answers.floorOfBuilding;
                        this.formValues.mainLandmarks = answers.mainLandmarks;
                        this.formValues.weakness = answers.weakness;
                        this.weakness = true;
                        this.q1TableValues = JSON.parse(getString('Q1Percentages'));
                    }

                    if (q == "Q2" && getString(q)) {
                        const answers: formValuesTwo = JSON.parse(getString(q));
                        if (getString(this.category + '_images')) {
                            const documents = JSON.parse(getString(this.category + '_images'));
                            this.documents = documents;
                            documents.forEach((item, index: number) => {
                                this.signedApplication.push(item.image);
                            });
                        }
                        this.formValuesTwo.externalMonitorEnv = answers.externalMonitorEnv;
                        this.formValuesTwo.externalMonitorEnvText = answers.externalMonitorEnvText;
                        this.formValuesTwo.externalPowerStat = answers.externalPowerStat;
                        this.formValuesTwo.externalPowerStatText = answers.externalPowerStatText;
                        this.formValuesTwo.externalPerimeter = answers.externalPerimeter;
                        this.formValuesTwo.externalPerimeterText = answers.externalPerimeterText;
                        this.formValuesTwo.warningSigns = answers.warningSigns;
                        this.formValuesTwo.warningSignsText = answers.warningSignsText;
                        this.formValuesTwo.roadLeading = answers.roadLeading;
                        this.formValuesTwo.roadLeadingText = answers.roadLeadingText;
                        this.formValuesTwo.weakness = answers.weakness;
                        this.weakness = true;

                        //Q1Percentages
                        this.q2TableValues = JSON.parse(getString('Q2Percentages'));
                    }

                    if (q == "Q3" && getString(q)) {
                        const answers: formValuesThree = JSON.parse(getString(q));
                        if (getString(this.category + '_images')) {
                            const documents = JSON.parse(getString(this.category + '_images'));
                            this.documents = documents;
                            documents.forEach((item, index: number) => {
                                this.signedApplication.push(item.image);
                            });
                        }
                        this.formValuesThree.heightOuterWall = answers.heightOuterWall;
                        this.formValuesThree.surveillanceAlarm = answers.surveillanceAlarm;
                        this.formValuesThree.surveillanceAlarmText = answers.surveillanceAlarmText;
                        this.formValuesThree.secureCCTV = answers.secureCCTV;
                        this.formValuesThree.secureCCTVText = answers.secureCCTVText;
                        this.formValuesThree.moreFence = answers.moreFence;
                        this.formValuesThree.moreFenceText = answers.moreFenceText;
                        this.formValuesThree.lighting = answers.lighting;
                        this.formValuesThree.lightingText = answers.lightingText;
                        this.formValuesThree.adjacent = answers.adjacent;
                        this.formValuesThree.adjacentText = answers.adjacentText;
                        this.formValuesThree.climbFacility = answers.climbFacility;
                        this.formValuesThree.climbFacilityText = answers.climbFacilityText;
                        this.formValuesThree.barrier = answers.barrier;
                        this.formValuesThree.barrierText = answers.barrierText;
                        this.formValuesThree.barbedWire = answers.barbedWire;
                        this.formValuesThree.barbedWireText = answers.barbedWireText;
                        this.formValuesThree.weakness = answers.weakness;
                        this.weakness = true;
                        this.q3TableValues = JSON.parse(getString('Q3Percentages'));
                    }

                    if (q == "Q4" && getString(q)) {
                        if (getString(this.category + '_images')) {
                            const documents = JSON.parse(getString(this.category + '_images'));
                            this.documents = documents;
                            documents.forEach((item, index: number) => {
                                this.signedApplication.push(item.image);
                            });
                        }
                        this.formValuesFour = JSON.parse(getString(q));
                        this.weakness = true;
                        this.q4TableValues = JSON.parse(getString('Q4Percentages'));
                    }

                    if (q == "Q5" && getString(q)) {
                        if (getString(this.category + '_images')) {
                            const documents = JSON.parse(getString(this.category + '_images'));
                            this.documents = documents;
                            documents.forEach((item, index: number) => {
                                this.signedApplication.push(item.image);
                            });
                        }
                        this.formValuesFive = JSON.parse(getString(q));
                        this.weakness = true;
                        this.q5TableValues = JSON.parse(getString('Q5Percentages'));
                    }
                }
            });
        }


        if (isAvailable()) {
            requestCameraPermissions()
                .then(
                    fulfilled => {
                        alert('requestCameraPermissions fulfilled.');

                    },
                    rejected => {
                        alert('No camera permissions set.');
                    }
                )
        } else {
            //  alert('No camera detected of available.');
        }
    }

    addMoreComments(id: number) {
        console.log(this.comment)
        this.commentList.push({
            "id": id + 1,
            "comment": ""
        });
    }

    onCheckedSummaryChange(args, key, match, percent, pMatch) {
        if (match == 'Q1') {
            this.q1TableValues[key] = args.value;
            if (args.value) {
                this.q1TableValues[pMatch] = percent;
            } else {
                this.q1TableValues[pMatch] = 0;
            }
            this.q1TableValues['total'] = this.q1TableValues['percentQ11'] + this.q1TableValues['percentQ12'] + this.q1TableValues['percentQ13'] + this.q1TableValues['percentQ14'] + this.q1TableValues['percentQ15'] + this.q1TableValues['percentQ16'];
            console.log(this.q1TableValues);
        }

        if (match == 'Q2') {
            this.q2TableValues[key] = args.value;
            if (args.value) {
                this.q2TableValues[pMatch] = percent;
            } else {
                this.q2TableValues[pMatch] = 0;
            }
            this.q2TableValues['total'] = this.q2TableValues['percentQ21'] + this.q2TableValues['percentQ22'] + this.q2TableValues['percentQ23'] + this.q2TableValues['percentQ24'] + this.q2TableValues['percentQ25'] + this.q2TableValues['percentQ26'] + this.q2TableValues['percentQ27'] + this.q2TableValues['percentQ28'] + this.q2TableValues['percentQ29'];
            console.log(this.q2TableValues);
        }
        //q3TableValues

        if (match == 'Q3') {
            this.q3TableValues[key] = args.value;
            if (args.value) {
                this.q3TableValues[pMatch] = percent;
            } else {
                this.q3TableValues[pMatch] = 0;
            }
            this.q3TableValues['total'] = this.q3TableValues['percentQ31'] + this.q3TableValues['percentQ32'] + this.q3TableValues['percentQ33'] + this.q3TableValues['percentQ34'] + this.q3TableValues['percentQ35'] + this.q3TableValues['percentQ36'] + this.q3TableValues['percentQ37'] + this.q3TableValues['percentQ38'] + this.q3TableValues['percentQ39'] + this.q3TableValues['percentQ310'] + this.q3TableValues['percentQ311'] + this.q3TableValues['percentQ312'] + this.q3TableValues['percentQ313'] + this.q3TableValues['percentQ314'];
            console.log(this.q3TableValues);
        }
    }

    onCheckedChange(args, key) {
        console.log(args.value);
        this.formValues[key] = args.value;
    }

    onCheckedChangeTwo(args, key) {
        console.log(args.value);
        this.formValuesTwo[key] = args.value;
    }

    onCheckedChangeThree(args, key) {
        console.log(args.value);
        this.formValuesThree[key] = args.value;
    }

    onCheckedChangeFour(args, key) {
        console.log(args.value);
        this.formValuesFour[key] = args.value;
    }

    takeSnap(type, count, arr) {
        var options = { width: 300, height: 300, keepAspectRatio: true, saveToGallery: false, allowsEditing: false };
        takePicture(options).
            then((imageAsset) => {
                //  alert("Result is an image asset instance");
                //let source = new ImageSource();
                ImageSource.fromAsset(imageAsset).then((source) => {
                    //this.image = source;
                    let imagename = type + "_" + (count + 1) + ".jpg";
                    let docuid = type + "_" + (count + 1);
                    let base64 = source.toBase64String("jpg", 70);

                    try {
                        for (var i = 0; i < this.documents.length; i++) {
                            if (this.documents[i]._id === docuid) {
                                this.documents.splice(i, 1);
                                break;
                            }
                        }

                        this.documents.push({
                            "_id": docuid,
                            "title": imagename,
                            "type": "image",
                            "image": base64,
                            "timestamp": (new Date()).getTime()
                        });
                        arr.push(source);
                    } catch (error) { }
                });
                //var image = new Image();
                // image.src = imageAsset;
            }).catch((err) => {
                console.log("Error -> " + err.message);
            });
    }

    cancelFilterableList() {
        console.log('canceled');
    }

    deleteImage(type, index, imagearray) {
        let options = {
            title: "IMPORTANT!!",
            message: "Are you sure you want to delete this image?",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Cancel"
        };

        confirm(options).then((result: boolean) => {
            if (result) {
                imagearray.splice(index, 1);
                console.log(imagearray)

                for (var i = 0; i < this.documents.length; i++) {
                    if (this.documents[i]._id === type + "_" + (index + 1)) {
                        this.documents.splice(i, 1);
                        break;
                    }
                }
            }
        });
    }

    submit(valid) {
        console.log(valid)
        if (valid) {
            //console.log(this.formValues)
            //console.log(this.category, this.formValuesTwo)
            console.log(this.documents)

            if (this.category == "Q1") { setString(this.category, JSON.stringify(this.formValues)); setString('Q1Percentages', JSON.stringify(this.q1TableValues)); }
            if (this.category == "Q2") { setString(this.category, JSON.stringify(this.formValuesTwo)); setString('Q2Percentages', JSON.stringify(this.q2TableValues)); }
            if (this.category == "Q3") { setString(this.category, JSON.stringify(this.formValuesThree)); setString('Q3Percentages', JSON.stringify(this.q3TableValues)); }
            if (this.category == "Q4") { setString(this.category, JSON.stringify(this.formValuesFour)); setString('Q4Percentages', JSON.stringify(this.q4TableValues)); }
            if (this.category == "Q5") { setString(this.category, JSON.stringify(this.formValuesFive)); setString('Q5Percentages', JSON.stringify(this.q5TableValues)); }
            if (this.documents && this.documents.length > 0) setString(this.category + '_images', JSON.stringify(this.documents));

            alert("Information submitted successfully").then(() => {
                this.router.navigate(['home'], {
                    clearHistory: true
                });
            });
        }
    }

    showWeakness() { this.weakness = !this.weakness; }

    checkedChange(modelRef, key) {
        console.log(modelRef.checked, key);
        if (this.availableItems.indexOf(key) != -1) {
            if (!modelRef.checked) this.availableItems.splice(this.availableItems.indexOf(key), 1);
        } else {
            this.availableItems.push(key);
        }
        console.log(this.availableItems);
    }

    itemTapped(args) {
        console.log(args.selectedItem)
        this.reason = args.selectedItem.title;
    }

    showPicker() {
        this.myfilter.nativeElement.show();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
