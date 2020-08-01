#!/usr/bin/perl -w
# SCRIPTER_OPT=-S6

$File = 'manifest.json';

# git ���r�W�����𓾂�
$Rev = +`git log --oneline | wc -l`;

# git �X�V����Ă��邩�𓾂�
$ModCnt = +`git diff --stat | wc -l`;
++$Rev if( $ModCnt > 0 );

# xml �S���[�h
open( $fp, "< $File" );
$_ = join( '', <$fp> );
close( $fp );

# xml �̃o�[�W�����R�[�h�𓾂�
/"version":\s*"(\d+)"/;
$PrevRev = +$1;

if( $PrevRev != $Rev ){	# rev �ԍ��ɍ��ق�����
	
	# git diff ���Ȃ����C���̂� rev �ԍ�������Ă����ꍇ�C
	# ���̏C���ɂ�� rev ����i��
	++$Rev if( $ModCnt == 0 );
	
	s/("version":\s*")(\d+)"/$1$Rev"/g;
	
	print( "r$PrevRev -> $Rev updated\n" );
	
	open( $fpOut, "> ${File}" );
	print( $fpOut $_ );
	close( $fpOut );
}

system( 'rm -f release.zip; zip -9 release.zip *.js *.png *.json' );
