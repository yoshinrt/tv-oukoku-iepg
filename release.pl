#!/usr/bin/perl -w
# SCRIPTER_OPT=-S6

$File = 'manifest.json';

# git リビジョンを得る
$Rev = +`git log --oneline | wc -l`;

# git 更新されているかを得る
$ModCnt = +`git diff --stat | wc -l`;
++$Rev if( $ModCnt > 0 );

# xml 全リード
open( $fp, "< $File" );
$_ = join( '', <$fp> );
close( $fp );

# xml のバージョンコードを得る
/"version":\s*"(\d+)"/;
$PrevRev = +$1;

if( $PrevRev != $Rev ){	# rev 番号に差異がある
	
	# git diff がないが，何故か rev 番号がずれていた場合，
	# この修正により rev が一つ進む
	++$Rev if( $ModCnt == 0 );
	
	s/("version":\s*")(\d+)"/$1$Rev"/g;
	
	print( "r$PrevRev -> $Rev updated\n" );
	
	open( $fpOut, "> ${File}" );
	print( $fpOut $_ );
	close( $fpOut );
}

system( 'rm -f release.zip; zip -9 release.zip *.js *.png *.json' );
