namespace Model.EF
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class BanHang : DbContext
    {
        public BanHang()
            : base("name=BanHang")
        {
        }

        public virtual DbSet<BoNho> BoNhoes { get; set; }
        public virtual DbSet<BoXL> BoXLs { get; set; }
        public virtual DbSet<Camera> Cameras { get; set; }
        public virtual DbSet<Card> Cards { get; set; }
        public virtual DbSet<Case> Cases { get; set; }
        public virtual DbSet<ChatLieu> ChatLieux { get; set; }
        public virtual DbSet<ChoNgoi> ChoNgois { get; set; }
        public virtual DbSet<ChucVu> ChucVus { get; set; }
        public virtual DbSet<DangBT> DangBTs { get; set; }
        public virtual DbSet<DoiSX> DoiSXes { get; set; }
        public virtual DbSet<DonHang> DonHangs { get; set; }
        public virtual DbSet<DoPhangia> DoPhangias { get; set; }
        public virtual DbSet<Hang> Hangs { get; set; }
        public virtual DbSet<HeDieuHanh> HeDieuHanhs { get; set; }
        public virtual DbSet<HinhAnh> HinhAnhs { get; set; }
        public virtual DbSet<HopSo> HopSoes { get; set; }
        public virtual DbSet<Khuvuc> Khuvucs { get; set; }
        public virtual DbSet<KichThuoc> KichThuocs { get; set; }
        public virtual DbSet<KieuDang> KieuDangs { get; set; }
        public virtual DbSet<LoaiSanPham> LoaiSanPhams { get; set; }
        public virtual DbSet<LoaiTR> LoaiTRs { get; set; }
        public virtual DbSet<MauSac> MauSacs { get; set; }
        public virtual DbSet<Menu> Menus { get; set; }
        public virtual DbSet<MenuType> MenuTypes { get; set; }
        public virtual DbSet<Model> Models { get; set; }
        public virtual DbSet<Mua> Muas { get; set; }
        public virtual DbSet<PhienBan> PhienBans { get; set; }
        public virtual DbSet<PhuKien> PhuKiens { get; set; }
        public virtual DbSet<Pin> Pins { get; set; }
        public virtual DbSet<Quangduong> Quangduongs { get; set; }
        public virtual DbSet<Ram> Rams { get; set; }
        public virtual DbSet<SanPham> SanPhams { get; set; }
        public virtual DbSet<Slide> Slides { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<Taikhoan> Taikhoans { get; set; }
        public virtual DbSet<GioHang> GioHangs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChucVu>()
                .HasMany(e => e.Taikhoans)
                .WithRequired(e => e.ChucVu)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<DonHang>()
                .Property(e => e.Gia)
                .HasPrecision(18, 0);

            modelBuilder.Entity<DonHang>()
                .Property(e => e.Phone)
                .IsFixedLength();

            modelBuilder.Entity<HeDieuHanh>()
                .Property(e => e.Ten)
                .IsFixedLength();

            modelBuilder.Entity<HinhAnh>()
                .Property(e => e.Link)
                .IsFixedLength();

            modelBuilder.Entity<Model>()
                .HasMany(e => e.SanPhams)
                .WithOptional(e => e.Model)
                .HasForeignKey(e => e.ID_Model);

            modelBuilder.Entity<SanPham>()
                .Property(e => e.GiaBan)
                .HasPrecision(18, 0);

            modelBuilder.Entity<SanPham>()
                .HasMany(e => e.DangBTs)
                .WithRequired(e => e.SanPham)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<SanPham>()
                .HasMany(e => e.GioHangs)
                .WithRequired(e => e.SanPham)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<SanPham>()
                .HasMany(e => e.Slides)
                .WithRequired(e => e.SanPham)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Slide>()
                .Property(e => e.GiamGia)
                .IsFixedLength();

            modelBuilder.Entity<Slide>()
                .Property(e => e.link)
                .IsFixedLength();

            modelBuilder.Entity<Slide>()
                .Property(e => e.LinkAnh)
                .IsFixedLength();

            modelBuilder.Entity<Slide>()
                .Property(e => e.slidetype)
                .IsFixedLength();

            modelBuilder.Entity<Taikhoan>()
                .Property(e => e.Phone)
                .IsFixedLength();

            modelBuilder.Entity<Taikhoan>()
                .HasMany(e => e.DangBTs)
                .WithRequired(e => e.Taikhoan)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<GioHang>()
                .Property(e => e.Gia)
                .HasPrecision(18, 0);
        }
    }
}
