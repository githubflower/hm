<template>
	<div id="addr_selection">
        <el-select name="province" id="province" v-model="province">
            <el-option
                v-for="item in prov_options"
                :key="item.provinceid"
                :label="item.province"
                :value="item.provinceid">
            </el-option>
        </el-select>
        <el-select name="city" id="city" v-model="city">
            <el-option
                v-for="item in city_options"
                :key="item.cityid"
                :label="item.city"
                :value="item.cityid">
            </el-option>
        </el-select>
        <el-select name="district" id="district" v-model="district">
            <el-option
                v-for="item in district_options"
                :key="item.districtid"
                :label="item.district"
                :value="item.districtid">
            </el-option>
        </el-select>
		<el-select name="street" id="street" v-model="street">
			<el-option
                v-for="item in street_options"
                :key="item.streetid"
                :label="item.street"
                :value="item.streetid">
		    </el-option>
		</el-select>
	</div>
</template>
<script>
    // import prov from '../testdata/prov.js'
    import axios from 'axios'

    const placeholdstr = '请选择';
    export default{
        name: 'AddrSelection',
        data(){
            return {
                defaultData: {
                    province: 'province A',
                    city: 'city A',
                    district: 'district A',
                    street: 'street A'
                },

                province: [],
                city: [],
                district: [],
                street: [],

                prov_options: [],
                city_options: [],
                district_options: [],
                street_options: []
            }
        },
        methods: {
            /**
             * [reqProv 获取省数据]
             * @return {[type]} [description]
             */
            reqProv(){
                //TODO
                //"/env/dust/user/querykeynote"
                axios.post('/env/dust/user/querykeynote', {
                    uid: 1,
                    province: 1
                }).then((res)=>{
                    this.prov_options = res.data.area;
                });
                /*let data = require('../testdata/prov.js');
                this.prov_options = data.default.area;
                this.prov_options.splice(0,0);*/
            },
            reqCity(prov_id){
                if(!prov_id){
                    return;
                }
                axios.post('/env/dust/user/querykeynote', {
                    uid: 1,
                    city: 1,
                    provinceid: prov_id
                }).then((res)=>{
                    if(res.data && res.data.area && res.data.area.length){
                        this.city_options = res.data.area;
                    }else{
                        //TODO
                    }
                });
            },
            reqDistrict(city_id){
                if(!city_id){
                    return;
                }
                axios.post('/env/dust/user/querykeynote', {
                    uid: 1,
                    district: 1,
                    cityid: city_id
                }).then((res)=>{
                    if(res.data && res.data.area && res.data.area.length){
                        this.district_options = res.data.area;
                    }else{
                        //TODO
                    }
                });
            },
            reqStreet(district_id){
                if(!district_id){
                    return;
                }
                axios.post('/env/dust/user/querykeynote', {
                    uid: 1,
                    street: 1,
                    districtid: district_id
                }).then((res)=>{
                    if(res.data && res.data.area && res.data.area.length){
                        this.street_options = res.data.area;
                    }else{
                        //TODO
                    }
                });
            },
            /*setPlacehold(str, type){
                this.$set(this.defaultData, type, str);// defaultData[type] = str;
            },*/
            setDefaultValue(defaultValue){
                let k;
                for(k in defaultValue){
                    this[k] = defaultValue[k];
                    // this.$set(this, k, defaultValue[k])
                }
                
            }
        },
        mounted: function() {
            this.onceTriggerFlag = {
                province: false,
                city: false,
                district: false,
                street: false
            };

            this.reqProv();

            this.setDefaultValue({
                province: 'prov-a',
                city: 'city-a',
                district: 'district-a',
                street: 'street-a'
            });
        },
        watch: {
            /**
             * [province 监听省下拉框的值]
             * @param  {[type]} nv [省的id]
             * @param  {[type]} ov [description]
             * @return {[type]}    [description]
             */
            province(nv, ov){
                if(!this.onceTriggerFlag.province){
                    this.onceTriggerFlag.province = true;
                    return;
                }
                this.reqCity(nv);
                this.setDefaultValue({
                    city: placeholdstr,
                    district : placeholdstr,
                    street : placeholdstr
                });
            },
            city(nv, ov){
                if(!this.onceTriggerFlag.city){
                    this.onceTriggerFlag.city = true;
                    return;
                }
                this.reqDistrict(nv);
                this.setDefaultValue({
                    district : placeholdstr,
                    street : placeholdstr
                });
            },
            district(nv, ov){
                 if(!this.onceTriggerFlag.district){
                    this.onceTriggerFlag.district = true;
                    return;
                }
                this.reqStreet(nv);
                this.setDefaultValue({
                    street : placeholdstr
                });
            }
        }
    }
</script>
<style lang="less">
    .el-select-dropdown{
        .el-select-dropdown__list{
            display: block;
            width: 400px;
        }
        .el-select-dropdown__item{
            padding: 0 10px;
        }
    }
</style>