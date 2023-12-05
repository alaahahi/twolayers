<script>
export default {
    props: {
      show: Boolean,
      data:Array
    }
  }
  </script>
  
  <template>
    <Transition name="modal">
      <div v-if="show" class="modal-mask ">
        <div class="modal-wrapper ">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
  
            <div class="modal-body">
                <GMapMap  v-if="data[0]"
                            :center=data[0]
                            :zoom="15"
                            map-type-id="terrain"
                            style="width: 100%; height: 500px">
                            <GMapMarker
                            
                                :key="index"
                                v-for="(m, index) in data"
                                :position="m"
                                :clickable="true"
                                :draggable="true"
                                @click="center = m"
                              

                            />
                        </GMapMap>
                        <h2 class="text-center"  v-if="!data[0]">
                          Sorry,No Massages yet
                        </h2>
            </div>
  
            <div class="modal-footer my-2">
                <button
                  class="modal-default-button py-3  bg-blue-500 rounded"
                  @click="$emit('close');"
                >Close</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 50%;
    min-width: 350px;
    margin: 0px auto;
    padding: 20px  30px;
    padding-bottom: 60px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    border-radius: 10px;
  }
  
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  
  .modal-body {
    margin: 20px 0;
  }
  
  .modal-default-button {
    float: right;
    width: 100%;
    color: #fff;
  }
  
  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */
  
  .modal-enter-from {
    opacity: 0;
  }
  
  .modal-leave-to {
    opacity: 0;
  }
  
  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  </style>