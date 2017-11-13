<template>
  <div class="cust" v-loading.body="loading">
      <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" class="demo-form-inline form">
        <h3 class="cusinformation">
          Customer Information
          <el-form-item class="btn" label="search" label-width="70px">
            <el-input
              placeholder=""
              icon="search"
              v-model="input"
              :on-icon-click="handleIconClick">
            </el-input>
            <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">save</el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">reset</el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">cancle</el-button>
          </el-form-item>
        </h3>
        <el-dialog
          class="dialogCust"
          :visible.sync="dialogVisible1"
          width="30%">
          <i class="el-icon-close close" @click="dialogVisible1=false"></i>
          <i class="el-icon-check check"></i>
          <span>Customer {{ruleForm.user}} Created</span>
        </el-dialog>
        <el-dialog
          class="dialogCust"
          :visible.sync="dialogVisible11"
          width="30%">
          <i class="el-icon-close close" @click="dialogVisible11=false"></i>
          <i class="el-icon-close check"></i>
          <span>Customer Created Failed</span>
        </el-dialog>
        <div class="row1">
          <el-form-item label="name" class="intensive">
            <el-input v-model="ruleForm.user"></el-input>
          </el-form-item>
          <el-form-item label="phone" class="intensive">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="Customer Type">
            <el-select v-model="ruleForm.region" placeholder="person">
              <el-option label="Person" value="Person"></el-option>
              <el-option label="Organization" value="Organization"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="ruleForm.mail"></el-input>
          </el-form-item>
        </div>
        <div class="row1">
          <el-form-item label="*Country" class="intensive">
            <el-input v-model="ruleForm.country"></el-input>
          </el-form-item>
          <el-form-item label="Province">
            <el-input v-model="ruleForm.province"></el-input>
          </el-form-item>
          <el-form-item label="District">
            <el-input v-model="ruleForm.district"></el-input>
          </el-form-item>
          <el-form-item label="City">
            <el-input v-model="ruleForm.city"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="Address" class="intensive">
          <el-input v-model="ruleForm.address" class="address"></el-input>
        </el-form-item>
      </el-form>
      
      <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" class="demo-form-inline form">
        <h3 class="cusinformation">
          Install Base
          <el-form-item class="btn" label="search" label-width="70px">
            <el-input
              placeholder=""
              icon="search"
              v-model="input"
              :on-icon-click="handleIconClick">
            </el-input>
            <el-button type="primary" :plain="true" @click="submitForm1('ruleForm')">save</el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">reset</el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">cancle</el-button>
          </el-form-item>
        </h3>
        <el-dialog
          class="dialogCust"
          :visible.sync="dialogVisible2"
          width="30%">
          <i class="el-icon-close close" @click="dialogVisible2=false"></i>
          <i class="el-icon-check check"></i>
          <span>Install Base {{ruleForm.user}} Created</span>
        </el-dialog>
        <el-dialog
          class="dialogCust"
          :visible.sync="dialogVisible21"
          width="30%">
          <i class="el-icon-close close" @click="dialogVisible21=false"></i>
          <i class="el-icon-close check"></i>
          <span>Install Base Created Failed</span>
        </el-dialog>
        <div class="row1">
          <el-form-item label="Brand">
            <el-input v-model="ruleForm.brand"></el-input>
          </el-form-item>
          <el-form-item label="Category">
            <el-input v-model="ruleForm.category"></el-input>
          </el-form-item>
          <el-form-item label="*Item" class="intensive">
            <el-input v-model="ruleForm.item"></el-input>
          </el-form-item>
          <el-form-item label="Item Desc">
            <el-input v-model="ruleForm.itemDesc"></el-input>
          </el-form-item>
        </div>
        <div class="row1">
          <el-form-item label="*Serial Number" class="intensive">
            <el-input v-model="ruleForm.serialNumber"></el-input>
          </el-form-item>
          <el-form-item label="*Lot Number" class="intensive">
            <el-input v-model="ruleForm.lotNumber"></el-input>
          </el-form-item>
          <el-form-item label="Instance No">
            <el-input v-model="ruleForm.instanceNo"></el-input>
          </el-form-item>
          <el-form-item label="Installed Date">
            <el-input v-model="ruleForm.installedDate"></el-input>
          </el-form-item>
        </div>
        <div class="row1">
          <el-form-item label="Warranty Start Date">
            <el-input v-model="ruleForm.warrantyStartDate"></el-input>
          </el-form-item>
          <el-form-item label="Warranty EndDate">
            <el-input v-model="ruleForm.warrantyEndDate"></el-input>
          </el-form-item>
          <el-form-item label="*Installer" class="intensive">
            <el-select v-model="ruleForm.installer" placeholder="person">
              <el-option label="Person" value="Person"></el-option>
              <el-option label="Organization" value="Organization"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Technician">
            <el-input v-model="ruleForm.technician"></el-input>
          </el-form-item>
        </div>
      </el-form>

      <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" class="demo-form-inline form">
        <h3 class="cusinformation">
          Service Request
          <el-form-item class="btn" label="search" label-width="70px">
            <el-input
              placeholder=""
              icon="search"
              v-model="input"
              :on-icon-click="handleIconClick">
            </el-input>
            <el-button type="primary" :plain="true" @click="submitForm2('ruleForm')">save</el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">reset</el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">cancle</el-button>
          </el-form-item>
        </h3>
        <el-dialog
          title="tips"
          class="dialogSR"
          :visible.sync="dialogVisible"
          width="30%">
          <i class="el-icon-error"></i>
          <span>Service Request {{ruleForm.user}} Created</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="processSR()">Processing SR</el-button>
            <el-button type="primary" @click="another()">Create another</el-button>
          </span>
        </el-dialog>
        <el-dialog
          class="dialogCust"
          :visible.sync="dialogVisible0"
          width="30%">
          <i class="el-icon-close close" @click="dialogVisible0=false"></i>
          <i class="el-icon-close check"></i>
          <span>Service Request Created Failed</span>
        </el-dialog>
        <div class="row1">
          <el-form-item label="*SR Type" class="intensive">
            <el-select v-model="ruleForm.srType" placeholder="Warranty Repair">
              <el-option label="Warranty Repair" value="Warranty Repair"></el-option>
              <el-option label="Non Warranty Repair" value="Non Warranty Repair"></el-option>
              <el-option label="Extended Repair" value="Extended Repair"></el-option>
              <el-option label="PM Non Repair" value="PM Non Repair"></el-option>
              <el-option label="FG DOA TC" value="FG DOA TC"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Status">
            <el-select v-model="ruleForm.status" placeholder="Open">
              <el-option label="Open" value="Open"></el-option>
              <el-option label="Pending Repair" value="Pending Repair"></el-option>
              <el-option label="Accepted" value="Accepted"></el-option>
              <el-option label="Closed" value="Closed"></el-option>
              <el-option label="Assigned" value="Assigned"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SR Number">
            <el-input v-model="ruleForm.srNumber"></el-input>
          </el-form-item>
          <el-form-item label="Incident Date">
            <el-input v-model="ruleForm.incidentDate"></el-input>
          </el-form-item>
        </div>
        <div class="row1">
          <el-form-item label="Urgency">
            <el-select v-model="ruleForm.urgency" placeholder="Critical">
              <el-option label="Critical" value="Critical"></el-option>
              <el-option label="Height" value="Height"></el-option>
              <el-option label="Medium" value="Medium"></el-option>
              <el-option label="Low" value="Low"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SR Group">
            <el-input v-model="ruleForm.srGroup"></el-input>
          </el-form-item>
          <el-form-item label="SR Owner">
            <el-input v-model="ruleForm.srOwner"></el-input>
          </el-form-item>
          <el-form-item label="Closed Date">
            <el-input v-model="ruleForm.closedDate"></el-input>
          </el-form-item>
        </div>
        <div class="referSr">
          <el-form-item label="Reference SR">
            <el-select v-model="ruleForm.referenceSR" placeholder="Critical">
              <el-option label="Critical" value="Critical"></el-option>
              <el-option label="Height" value="Height"></el-option>
              <el-option label="Medium" value="Medium"></el-option>
              <el-option label="Low" value="Low"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="*Summary" class="intensive">
            <el-input v-model="ruleForm.summary" class="summary"></el-input>
          </el-form-item>
        </div>
        <div class="notesUpload">
          <el-form-item label="Notes">
            <el-input v-model="ruleForm.notes" class="notes"></el-input>
          </el-form-item>
          <el-upload
            class="upload-demo shelf"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
          <el-upload class="btnload" 
            action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <el-button type="primary">upload</el-button>
          </el-upload>
        </div>
      </el-form>

      <h3>Task Information</h3>
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        @cell-click="cellClick"
        @selection-change="toggleSelection"
        style="width: 100%">
        <el-table-column
          type="selection"
          resizable
          align="center">
        </el-table-column>
        <el-table-column
          resizable
          align="center"
          type="index">
        </el-table-column>
        <el-table-column
          resizable
          align="center"
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          resizable
          align="center">
          <template scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" resizable
          align="center">
          <template scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column
          resizable
          align="center"
          prop="tag"
          label="标签"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              close-transition>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <h3>Charge Line</h3>

      <h3>Quality Assuarance</h3>
  </div>
