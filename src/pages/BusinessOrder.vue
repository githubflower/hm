<template>
	<div id="business_order" class="clearfix">
        <ul class="operate">
            <li @click="addBusinessOrder">新增业务单</li>
            <li @click="export2exceal">导出excel</li>
        </ul>
        <el-table
    	    :data="tableData"
    	    border
            stripe
    	    style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="table-expand">
                        <el-form-item label="剩余单数">
                            <span>{{ props.row.left }}</span>
                        </el-form-item>
                        <el-form-item label="产品图片">
                            <span>{{ props.row.pic }}</span>
                        </el-form-item>
                        <el-form-item label="关键字">
                            <span>{{ props.row.keywords }}</span>
                        </el-form-item>
                        <el-form-item label="店铺名">
                            <span>{{ props.row.shop }}</span>
                        </el-form-item>
                        <el-form-item label="描述">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
    	    <el-table-column type="index"></el-table-column>
    	    <el-table-column prop="date" label="创建时间" sortable width="150"  
                align="center"
                :filters="filters"
                :filter-method="filterHandler">
            </el-table-column>
    	    <el-table-column prop="name" label="名称" min-width="220" align="center"></el-table-column>
    	    <el-table-column prop="businessman" label="业务员" sortable="true" min-width="100" align="center"></el-table-column>
    	    <el-table-column prop="customer" label="客户" sortable=true min-width="100" align="center"></el-table-column>
            <el-table-column prop="goal_num" label="目标单数" sortable=true align="right"  width="120"></el-table-column>
            <!-- <el-table-column prop="complete" label="完成单数" align="right" width="100"></el-table-column> -->
            <el-table-column label="完成单数" align="right" width="100">
                <template slot-scope="scope">
                    <router-link to="aa" :businessId="scope.row.business_id ">{{ scope.row.complete }}</router-link>
                </template> 
            </el-table-column>
            <el-table-column prop="goal_days" label="目标天数" align="right"  width="100"></el-table-column>
    	    <!-- <el-table-column prop="left" label="剩余单数"></el-table-column> -->
    	    <!-- <el-table-column prop="pic" label="产品图片"></el-table-column> -->
    	    <!-- <el-table-column prop="desc" label="描述"></el-table-column> -->
    	    <!-- <el-table-column prop="keywords" label="关键字"></el-table-column> -->
    	    <!-- <el-table-column prop="shop" label="店铺名"></el-table-column> -->
    	    <!-- 描述里面包括关键字、店铺名 -->
    	    <el-table-column prop="payment" label="应付金额" align="right"></el-table-column>
    	    <el-table-column prop="half_payment" label="已付金额" align="right"></el-table-column>
        </el-table>

        <business-form-box  :dialogFormVisible="showBusinessOrderForm" @update:dialogFormVisible="updateShowBusinessOrderForm"></business-form-box>
	</div>
</template>
<script>
import Util from '../util.js'
import BusinessFormBox from './BusinessFormBox.vue'
import XLSX from 'xlsx';
/**
 * [generateFilters 生成最近7天的过滤日期]
 * @return {[type]} [description] 如[{text: '2016-05-01', value: '2016-05-01'}]
 */
