// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus (per oggi pomeriggio): Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.

let app = new Vue ({
  el: "#app",
  data: {
    albums: [],
    genre: ["pop", "rock", "metal", "jazz"],
  },

  methods: {
  },

  mounted: function() {
    const self = this;

      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(response => {
        console.log(response);
        self.albums = response.data.response;
        
    })
  },
})