</template>
<script>
  import './edit_customerIbSr.scss'
  export default {
    data() {
      // var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   } else {
      //     if (this.ruleForm2.checkPass !== '') {
      //       this.$refs.ruleForm2.validateField('checkPass');
      //     }
      //     callback();
      //   }
      // };
      return {
        input:'',
        loading:true,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }],
        ruleForm: {
          user: '',
          region: '',
          country:'',
          mail:'',
          phone:'',
          province:'',
          district:'',
          city:'',
          address:''
        },
        dialogVisible: false,
        dialogVisible0:false,
        dialogVisible1: false,
        dialogVisible11:false,
        dialogVisible2: false,
        dialogVisible21:false,
        rules:{

        }
      }
    },
    created(){
      setTimeout(function(){
         this.loading = false;
      }.bind(this),2000);
    },
    methods: {
      cellClick(row, column, cell, event){
        // console.log(row);
        console.log(column);
        if(column.property === 'date'){
          console.log(666);
          var input = document.createElement('input');
          input.placeholder = row.date;
          input.value = row.date;
          console.log(input);
          console.log(cell);
          cell.innerHTML = '';
          cell.appendChild(input);
          console.log(cell);
        }
        // console.log(cell);
        // console.log(event);
      },
      toggleSelection(val) {
        // if (rows) {
        //   rows.forEach(row => {
        //     this.$refs.multipleTable.toggleRowSelection(row);
        //   });
        // } else {
        //   this.$refs.multipleTable.clearSelection();
        // }
        console.log(val);
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogVisible1 = true;
            setTimeout(function(){
              this.dialogVisible1 = false;
            }.bind(this),1000);
          } else {
            this.dialogVisible11 = true;
            return false;
          }
        });
      },
      submitForm1(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogVisible2 = true;
            setTimeout(function(){
              this.dialogVisible2 = false;
            }.bind(this),1000);
          } else {
            this.dialogVisible21 = true;
            return false;
          }
        });
      },
      submitForm2(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogVisible = true;
          } else {
            this.dialogVisible0 = true;
            return false;
          }
        });
      },
      processSR(){
        this.dialogVisible = false;
      },
      another(){
        this.dialogVisible = false;
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    }
  }
</script>