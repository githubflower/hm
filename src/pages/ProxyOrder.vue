<template>
	<div id="proxy_order">
		<ul class="operate">
            <li> 
                <el-button @click="" type="primary" size="mini" plain>新增订单</el-button>
            </li>
            <li>
                <el-button @click="" type="primary" size="mini" plain>导入订单</el-button>
            </li>
        </ul>

        <el-table
    	    :data="tableData"
    	    border
            stripe
            size="mini"
    	    style="width: 100%">
         
    	    <el-table-column type="index"></el-table-column>
    	    <el-table-column prop="business_id" label="业务单号" sortable width="150"  
                align="center"
            </el-table-column>
    	    <el-table-column prop="order_id" label="订单号" min-width="220" align="center"></el-table-column>
    	    <el-table-column prop="order_time" label="刷单时间" sortable="true" min-width="100" align="center"></el-table-column>
    	    <el-table-column prop="proxy_name" label="代理" sortable=true min-width="100" align="center"></el-table-column>
            
    	    <el-table-column prop="payment_state" label="结款状态" align="right"></el-table-column>
        </el-table>
	</div>
</template>
<script>
	export default{
		name: 'ProxyOrder',
		data(){
			return {
				tableData: [{
					business_id: 'AKG2018-05-01',
					order_id: 'uy23495',
					order_time: '2018-05-01 01:29:22',
					proxy_name: 'Eric',
					payment_state: '已结款'
				},{
					business_id: 'AKG2018-05-02',
					order_id: 'ak23495',
					order_time: '2018-05-02 01:29:22',
					proxy_name: 'NiuBi',
					payment_state: '未结款'
				},{
					business_id: 'AKG2018-05-03',
					order_id: 'nk23495',
					order_time: '2018-05-03 01:29:22',
					proxy_name: 'HongHong',
					payment_state: '已结款'
				}]
			}
		}
	}
</script>