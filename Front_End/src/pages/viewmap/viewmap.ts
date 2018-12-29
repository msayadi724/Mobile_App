import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,Platform , NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsProvider } from './../../providers/maps/maps';
declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'viewmap.html'
})
export class HomePage {

  location: {
    latitude: number,
    longitude: number
  };
  

  map: any;
  @ViewChild('map') mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(private platform :Platform ,public navCtrl: NavController, public geolocation: Geolocation, 
    public mapsProvider: MapsProvider , public navParams: NavParams
  ) {
    this.startNavigating();
        this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => { 
      let mapOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let options = {
        enableHighAccuracy: true,
        timeout: 25000
      };
      this.geolocation.getCurrentPosition(options).then(pos => {
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(16);
        this.addMarkerMyPosition();
      }).catch((error) => {
        console.log('Error getting location', error);
      });
      

    });
  }

  addMarkerMyPosition(){

    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";          
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    });


  } 
 

  
  startNavigating(){
 
    let position = this.navParams.get('item')
      console.log(position)
         //console.log(this.stationn.lat);

         let options = {
          enableHighAccuracy: true,
          timeout: 25000
        };
        
         this.geolocation.getCurrentPosition(options).then(pos => {
           console.log(pos.coords.latitude);
           //this.addMap(pos.coords.latitude,pos.coords.longitude);
           this.directionsDisplay.setMap(this.map);
           this.directionsService.route({
             origin: {lat:pos.coords.latitude, lng:pos.coords.longitude},
             destination: {lat: position.trash_lg, lng:  position.trash_al},
             travelMode: 'DRIVING'
         }, (res, status) => {
           console.log(status)
             this.directionsDisplay.setDirections(res);
           
         });
       });
    
 }

}