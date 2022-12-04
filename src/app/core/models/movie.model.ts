export interface Movie {
    // id: number;
    // name: string;
    // price: number;
  
    biDanh: string;
    danhGia: number;
    hinhAnh: string;
    maNhom: string;
    maPhim: number;
    moTa: string;
    ngayKhoiChieu: Date;
    tenPhim: string;
    // trailer: string;
  }
  export interface ShowTimes {
    thongTinRap:       CinemaDetail;
    maLichChieu:       number;
    maRap:             number;
    maPhim:            number;
    tenPhim:           string;
    ngayChieuGioChieu: Date;
    giaVe:             number;
    thoiLuong:         number;
  }
  
  export interface CinemaDetail {
    maRap:         number;
    tenRap:        string;
    maCumRap:      string;
    tenCumRap:     string;
    maHeThongRap:  string;
    tenHeThongRap: string;
  }
    
  
  export type MovieDetail = {
    lichChieu: ShowTimes[];
  } & Movie