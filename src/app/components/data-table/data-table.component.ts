import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { Campaign } from 'src/app/models/campaign';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Output() selected_number = new EventEmitter<number>();
  @Input() selected_count: number;

  rows: Campaign[] = [];
  columns = [
    { name: 'Campaign Name', prop: 'campaign_name', active: true, width: "430" },
    { name: 'Status', prop: 'status', active: true, width: "130" },
    { name: 'Objective', prop: 'objective', active: true, width: "250" },
    { name: 'Created Time', prop: 'created_utc', active: true, width: "170" },
    { name: 'Impressions', prop: 'impressions', active: true, width: "130" },
    { name: 'Spend', prop: 'spend', active: true, width: "90" },
    { name: 'Clicks', prop: 'clicks', active: true, width: "90" },
    { name: 'Video Views', prop: 'video_views', active: true, width: "130" },
    { name: 'Lift', prop: 'lift', active: true, width: "80" },
    { name: 'CTR', prop: 'ctr', active: true, width: "80" },
    { name: 'ROAS', prop: 'roas', active: true, width: "80" },
    { name: 'Enabled', prop: 'enabled', active: false, width: "0" }
  ];
  selected: Campaign[] = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  searchColumns = "";
  enabled = true;

  constructor(private http: HttpClient, private service: HttpService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getCampaigns().subscribe(data => {
      const temp = [];
      for (let row of data) {
        temp.push(new Campaign(row));
      }
      this.rows = temp;
    }, err => {
      console.log(err)
    }, () => {
      console.log("completed")
    }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selected_count.currentValue === 0) {
      this.selected = [];
    }
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  };

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    return this.selected_number.emit(this.selected.length);
  }

  onCheckedColumn(active, prop) {
    const column = this.columns.find(x => x.prop == prop);
    column.active = !active;
  }

  getActiveColumns() {
    return this.columns.filter(x => x.active);
  }

  getSearchedColumns() {
    const search = this.searchColumns.trim();
    if (!search) {
      return this.columns;
    }
    return this.columns.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
  }

}