let generateFilters = function(){
    let day_ms = 86400000;// 24 * 3600 * 1000   1天的毫秒数
    let ary = [];
    for (var i = 7; i > 0; i--) {
        ary.push({
            text: Util.formatDate(+new Date() - i * day_ms),
            value: Util.formatDate(+new Date() - i * day_ms),
        });
    }
    return ary;
}
export default {
	name: 'BusinessOrder',
	components: {
        BusinessFormBox
    },
	data() {
		return {
            // filters: [{text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}],
            filters: generateFilters(),
            showBusinessOrderForm: false,
			tableData: [{
				date: '2016-04-28',
				name: '智能手环',
				goal_num: 100,
				goal_days: 5,
				complete: 35,
				left: 65,
				pic: 'TODO',
				desc: '这个客户很重要，后续可能有更多业务,电话：186 7164 6096',
				keywords: '手表, 手环, 智能设备',
				shop: 'HM官方旗舰店',
				businessman: '王磊',
				customer: 'HM-冯生',
                business_id: 'HM1',
				payment: 8800,
				half_payment: 5000
			}, {
				date: '2016-04-27',
				name: '智能手环',
				goal_num: 100,
				goal_days: 5,
				complete: 35,
				left: 65,
				pic: 'TODO',
				desc: '这个客户很重要，后续可能有更多业务,电话：186 7164 6096',
				keywords: '手表, 手环, 智能设备',
				shop: 'HM官方旗舰店',
				businessman: '战三',
				customer: 'HM-C生',
                business_id: 'HM2',
				payment: 8800,
				half_payment: 5000
			}, {
				date: '2016-04-26',
				name: '智能手环',
				goal_num: 100,
				goal_days: 5,
				complete: 35,
				left: 65,
				pic: 'TODO',
				desc: '这个客户很重要，后续可能有更多业务,电话：186 7164 6096',
				keywords: '手表, 手环, 智能设备',
				shop: 'HM官方旗舰店',
				businessman: '王磊',
				customer: 'HM-B生',
                business_id: 'HM3',
				payment: 8800,
				half_payment: 5000
			}, {
				date: '2016-04-25',
				name: '智能手环',
				goal_num: 100,
				goal_days: 5,
				complete: 35,
				left: 65,
				pic: 'TODO',
				desc: '这个客户很重要，后续可能有更多业务,电话：186 7164 6096',
				keywords: '手表, 手环, 智能设备',
				shop: 'HM官方旗舰店',
				businessman: '小邓',
				customer: 'HM-A生',
                business_id: 'HM4',
				payment: 8800,
				half_payment: 5000
			}]
		}
	},
    methods: {
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        addBusinessOrder(){
            this.showBusinessOrderForm = true;
        },
        updateShowBusinessOrderForm(val){
            this.showBusinessOrderForm = val;;
        },
        /**
         * [export2exceal 将表格数据导出为excel]
         * @return {[type]} [description]
         */
        export2exceal(){
            debugger;
            function saveAs(obj, fileName) {//当然可以自定义简单的下载文件实现方式 
                var tmpa = document.createElement("a");
                tmpa.download = fileName || "下载";
                tmpa.href = URL.createObjectURL(obj); //绑定a标签
                tmpa.click(); //模拟点击实现下载
                setTimeout(function () { //延时释放
                    URL.revokeObjectURL(obj); //用URL.revokeObjectURL()来释放这个object URL
                }, 100);
            }
            var jsono = [{ //测试数据
                "保质期临期预警(天)": "adventLifecycle",
                "商品标题": "title",
                "建议零售价": "defaultPrice",
                "高(cm)": "height",
                "商品描述": "Description",
                "保质期禁售(天)": "lockupLifecycle",
                "商品名称": "skuName",
                "商品简介": "brief",
                "宽(cm)": "width",
                "阿达": "asdz",
                "货号": "goodsNo",
                "商品条码": "skuNo",
                "商品品牌": "brand",
                "净容积(cm^3)": "netVolume",
                "是否保质期管理": "isShelfLifeMgmt",
                "是否串号管理": "isSNMgmt",
                "商品颜色": "color",
                "尺码": "size",
                "是否批次管理": "isBatchMgmt",
                "商品编号": "skuCode",
                "商品简称": "shortName",
                "毛重(g)": "grossWeight",
                "长(cm)": "length",
                "英文名称": "englishName",
                "净重(g)": "netWeight",
                "商品分类": "categoryId",
                "这里超过了": 1111.0,
                "保质期(天)": "expDate"
            }];
            const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };//这里的数据是用来定义导出的格式类型
            // const wopts = { bookType: 'csv', bookSST: false, type: 'binary' };//ods格式
            // const wopts = { bookType: 'ods', bookSST: false, type: 'binary' };//ods格式
            // const wopts = { bookType: 'xlsb', bookSST: false, type: 'binary' };//xlsb格式
            // const wopts = { bookType: 'fods', bookSST: false, type: 'binary' };//fods格式
            // const wopts = { bookType: 'biff2', bookSST: false, type: 'binary' };//xls格式

            function downloadExl(data, type) {
                const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} };
                wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(data);//通过json_to_sheet转成单页(Sheet)数据
                saveAs(new Blob([s2ab(XLSX.write(wb, wopts))], { type: "application/octet-stream" }), "这里是下载的文件名" + '.' + (wopts.bookType=="biff2"?"xls":wopts.bookType));
            }
            function s2ab(s) {
                if (typeof ArrayBuffer !== 'undefined') {
                    var buf = new ArrayBuffer(s.length);
                    var view = new Uint8Array(buf);
                    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                } else {
                    var buf = new Array(s.length);
                    for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                }
            }
            downloadExl(jsono);
        }
    }
}
</script>
<style>
    #business_order{
        position: relative;
        margin: 0 auto;
        padding: 0 20px;
        margin: 5px;
    }
    .table-expand {
        font-size: 0;
    }
    .table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .table-expand .el-form-item {
        margin-left: 50px;
        width: 40%;
    }
    ul.operate{
        /*position: absolute;*/
        float: right;
        top: 0;
        right: 0;
    }
    li{
        color: #ffffff;
        cursor: pointer;
    }
</style>