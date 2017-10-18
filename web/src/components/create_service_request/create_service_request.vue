<template>
  <div class="cust" v-loading.body="loading">
    <h3 class="cusinformation">Customer Information</h3>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <div class="row1">
        <el-form-item label="name" class="intensive">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item label="phone" class="intensive">
          <el-input v-model="formInline.phone"></el-input>
        </el-form-item>
        <el-form-item label="Customer Type">
          <el-select v-model="formInline.region" placeholder="person">
            <el-option label="Person" value="Person"></el-option>
            <el-option label="Organization" value="Organization"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="formInline.mail"></el-input>
        </el-form-item>
      </div>
      <div class="row1">
        <el-form-item label="*Country" class="intensive">
          <el-input v-model="formInline.country"></el-input>
        </el-form-item>
        <el-form-item label="Province">
          <el-input v-model="formInline.province"></el-input>
        </el-form-item>
        <el-form-item label="District">
          <el-input v-model="formInline.district"></el-input>
        </el-form-item>
        <el-form-item label="City">
          <el-input v-model="formInline.city"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="Address" class="intensive">
        <el-input v-model="formInline.address" class="address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <h3 class="cusinformation">Product Infor</h3>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <div class="row1">
        <el-form-item label="Brand">
          <el-input v-model="formInline.brand"></el-input>
        </el-form-item>
        <el-form-item label="Category">
          <el-input v-model="formInline.category"></el-input>
        </el-form-item>
        <el-form-item label="*Item" class="intensive">
          <el-input v-model="formInline.item"></el-input>
        </el-form-item>
        <el-form-item label="Item Desc">
          <el-input v-model="formInline.itemDesc"></el-input>
        </el-form-item>
      </div>
      <div class="row1">
        <el-form-item label="*Serial Number" class="intensive">
          <el-input v-model="formInline.serialNumber"></el-input>
        </el-form-item>
        <el-form-item label="*Lot Number" class="intensive">
          <el-input v-model="formInline.lotNumber"></el-input>
        </el-form-item>
        <el-form-item label="Instance No">
          <el-input v-model="formInline.instanceNo"></el-input>
        </el-form-item>
        <el-form-item label="Installed Date">
          <el-input v-model="formInline.installedDate"></el-input>
        </el-form-item>
      </div>
      <div class="row1">
        <el-form-item label="Warranty Start Date">
          <el-input v-model="formInline.warrantyStartDate"></el-input>
        </el-form-item>
        <el-form-item label="Warranty EndDate">
          <el-input v-model="formInline.warrantyEndDate"></el-input>
        </el-form-item>
        <el-form-item label="*Installer" class="intensive">
          <el-select v-model="formInline.installer" placeholder="person">
            <el-option label="Person" value="Person"></el-option>
            <el-option label="Organization" value="Organization"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Technician">
          <el-input v-model="formInline.technician"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <h3 class="cusinformation">Service Request</h3>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <div class="row1">
        <el-form-item label="*SR Type" class="intensive">
          <el-select v-model="formInline.srType" placeholder="Warranty Repair">
            <el-option label="Warranty Repair" value="Warranty Repair"></el-option>
            <el-option label="Non Warranty Repair" value="Non Warranty Repair"></el-option>
            <el-option label="Extended Repair" value="Extended Repair"></el-option>
            <el-option label="PM Non Repair" value="PM Non Repair"></el-option>
            <el-option label="FG DOA TC" value="FG DOA TC"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Status">
          <el-select v-model="formInline.status" placeholder="Open">
            <el-option label="Open" value="Open"></el-option>
            <el-option label="Pending Repair" value="Pending Repair"></el-option>
            <el-option label="Accepted" value="Accepted"></el-option>
            <el-option label="Closed" value="Closed"></el-option>
            <el-option label="Assigned" value="Assigned"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="SR Number">
          <el-input v-model="formInline.srNumber"></el-input>
        </el-form-item>
        <el-form-item label="Incident Date">
          <el-input v-model="formInline.incidentDate"></el-input>
        </el-form-item>
      </div>
      <div class="row1">
        <el-form-item label="Urgency">
          <el-select v-model="formInline.urgency" placeholder="Critical">
            <el-option label="Critical" value="Critical"></el-option>
            <el-option label="Height" value="Height"></el-option>
            <el-option label="Medium" value="Medium"></el-option>
            <el-option label="Low" value="Low"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="SR Group">
          <el-input v-model="formInline.srGroup"></el-input>
        </el-form-item>
        <el-form-item label="SR Owner">
          <el-input v-model="formInline.srOwner"></el-input>
        </el-form-item>
        <el-form-item label="Closed Date">
          <el-input v-model="formInline.closedDate"></el-input>
        </el-form-item>
      </div>
      <div class="referSr">
        <el-form-item label="Reference SR">
          <el-select v-model="formInline.referenceSR" placeholder="Critical">
            <el-option label="Critical" value="Critical"></el-option>
            <el-option label="Height" value="Height"></el-option>
            <el-option label="Medium" value="Medium"></el-option>
            <el-option label="Low" value="Low"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="*Summary" class="intensive">
          <el-input v-model="formInline.summary" class="summary"></el-input>
        </el-form-item>
      </div>
      <div class="notesUpload">
        <el-form-item label="Notes">
          <el-input v-model="formInline.notes" class="notes"></el-input>
        </el-form-item>
        <el-upload
          class="upload-demo shelf"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </el-form>
  </div>
</template>
<script>
  import './create_service_request.scss'
  export default {
    data() {
      return {
        loading:true,
        formInline: {
          user: '',
          region: '',
          country:'',
          mail:'',
          phone:'',
          province:'',
          district:'',
          city:'',
          address:''
        }
      }
    },
    created(){
      setTimeout(function(){
         this.loading = false;
      }.bind(this),800);
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>